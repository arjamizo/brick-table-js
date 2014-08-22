$('table').each(function(i, table) {

    //this function is executed once per every table, so widths are calculated only once. 
    var rowsFunction = (function() {
        var cache = [];

        return function(i, e) {
            e.style['position'] = 'relative';
            e.style['left'] = cache[i] || (cache[i] = (e.clientWidth || $(e).width()) / 2) + 'px';
        }
    })()

    $(table).find('td').parent().filter(':odd').find('td').each(function(i, e) {
        setTimeout(rowsFunction, 100, i, e);
    })
})
