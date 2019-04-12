var timer = new Timer();
timer.start({precision: 'seconds'});
timer.addEventListener('secondsUpdated', function (e) {
    $('#gettingValuesExample .days').html(timer.getTimeValues().days);
    $('#gettingValuesExample .hours').html(timer.getTimeValues().hours);
    $('#gettingValuesExample .minutes').html(timer.getTimeValues().minutes);
    $('#gettingValuesExample .seconds').html(timer.getTimeValues().seconds);
    $('#gettingValuesExample .secondTenths').html(timer.getTimeValues().secondTenths);

    $('#gettingTotalValuesExample .days').html(timer.getTotalTimeValues().days);
    $('#gettingTotalValuesExample .hours').html(timer.getTotalTimeValues().hours);
    $('#gettingTotalValuesExample .minutes').html(timer.getTotalTimeValues().minutes);
    $('#gettingTotalValuesExample .seconds').html(timer.getTotalTimeValues().seconds);
    $('#gettingTotalValuesExample .secondTenths').html(timer.getTotalTimeValues().secondTenths);
});
