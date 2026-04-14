/*  GSC Study — i18n System
    Поддержка RU / KZ / EN.
    Атрибуты:
    - data-i18n="key" — заменяет textContent
    - data-i18n-placeholder="key" — заменяет placeholder
    - data-i18n-html="key" — заменяет innerHTML (для текста с тегами)
*/

(function () {
  'use strict';

  var LANGS = ['ru', 'kz', 'en'];
  var DEFAULT = 'ru';
  var dictionaries = {};
  var currentLang = DEFAULT;

  // Detect initial language
  function detectLang() {
    var params = new URLSearchParams(window.location.search);
    var urlLang = params.get('lang');
    if (urlLang && LANGS.indexOf(urlLang) !== -1) return urlLang;
    var stored = localStorage.getItem('gsc_lang');
    if (stored && LANGS.indexOf(stored) !== -1) return stored;
    return DEFAULT;
  }

  // Load dictionary
  async function loadDict(lang) {
    if (dictionaries[lang]) return dictionaries[lang];
    try {
      var resp = await fetch('js/i18n/' + lang + '.json?v=' + Date.now());
      if (!resp.ok) throw new Error('HTTP ' + resp.status);
      dictionaries[lang] = await resp.json();
      return dictionaries[lang];
    } catch (e) {
      console.warn('i18n: failed to load', lang, e);
      return {};
    }
  }

  // Translate a key
  function t(key) {
    var dict = dictionaries[currentLang] || {};
    if (dict[key] !== undefined) return dict[key];
    // Fallback to Russian
    var ruDict = dictionaries['ru'] || {};
    if (ruDict[key] !== undefined) return ruDict[key];
    return '';
  }

  // Apply translations to DOM
  function applyTranslations() {
    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var val = t(key);
      if (val) el.textContent = val;
    });

    // data-i18n-placeholder → placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var val = t(key);
      if (val) el.placeholder = val;
    });

    // data-i18n-html → innerHTML
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      var val = t(key);
      if (val) el.innerHTML = val;
    });

    // Update html lang attribute
    document.documentElement.lang = currentLang === 'kz' ? 'kk' : currentLang;

    // Update active state on language buttons
    document.querySelectorAll('[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
  }

  // Set language
  async function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = DEFAULT;
    currentLang = lang;
    localStorage.setItem('gsc_lang', lang);
    await loadDict(lang);
    applyTranslations();

    // Update URL without reload
    var url = new URL(window.location);
    if (lang === DEFAULT) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    history.replaceState(null, '', url.toString());
  }

  // Init
  async function init() {
    currentLang = detectLang();
    // Always load Russian as fallback
    await loadDict('ru');
    if (currentLang !== 'ru') {
      await loadDict(currentLang);
    }
    applyTranslations();

    // Bind language toggle buttons
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-lang]');
      if (!btn) return;
      e.preventDefault();
      setLang(btn.getAttribute('data-lang'));
    });
  }

  // Run on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Public API
  window.i18n = {
    t: t,
    setLang: setLang,
    getLang: function () { return currentLang; },
    apply: applyTranslations
  };
})();
