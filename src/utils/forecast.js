const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a6f4a30d91051e2f47537769ef6eaa2d&query=' + latitude + ',' + longitude + '&units=m';

    request({url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather services!', undefined);
        } else if (body.error) {
            callback('Coordinates error. Try another search.', undefined);
        } else {
            const weather = body.current;
            callback(undefined, weather.weather_descriptions[0] + ". It is currentrly " + weather.temperature + " degrees out. It feels like " + weather.feelslike + " degrees out.");
        }
    });
}

module.exports = forecast