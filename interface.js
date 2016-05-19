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

})
