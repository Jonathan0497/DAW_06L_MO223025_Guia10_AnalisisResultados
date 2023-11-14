$(window).on('load', function () {
    $('#fullpage').fullpage({
        autoScrolling: true,
        keyboardScrolling: true,
        paddingTop: '70px',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Superman', 'Batman', 'Flash', 'Spiderman'],
        showActiveTooltip: true,
        slidesNavigation: true,
        scrollOverflow: true,
    });
});
