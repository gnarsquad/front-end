'use strict';

const getJsonSuccess = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  getJsonSuccess
};
