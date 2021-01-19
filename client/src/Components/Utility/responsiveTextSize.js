// const getFontSize = (textLength) => {
//   const baseSize = 15;
//   if (textLength >= baseSize) {
//     textLength = baseSize - 2;
//   }
//   const fontSize = baseSize - textLength;
//   return `${fontSize}vw`;
// };

// export const adjustTextSize = () => {
//   const boxes = document.querySelectorAll("#adjust");

//   boxes.forEach((box) => {
//     box.style.fontSize = getFontSize(box.textContent.length);
//   });
// };

import $ from "jquery";

export const adjustTextSize = () => {
  var el, elements, _i, _len, _results;
  elements = $(".resize");
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push(
      (function (el) {
        var resizeText, _results1;
        resizeText = function () {
          var elNewFontSize;
          elNewFontSize =
            parseInt($(el).css("font-size").slice(0, -2)) - 1 + "px";
          return $(el).css("font-size", elNewFontSize);
        };
        _results1 = [];
        while (el.scrollHeight > el.offsetHeight) {
          _results1.push(resizeText());
        }
        return _results1;
      })(el)
    );
  }
  return _results;
};
