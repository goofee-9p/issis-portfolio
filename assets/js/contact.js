// 이름이나 연락하기를 누르면 전화와 메일만 보여 주는 창을 연다 (발송 기능 없음)
(function () {
  var dlg = document.getElementById('contact-modal');
  if (!dlg || typeof dlg.showModal !== 'function') return;
  document.querySelectorAll('[data-contact]').forEach(function (a) {
    a.addEventListener('click', function (e) { e.preventDefault(); dlg.showModal(); });
  });
  dlg.querySelector('[data-close]').addEventListener('click', function () { dlg.close(); });
  dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
})();
