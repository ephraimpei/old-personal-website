"use strict";

$(document).scroll(function (e) {
  // check if user scrolled all the way to the bottom of the document
  // if so, load more data
  if ($(window).scrollTop() >= $(document).height() - $(window).height()) {
    if (!window.noMoreData) {
      createDataSet(batchDataSize, parseInt(priceInput.val()));
      carsIndex.append(createCarIndexItems(initDataSet));
    }

    if ($(".car-index-item").length > maxDataSize) {
      noMoreDataHandler();
    }
  }
});