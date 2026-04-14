/*  GSC Study — Lead Form Modal
    Единая лид-форма для всех страниц.
    Зависимости: js/supabase-client.js (window.GSC)
*/

(function () {
  'use strict';

  // ——— Inject modal HTML if not present ———
  if (!document.getElementById('leadModal')) {
    var html = '<div class="lead-modal" id="leadModal" aria-hidden="true" role="dialog" aria-modal="true">' +
      '<div class="lead-overlay" id="leadOverlay"></div>' +
      '<div class="lead-box">' +
        '<button class="lead-close" id="leadClose" aria-label="Закрыть">&times;</button>' +
        '<h2 class="lead-title" data-i18n="lead_title">Оставьте заявку</h2>' +
        '<p class="lead-sub" data-i18n="lead_sub">Мы свяжемся с вами в ближайшее время</p>' +
        '<form id="leadForm" autocomplete="on" novalidate>' +
          '<div class="lead-field">' +
            '<label for="lead-name" data-i18n="lead_name">Имя *</label>' +
            '<input type="text" id="lead-name" name="name" required maxlength="120" autocomplete="name">' +
          '</div>' +
          '<div class="lead-field">' +
            '<label for="lead-city" data-i18n="lead_city">Город *</label>' +
            '<input type="text" id="lead-city" name="city" required maxlength="80" autocomplete="address-level2">' +
          '</div>' +
          '<div class="lead-field">' +
            '<label for="lead-phone" data-i18n="lead_phone">Телефон *</label>' +
            '<input type="tel" id="lead-phone" name="phone" required maxlength="20" autocomplete="tel" placeholder="+7 ___ ___ __ __">' +
          '</div>' +
          '<div class="lead-field">' +
            '<label for="lead-email" data-i18n="lead_email">Email</label>' +
            '<input type="email" id="lead-email" name="email" maxlength="120" autocomplete="email">' +
          '</div>' +
          '<div style="display:none"><input type="text" name="website" tabindex="-1" autocomplete="off"></div>' +
          '<input type="hidden" id="lead-source" name="source" value="">' +
          '<input type="hidden" id="lead-product" name="product" value="">' +
          '<div id="leadError" class="lead-error" role="alert"></div>' +
          '<button type="submit" class="lead-btn" id="leadSubmit" data-i18n="lead_send">Отправить заявку</button>' +
          '<p class="lead-consent" data-i18n="lead_consent">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>' +
        '</form>' +
        '<div class="lead-success" id="leadSuccess" style="display:none">' +
          '<div class="lead-success-icon">&#10003;</div>' +
          '<h3 data-i18n="lead_thanks">Спасибо!</h3>' +
          '<p data-i18n="lead_thanks_sub">Мы свяжемся с вами в ближайшее время</p>' +
        '</div>' +
      '</div>' +
    '</div>';
    var wrap = document.createElement('div');
    wrap.innerHTML = html;
    document.body.appendChild(wrap.firstChild);
  }

  // ——— Elements ———
  var modal = document.getElementById('leadModal');
  var overlay = document.getElementById('leadOverlay');
  var closeBtn = document.getElementById('leadClose');
  var form = document.getElementById('leadForm');
  var errEl = document.getElementById('leadError');
  var successEl = document.getElementById('leadSuccess');
  var submitBtn = document.getElementById('leadSubmit');
  var lastFocus = null;

  // ——— UTM ———
  function getUtm() {
    var params = new URLSearchParams(window.location.search);
    var utm = {};
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(function (k) {
      var v = params.get(k);
      if (v) utm[k] = v;
    });
    return utm;
  }

  // ——— Phone mask ———
  var phoneInput = document.getElementById('lead-phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function () {
      var raw = this.value.replace(/\D/g, '');
      if (raw.length === 0) { this.value = ''; return; }
      if (raw[0] === '8') raw = '7' + raw.slice(1);
      if (raw[0] !== '7') raw = '7' + raw;
      var f = '+7';
      if (raw.length > 1) f += ' ' + raw.slice(1, 4);
      if (raw.length > 4) f += ' ' + raw.slice(4, 7);
      if (raw.length > 7) f += ' ' + raw.slice(7, 9);
      if (raw.length > 9) f += ' ' + raw.slice(9, 11);
      this.value = f;
    });
  }

  // ——— Open / Close ———
  function openLead(source, product) {
    if (!modal) return;
    lastFocus = document.activeElement;
    form.style.display = '';
    successEl.style.display = 'none';
    errEl.textContent = '';
    form.reset();
    document.getElementById('lead-source').value = source || window.location.pathname;
    document.getElementById('lead-product').value = product || '';
    modal.setAttribute('aria-hidden', 'false');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(function () { document.getElementById('lead-name').focus(); }, 100);
  }

  function closeLead() {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocus) lastFocus.focus();
    // Callback after success
    if (window._LEAD_AFTER_SUCCESS && successEl.style.display !== 'none') {
      var cb = window._LEAD_AFTER_SUCCESS;
      window._LEAD_AFTER_SUCCESS = null;
      cb();
    }
  }

  // Event listeners
  if (overlay) overlay.addEventListener('click', closeLead);
  if (closeBtn) closeBtn.addEventListener('click', closeLead);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) closeLead();
  });

  // ——— Submit ———
  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      errEl.textContent = '';

      // Honeypot check
      var honey = form.querySelector('input[name="website"]');
      if (honey && honey.value) return;

      var name = document.getElementById('lead-name').value.trim();
      var city = document.getElementById('lead-city').value.trim();
      var phone = document.getElementById('lead-phone').value.trim();
      var email = document.getElementById('lead-email').value.trim();

      if (!name || !city || !phone) {
        errEl.textContent = 'Пожалуйста, заполните обязательные поля';
        return;
      }
      if (phone.replace(/\D/g, '').length < 11) {
        errEl.textContent = 'Введите корректный номер телефона';
        return;
      }
      if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errEl.textContent = 'Введите корректный email';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = 'Отправка...';

      try {
        await window.GSC.addLead({
          name: name,
          phone: phone,
          city: city,
          email: email,
          source: document.getElementById('lead-source').value || window.location.pathname,
          product: document.getElementById('lead-product').value || '',
          utm: getUtm()
        });

        form.style.display = 'none';
        successEl.style.display = 'block';

        // Auto-close after 3 seconds
        setTimeout(closeLead, 3000);
      } catch (err) {
        errEl.textContent = 'Ошибка при отправке. Попробуйте ещё раз.';
        console.error('Lead submit error:', err);
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Отправить заявку';
      }
    });
  }

  // ——— Auto-open on CTA clicks ———
  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-lead], .nav-cta, .cta-btn, .hero-btn');
    if (!target) return;
    e.preventDefault();
    var source = target.getAttribute('data-lead') || target.textContent.trim().slice(0, 60);
    var product = target.getAttribute('data-product') || '';
    openLead(source, product);
  });

  // ——— Public ———
  window.openLead = openLead;
  window.closeLead = closeLead;
})();
