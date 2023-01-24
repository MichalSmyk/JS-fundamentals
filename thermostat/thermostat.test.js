const Thermostat = require('./thermostat')

describe('thermostat', () => {
    let thermostat;

    beforeEach(() => {
        thermostat = new Thermostat();
    });

    it('sets the temp for 20', () => {
        expect(thermostat.getTemperature()).toBe(20);
      });
    
      it('rises temp by one', () => {
        thermostat.up()
        expect(thermostat.getTemperature()).toBe(21);
      });
    
      it('tries to rise the temp to 26 with PS on', () => {
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(25);
      });
    
      it('decreases the temp by one untill reaching 10', () => {
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(10);
      });
      it('turns the power saving mode off', () => {
        expect(thermostat.setPowerSavingMode()).toBe(false)
      })
    
      it('can raise temp above 25 with PS off', () => {
        thermostat.setPowerSavingMode();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(26);
      });
      it('resets temp to 20 degrees', () => {
        thermostat.up()
        thermostat.up()
        thermostat.reset()
        expect(thermostat.getTemperature()).toBe(20)
      });
      it('returns low usage when temp use < 18', () => {
        thermostat.down()
        thermostat.down()
        thermostat.down()
        expect(thermostat.energyUsage()).toBe('low-usage')
      })
    
      it('returns medium usage when temp use <= 25 & >= 18', () => {
        expect(thermostat.energyUsage()).toBe('medium-usage')
      })
    
      it('returns high usage when temp use < 25', () => {
        thermostat.setPowerSavingMode()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        thermostat.up()
        expect(thermostat.energyUsage()).toBe('high-usage')
      })
    });