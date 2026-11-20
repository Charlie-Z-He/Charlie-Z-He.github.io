const endpoint = document.querySelector('meta[name="atlas-runtime"]')?.content;
const exhibit = document.querySelector('[data-atlas]');
function createFrame() {
  const frame = document.createElement('iframe');
  frame.title = 'Cosmic Atlas 126.18 English interactive star map';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'no-referrer';
  frame.src = endpoint;
  return frame;
}

if (endpoint && exhibit?.hasAttribute('data-auto')) {
  const frame = createFrame();
  const expand = exhibit.querySelector('.atlas-expand');
  expand.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen();
    else exhibit.requestFullscreen().catch(() => { expand.hidden = true; });
  });
  document.addEventListener('fullscreenchange', () => {
    const label = document.fullscreenElement ? 'Exit full screen' : 'Full screen';
    expand.title = label;
    expand.setAttribute('aria-label', label);
  });
  const origin = new URL(endpoint, document.baseURI).origin;
  const discard = () => {
    clearTimeout(deadline);
    window.removeEventListener('message', receive);
    exhibit.classList.remove('is-ready');
    expand.hidden = true;
    frame.remove();
  };
  const receive = event => {
    if (event.origin !== origin || event.source !== frame.contentWindow) return;
    if (event.data === 'atlas-unavailable') discard();
    if (event.data === 'atlas-ready') {
      clearTimeout(deadline);
      exhibit.classList.add('is-ready');
      expand.hidden = !document.fullscreenEnabled;
      frame.removeAttribute('tabindex');
    }
  };
  frame.tabIndex = -1;
  const deadline = setTimeout(discard, 90000);
  window.addEventListener('message', receive);
  exhibit.append(frame);
} else if (endpoint && exhibit) {
  const launch = exhibit.querySelector('[data-launch]');
  const frameBox = exhibit.querySelector('[data-frame]');
  const fullscreen = exhibit.querySelector('[data-fullscreen]');
  const close = exhibit.querySelector('[data-close]');
  const poster = exhibit.querySelector('figure');
  launch.hidden = false;
  launch.addEventListener('click', () => {
    const frame = createFrame();
    frameBox.prepend(frame);
    poster.hidden = launch.hidden = true;
    frameBox.hidden = false;
    frame.focus();
  });
  close.addEventListener('click', () => {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
    frameBox.querySelector('iframe')?.remove();
    frameBox.hidden = true;
    poster.hidden = launch.hidden = false;
    launch.focus();
  });
  fullscreen.hidden = !document.fullscreenEnabled;
  fullscreen.addEventListener('click', async () => {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await frameBox.requestFullscreen();
  });
  document.addEventListener('fullscreenchange', () => {
    fullscreen.textContent = document.fullscreenElement ? 'Exit full screen' : 'Full screen';
  });
}
