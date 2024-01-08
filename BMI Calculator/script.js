//  how to we find a bmi and we create a over weight and normal as like make it with using java script

const from = document.querySelector("from");

from.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "0" || height < 0 || isNaN(height)) {
    results.innerHMTL = `Please give a vaild height ${height}`;
  } else if (weight === "0" || weight < 0 || isNaN(weight)) {
    results.innerHMTL = `Please give a vaild weight ${weight}`;
  } else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)
    // show the result

    results.innerHMTL = `<span>${bmi}</span>`
  }
});
