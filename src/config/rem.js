(function (win, doc) {
  // var viewport = doc.querySelector("meta[name=viewport]");
  function change() {
    doc.documentElement.style.fontSize = doc.documentElement.clientWidth / 7.5 + 'px';
  }
  change();
  win.addEventListener('resize', change, false);
})(window, document);
