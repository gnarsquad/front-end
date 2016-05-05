'use strict';

const authApi = require('./api');
const authUi = require('./ui');

const addHandlers = () => {
$(document).ready(function(){
  authApi.getJson(authUi.getJsonSuccess,authUi.failure)
  })
};

module.exports = {
  addHandlers
};
