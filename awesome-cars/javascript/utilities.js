'use strict';

// create cars data
const createDataSet = (n, ceiling) => {
  const dataSetSize = n, maxPrice = ceiling || 100000;

  // create an array from 0 to dataSetSize
  const dataSetArray = Array.apply(0, Array(dataSetSize)).map( (undefined, idx) => idx );

  // colors array is shuffled to get the sense that new data has been fetched
  const carColors = ["black", "blue", "green", "red", "silver", "yellow"].shuffle();

  // create the cars data set w/ functional programming techniques :)
  const carsDataSet = dataSetArray.map( (n) => {
    const color = carColors[(n % carColors.length)];
    const name = `${ color } car`;
    const imageURL = `./images/image-car-${ color }-2x.png`;
    const price = Math.floor(Math.random() * (maxPrice - 1));
    const priceUSDFormat = "$" + price.toLocaleString();

    return {
      id: n,
      color: color,
      name: name,
      imageURL: imageURL,
      price: price,
      priceUSDFormat: priceUSDFormat
    };
  });

  return carsDataSet;
};

// create car index DOM elements (using return value from createDataSet)
const createCarIndexItems = (carDataSet) => {
  return carDataSet.map( (car) => {
    // create carIndexItem container
    let carIndexItem = $(document.createElement("div"));
    carIndexItem.addClass("car-index-item");

    let name = $(document.createElement("label"));
    name.addClass("car-index-item-name");
    name.html(car.name);

    let price = $(document.createElement("label"));
    price.addClass("car-index-item-price");
    price.html(car.priceUSDFormat);

    let image = $(document.createElement("img"));
    image.addClass("car-index-item-img");
    image.attr("src", car.imageURL);

    carIndexItem.append(name, price, image);

    return carIndexItem;
  });
};

// Fisher Yates shuffle
Array.prototype.shuffle = function () {
  let currentIndex = this.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }

  return this;
}

// fades in and out a blue border around input box argument
// lets users know he/she just made a valid form submission
const fadeInputBoxOutline = (inputBox) => {
  inputBox.addClass("on-enter");
  setTimeout(() => inputBox.removeClass("on-enter"), 500);
};

// gets called when there is no more data to load
// disables loadMoreButton and appends label to cars index to let user know there is no more data
const noMoreDataHandler = () => {
  if (!window.noMoreData) {
    window.noMoreData = true;
    loadMoreButton.addClass("disabled").prop("disabled", true);
    let finishedText = $(document.createElement("label"))
      .text("No more cars to load.")
      .addClass("no-more-data");
    carsIndexWrapper.append(finishedText);
  }
};

// undos noMoreDataHandler changes when getting data with the form
const newDataHandler = () => {
  window.noMoreData = false;
  loadMoreButton.removeClass("disabled").prop("disabled", false);
  $(".no-more-data").remove();
}
