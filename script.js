function outerFunction(callback) {
  callback();
}

function myCallback() {
  console.log("Callback function was called");
}

outerFunction(myCallback);
