'use strict';

var priceValidityChecker = function priceValidityChecker(input, currentPercent) {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - number is not between 0 and 100000
  var coercedInput = parseInt(input);

  if (isNaN(coercedInput)) {
    return 1;
  } else if (isNaN(currentPercent)) {
    return 2;
  } else if (coercedInput < 0 || coercedInput > 100000) {
    return 3;
  } else {
    return 0;
  }
};

var tradeInValidityChecker = function tradeInValidityChecker(input, currentPrice) {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - purchase price input box is not filled in or is not a valid number
  // 3 - number is not between 0 and current purchase price
  var coercedInput = parseInt(input);

  if (isNaN(coercedInput)) {
    return 1;
  } else if (isNaN(currentPrice)) {
    return 2;
  } else if (coercedInput < 0 || coercedInput > currentPrice) {
    return 3;
  } else {
    return 0;
  }
};

var percentageValidityChecker = function percentageValidityChecker(input, currentPrice) {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - purchase price input box is not filled in or is not a valid number
  // 3 - number is not between 0 and 100
  var coercedInput = parseInt(input);

  if (isNaN(coercedInput)) {
    return 1;
  } else if (isNaN(currentPrice)) {
    return 2;
  } else if (coercedInput < 0 || coercedInput > 100) {
    return 3;
  } else {
    return 0;
  }
};