$(document).ready(function() {
    $('#myInput').on('keyup', function(e) {
        var valueSearch = $(this).val().toLowerCase();
        $('#myTable li').filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(valueSearch) > -1);
        })
    })
});