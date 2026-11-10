// Live Chennai time in the header
(function () {
  var el = document.getElementById('clock');
  if (!el) return;
  var fmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false, timeZone: 'Asia/Kolkata' });
  function tick() { el.textContent = fmt.format(new Date()); }
  tick();
  setInterval(tick, 15000);
})();

// Work index: one drawer open at a time
(function () {
  var heads = Array.prototype.slice.call(document.querySelectorAll('.row-head'));
  function set(head, open) {
    head.setAttribute('aria-expanded', String(open));
    document.getElementById(head.getAttribute('aria-controls')).classList.toggle('open', open);
  }
  heads.forEach(function (head) {
    head.addEventListener('click', function () {
      var willOpen = head.getAttribute('aria-expanded') !== 'true';
      heads.forEach(function (h) { set(h, false); });
      set(head, willOpen);
    });
  });
  if (heads[0]) set(heads[0], true);
})();

// Copy email
(function () {
  var btn = document.getElementById('copy');
  if (!btn) return;
  var label = btn.textContent;
  btn.addEventListener('click', function () {
    var email = btn.getAttribute('data-email');
    var done = function () {
      btn.textContent = 'Copied';
      btn.classList.add('done');
      setTimeout(function () { btn.textContent = label; btn.classList.remove('done'); }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done, function () { window.prompt('Copy email:', email); });
    } else {
      window.prompt('Copy email:', email);
    }
  });
})();
