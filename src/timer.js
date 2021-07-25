let timer = (data) => {
    
    let timerField = document.querySelector('.timer');
    let second = 0;
    let minute = parseInt(data);

    let timerChange = setInterval(() => {

        if (second == 0) {
            if (minute == 0) {
                window.location.reload(true);
            }
            minute--;
            if (minute < 10) { minute = '0' + minute};
            if (minute < 1) { minute = '00' };
            second = 59;
        }
        else {
            second--;
            if (second < 10) { second = '0' + second };
        }
    
        let strTimer = `${minute} : ${second}`;
        timerField.innerHTML = strTimer;
    }, 1000);
}
//Время в минутах
timer('2');

//Перезагрузка с кнопки
let btn = document.querySelector('.fail__reload').querySelector('.btn');
btn.addEventListener('click', function() {
    window.location.reload(true);
});