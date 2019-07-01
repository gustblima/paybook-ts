"use strict";

var _DocumentGenerator = _interopRequireDefault(require("../lib/DocumentGenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Person = function Person(name, surnameFather, surnameMother, birthDate, birthState, gender, expectedRFC, expectedCURP) {
  _classCallCheck(this, Person);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "surnameFather", void 0);

  _defineProperty(this, "surnameMother", void 0);

  _defineProperty(this, "birthDay", void 0);

  _defineProperty(this, "birthMonth", void 0);

  _defineProperty(this, "birthYear", void 0);

  _defineProperty(this, "birthState", void 0);

  _defineProperty(this, "gender", void 0);

  _defineProperty(this, "expectedRFC", void 0);

  _defineProperty(this, "expectedCURP", void 0);

  var _birthDate$split = birthDate.split('/'),
      _birthDate$split2 = _slicedToArray(_birthDate$split, 3),
      birthDay = _birthDate$split2[0],
      birthMonth = _birthDate$split2[1],
      birthYear = _birthDate$split2[2];

  this.name = name;
  this.surnameFather = surnameFather;
  this.surnameMother = surnameMother;
  this.birthDay = birthDay;
  this.birthMonth = birthMonth;
  this.birthYear = birthYear;
  this.birthState = birthState;
  this.gender = gender;
  this.expectedRFC = expectedRFC;
  this.expectedCURP = expectedCURP;
};

var rfcRegex = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))([A-Z\d]{3})?$/;
var curpRegex = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/;

var documentTest = function documentTest(person) {
  var rfc = _DocumentGenerator.default.getRFC(person.name, person.surnameFather, person.surnameMother, person.birthDay, person.birthMonth, person.birthYear);

  var curp = _DocumentGenerator.default.getCURP(person.name, person.surnameFather, person.surnameMother, person.birthDay, person.birthMonth, person.birthYear, person.birthState, person.gender);

  test('RFC regex test', function () {
    expect(rfcRegex.test(rfc)).toBeTruthy();
  });
  test('RFC match', function () {
    expect(rfc).toBe(person.expectedRFC);
  });
  test('CURP regex test', function () {
    expect(curpRegex.test(curp)).toBeTruthy();
  });
  test('CURP match', function () {
    expect(curp).toBe(person.expectedCURP);
  });
};

var persons = [new Person('Ronaldo', 'Sebastião', 'Lepes', '02/02/1968', 'Puebla', 'F', 'SELR680202', 'SELR680202MPLBPN04'), new Person('Gustavo', 'Lima', 'Teste', '21/01/1973', 'Campeche', 'M', 'LITG730121', 'LITG730121HCCMSS04'), new Person('Carlos', 'Claudia', 'Lima', '31/08/1994', 'Aguascalientes', 'M', 'CALC940831', 'CALC940831HASLMR06'), new Person('Maria', 'Hernandez', 'Jose', '25/03/1998', 'Mexico', 'M', 'HEJM980325', 'HEJM980325HMCRSR02'), new Person('Jose', 'Silvera', 'Sado', '25/03/1998', 'Yucatan', 'F', 'SISJ980325', 'SISJ980325MYNLDS02')];
persons.forEach(documentTest);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90ZXN0L0RvY3VtZW50R2VuZXJhdG9yLnRlc3QudHMiXSwibmFtZXMiOlsiUGVyc29uIiwibmFtZSIsInN1cm5hbWVGYXRoZXIiLCJzdXJuYW1lTW90aGVyIiwiYmlydGhEYXRlIiwiYmlydGhTdGF0ZSIsImdlbmRlciIsImV4cGVjdGVkUkZDIiwiZXhwZWN0ZWRDVVJQIiwic3BsaXQiLCJiaXJ0aERheSIsImJpcnRoTW9udGgiLCJiaXJ0aFllYXIiLCJyZmNSZWdleCIsImN1cnBSZWdleCIsImRvY3VtZW50VGVzdCIsInBlcnNvbiIsInJmYyIsIkRvY3VtZW50R2VuZXJhdG9yIiwiZ2V0UkZDIiwiY3VycCIsImdldENVUlAiLCJ0ZXN0IiwiZXhwZWN0IiwidG9CZVRydXRoeSIsInRvQmUiLCJwZXJzb25zIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVNQSxNLEdBWUosZ0JBQVlDLElBQVosRUFBa0JDLGFBQWxCLEVBQWlDQyxhQUFqQyxFQUFnREMsU0FBaEQsRUFBMkRDLFVBQTNELEVBQXVFQyxNQUF2RSxFQUErRUMsV0FBL0UsRUFBNEZDLFlBQTVGLEVBQTBHO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEseUJBQzlESixTQUFTLENBQUNLLEtBQVYsQ0FBZ0IsR0FBaEIsQ0FEOEQ7QUFBQTtBQUFBLE1BQ2pHQyxRQURpRztBQUFBLE1BQ3ZGQyxVQUR1RjtBQUFBLE1BQzNFQyxTQUQyRTs7QUFFeEcsT0FBS1gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsT0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxPQUFLQyxhQUFMLEdBQXFCQSxhQUFyQjtBQUNBLE9BQUtPLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsT0FBS0MsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLE9BQUtQ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b3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRG9jdW1lbnRHZW5lcmF0b3IgZnJvbSAnLi4vbGliL0RvY3VtZW50R2VuZXJhdG9yJ1xuXG5jbGFzcyBQZXJzb24ge1xuICBuYW1lXG4gIHN1cm5hbWVGYXRoZXJcbiAgc3VybmFtZU1vdGhlclxuICBiaXJ0aERheVxuICBiaXJ0aE1vbnRoXG4gIGJpcnRoWWVhclxuICBiaXJ0aFN0YXRlXG4gIGdlbmRlclxuICBleHBlY3RlZFJGQ1xuICBleHBlY3RlZENVUlBcbiAgXG4gIGNvbnN0cnVjdG9yKG5hbWUsIHN1cm5hbWVGYXRoZXIsIHN1cm5hbWVNb3RoZXIsIGJpcnRoRGF0ZSwgYmlydGhTdGF0ZSwgZ2VuZGVyLCBleHBlY3RlZFJGQywgZXhwZWN0ZWRDVVJQKSB7XG4gICAgY29uc3QgW2JpcnRoRGF5LCBiaXJ0aE1vbnRoLCBiaXJ0aFllYXJdID0gYmlydGhEYXRlLnNwbGl0KCcvJylcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy5zdXJuYW1lRmF0aGVyID0gc3VybmFtZUZhdGhlclxuICAgIHRoaXMuc3VybmFtZU1vdGhlciA9IHN1cm5hbWVNb3RoZXJcbiAgICB0aGlzLmJpcnRoRGF5ID0gYmlydGhEYXlcbiAgICB0aGlzLmJpcnRoTW9udGggPSBiaXJ0aE1vbnRoXG4gICAgdGhpcy5iaXJ0aFllYXIgPSBiaXJ0aFllYXIgXG4gICAgdGhpcy5iaXJ0aFN0YXRlID0gYmlydGhTdGF0ZVxuICAgIHRoaXMuZ2VuZGVyID0gZ2VuZGVyXG4gICAgdGhpcy5leHBlY3RlZFJGQyA9IGV4cGVjdGVkUkZDXG4gICAgdGhpcy5leHBlY3RlZENVUlAgPSBleHBlY3RlZENVUlBcbiAgfVxufVxuXG5jb25zdCByZmNSZWdleCA9IC9eKFtBLVrDkVxceDI2XXszLDR9KFswLTldezJ9KSgwWzEtOV18MVswLTJdKSgwWzEtOV18MVswLTldfDJbMC05XXwzWzAtMV0pKShbQS1aXFxkXXszfSk/JC9cbmNvbnN0IGN1cnBSZWdleCA9IC9eKFtBLVpdW0FFSU9VWF1bQS1aXXsyfVxcZHsyfSg/OjBbMS05XXwxWzAtMl0pKD86MFsxLTldfFsxMl1cXGR8M1swMV0pW0hNXSg/OkFTfEJbQ1NdfENbQ0xNU0hdfERbRkddfEdbVFJdfEhHfEpDfE1bQ05TXXxOW0VUTF18T0N8UEx8UVtUUl18U1tQTFJdfFRbQ1NMXXxWWnxZTnxaUylbQi1ERi1ISi1OUC1UVi1aXXszfVtBLVpcXGRdKShcXGQpJC9cblxuY29uc3QgZG9jdW1lbnRUZXN0ID0gKHBlcnNvbjogUGVyc29uKSA9PiB7XG4gIGNvbnN0IHJmYyA9IERvY3VtZW50R2VuZXJhdG9yLmdldFJGQyhwZXJzb24ubmFtZSwgcGVyc29uLnN1cm5hbWVGYXRoZXIsIHBlcnNvbi5zdXJuYW1lTW90aGVyLCBwZXJzb24uYmlydGhEYXksIHBlcnNvbi5iaXJ0aE1vbnRoLCBwZXJzb24uYmlydGhZZWFyKVxuICBjb25zdCBjdXJwID0gRG9jdW1lbnRHZW5lcmF0b3IuZ2V0Q1VSUChwZXJzb24ubmFtZSwgcGVyc29uLnN1cm5hbWVGYXRoZXIsIHBlcnNvbi5zdXJuYW1lTW90aGVyLCBwZXJzb24uYmlydGhEYXksIHBlcnNvbi5iaXJ0aE1vbnRoLCBwZXJzb24uYmlydGhZZWFyLCBwZXJzb24uYmlydGhTdGF0ZSwgcGVyc29uLmdlbmRlcilcbiAgXG4gIHRlc3QoJ1JGQyByZWdleCB0ZXN0JywgKCkgPT4ge1xuICAgIGV4cGVjdChyZmNSZWdleC50ZXN0KHJmYykpLnRvQmVUcnV0aHkoKVxuICB9KVxuXG4gIHRlc3QoJ1JGQyBtYXRjaCcsICgpID0+IHtcbiAgICBleHBlY3QocmZjKS50b0JlKHBlcnNvbi5leHBlY3RlZFJGQylcbiAgfSlcblxuICB0ZXN0KCdDVVJQIHJlZ2V4IHRlc3QnLCAoKSA9PiB7XG4gICAgZXhwZWN0KGN1cnBSZWdleC50ZXN0KGN1cnApKS50b0JlVHJ1dGh5KClcbiAgfSlcblxuICB0ZXN0KCdDVVJQIG1hdGNoJywgKCkgPT4ge1xuICAgIGV4cGVjdChjdXJwKS50b0JlKHBlcnNvbi5leHBlY3RlZENVUlApXG4gIH0pXG59XG5cbmNvbnN0IHBlcnNvbnMgPSBbXG4gIG5ldyBQZXJzb24oJ1JvbmFsZG8nLCAnU2ViYXN0acOjbycsICdMZXBlcycsICcwMi8wMi8xOTY4JywgJ1B1ZWJsYScsICdGJywgJ1NFTFI2ODAyMDInLCAnU0VMUjY4MDIwMk1QTEJQTjA0JyksXG4gIG5ldyBQZXJzb24oJ0d1c3Rhdm8nLCAnTGltYScsICdUZXN0ZScsICcyMS8wMS8xOTczJywgJ0NhbXBlY2hlJywgJ00nLCAnTElURzczMDEyMScsICdMSVRHNzMwMTIxSENDTVNTMDQnKSxcbiAgbmV3IFBlcnNvbignQ2FybG9zJywgJ0NsYXVkaWEnLCAnTGltYScsICczMS8wOC8xOTk0JywgJ0FndWFzY2FsaWVudGVzJywgJ00nLCAnQ0FMQzk0MDgzMScsICdDQUxDOTQwODMxSEFTTE1SMDYnKSxcbiAgbmV3IFBlcnNvbignTWFyaWEnLCAnSGVybmFuZGV6JywgJ0pvc2UnLCAnMjUvMDMvMTk5OCcsICdNZXhpY28nLCAnTScsICdIRUpNOTgwMzI1JywgJ0hFSk05ODAzMjVITUNSU1IwMicpLFxuICBuZXcgUGVyc29uKCdKb3NlJywgJ1NpbHZlcmEnLCAnU2FkbycsICcyNS8wMy8xOTk4JywgJ1l1Y2F0YW4nLCAnRicsICdTSVNKOTgwMzI1JywgJ1NJU0o5ODAzMjVNWU5MRFMwMicpXG5dXG5cbnBlcnNvbnMuZm9yRWFjaChkb2N1bWVudFRlc3QpXG5cblxuIl19