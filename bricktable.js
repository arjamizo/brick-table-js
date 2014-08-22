$('table td').parent().filter(':odd').find('td').each((function() {
    var cache = [];

    return function(i, e) {
        var $e = $(e);
        $e.css({
            'position': 'relative',
            left: cache[i] || (cache[i] = $e.width() / 2)
        })
    }
})())
