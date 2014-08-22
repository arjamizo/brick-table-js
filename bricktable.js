$('table td').parent().filter(':odd').find('td').each(function(i, e) {
    var $e = $(e);
    $e.css({
        'position': 'relative',
        left: $e.width() / 2
    })
});
