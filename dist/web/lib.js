/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lib/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lib/DocumentGenerator.ts":
/*!**************************************!*\
  !*** ./src/lib/DocumentGenerator.ts ***!
  \**************************************/
/*! exports provided: DocumentType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DocumentType\", function() { return DocumentType; });\n/* harmony import */ var _StringUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StringUtils */ \"./src/lib/StringUtils.ts\");\n\nvar DocumentType;\n(function (DocumentType) {\n    DocumentType[\"RFC\"] = \"rfc\";\n    DocumentType[\"CURP\"] = \"curp\";\n})(DocumentType || (DocumentType = {}));\nvar DocumentGenerator = /** @class */ (function () {\n    function DocumentGenerator() {\n    }\n    DocumentGenerator.getCommonPart = function (name, surnameFather, surnameMother, bornDay, bornMonth, bornYear, type) {\n        var commonPart = surnameFather[0];\n        commonPart += _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstInternalVowel(surnameFather);\n        commonPart += surnameMother[0] || 'X';\n        commonPart += name[0];\n        commonPart = DocumentGenerator.removeBadWords(commonPart, type);\n        commonPart += bornYear.substring(2);\n        commonPart += bornMonth;\n        commonPart += bornDay;\n        return commonPart;\n    };\n    DocumentGenerator.getBornStateCode = function (stateName) {\n        var clearString = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString, removeAccents = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeAccents;\n        var parsedStateName = removeAccents(clearString(stateName));\n        return DocumentGenerator.states[parsedStateName];\n    };\n    DocumentGenerator.getGenderLetter = function (gender) {\n        switch (gender) {\n            case 'M':\n                return 'H';\n            case 'F':\n                return 'M';\n        }\n    };\n    DocumentGenerator.getSpecialChar = function (bornYear) {\n        if (bornYear[0] === '1') {\n            return '0';\n        }\n        else {\n            return 'A';\n        }\n    };\n    DocumentGenerator.removeBadWords = function (word, type) {\n        var badWordsList;\n        if (type === DocumentType.CURP) {\n            badWordsList = DocumentGenerator.badWordsCURP;\n        }\n        else {\n            badWordsList = DocumentGenerator.badWordsRFC;\n        }\n        if (badWordsList[word]) {\n            return badWordsList[word];\n        }\n        return word;\n    };\n    DocumentGenerator.getCURP = function (name, surnameFather, surnameMother, bornDay, bornMonth, bornYear, bornState, gender) {\n        name = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(name);\n        name = DocumentGenerator.removeCommonNames(name);\n        surnameFather = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(surnameFather);\n        surnameFather = DocumentGenerator.removePrefixes(surnameFather);\n        surnameMother = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(surnameMother);\n        surnameMother = DocumentGenerator.removePrefixes(surnameMother);\n        bornDay = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(bornDay);\n        bornMonth = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(bornMonth);\n        bornYear = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(bornYear);\n        var curp = DocumentGenerator.getCommonPart(name, surnameFather, surnameMother, bornDay, bornMonth, bornYear, DocumentType.CURP);\n        curp = DocumentGenerator.removeBadWords(curp, DocumentType.CURP);\n        curp += DocumentGenerator.getGenderLetter(gender);\n        curp += DocumentGenerator.getBornStateCode(bornState);\n        curp += _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstInternalConsonant(surnameFather);\n        curp += _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstInternalConsonant(surnameMother);\n        curp += _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFirstInternalConsonant(name);\n        curp += DocumentGenerator.getSpecialChar(bornYear);\n        curp += DocumentGenerator.getLastCURPDigit(curp);\n        return curp;\n    };\n    DocumentGenerator.getRFC = function (name, surnameFather, surnameMother, bornDay, bornMonth, bornYear) {\n        name = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(name);\n        name = DocumentGenerator.removeCommonNames(name);\n        surnameFather = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(surnameFather);\n        surnameMother = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(surnameMother);\n        bornDay = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(bornDay);\n        bornMonth = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(bornMonth);\n        bornYear = _StringUtils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clearString(bornYear);\n        return DocumentGenerator.getCommonPart(name, surnameFather, surnameMother, bornDay, bornMonth, bornYear, DocumentType.RFC);\n    };\n    DocumentGenerator.removeCommonNames = function (currentName) { return (DocumentGenerator\n        .notAcceptedNames\n        .reduce(function (name, notAccepted) { return name.replace(new RegExp('^' + notAccepted), ''); }, currentName)); };\n    DocumentGenerator.removePrefixes = function (currentName) { return (DocumentGenerator\n        .prefixes\n        .reduce(function (name, notAccepted) { return name.replace(new RegExp('^' + notAccepted), ''); }, currentName)); };\n    DocumentGenerator.states = {\n        'AGUASCALIENTES': 'AS',\n        'BAJA CALIFORNIA': 'BC',\n        'BAJA CALIFORNIA NORTE': 'BC',\n        'BAJA CALIFORNIA SUR': 'BS',\n        'CAMPECHE': 'CC',\n        'COAHUILA': 'CL',\n        'COLIMA': 'CM',\n        'CHIAPAS': 'CS',\n        'CHIHUAHUA': 'CH',\n        'CIUDAD DE MEXICO': 'DF',\n        'DISTRITO FEDERAL': 'DF',\n        'DURANGO': 'DG',\n        'GUANAJUATO': 'GT',\n        'GUERRERO': 'GR',\n        'HIDALGO': 'HG',\n        'JALISCO': 'JC',\n        'MEXICO': 'MC',\n        'MICHOACAN': 'MN',\n        'MORELOS': 'MS',\n        'NAYARIT': 'NT',\n        'NUEVO LEON': 'NL',\n        'OAXACA': 'OC',\n        'PUEBLA': 'PL',\n        'QUERETARO': 'QT',\n        'QUINTANA ROO': 'QR',\n        'SAN LUIS POTOSI': 'SP',\n        'SINALOA': 'SL',\n        'SONORA': 'SR',\n        'TABASCO': 'TC',\n        'TAMAULIPAS': 'TS',\n        'TLAXCALA': 'TL',\n        'VERACRUZ': 'VZ',\n        'YUCATAN': 'YN',\n        'ZACATECAS': 'ZS'\n    };\n    DocumentGenerator.notAcceptedNames = [\n        'MARIA DEL ',\n        'MARIA DE LOS ',\n        'MARIA ',\n        'JOSE DE ',\n        'JOSE ',\n        'MA. ',\n        'MA ',\n        'M. ',\n        'J. ',\n        'J '\n    ];\n    DocumentGenerator.prefixes = [\n        'DE ',\n        'DEL '\n    ];\n    DocumentGenerator.badWordsCURP = {\n        'BACA': 'BXCA',\n        'LOCO': 'LXCO',\n        'BAKA': 'BXKA',\n        'BUEI': 'BXEI',\n        'BUEY': 'BXEY',\n        'CACA': 'CXCA',\n        'CACO': 'CXCO',\n        'CAGA': 'CXGA',\n        'CAGO': 'CXGO',\n        'CAKA': 'CXKA',\n        'CAKO': 'CXKO',\n        'COGE': 'CXGE',\n        'COGI': 'CXGI',\n        'COJA': 'CXJA',\n        'COJE': 'CXJE',\n        'COJI': 'CXJI',\n        'COJO': 'CXJO',\n        'COLA': 'CXLA',\n        'CULO': 'CXLO',\n        'FALO': 'FXLO',\n        'FETO': 'FXTO',\n        'GETA': 'GXTA',\n        'GUEI': 'GXEI',\n        'GUEY': 'GXEY',\n        'JETA': 'JXTA',\n        'JOTO': 'JXTO',\n        'KACA': 'KXCA',\n        'KACO': 'KXCO',\n        'KAGA': 'KXGA',\n        'KAGO': 'KXGO',\n        'KAKA': 'KXKA',\n        'KAKO': 'KXKO',\n        'KOGE': 'KXGE',\n        'KOGI': 'KXGI',\n        'KOJA': 'KXJA',\n        'KOJE': 'KXJE',\n        'KOJI': 'KXJI',\n        'KOJO': 'KXJO',\n        'KOLA': 'KXLA',\n        'KULO': 'KXLO',\n        'LILO': 'LXLO',\n        'LOKA': 'LXKA',\n        'LOKO': 'LXKO',\n        'MAME': 'MXME',\n        'MAMO': 'MXMO',\n        'MEAR': 'MXAR',\n        'MEAS': 'MXAS',\n        'MEON': 'MXON',\n        'MIAR': 'MXAR',\n        'MION': 'MXON',\n        'MOCO': 'MXCO',\n        'MOKO': 'MXKO',\n        'MULA': 'MXLA',\n        'MULO': 'MXLO',\n        'NACA': 'NXCA',\n        'NACO': 'NXCO',\n        'PEDA': 'PXDA',\n        'PEDO': 'PXDO',\n        'PENE': 'PXNE',\n        'PIPI': 'PXPI',\n        'PITO': 'PXTO',\n        'POPO': 'PXPO',\n        'PUTA': 'PXTA',\n        'PUTO': 'PXTO',\n        'QULO': 'QXLO',\n        'RATA': 'RXTA',\n        'ROBA': 'RXBA',\n        'ROBE': 'RXBE',\n        'ROBO': 'RXBO',\n        'RUIN': 'RXIN',\n        'SENO': 'SXNO',\n        'TETA': 'TXTA',\n        'VACA': 'VXCA',\n        'VAGA': 'VXGA',\n        'VAGO': 'VXGO',\n        'VAKA': 'VXKA',\n        'VUEI': 'VXEI',\n        'VUEY': 'VXEY',\n        'WUEI': 'WXEI',\n        'WUEY': 'WXEY'\n    };\n    DocumentGenerator.getLastCURPDigit = function (incompleteCurp) {\n        var dictionary = '0123456789ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';\n        var lnSum = 0.0;\n        var lnDigt = 0.0;\n        for (var i = 0; i < 17; i++) {\n            lnSum = lnSum + dictionary.indexOf(incompleteCurp.charAt(i)) * (18 - i);\n        }\n        lnDigt = 10 - lnSum % 10;\n        if (lnDigt === 10)\n            return 0;\n        return lnDigt;\n    };\n    DocumentGenerator.badWordsRFC = {\n        'BUEI': 'BUEX',\n        'BUEY': 'BUEX',\n        'CACA': 'CACX',\n        'CACO': 'CACX',\n        'CAGA': 'CAGX',\n        'CAGO': 'CAGX',\n        'CAKA': 'CAKX',\n        'COGE': 'COGX',\n        'COJA': 'COJX',\n        'COJE': 'COJX',\n        'COJI': 'COJX',\n        'COJO': 'COJX',\n        'CULO': 'CULX',\n        'FETO': 'FETX',\n        'GUEY': 'GUEX',\n        'JOTO': 'JOTX',\n        'KACA': 'KACX',\n        'KACO': 'KACX',\n        'KAGA': 'KAGX',\n        'KAGO': 'KAGX',\n        'KOGE': 'KOGX',\n        'KOJO': 'KOJX',\n        'KAKA': 'KAKX',\n        'KULO': 'KULX',\n        'MAME': 'MAMX',\n        'MAMO': 'MAMX',\n        'MEAR': 'MEAX',\n        'MEON': 'MEOX',\n        'MION': 'MIOX',\n        'MOCO': 'MOCX',\n        'MULA': 'MULX',\n        'PEDA': 'PEDX',\n        'PEDO': 'PEDX',\n        'PENE': 'PENX',\n        'PUTA': 'PUTX',\n        'PUTO': 'PUTX',\n        'QULO': 'QULX',\n        'RATA': 'RATX',\n        'RUIN': 'RUIX'\n    };\n    DocumentGenerator.characterValues = {\n        '0': '00',\n        '1': '01',\n        '2': '02',\n        '3': '03',\n        '4': '04',\n        '5': '05',\n        '6': '06',\n        '7': '07',\n        '8': '08',\n        '9': '09',\n        'A': '10',\n        'B': '11',\n        'C': '12',\n        'D': '13',\n        'F': '15',\n        'E': '14',\n        'G': '16',\n        'H': '17',\n        'I': '18',\n        'J': '19',\n        'K': '20',\n        'L': '21',\n        'M': '22',\n        'N': '23',\n        '&': '24',\n        'O': '25',\n        'P': '26',\n        'Q': '27',\n        'R': '28',\n        'S': '29',\n        'T': '30',\n        'U': '31',\n        'V': '32',\n        'W': '33',\n        'X': '34',\n        'Y': '35',\n        'Z': '36',\n        ' ': '37',\n        'Ñ': '38'\n    };\n    return DocumentGenerator;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (DocumentGenerator);\nif (window) {\n    try {\n        window['DocumentGenerator'] = DocumentGenerator;\n    }\n    catch (e) { }\n}\n\n\n//# sourceURL=webpack:///./src/lib/DocumentGenerator.ts?");

/***/ }),

/***/ "./src/lib/StringUtils.ts":
/*!********************************!*\
  !*** ./src/lib/StringUtils.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar StringUtilities = /** @class */ (function () {\n    function StringUtilities() {\n    }\n    StringUtilities.getFirstInternalVowel = function (word) {\n        var vowels = word.substring(1).match(/[AEIOU]/);\n        if (vowels) {\n            return vowels[0] || 'X';\n        }\n        else {\n            return 'X';\n        }\n    };\n    StringUtilities.getFirstInternalConsonant = function (word) {\n        var consonant = word.substring(1).match(/[BCDFGHJKLMNPQRSTVWXYZ]/);\n        if (consonant) {\n            return consonant[0] || 'X';\n        }\n        else {\n            return 'X';\n        }\n    };\n    StringUtilities.clearString = function (word) {\n        var cleanWord = word.trim();\n        return StringUtilities.removeAccents(cleanWord.replace(/\\s/g, ' ').toUpperCase());\n    };\n    StringUtilities.removeAccents = function (word) {\n        var accents = {\n            'Á': 'A',\n            'É': 'E',\n            'Í': 'I',\n            'Ó': 'O',\n            'Ú': 'U'\n        };\n        for (var accented in accents) {\n            word = word.replace(new RegExp(accented), accents[accented]);\n        }\n        return word;\n    };\n    return StringUtilities;\n}());\n/* harmony default export */ __webpack_exports__[\"default\"] = (StringUtilities);\n\n\n//# sourceURL=webpack:///./src/lib/StringUtils.ts?");

/***/ }),

/***/ "./src/lib/index.ts":
/*!**************************!*\
  !*** ./src/lib/index.ts ***!
  \**************************/
/*! exports provided: default, DocumentType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _DocumentGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DocumentGenerator */ \"./src/lib/DocumentGenerator.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _DocumentGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"DocumentType\", function() { return _DocumentGenerator__WEBPACK_IMPORTED_MODULE_0__[\"DocumentType\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///./src/lib/index.ts?");

/***/ })

/******/ });