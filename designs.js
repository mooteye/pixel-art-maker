$('#sizePicker').submit(function makeGrid(canvas) {
  //This removes the generated canvas to begin afresh
  $('#pixelCanvas tr').remove();
  //Defining row and column variables as selected by the user on index.html
  var inputRow = $('#inputHeight').val();
  var inputColumn = $('#inputWidth').val();

  //Defining our rows and columns according to user input
  //This first 'for' loop sets up our rows for the eventual canvas
  for (var x = 1; x <= inputRow; x++) {
    $('#pixelCanvas').append('<tr></tr>');

    //This second 'for' loop sets up our columns (individual cells on the table)
    for (var y = 1; y <= inputColumn; y++) {
      $('tr:last').append('<td></td>');
    }
  }
  //Prevents the generated tabled from flickering off screen
  canvas.preventDefault();

  //Colors in the infividually selected table cell with color from the color
  //picker
  $('td').on('click', function(evt) {
    var color = $('#colorPicker').val();
    $(evt.target).css('background', color);
  });
});
