function Thermostat(){
  this.DEFAULT_TEMP = 20;
  this.temp = this.DEFAULT_TEMP;
  this.powerSave = true;
  this.displayColour;
}

Thermostat.prototype.currentTemp = function () {
  return this.temp;
};

Thermostat.prototype.increaseTemp = function () {
  if (this.powerSave === true && this.temp < 25) {
    this.temp ++;
  } else if (this.powerSave === false && this.temp < 32) {
    this.temp ++;
  } else {
    return "Max Temp Reached";
  }
};

Thermostat.prototype.decreaseTemp = function () {
  if (this.temp > 10) {
    this.temp --;
  } else {
    return "Minimum Temp Reached";
  }
};

Thermostat.prototype.resetTemp = function () {
  this.temp = this.DEFAULT_TEMP;
};

Thermostat.prototype.isPowerSaveOn = function () {
  return this.powerSave;
};

Thermostat.prototype.powerSaveOff = function () {
  this.powerSave = false;
};

Thermostat.prototype.powerSaveOn = function () {
  this.powerSave = true;
};

Thermostat.prototype.displayColour = function () {
  if (this.temp < 18) {
    return this.displayColour = "Green";
  } else if (this.temp >= 18 && this.temp < 25) {
    return this.displayColour = "Yellow";
  } else {
    return this.displayColour = "Red";
  }
};

/* The way I did it originally =>

function Thermostat(){}

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

*/
