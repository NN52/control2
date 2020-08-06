<head>
  <meta charset="UTF-8">
  <meta http-equiv="Pragma" content="no-cache">
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>  
</head>
    
<body>
<script>
let response = fetch("https://study.ps-gkh.ru/v8_nn_zhkh20_study/hs/api/v1/ping/",  {
  headers: {
    Authorization: 'Basic 0J3Rg9C20L3QvtCyINCSLtCfLjowMDAxOTc0'
  }
});
if (response.ok) { // если HTTP-статус в диапазоне 200-299
  // получаем тело ответа (см. про этот метод ниже)
  let json = response.text();
} else {
  alert("Ошибка HTTP: " + response.status);
}; 
 </script>
  
  
<table id="table">
    <thead>
        <tr>
            <th> - Город - </th>
            <th>Страна</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

<script>
$(document).ready(function(){
    $('body').append('<br/>7 Этот текст добавлен с помощью полного jQuery');
});
</script>

</body>
