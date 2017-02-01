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
            var weatherType = weatherType.charAt(0).toUpperCase() + weatherType.slice(1)
            weatherType[0].toUpperCase();
            kelvin = data.main.temp;
            fahrenheit = ((kelvin) * (9 / 5) - 459.67).toFixed(1);
            celsius = (kelvin - 273).toFixed(1);
            $("#city").html("Location: " + city + ", " + country);
            $("#weatherType").html("<p><i class='"+iconClass+"'></i></p>" + weatherType);
            console.log($("#weatherType"));
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
            'strong-wind': 'wi-owm-957'
        }
        $("#weatherType").addClass(icons[weatherType]);

    });
    //Add switch statements for the weather icons, links below:
    //Case statements should be around weatherType's value, and placed before WeatherType is upperCased
    //Make the weather background have a purple gray scale filter/ sepia purple
    //https://erikflowers.github.io/weather-icons/api-list.html
    //http://openweathermap.org/weather-conditions
});
