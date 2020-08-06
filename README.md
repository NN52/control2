    <!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
</head>
<body>
    <script>
    for (var j = 0; j < 20; j++) {
        td += "<td>" + j + "</td>";
      }
      for (var i = 0; i < 10; i++) {
        tr += "<tr>" + td + "</tr>";
      }
      console.log(tr);
      console.log(td);
      table.innerHTML = tr;
      </script>
    </body>
    
