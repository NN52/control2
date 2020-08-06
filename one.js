alert(" Один ");
$.get('https://study.ps-gkh.ru/v8_nn_zhkh20_study/hs/api/v1/ping/', {query: 'test'}, function(data) { 
    console.log(data); // ответ от сервера
})
.success(function() { console.log('Успешное выполнение'); })
.error(function(jqXHR) { console.log('Ошибка выполнения'); })
.complete(function() { console.log('Завершение выполнения'); });
