<!doctype html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
</head>

    
<body>


<table id="table">
    <thead>
        <tr>
            <th>City</th>
            <th>Country</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<script>

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

</script>

</body>

