(function() {
  navigator.getBattery().then(function(battery) {
    var charging = document.querySelector('li:nth-child(1)');
    var level = document.querySelector('li:nth-child(2)');
    var time = document.querySelector('li:nth-child(3)');
    var distime = document.querySelector('li:nth-child(4)');

    // init
    charging.innerHTML = 'Battery charging? ' +
      (battery.charging ? 'Yes' : 'No');
    level.innerHTML = 'Battery level: ' + battery.level * 100 + '%';
    time.innerHTML = 'Battery charging time: ' + battery.chargingTime +
      ' seconds';
    distime.innerHTML = 'Battery discharging time: ' +
      battery.dischargingTime + ' seconds';

    battery.addEventListener('chargingchange', function() {
      charging.innerHTML = 'Battery charging? ' +
        (battery.charging ? 'Yes' : 'No');
    });

    battery.addEventListener('levelchange', function() {
      level.innerHTML = 'Battery level: ' + battery.level * 100 + '%';
    });

    battery.addEventListener('chargingtimechange', function() {
      time.innerHTML = 'Battery charging time: ' + battery.chargingTime +
        ' seconds';
    });

    battery.addEventListener('dischargingtimechange', function() {
      distime.innerHTML = 'Battery discharging time: ' +
        battery.dischargingTime + ' seconds';
    });
  });
})();