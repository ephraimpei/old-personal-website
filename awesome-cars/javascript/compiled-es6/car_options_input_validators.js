'use strict';

const priceValidityChecker = (input, currentPercent) => {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - number is not between 0 and 100000
  const coercedInput = parseInt(input);

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

const tradeInValidityChecker = (input, currentPrice) => {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - purchase price input box is not filled in or is not a valid number
  // 3 - number is not between 0 and current purchase price
  const coercedInput = parseInt(input);

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

const percentageValidityChecker = (input, currentPrice) => {
  // price validity event types:
  // 0 - input is valid
  // 1 - input is not a number
  // 2 - purchase price input box is not filled in or is not a valid number
  // 3 - number is not between 0 and 100
  const coercedInput = parseInt(input);

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