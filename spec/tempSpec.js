describe('The temperature', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  afterEach(function(){
    thermostat.resetTemp();
    thermostat.powerSaveOn();
  });

  it('starts of at 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('can be increased with the up button', function(){
    thermostat.increaseTemp();
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('can be decreased with the down button', function(){
    thermostat.decreaseTemp();
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('can be reset to default with button', function(){
    thermostat.increaseTemp();
    thermostat.resetTemp();
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('can\'t go lower than 10 degrees', function(){
    var i = 0;
    do {
      thermostat.decreaseTemp();
      i ++;
    } while (i < 10)
    expect(thermostat.decreaseTemp()).toEqual("Minimum Temp Reached");
    expect(thermostat.currentTemp()).toEqual(10);
  });

  it('has a power saving mode on by default', function(){
    expect(thermostat.isPowerSaveOn()).toEqual(true);
  });

  it('powerSave can be turned off', function(){
    thermostat.powerSaveOff();
    expect(thermostat.isPowerSaveOn()).toEqual(false);
  });

  it('powerSave can be turned on', function(){
    thermostat.powerSaveOff();
    thermostat.powerSaveOn();
    expect(thermostat.isPowerSaveOn()).toEqual(true)
  });

  it('has a max of 25 degrees if power save is on', function(){
    var i = 0;
    do {
      thermostat.increaseTemp();
      i ++;
    } while (i < 5)
    expect(thermostat.increaseTemp()).toEqual("Max Temp Reached");
    expect(thermostat.currentTemp()).toEqual(25);
  });

  it('has a max of 32 degrees if power save is off', function(){
    thermostat.powerSaveOff();
    var i = 0;
    do {
      thermostat.increaseTemp();
      i ++;
    } while (i < 12)
    expect(thermostat.increaseTemp()).toEqual("Max Temp Reached");
    expect(thermostat.currentTemp()).toEqual(32);
  });

  it('display is green if temp is < 18', function(){
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    thermostat.decreaseTemp();
    expect(thermostat.displayColour()).toEqual("Green")
  });

  it('display is yellow if temp is 18 - 24', function(){
    expect(thermostat.displayColour()).toEqual("Yellow")
  });

  it('display is red if temp >= 25', function(){
    var i = 0;
    do {
      thermostat.increaseTemp();
      i ++;
    } while (i < 6)
    expect(thermostat.displayColour()).toEqual("Red")
  });

});
