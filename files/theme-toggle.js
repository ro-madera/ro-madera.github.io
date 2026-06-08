(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var label = document.querySelector(".theme-toggle-label");
  var icon = document.querySelector(".theme-toggle-icon");
  var fallbackTheme = "system";
  var modes = ["light", "dark", "system"];
  var labels = {
    system: "Auto",
    light: "Light",
    dark: "Dark"
  };
  var icons = {
    system: "◐",
    light: "☼",
    dark: "☾"
  };

  function getSavedTheme() {
    try {
      return localStorage.getItem("theme") || fallbackTheme;
    } catch (error) {
      return fallbackTheme;
    }
  }

  function saveTheme(mode) {
    fallbackTheme = mode;
    try {
      localStorage.setItem("theme", mode);
    } catch (error) {
      return false;
    }
    return true;
  }

  function currentMode() {
    var saved = getSavedTheme();
    return modes.indexOf(saved) === -1 ? "system" : saved;
  }

  function applyMode(mode) {
    root.dataset.theme = mode;
    if (label) label.textContent = labels[mode];
    if (icon) icon.textContent = icons[mode];
    if (button) button.setAttribute("aria-label", "Switch color theme. Current theme: " + labels[mode]);
  }

  applyMode(currentMode());

  if (button) {
    button.addEventListener("click", function () {
      var mode = currentMode();
      var nextMode = modes[(modes.indexOf(mode) + 1) % modes.length];
      saveTheme(nextMode);
      applyMode(nextMode);
    });
  }
})();
