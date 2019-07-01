"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StringUtilities = function StringUtilities() {
  _classCallCheck(this, StringUtilities);
};

exports.default = StringUtilities;

_defineProperty(StringUtilities, "getFirstInternalVowel", function (word) {
  var vowels = word.substring(1).match(/[AEIOU]/);

  if (vowels) {
    return vowels[0] || 'X';
  } else {
    return 'X';
  }
});

_defineProperty(StringUtilities, "getFirstInternalConsonant", function (word) {
  var consonant = word.substring(1).match(/[BCDFGHJKLMNPQRSTVWXYZ]/);

  if (consonant) {
    return consonant[0] || 'X';
  } else {
    return 'X';
  }
});

_defineProperty(StringUtilities, "clearString", function (word) {
  var cleanWord = word.trim();
  return StringUtilities.removeAccents(cleanWord.replace(/\s/g, ' ').toUpperCase());
});

_defineProperty(StringUtilities, "removeAccents", function (word) {
  var accents = {
    'Á': 'A',
    'É': 'E',
    'Í': 'I',
    'Ó': 'O',
    'Ú': 'U'
  };

  for (var accented in accents) {
    word = word.replace(new RegExp(accented), accents[accented]);
  }

  return word;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWIvU3RyaW5nVXRpbHMudHMiXSwibmFtZXMiOlsiU3RyaW5nVXRpbGl0aWVzIiwid29yZCIsInZvd2VscyIsInN1YnN0cmluZyIsIm1hdGNoIiwiY29uc29uYW50IiwiY2xlYW5Xb3JkIiwidHJpbSIsInJlbW92ZUFjY2VudHMiLCJyZXBsYWNlIiwidG9VcHBlckNhc2UiLCJhY2NlbnRzIiwiYWNjZW50ZWQiLCJSZWdFeHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBQXFCQSxlOzs7Ozs7Z0JBQUFBLGUsMkJBQ1ksVUFBQ0MsSUFBRCxFQUFrQjtBQUMvQyxNQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsU0FBTCxDQUFlLENBQWYsRUFBa0JDLEtBQWxCLENBQXdCLFNBQXhCLENBQWY7O0FBQ0EsTUFBSUYsTUFBSixFQUFZO0FBQ1YsV0FBT0EsTUFBTSxDQUFDLENBQUQsQ0FBTixJQUFhLEdBQXBCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxHQUFQO0FBQ0Q7QUFDRixDOztnQkFSa0JGLGUsK0JBVWdCLFVBQUNDLElBQUQsRUFBa0I7QUFDbkQsTUFBTUksU0FBUyxHQUFHSixJQUFJLENBQUNFLFNBQUwsQ0FBZSxDQUFmLEVBQWtCQyxLQUFsQixDQUF3Qix5QkFBeEIsQ0FBbEI7O0FBRUEsTUFBSUMsU0FBSixFQUFlO0FBQ2IsV0FBT0EsU0FBUyxDQUFDLENBQUQsQ0FBVCxJQUFnQixHQUF2QjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU8sR0FBUDtBQUNEO0FBQ0YsQzs7Z0JBbEJrQkwsZSxpQkFvQkUsVUFBQ0MsSUFBRCxFQUFrQjtBQUVyQyxNQUFNSyxTQUFTLEdBQUdMLElBQUksQ0FBQ00sSUFBTCxFQUFsQjtBQUNBLFNBQU9QLGVBQWUsQ0FBQ1EsYUFBaEIsQ0FBOEJGLFNBQVMsQ0FBQ0csT0FBVixDQUFrQixLQUFsQixFQUF5QixHQUF6QixFQUE4QkMsV0FBOUIsRUFBOUIsQ0FBUDtBQUNELEM7O2dCQXhCa0JWLGUsbUJBMEJJLFVBQUNDLElBQUQsRUFBa0I7QUFDdkMsTUFBTVUsT0FBWSxHQUFHO0FBQ25CLFNBQUssR0FEYztBQUVuQixTQUFLLEdBRmM7QUFHbkIsU0FBSyxHQUhjO0FBSW5CLFNBQUssR0FKYztBQUtuQixTQUFLO0FBTGMsR0FBckI7O0FBUUEsT0FBSyxJQUFJQyxRQUFULElBQXFCRCxPQUFyQixFQUE4QjtBQUM1QlYsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNRLE9BQUwsQ0FBYSxJQUFJSSxNQUFKLENBQVdELFFBQVgsQ0FBYixFQUFtQ0QsT0FBTyxDQUFDQyxRQUFELENBQTFDLENBQVA7QUFDRDs7QUFDRCxTQUFPWCxJQUFQO0FBQ0QsQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ1V0aWxpdGllcyB7XG4gIHN0YXRpYyBnZXRGaXJzdEludGVybmFsVm93ZWwgPSAod29yZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qgdm93ZWxzID0gd29yZC5zdWJzdHJpbmcoMSkubWF0Y2goL1tBRUlPVV0vKVxuICAgIGlmICh2b3dlbHMpIHtcbiAgICAgIHJldHVybiB2b3dlbHNbMF0gfHwgJ1gnXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnWCdcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0Rmlyc3RJbnRlcm5hbENvbnNvbmFudCA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBjb25zb25hbnQgPSB3b3JkLnN1YnN0cmluZygxKS5tYXRjaCgvW0JDREZHSEpLTE1OUFFSU1RWV1hZWl0vKVxuICBcbiAgICBpZiAoY29uc29uYW50KSB7XG4gICAgICByZXR1cm4gY29uc29uYW50WzBdIHx8ICdYJ1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJ1gnXG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNsZWFyU3RyaW5nID0gKHdvcmQ6IHN0cmluZykgPT4ge1xuXG4gICAgY29uc3QgY2xlYW5Xb3JkID0gd29yZC50cmltKClcbiAgICByZXR1cm4gU3RyaW5nVXRpbGl0aWVzLnJlbW92ZUFjY2VudHMoY2xlYW5Xb3JkLnJlcGxhY2UoL1xccy9nLCAnICcpLnRvVXBwZXJDYXNlKCkpXG4gIH1cblxuICBzdGF0aWMgcmVtb3ZlQWNjZW50cyA9ICh3b3JkOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBhY2NlbnRzOiBhbnkgPSB7XG4gICAgICAnw4EnOiAnQScsXG4gICAgICAnw4knOiAnRScsXG4gICAgICAnw40nOiAnSScsXG4gICAgICAnw5MnOiAnTycsXG4gICAgICAnw5onOiAnVSdcbiAgICB9XG5cbiAgICBmb3IgKGxldCBhY2NlbnRlZCBpbiBhY2NlbnRzKSB7XG4gICAgICB3b3JkID0gd29yZC5yZXBsYWNlKG5ldyBSZWdFeHAoYWNjZW50ZWQpLCBhY2NlbnRzW2FjY2VudGVkXSlcbiAgICB9XG4gICAgcmV0dXJuIHdvcmRcbiAgfVxuXG59XG4iXX0=