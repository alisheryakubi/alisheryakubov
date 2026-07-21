/* alisheryakubov.com — theme toggle (dark/light) + dropdown nav */
(function () {
  "use strict";

  var STORAGE_KEY = "ay-theme";
  var VALID = { light: true, dark: true };

  function readStored() {
    try {
      var s = localStorage.getItem(STORAGE_KEY);
      if (s && VALID[s]) return s;
    } catch (_) {}
    var m = document.cookie.match(new RegExp("(?:^|; )" + STORAGE_KEY + "=(dark|light)"));
    if (m && VALID[m[1]]) return m[1];
    return null;
  }

  function writeStored(theme) {
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
    try { document.cookie = STORAGE_KEY + "=" + theme + ";path=/;max-age=31536000;SameSite=Lax"; } catch (_) {}
  }

  function resolveTheme() {
    var saved = readStored();
    if (saved) return saved;
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  }

  function applyTheme(theme) {
    var root = document.documentElement;
    root.setAttribute("data-theme", theme);
    // Update toggle button aria-label
    var btn = document.querySelector("[data-theme-toggle]");
    if (btn) {
      btn.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
    }
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute("data-theme") || "light";
    var next = current === "dark" ? "light" : "dark";
    writeStored(next);
    applyTheme(next);
  }

  // Expose for inline onclick handlers
  window.__ayTheme = { toggle: toggleTheme, apply: applyTheme, resolve: resolveTheme };

  // React to system preference changes only when the user hasn't chosen explicitly
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var handler = function () {
      if (!readStored()) applyTheme(resolveTheme());
    };
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else if (mq.addListener) mq.addListener(handler);
  }

  // ---------- Dropdown nav ----------
  function initDropdowns() {
    var items = document.querySelectorAll(".nav-item.has-submenu");
    items.forEach(function (item) {
      var trigger = item.querySelector(".nav-trigger");
      if (!trigger || trigger.dataset.ddBound) return;
      trigger.dataset.ddBound = "1";

      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        // Close other open dropdowns (desktop)
        items.forEach(function (other) {
          if (other !== item) other.classList.remove("open");
        });
        item.classList.toggle("open");
      });

      // Keyboard support
      trigger.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          item.classList.toggle("open");
        } else if (e.key === "Escape") {
          item.classList.remove("open");
          trigger.focus();
        }
      });
    });

    // Close dropdowns when clicking outside or navigating away
    document.addEventListener("click", function (e) {
      items.forEach(function (item) {
        if (!item.contains(e.target)) item.classList.remove("open");
      });
    });

    // Close on Escape anywhere
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        items.forEach(function (item) { item.classList.remove("open"); });
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDropdowns);
  } else {
    initDropdowns();
  }
})();