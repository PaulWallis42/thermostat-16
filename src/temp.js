var Thermostat = function() {};

var DefaultTemp = 20;
var temp = DefaultTemp;
var powerSave = true;
var displayColour;

Thermostat.prototype.currentTemp = function () {
  return temp;
};

Thermostat.prototype.increaseTemp = function () {
  if (powerSave === true && temp < 25) {
    temp ++;
  } else if (powerSave === false && temp < 32) {
    temp ++;
  } else {
    return "Max Temp Reached";
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (temp > 10) {
    temp --;
  } else {
    return "Minimum Temp Reached";
  }
};

Thermostat.prototype.resetTemp = function () {
  temp = DefaultTemp;
};

Thermostat.prototype.isPowerSaveOn = function () {
  return powerSave;
};

Thermostat.prototype.powerSaveOff = function () {
  powerSave = false;
};

Thermostat.prototype.powerSaveOn = function () {
  powerSave = true;
};

Thermostat.prototype.displayColour = function () {
  if (temp < 18) {
    return displayColour = "Green";
  } else if (temp >= 18 && temp < 25) {
    return displayColour = "Yellow";
  } else {
    return displayColour = "Red";
  }
};
