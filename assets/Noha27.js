
"use strict"

const weeksLeft = document.querySelector('.week');
const dayLeft = document.querySelectorAll('.day');
const hoursLeft = document.querySelector('.hour');
const minLeft = document.querySelector('.min');
const secLeft = document.querySelector('.sec');

const countDown = () => {
    const countDate = new Date('Oct 27, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    if(countDate > now){
        // How the . work?
        const  second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const week = day * 7;

        // Calculate the .
        const textWeek = Math.floor(gap / week);
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        // Assigning
        weeksLeft.innerText = textWeek;

        dayLeft.forEach(item => {
            item.innerText = textDay;
        });

        hoursLeft.innerText = textHour;
        minLeft.innerText = textMinute;
        secLeft.innerText = textSecond;

        if(gap <= (259200 * 1000)) {
            var timeLeft = document.querySelectorAll('.number');
            for(var i = 0; i < timeLeft.length; i++){
                timeLeft[i].style.color = "rgb(255, 98, 140)";
                timeLeft[i].style.opacity = .8;
            }
            dayLeft.forEach(item => {
                item.style.color = "rgb(255, 98, 140)";
                item.style.opacity = .8;
            });
        }
    }else {
        var timeLeft = document.querySelectorAll('.number');
            for(var i = 0; i < timeLeft.length; i++){
                timeLeft[i].style.color = "rgb(255, 98, 140)";
                timeLeft[i].innerText = 0;
                timeLeft[i].style.opacity = .8;
            }
            dayLeft.forEach(item => {
                item.style.color = "rgb(255, 98, 140)";
                item.innerText = 0;
                item.style.opacity = .8;
            });
    }
};

setInterval(countDown, 1000);
