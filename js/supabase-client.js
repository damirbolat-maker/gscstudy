/*  GSC Study — Supabase Client
    Единый модуль для работы с БД, авторизацией и Bitrix24.
    Подключается на всех страницах ПЕРЕД остальными скриптами.
    Зависимость: supabase-js CDN (подключается в HTML).
*/

(function () {
  'use strict';

  var SUPABASE_URL = 'https://alzouuuaxqzwrcytrpvm.supabase.co';
  var SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsem91dXVheHF6d3JjeXRycHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU1NjIwMTgsImV4cCI6MjA5MTEzODAxOH0.X36icj-lQvnPARn9QKRd-X2FOLc8dLn56ljD1_ew3_Y';
  var EDGE_FN_URL = SUPABASE_URL + '/functions/v1';

  // Init Supabase client
  var sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  // ——— AUTH ———
  async function login(email, password) {
    var res = await sb.auth.signInWithPassword({ email: email, password: password });
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function logout() {
    await sb.auth.signOut();
  }

  async function getSession() {
    var res = await sb.auth.getSession();
    return res.data.session;
  }

  function onAuthChange(cb) {
    sb.auth.onAuthStateChange(function (_event, session) { cb(session); });
  }

  // ——— LEADS ———
  async function addLead(lead) {
    var row = {
      name: (lead.name || '').slice(0, 120),
      phone: cleanPhone(lead.phone || ''),
      city: (lead.city || '').slice(0, 80),
      email: (lead.email || '').slice(0, 120),
      source: (lead.source || 'Сайт').slice(0, 200),
      product: (lead.product || '').slice(0, 200),
      status: 'new',
      utm: lead.utm || {},
      created_at: new Date().toISOString()
    };
    var res = await sb.from('leads').insert(row).select().single();
    if (res.error) throw new Error(res.error.message);

    // Send to Bitrix24 (fire-and-forget)
    sendToBitrix(Object.assign({}, row, lead.extra || {})).catch(function (e) {
      console.warn('Bitrix24 send failed:', e.message);
    });

    return res.data;
  }

  async function getLeads() {
    var res = await sb.from('leads').select('*').order('created_at', { ascending: false }).limit(2000);
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function updateLead(id, fields) {
    var res = await sb.from('leads').update(fields).eq('id', id);
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function deleteLead(id) {
    var res = await sb.from('leads').delete().eq('id', id);
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  // ——— TEST RESULTS ———
  async function addTestResult(r) {
    var row = {
      name: (r.name || '').slice(0, 120),
      phone: cleanPhone(r.phone || ''),
      test_type: r.test_type || '',
      test_name: r.test_name || '',
      score: r.score || 0,
      total: r.total || 0,
      level: r.level || '',
      answers_json: r.answers_json || [],
      created_at: new Date().toISOString()
    };
    var res = await sb.from('test_results').insert(row).select().single();
    if (res.error) throw new Error(res.error.message);

    // Also send to Bitrix24
    sendToBitrix({
      name: row.name,
      phone: row.phone,
      source: 'Тест на сайте',
      test_type: row.test_type,
      test_result: row.level + ' (' + row.score + '/' + row.total + ')'
    }).catch(function (e) { console.warn('Bitrix24 test result failed:', e.message); });

    return res.data;
  }

  async function getTestResults() {
    var res = await sb.from('test_results').select('*').order('created_at', { ascending: false }).limit(2000);
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  // ——— WRITING SUBMISSIONS ———
  async function addWritingSubmission(w) {
    var text = (w.response_text || '').slice(0, 5000);
    var row = {
      name: (w.name || '').slice(0, 120),
      phone: cleanPhone(w.phone || ''),
      test_type: w.test_type || '',
      prompt: (w.prompt || '').slice(0, 500),
      response_text: text,
      word_count: text.trim().split(/\s+/).filter(Boolean).length,
      created_at: new Date().toISOString()
    };
    var res = await sb.from('writing_submissions').insert(row);
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  async function getWritingSubmissions() {
    var res = await sb.from('writing_submissions').select('*').order('created_at', { ascending: false }).limit(500);
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  // ——— TEST QUESTIONS ———
  async function getTestQuestions(testType) {
    var res = await sb.from('test_questions').select('*').eq('test_type', testType).order('sort_order', { ascending: true });
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  // ——— CMS (content table) ———
  async function getCms(key) {
    var res = await sb.from('content').select('value').eq('key', key).single();
    if (res.error) return null;
    return res.data.value;
  }

  async function setCms(key, value) {
    var res = await sb.from('content').upsert({ key: key, value: value, updated_at: new Date().toISOString() });
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  async function deleteCms(key) {
    var res = await sb.from('content').delete().eq('key', key);
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  // ——— OFFICES ———
  async function getOffices() {
    var res = await sb.from('offices').select('*').order('sort_order', { ascending: true });
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function saveOffices(offices) {
    // Delete all and re-insert
    await sb.from('offices').delete().neq('id', 0);
    if (offices.length) {
      var res = await sb.from('offices').insert(offices);
      if (res.error) throw new Error(res.error.message);
    }
    return true;
  }

  // ——— REVIEWS ———
  async function getReviews() {
    var res = await sb.from('reviews').select('*').order('sort_order', { ascending: true });
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function addReview(review) {
    var res = await sb.from('reviews').insert(review).select().single();
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function deleteReview(id) {
    var res = await sb.from('reviews').delete().eq('id', id);
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  // ——— PROMO SLIDES ———
  async function getPromos() {
    var res = await sb.from('promo_slides').select('*').order('sort_order', { ascending: true });
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function addPromo(slide) {
    var res = await sb.from('promo_slides').insert(slide).select().single();
    if (res.error) throw new Error(res.error.message);
    return res.data;
  }

  async function updatePromo(id, fields) {
    var res = await sb.from('promo_slides').update(fields).eq('id', id);
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  async function deletePromo(id) {
    var res = await sb.from('promo_slides').delete().eq('id', id);
    if (res.error) throw new Error(res.error.message);
    return true;
  }

  // ——— BITRIX24 ———
  async function sendToBitrix(data) {
    var res = await fetch(EDGE_FN_URL + '/bitrix-lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    var json = await res.json();
    if (!json.ok) throw new Error(json.error || 'Bitrix24 error');
    return json;
  }

  // ——— UTILS ———
  function cleanPhone(p) {
    return (p || '').replace(/[^\d+]/g, '').slice(0, 20);
  }

  function escHtml(s) {
    var d = document.createElement('div');
    d.appendChild(document.createTextNode(s || ''));
    return d.innerHTML;
  }

  // ——— PUBLIC API ———
  window.GSC = {
    sb: sb,
    // Auth
    login: login,
    logout: logout,
    getSession: getSession,
    onAuthChange: onAuthChange,
    // Leads
    addLead: addLead,
    getLeads: getLeads,
    updateLead: updateLead,
    deleteLead: deleteLead,
    // Test results
    addTestResult: addTestResult,
    getTestResults: getTestResults,
    // Writing
    addWritingSubmission: addWritingSubmission,
    getWritingSubmissions: getWritingSubmissions,
    // Test questions
    getTestQuestions: getTestQuestions,
    // CMS
    getCms: getCms,
    setCms: setCms,
    deleteCms: deleteCms,
    // Offices
    getOffices: getOffices,
    saveOffices: saveOffices,
    // Reviews
    getReviews: getReviews,
    addReview: addReview,
    deleteReview: deleteReview,
    // Promos
    getPromos: getPromos,
    addPromo: addPromo,
    updatePromo: updatePromo,
    deletePromo: deletePromo,
    // Bitrix
    sendToBitrix: sendToBitrix,
    // Utils
    cleanPhone: cleanPhone,
    escHtml: escHtml,
    // Constants
    SUPABASE_URL: SUPABASE_URL
  };
})();
