var daCity = new XMLHttpRequest();
daCity.open('GET', 'https://byui-cit230.github.io/weather/data/towndata.json', true);

daCity.send();

daCity.onload = function () {
        var weatherInfo = JSON.parse(daCity.responseText);
        console.log(weatherInfo);

        document.getElementById('frank').innerHTML = weatherInfo.towns["0"].name;
        document.getElementById('motto').innerHTML = weatherInfo.towns["0"].motto;
        document.getElementById('rain').innerHTML = weatherInfo.towns["0"].averageRainfall;
        document.getElementById('pop').innerHTML = weatherInfo.towns["0"].currentPopulation;
        document.getElementById('yer').innerHTML = weatherInfo.towns["0"].yearFounded;
        var Events = weatherInfo.towns["0"].events;
        for (var j = 0; j < Events.length; j++) {
            var listItem = document.getElementById('eve').innerHTML = weatherInfo.towns["0"].events;
        }


        document.getElementById('green').innerHTML = weatherInfo.towns["1"].name;
        document.getElementById('motog').innerHTML = weatherInfo.towns["1"].motto;
        document.getElementById('raing').innerHTML = weatherInfo.towns["1"].averageRainfall;
        document.getElementById('popg').innerHTML = weatherInfo.towns["1"].currentPopulation;
        document.getElementById('yerg').innerHTML = weatherInfo.towns["1"].yearFounded;
        var Events = weatherInfo.towns["1"].events;
        for (var j = 0; j < Events.length; j++) {
            var listItem = document.getElementById('eve1').innerHTML = weatherInfo.towns["1"].events;
        }

            document.getElementById('spring').innerHTML = weatherInfo.towns["3"].name;
            document.getElementById('motos').innerHTML = weatherInfo.towns["3"].motto;
            document.getElementById('rains').innerHTML = weatherInfo.towns["3"].averageRainfall;
            document.getElementById('pops').innerHTML = weatherInfo.towns["3"].currentPopulation;
            document.getElementById('yers').innerHTML = weatherInfo.towns["3"].yearFounded;
            var Events = weatherInfo.towns["3"].events;
            for (var j = 0; j < Events.length; j++) {
                var listItem = document.getElementById('eve3').innerHTML = weatherInfo.towns["3"].events;


            }

        }
