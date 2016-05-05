'use strict';

const getJson = (success, failure) => {
  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/users',
    dataType: 'json',
  })
  .done(success)
  .fail(failure);
};

$(document).ready(getJson);


module.exports = {
  getJson
};
