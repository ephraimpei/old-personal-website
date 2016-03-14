'use strict';

// Purchase Price input box

var checkAndRemovePurchasePriceErrMessages = function checkAndRemovePurchasePriceErrMessages() {
  if ($(".invalid-price-message").length > 0) {
    $(".invalid-price-message").remove();
  }
};

var getNewData = function getNewData(price) {
  $(".car-index-item").remove();
  var carDataSet = createDataSet(12, price);
  var carIndexItems = createCarIndexItems(carDataSet);
  carsIndex.append(carIndexItems);
};

var updateTradeInInputValue = function updateTradeInInputValue(price, percent) {
  var updatedTradeInValue = price * percent / 100;

  // round trade in value to 2 decimal places
  // tradeInInput.val(Math.round(updatedTradeInValue * 100) / 100)
  tradeInInput.val(Math.round(updatedTradeInValue));
};

var updatePriceSlider = function updatePriceSlider(price) {
  priceSlider.slider("value", price);
};

priceInput.on("input", function (e) {
  // remove error message(s) if there are any
  checkAndRemovePurchasePriceErrMessages();
});

priceInput.keypress(function (e) {
  if (e.which === 13) {
    var input = e.currentTarget.value;
    var currentPercent = parseInt(percentInput.val());
    var validityEventType = priceValidityChecker(input, currentPercent);

    // if input is valid, create (fetch) new content and update other fields
    // else create error message
    if (validityEventType === 0) {
      fadeInputBoxOutline(purchasePriceBox);
      fadeInputBoxOutline(tradeInValueBox);

      priceInput.val(input);
      var price = parseInt(input);
      var percent = parseInt(currentPercent);

      newDataHandler();
      updateTradeInInputValue(price, percent);
      updatePriceSlider(price);
      getNewData(price);
    } else {
      var errMsg = getErrorMessage("purchase-price", validityEventType);
      appendErrMsgHandler(errMsg);
    }
  }
});

// Trade-in Value input box
var checkAndRemoveTradeInErrMessages = function checkAndRemoveTradeInErrMessages() {
  if ($(".invalid-trade-in-message").length > 0) {
    $(".invalid-trade-in-message").remove();
  }
};

var updateTradeInSlider = function updateTradeInSlider(percentValue) {
  tradeInSlider.val(percentValue);
  tradeInSliderMarker.css("left", percentValue + "%");
};

var updateTradeInPercentageValue = function updateTradeInPercentageValue(value, currentPrice) {
  var percentValue = Math.round(value / currentPrice * 100);
  percentInput.val(percentValue);
  updateTradeInSlider(percentValue);
};

tradeInInput.on("input", function (e) {
  checkAndRemoveTradeInErrMessages();
});

tradeInInput.keypress(function (e) {
  if (e.which === 13) {
    var input = e.currentTarget.value;
    var currentPrice = parseInt(priceInput.val());

    var validityEventType = tradeInValidityChecker(input, currentPrice);

    // if input is valid, update other fields
    // else create error message
    if (validityEventType === 0) {
      fadeInputBoxOutline(tradeInPercentBox);
      fadeInputBoxOutline(tradeInValueBox);

      tradeInInput.val(input);
      var tradeInValue = parseInt(input);

      updateTradeInPercentageValue(tradeInValue, currentPrice);
    } else {
      var errMsg = getErrorMessage("trade-in-value", validityEventType, currentPrice);
      appendErrMsgHandler(errMsg);
    }
  }
});

// Trade-in Percentage input box
var updateTradeInPercentSlider = function updateTradeInPercentSlider(percent) {
  // tradeInSlider.val(percent);
  // tradeInSliderMarker.css("left", percent + "%");
  percentSlider.slider("value", percent);
};

percentInput.on("input", function (e) {
  checkAndRemoveTradeInErrMessages();
});

percentInput.keypress(function (e) {
  if (e.which === 13) {
    var input = e.currentTarget.value;
    var currentPrice = parseInt(priceInput.val());

    var validityEventType = percentageValidityChecker(input, currentPrice);

    // if input is valid, update other fields
    // else create error message
    if (validityEventType === 0) {
      fadeInputBoxOutline(tradeInPercentBox);
      fadeInputBoxOutline(tradeInValueBox);

      percentInput.val(input);
      var percent = parseInt(input);
      updateTradeInInputValue(currentPrice, percent);
      updateTradeInPercentSlider(percent);
    } else {
      var errMsg = getErrorMessage("trade-in-percent", validityEventType);
      appendErrMsgHandler(errMsg);
    }
  }
});