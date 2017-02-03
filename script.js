$(document).ready(function() {
    var long;
    var lat;
    var fahrenheit;
    var kelvin;
    var celsius;
    var tempSwap = false;
    var iconClass;
    $.getJSON("http://ip-api.com/json", function(data2) {
        lat = data2.lat;
        long = data2.lon;
        var api = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=910132abb8e1a73c4149877199c83a59';
        console.log(api);
        $.getJSON(api, function(data) {
            var city = data.name;
            var country = data.sys.country;
            var weatherType = data.weather[0].description;
            kelvin = data.main.temp;
            fahrenheit = ((kelvin) * (9 / 5) - 459.67).toFixed(1);
            celsius = (kelvin - 273).toFixed(1);
            $("#city").html("Location: " + city + ", " + country);
            $("#weatherType").html("<p><i class='wi "+icons[weatherType]+"'></i></p>" + weatherType);
            weatherType = weatherType.charAt(0).toUpperCase() + weatherType.slice(1);
            weatherType[0].toUpperCase();
            $("#fahrenheit").html(fahrenheit + "°F");
            $("input").click(function() {
                if (tempSwap == false) {
                    $("#fahrenheit").html(celsius + "°C");
                    tempSwap = true;
                } else {
                    $("#fahrenheit").html(fahrenheit + "°F");
                    tempSwap = false;
                }
            });
        });
        var icons = {
      'scattered clouds': 'wi-owm-802',
      'thunderstorm': 'wi-owm-200',
      'lightning': 'wi-owm-210',
      'sprinkle': 'wi-owm-300',
      'rain': 'wi-owm-302',
      'rain-mix': 'wi-owm-310',
      'showers': 'wi-owm-313',
      'storm-showers': 'wi-owm-531',
      'snow': 'wi-owm-600',
      'sleet': 'wi-owm-602',
      'smoke': 'wi-owm-711',
      'day-haze': 'wi-owm-721',
      'haze': 'wi-owm-721',
      'dust': 'wi-owm-731',
      'fog': 'wi-owm-741',
      'cloudy-gusts': 'wi-owm-771',
      'tornado': 'wi-owm-781',
      'hurricane': 'wi-owm-902',
      'snowflake-cold': 'wi-owm-903',
      'hot': 'wi-owm-904',
      'windy': 'wi-owm-905',
      'hail': 'wi-owm-906',
      'strong-wind': 'wi-owm-957',
      'thunderstorm with light rain': 'wi-owm-200',
      'thunderstorm with rain': 'wi-owm-201',
      'thunderstorm with heavy rain': 'wi-owm-202',
      'light thunderstorm': 'wi-owm-210',
      'thunderstorm': 'wi-owm-211',
      'heavy thunderstorm': 'wi-owm-212',
      'ragged thunderstorm': 'wi-owm-221',
      'thunderstorm with light drizzle': 'wi-owm-230',
      'thunderstorm with drizzle': 'wi-owm-231',
      'thunderstorm with heavy drizzle': 'wi-owm-232',
      'light intensity drizzle': 'wi-owm-300',
      'drizzle': 'wi-owm-301',
      'heavy intensity drizzle': 'wi-owm-302',
      'light intensity drizzle rain': 'wi-owm-310',
      'drizzle rain': 'wi-owm-311',
      'heavy intensity drizzle rain': 'wi-owm-312',
      'shower rain and drizzle': 'wi-owm-313',
      'heavy shower rain and drizzle': 'wi-owm-314',
      'shower drizzle': 'wi-owm-321',
      'light rain': 'wi-owm-500',
      'moderate rain': 'wi-owm-501',
      'heavy intensity rain': 'wi-owm-502',
      'very heavy rain': 'wi-owm-503',
      'extreme rain': 'wi-owm-504',
      'freezing rain': 'wi-owm-511',
      'light intensity shower rain': 'wi-owm-520',
      'shower rain': 'wi-owm-521',
      'heavy intensity shower rain': 'wi-owm-522',
      'ragged shower rain': 'wi-owm-531',
      'light snow': 'wi-owm-600',
      'snow': 'wi-owm-601',
      'heavy snow': 'wi-owm-602',
      'sleet': 'wi-owm-611',
      'shower sleet': 'wi-owm-612',
      'light rain and snow': 'wi-owm-615',
      'rain and snow': 'wi-owm-616',
      'light shower snow': 'wi-owm-620',
      'shower snow': 'wi-owm-621',
      'heavy shower snow': 'wi-owm-622',
      'broken clouds': 'wi-owm-803'
}
    });
});
