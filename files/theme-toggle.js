(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  var label = document.querySelector(".theme-toggle-label");
  var icon = document.querySelector(".theme-toggle-icon");
  var modes = ["system", "light", "dark"];
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

  function currentMode() {
    var saved = localStorage.getItem("theme");
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
      localStorage.setItem("theme", nextMode);
      applyMode(nextMode);
    });
  }
})();
