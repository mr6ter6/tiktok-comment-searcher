(function() {
  function dispatchCommentData(url, data) {
    window.dispatchEvent(new CustomEvent('TikTokCommentSearcher_Data', {
      detail: {
        url: url,
        data: data,
        timestamp: Date.now()
      }
    }));
  }

  // ── 1. Intercept window.fetch ──────────────────────────────────────────────
  const originalFetch = window.fetch;
  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);
    try {
      const url = typeof args[0] === 'string' ? args[0] : (args[0] && args[0].url ? args[0].url : '');
      if (url && (url.includes('comment/list') || url.includes('comment/reply/list'))) {
        const clone = response.clone();
        clone.json().then(data => dispatchCommentData(url, data)).catch(() => {});
      }
    } catch (e) {}
    return response;
  };

  // ── 2. Intercept XMLHttpRequest safely using prototype ──────────────────────
  try {
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url, ...rest) {
      this._url = url || '';
      return origOpen.apply(this, [method, url, ...rest]);
    };

    const origSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(...args) {
      this.addEventListener('load', function() {
        try {
          if (this._url && (
            this._url.includes('comment/list') ||
            this._url.includes('comment/reply/list')
          )) {
            const data = JSON.parse(this.responseText);
            dispatchCommentData(this._url, data);
          }
        } catch (e) {}
      });
      return origSend.apply(this, args);
    };
  } catch (e) {}

  console.log('[TikTokCommentSearcher] Fetch + XHR prototype interceptors active.');
})();
