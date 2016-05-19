$(document).ready(function(){

  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.currentTemp());

  $("#temperature-up").on('click', function(){
    thermostat.increaseTemp();
    $('#temperature').text(thermostat.currentTemp());
  })

  $('#temperature-down').on('click', function(){
    thermostat.decreaseTemp();
    $('#temperature').text(thermostat.currentTemp());
  })


})
