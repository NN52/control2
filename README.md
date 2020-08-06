<!doctype html>
<html lang="ru">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="Pragma" content="no-cache">
  <script type="text/javascript" src="https://code.jquery.com/jquery-3.1.1.min.js"></script>  
</head>
    
<body>

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
    $('body').append('<br/>6 Этот текст добавлен с помощью полного jQuery');
});
$.ajax({
    type: 'GET',
    url: 'https://study.ps-gkh.ru/v8_nn_zhkh20_study/hs/api/v1/ping/',
    dheaders: {"Authorization": "Basic 0J3Rg9C20L3QvtCyINCSLtCfLjowMDAxOTc0"},
    success: function(data) { console.log(data); }, // обработка ответа от сервера
    error: function(jqXHR) { console.log('Ошибка выполнения'); },
    complete: function() { console.log('Завершение выполнения'); }
});
</script>

<script src="one.js"></script>

</body>
