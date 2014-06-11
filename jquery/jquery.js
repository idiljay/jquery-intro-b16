$('#add-product').on('click', function() {
  addProduct();
});

var addProduct = function() {

  $('.products').append("<div></div>");
  var outerDiv = $('div').last().addClass('image');
  $(outerDiv).append("<div></div>");

  var innerDiv = $(outerDiv).children();
  $(innerDiv).addClass('overlay');

};
