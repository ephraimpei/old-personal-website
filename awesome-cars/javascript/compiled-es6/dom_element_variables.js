'use strict';

// carIndexItems to be appended to carsIndex

var carsIndex = $(".cars-index");

// carIndex Wrapper element (label appended when max data size reached)
var carsIndexWrapper = $(".cars-index-wrapper");

// listeners to be added to modify data set and other input elements
var priceInput = $(".price-input");
var tradeInInput = $(".trade-in-input");
var percentInput = $(".trade-in-percent");

// slider elements
var priceSlider = $(".purchase-price-slider");
var priceSliderHandle = $(".purchase-price-slider.ui-slider-handle");
var percentSlider = $(".percent-slider");
var percentSliderHandle = $(".percent-slider.ui-slider-handle");

// elements where error messages will be prepended to
var priceInputWrapper = $(".price-input-wrapper");
var tradeInValueWrapper = $(".trade-in-value-wrapper");

// elements where outline border will fade in/out if user makes valid form submission
var purchasePriceBox = $(".price-input-wrapper");
var tradeInValueBox = $(".trade-in-value-input-wrapper");
var tradeInPercentBox = $(".trade-in-percent-input-wrapper");

// load more button - loads more data when clicked;
var loadMoreButton = $(".load-more");

// mobile menu icon
var mobileMenuIcon = $(".mobile-menu-icon");

// car options form
var carOptionsForm = $(".cars-options-wrapper");