describe('The temperature', function(){

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts of at 20 degrees', function(){
    expect(thermostat.currentTemp).toEqual(20)
  });
});
