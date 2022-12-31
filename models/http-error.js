class HttpError extends Error {
  constructor(message, errorCode) {
    super(message); // add Message Property
    this.code = errorCode; // add Code Property
  }
}

module.exports = HttpError;

// const HttpError = (message, errorCode) => {
//     const error = new Error(message);
//     error.code = errorCode;
//     return error;
//   };

//   module.exports = HttpError;
