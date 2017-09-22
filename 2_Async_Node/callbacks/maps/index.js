const request = require('request');
const yargs = require('yargs');

console.log("Inicializando....");


const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Direccion a obtener data',
      string: true
    }
  })
  .help()
  .alias('help','h')
  .argv;

let direccionEncoded = encodeURIComponent(argv.address);

request({
  url:'https://maps.googleapis.com/maps/api/geocode/json?address=' + direccionEncoded,
  json: true
}, function (err, res, body) {
  //
  //console.log('statusCode:', res && res.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.

  //console.log(JSON.stringify(body),undefined,2);
  if(err){
    console.log('error:', err); // Print the error if one occurred
  }else if(body.status === 'ZERO RESULTS'){
    console.log("Es imposible encontrar resultados");
  }else if(body.status === 'OK'){
    console.log(`Direccion: ${body.results[0].formatted_address} ` );
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    let latitud = body.results[0].geometry.location.lat;
    let longitud = body.results[0].geometry.location.lng;
    const API_KEY ="911757a46e83abe69a9a9a8711b0e737";

    let URL_weather = "https://api.darksky.net/forecast/" + API_KEY + "/" + latitud + "," + longitud ;

    request({
      url: URL_weather,
      json: true
    }, function (err, res, body) {
      console.log("La temperatura es: ", body.currently.temperature);
    });
  }

});