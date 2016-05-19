$(document).ready(function(){

  var thermostat = new Thermostat();

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemp());
    $('#temperature').attr('class', thermostat.displayColour());
  }

  updateTemperature();

  $("#temperature-up").on('click', function(){
    thermostat.increaseTemp();
    updateTemperature();
  })

  $('#temperature-down').click (function(){ // shorthand for on click listener
    thermostat.decreaseTemp();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function(){
    thermostat.resetTemp();
    updateTemperature();
  })

  $('#powersaving-on').on('click', function(){
    thermostat.powerSaveOn();
    $('#power-saving-status').text('On');
  })

  $('#powersaving-off').on('click', function(){
    thermostat.powerSaveOff();
    $('#power-saving-status').text('Off');
  })

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9357e6bbfecb91c85ad67446164bfbce&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

})
