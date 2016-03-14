'use strict';

var getErrorMessage = function getErrorMessage(origin, eventType, currentPrice) {
  var text = void 0;

  if (eventType === 1) {
    text = "Please enter a valid number";
  } else {
    switch (origin) {
      case "purchase-price":
        switch (eventType) {
          case 2:
            text = "Please make sure trade percent input is valid";break;
          case 3:
            text = "Please enter a value from 0 to 100000";break;
        }break;
      case "trade-in-value":
        switch (eventType) {
          case 2:
            text = "Please make sure purchase price is a valid input";break;
          case 3:
            text = "Please enter a trade in value from 0 to " + currentPrice;break;
        }break;
      case "trade-in-percent":
        switch (eventType) {
          case 2:
            text = "Please make sure purchase price is a valid input";break;
          case 3:
            text = "Please enter a percent value from 0 to 100";break;
        }break;
    }
  }

  return { text: text, origin: origin, eventType: eventType };
};

var appendErrMsgHandler = function appendErrMsgHandler(message) {
  var errMsgElement = $(document.createElement("label"));
  errMsgElement.text(message.text);

  if (message.origin === "purchase-price") {
    if (message.eventType === 2 && $(".error-message.from-price").length === 0) {
      errMsgElement.addClass("error-message invalid-trade-in-message from-price");
      tradeInValueWrapper.before(errMsgElement);
    } else {
      errMsgElement.addClass("error-message invalid-price-message");
      purchasePriceBox.before(errMsgElement);
    }
  } else {
    if (message.eventType === 2 && $(".error-message.from-trade-in").length === 0) {
      errMsgElement.addClass("error-message invalid-price-message from-trade-in");
      purchasePriceBox.before(errMsgElement);
    } else {
      errMsgElement.addClass("error-message invalid-trade-in-message");
      tradeInValueWrapper.before(errMsgElement);
    }
  }
};