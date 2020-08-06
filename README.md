    <script>
    for (var j = 0; j < columns; j++) {
        td += "<td>" + j + "</td>";
      }
      for (var i = 0; i < rows; i++) {
        tr += "<tr>" + td + "</tr>";
      }
      console.log(tr);
      console.log(td);
      table.innerHTML = tr;
      </script>
    
