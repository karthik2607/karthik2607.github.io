// Work index: each row opens and closes on its own, so the page never jumps
(function () {
  var heads = Array.prototype.slice.call(document.querySelectorAll('.row-head'));
  function set(head, open) {
    head.setAttribute('aria-expanded', String(open));
    document.getElementById(head.getAttribute('aria-controls')).classList.toggle('open', open);
  }
  heads.forEach(function (head) {
    head.addEventListener('click', function () {
      set(head, head.getAttribute('aria-expanded') !== 'true');
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
