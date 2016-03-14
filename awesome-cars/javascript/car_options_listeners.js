'use strict';

// Purchase Price input box
const checkAndRemovePurchasePriceErrMessages = () => {
  if ($(".invalid-price-message").length > 0) {
    $(".invalid-price-message").remove();
  }
};

const getNewData = (price) => {
  $(".car-index-item").remove();
  const carDataSet = createDataSet(12, price);
  const carIndexItems = createCarIndexItems(carDataSet);
  carsIndex.append(carIndexItems);
};

const updateTradeInInputValue = (price, percent) => {
  const updatedTradeInValue = (price * percent) / 100;

  // round trade in value to 2 decimal places
  // tradeInInput.val(Math.round(updatedTradeInValue * 100) / 100)
  tradeInInput.val(Math.round(updatedTradeInValue))
};

const updatePriceSlider = (price) => {
  priceSlider.slider("value", price);
};

priceInput.on("input", (e) => {
  // remove error message(s) if there are any
  checkAndRemovePurchasePriceErrMessages();
});

priceInput.keypress( (e) => {
  if (e.which === 13) {
    const input = e.currentTarget.value;
    const currentPercent = parseInt(percentInput.val());
    const validityEventType = priceValidityChecker(input, currentPercent);

    // if input is valid, create (fetch) new content and update other fields
    // else create error message
    if (validityEventType === 0) {
      fadeInputBoxOutline(purchasePriceBox);
      fadeInputBoxOutline(tradeInValueBox);

      priceInput.val(input);
      const price = parseInt(input);
      const percent = parseInt(currentPercent);

      newDataHandler();
      updateTradeInInputValue(price, percent);
      updatePriceSlider(price);
      getNewData(price);
    } else {
      const errMsg = getErrorMessage("purchase-price", validityEventType);
      appendErrMsgHandler(errMsg);
    }
  }
});

// Trade-in Value input box
const checkAndRemoveTradeInErrMessages = () => {
  if ($(".invalid-trade-in-message").length > 0) {
    $(".invalid-trade-in-message").remove();
  }
};

const updateTradeInSlider = (percentValue) => {
  tradeInSlider.val(percentValue);
  tradeInSliderMarker.css("left", percentValue + "%");
};

const updateTradeInPercentageValue = (value, currentPrice) => {
  const percentValue = Math.round((value / currentPrice) * 100);
  percentInput.val(percentValue);
  updateTradeInSlider(percentValue);
}

tradeInInput.on("input", (e) => {
  checkAndRemoveTradeInErrMessages();
});

tradeInInput.keypress( (e) => {
  if (e.which === 13) {
    const input = e.currentTarget.value;
    const currentPrice = parseInt(priceInput.val());

    const validityEventType = tradeInValidityChecker(input, currentPrice);

    // if input is valid, update other fields
    // else create error message
    if (validityEventType === 0) {
      fadeInputBoxOutline(tradeInPercentBox);
      fadeInputBoxOutline(tradeInValueBox);

      tradeInInput.val(input);
      const tradeInValue = parseInt(input);

      updateTradeInPercentageValue(tradeInValue, currentPrice);
    } else {
      const errMsg = getErrorMessage("trade-in-value", validityEventType, currentPrice);
      appendErrMsgHandler(errMsg);
    }
  }
});

// Trade-in Percentage input box
const updateTradeInPercentSlider = (percent) => {
  // tradeInSlider.val(percent);
  // tradeInSliderMarker.css("left", percent + "%");
  percentSlider.slider("value", percent);
};

percentInput.on("input", (e) => {
  checkAndRemoveTradeInErrMessages();
});

percentInput.keypress( (e) => {
  if (e.which === 13) {
    const input = e.currentTarget.value;
    const currentPrice = parseInt(priceInput.val());

    const validityEventType = percentageValidityChecker(input, currentPrice);

    // if input is valid, update other fields
    // else create error message
    if (validityEventType === 0) {
      fadeInputBoxOutline(tradeInPercentBox);
      fadeInputBoxOutline(tradeInValueBox);

      percentInput.val(input);
      const percent = parseInt(input);
      updateTradeInInputValue(currentPrice, percent);
      updateTradeInPercentSlider(percent);
    } else {
      const errMsg = getErrorMessage("trade-in-percent", validityEventType);
      appendErrMsgHandler(errMsg);
    }
  }
});
