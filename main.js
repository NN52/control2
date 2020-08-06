alert(" Основной ");
var items = [{
            city: 'Milano',
            country: 'Italy',
            link: 'details.html#42'
        },
        {
            city: 'London',
            country: 'England',
            link: 'details.html#10'
        },
        {
            city: 'Rome',
            country: 'Italy',
            link: 'details.html#39'
        },
        {
            city: 'Москва',
            country: 'Россиия',
            link: 'details.html#99'
        }

    ];

    var container = document.getElementById("table").getElementsByTagName("tbody")[0];

    items.forEach(item => {
        var tr = document.createElement("tr");

        var cityName = document.createElement('a');
        cityName.href = item.link;
        cityName.innerHTML = item.city;

        var cityColumn = document.createElement('td');
        cityColumn.appendChild(cityName);

        var countryColumn = document.createElement('td');
        countryColumn.innerHTML = item.country;

        tr.appendChild(cityColumn);
        tr.appendChild(countryColumn);

        container.appendChild(tr);
    });
