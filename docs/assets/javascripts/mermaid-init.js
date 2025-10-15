document.addEventListener('DOMContentLoaded', function () {
  if (window.mermaid) {
    try {
      mermaid.initialize({ startOnLoad: true, securityLevel: 'loose' });
    } catch (e) {
      console.warn('Mermaid initialization failed:', e);
    }
  } else {
    console.warn('Mermaid library not loaded.');
  }
});
