// 케이스 카드 위에서는 동그란 화살표 커서가 마우스를 따라간다 (마우스가 있는 화면에서만)
(function () {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  var dot = document.createElement('div');
  dot.className = 'view-cursor';
  dot.setAttribute('aria-hidden', 'true');
  dot.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22"><path d="M7 17L17 7M9 7h8v8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(dot);
  var targets = document.querySelectorAll('.card, .feature');
  document.addEventListener('mousemove', function (e) {
    dot.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
  }, { passive: true });
  targets.forEach(function (el) {
    el.addEventListener('mouseenter', function () { dot.classList.add('on'); document.body.classList.add('cursor-view'); });
    el.addEventListener('mouseleave', function () { dot.classList.remove('on'); document.body.classList.remove('cursor-view'); });
  });
})();
