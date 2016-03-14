'use strict';

// carIndexItems to be appended to carsIndex
const carsIndex = $(".cars-index");

// carIndex Wrapper element (label appended when max data size reached)
const carsIndexWrapper = $(".cars-index-wrapper");

// listeners to be added to modify data set and other input elements
const priceInput = $(".price-input");
const tradeInInput = $(".trade-in-input");
const percentInput = $(".trade-in-percent");

// slider elements
const priceSlider = $(".purchase-price-slider");
const percentSlider = $(".percent-slider");

// elements where error messages will be prepended to
const priceInputWrapper = $(".price-input-wrapper");
const tradeInValueWrapper = $(".trade-in-value-wrapper");

// elements where outline border will fade in/out if user makes valid form submission
const purchasePriceBox = $(".price-input-wrapper");
const tradeInValueBox = $(".trade-in-value-input-wrapper");
const tradeInPercentBox = $(".trade-in-percent-input-wrapper");

// load more button - loads more data when clicked;
const loadMoreButton = $(".load-more");

// mobile menu icon
const mobileMenuIcon = $(".mobile-menu-icon");

// car options form
const carOptionsForm = $(".cars-options-wrapper");
