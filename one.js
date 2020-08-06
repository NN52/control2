alert(" 1 Один ");
$.ajax({
    type: 'GET',
    url: 'https://study.ps-gkh.ru/v8_nn_zhkh20_study/hs/api/v1/ping/',
    data: {query: 'test'},
    dataType: 'text',
    success: function(data) { console.log(data); }, // обработка ответа от сервера
    error: function(jqXHR) { console.log('Ошибка выполнения'); },
    complete: function() { console.log('Завершение выполнения'); }
});
