$('table').each(function(i, table) {
    $(table).find('td').parent().filter(':odd').find('td').each((function() {
        var cache = [];

        return function(i, e) {
            e.style['position'] = 'relative';
            e.style['left'] = cache[i] || (cache[i] = (e.clientWidth || $(e).width()) / 2) + 'px';
        }
    })())
})
