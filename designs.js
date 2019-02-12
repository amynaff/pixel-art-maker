// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
$(document).ready(function() {
    $('#sizePicker').submit(function makeGrid(grid) {
        $('table tr').remove();

        let rows = $('#inputHeight').val();
        let cell = $('#inputWidth').val();
        for (var i = 1; i <= rows; i++) {
            $('table').append('<tr></tr>');
            for (var j = 1; j <= cell; j++) {
                $('tr:last').append('<td></td>');
                $('td').attr("class", 'cells');
            }
        }

        grid.preventDefault();

        $('.cells').click(function(event) {
            let paint = $('#colorPicker').val();
            $(event.target).css('background-color', paint);
        });
    });

});