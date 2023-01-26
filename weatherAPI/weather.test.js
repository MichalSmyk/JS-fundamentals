const Weather = require("./weather");
const WeatherClient = require('./weatherClient');


describe('weather', (done) => {
    it('calls the city', () => {
        const mockClient = {
            load: jest.fn()
        };

        mockClient.load.mockResolvedValueOnce('hove')
  
    const weather = new Weather(mockClient);
    weather.load('hove').then(() => {
        expect(mockClient.load).toEqual('hove')
        done();
    });
})
  });