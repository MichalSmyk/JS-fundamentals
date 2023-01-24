class Thermostat {
    constructor(){
        this.temperature = 20
        this.powerSavingMode = true;
        this.maxTempOnPSM = 25;
        this.maxTempWithoutPSM = 32;
        this.minPossibleTemp = 10;
    };

    up() {
       if (this.powerSavingMode) {
        if (this.temperature < this.maxTempOnPSM) {
            return this.temperature += 1;
        }
       } else {
        if (this.temperature < this.maxTempWithoutPSM) {
            return this.temperature += 1;
        }
       };
    };
    
    down() {
        if (this.temperature > this.minPossibleTemp) {
            return this.temperature -= 1;
        }
    }

    getTemperature(){
        return this.temperature
    };

    setPowerSavingMode(){
        if(this.powerSavingMode){
            return this.powerSavingMode = false
          } else {
            return this.powerSavingMode = true
          }
    };

    reset(){
        this.temperature = 20;
    };

    energyUsage(){
        if (this.temperature < 18) {
            return 'low-usage';
        } else if (this.temperature <= 25) {
            return 'medium-usage';
        } else {
            return 'high-usage';
        };
    };
};
module.exports = Thermostat;