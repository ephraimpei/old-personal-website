'use strict';

// create initial data set

window.noMoreData = false;
const batchDataSize = 12;
const maxDataSize = 40;
const initDataSet = createDataSet(batchDataSize, parseInt(priceInput.val()));

// create initial data set
carsIndex.append(createCarIndexItems(initDataSet));

// initialize jQuery sliders
priceSlider.slider({
  range: "min",
  min: 0,
  max: 100000,
  value: 30000,
  slide: (event, ui) => {
    priceInput.val(ui.value);
  },
  stop: (event, ui) => {
    const price = parseInt(ui.value);
    const percent = parseInt(percentInput.val());

    newDataHandler();
    updateTradeInInputValue(price, percent);
    updatePriceSlider(price);
    getNewData(price);
  }
});

percentSlider.slider({
  range: "min",
  min: 0,
  max: 100,
  value: 20,
  slide: (event, ui) => {
    percentInput.val(ui.value);
    tradeInInput.val(Math.round(priceInput.val() * (parseInt(ui.value) / 100)));
  }
});

// add click handler to Load More button
loadMoreButton.click(e => {
  e.preventDefault();

  // disable load more button if max data size reached
  if ($(".car-index-item").length > maxDataSize) {
    noMoreDataHandler();
  }

  createDataSet(batchDataSize, parseInt(priceInput.val()));

  carsIndex.append(createCarIndexItems(initDataSet));
});

// add click handler to mobile menu icon to toggle menu
mobileMenuIcon.click(e => {
  e.preventDefault();

  carOptionsForm.toggleClass("visible");
});