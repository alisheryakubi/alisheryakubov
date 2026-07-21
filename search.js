(function () {
  'use strict';

  var INDEX_URL = 'search-index.json';
  var index = null;
  var overlay = null;
  var input = null;
  var resultsEl = null;
  var basePath = '';

  function getBasePath() {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      var src = scripts[i].src;
      if (src && src.indexOf('search.js') !== -1) {
        var url = new URL(src, window.location.href);
        var dir = url.pathname.substring(0, url.pathname.lastIndexOf('/'));
        return dir ? dir + '/' : '';
      }
    }
    return '';
  }

  function loadIndex(cb) {
    if (index) return cb(null, index);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', basePath + INDEX_URL, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            index = JSON.parse(xhr.responseText);
            cb(null, index);
          } catch (e) {
            cb(e);
          }
        } else {
          cb(new Error('Failed to load index'));
        }
      }
    };
    xhr.send();
  }

  function search(query) {
    if (!index || !query || query.trim().length < 1) return [];
    var q = query.toLowerCase().trim();
    var terms = q.split(/\s+/);
    var scored = [];

    for (var i = 0; i < index.length; i++) {
      var item = index[i];
      var haystack = (
        item.title + ' ' +
        item.description + ' ' +
        item.keywords + ' ' +
        item.category
      ).toLowerCase();

      var score = 0;
      var allMatch = true;

      for (var t = 0; t < terms.length; t++) {
        var term = terms[t];
        if (haystack.indexOf(term) !== -1) {
          score += 2;
          if (item.title.toLowerCase().indexOf(term) !== -1) score += 5;
          if (item.keywords && item.keywords.toLowerCase().indexOf(term) !== -1) score += 3;
        } else {
          allMatch = false;
        }
      }

      if (allMatch && score > 0) {
        var relativeUrl = item.url;
        if (relativeUrl.indexOf('articles/') === 0) {
          relativeUrl = basePath + item.url;
        } else {
          relativeUrl = basePath + item.url;
        }
        scored.push({ item: item, score: score, url: relativeUrl });
      }
    }

    scored.sort(function (a, b) { return b.score - a.score; });
    return scored.slice(0, 12);
  }

  function highlight(text, query) {
    if (!query) return text;
    var terms = query.toLowerCase().trim().split(/\s+/);
    var result = text;
    for (var i = 0; i < terms.length; i++) {
      var term = terms[i];
      if (term.length < 2) continue;
      var re = new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
      result = result.replace(re, '<mark>$1</mark>');
    }
    return result;
  }

  function renderResults(query) {
    var results = search(query);
    if (results.length === 0) {
      resultsEl.innerHTML =
        '<div class="search-empty">' +
        (query.trim().length > 0
          ? 'No results for "' + escapeHtml(query) + '"'
          : 'Start typing to search articles, pages, and topics') +
        '</div>';
      return;
    }

    var html = '';
    for (var i = 0; i < results.length; i++) {
      var r = results[i];
      var item = r.item;
      var dateBadge = item.date ? '<span class="search-result-date">' + escapeHtml(item.date) + '</span>' : '';
      html +=
        '<a href="' + r.url + '" class="search-result" data-od-id="search-result-' + i + '">' +
          '<div class="search-result-body">' +
            '<div class="search-result-meta">' +
              '<span class="search-result-category">' + escapeHtml(item.category) + '</span>' +
              dateBadge +
            '</div>' +
            '<h3 class="search-result-title">' + highlight(escapeHtml(item.title), query) + '</h3>' +
            '<p class="search-result-desc">' + highlight(escapeHtml(item.description), query) + '</p>' +
          '</div>' +
          '<svg class="search-result-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="20" height="20"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
        '</a>';
    }
    resultsEl.innerHTML = html;
  }

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function buildOverlay() {
    if (overlay) return;

    overlay = document.createElement('div');
    overlay.className = 'search-overlay';
    overlay.setAttribute('data-od-id', 'search-overlay');
    overlay.innerHTML =
      '<div class="search-overlay-backdrop"></div>' +
      '<div class="search-dialog" role="dialog" aria-label="Search">' +
        '<div class="search-input-wrap">' +
          '<svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="20" height="20"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>' +
          '<input type="text" id="search-input" placeholder="Search articles, pages, topics…" autocomplete="off" aria-label="Search" />' +
          '<button class="search-close" aria-label="Close search">' +
            '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" width="20" height="20"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
          '</button>' +
        '</div>' +
        '<div class="search-results" id="search-results"></div>' +
        '<div class="search-footer">' +
          '<span>Press <kbd>Esc</kbd> to close</span>' +
          '<span>↵ to open</span>' +
        '</div>' +
      '</div>';

    document.body.appendChild(overlay);
    input = overlay.querySelector('#search-input');
    resultsEl = overlay.querySelector('#search-results');

    var debounceTimer = null;
    input.addEventListener('input', function () {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(function () {
        renderResults(input.value);
      }, 150);
    });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter') {
        var first = resultsEl.querySelector('.search-result');
        if (first) {
          window.location.href = first.getAttribute('href');
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        var first2 = resultsEl.querySelector('.search-result');
        if (first2) first2.focus();
      }
    });

    resultsEl.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        var next = e.target.parentElement.nextElementSibling;
        if (next && next.classList.contains('search-result')) next.querySelector('.search-result-body').focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        var prev = e.target.parentElement.previousElementSibling;
        if (prev && prev.classList.contains('search-result')) prev.querySelector('.search-result-body').focus();
        else input.focus();
      }
    });

    overlay.querySelector('.search-close').addEventListener('click', closeSearch);
    overlay.querySelector('.search-overlay-backdrop').addEventListener('click', closeSearch);

    overlay.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSearch();
      }
    });
  }

  function openSearch() {
    buildOverlay();
    overlay.classList.add('search-overlay-open');
    document.body.style.overflow = 'hidden';
    loadIndex(function (err) {
      if (!err) {
        input.focus();
        if (input.value) renderResults(input.value);
        else renderResults('');
      }
    });
  }

  function closeSearch() {
    if (!overlay) return;
    overlay.classList.remove('search-overlay-open');
    document.body.style.overflow = '';
    if (input) input.value = '';
    if (resultsEl) resultsEl.innerHTML = '';
  }

  basePath = getBasePath();

  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && !isTyping(e.target)) {
      e.preventDefault();
      openSearch();
    } else if ((e.key === 'k' && (e.metaKey || e.ctrlKey)) && !isTyping(e.target)) {
      e.preventDefault();
      openSearch();
    }
  });

  function isTyping(el) {
    if (!el) return false;
    var tag = el.tagName;
    return tag === 'INPUT' || tag === 'TEXTAREA' || el.isContentEditable;
  }

  window.__odSearch = { open: openSearch, close: closeSearch };
})();