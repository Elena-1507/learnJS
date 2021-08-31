"use strict";
let number0fFilms;

function start(){
    number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

    while (number0fFilms == '' || number0fFilms == null || isNaN(number0fFilms)) {
        number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const PersonalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ""),
            b = prompt('На сколько его оцените?', "");

        if (a != null && b != null && a != '' && b != '' && a.length < 50){
            PersonalMovieDB.movies[a] = b;
            console.log('yes!!!!');
        } else{
            console.log('nooooo');
            i--;
         }     
    }
}
//rememberMyFilms();

function detectPersonalLevel(){
if (PersonalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if(PersonalMovieDB.count >= 10 & PersonalMovieDB.count < 30){
    alert("Вы классический зритель");
} else if(PersonalMovieDB.count >= 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
}
//detectPersonalLevel();


function showMyDB(hidden) {
    if (!hidden) {
        console.log(PersonalMovieDB); 
    }
}
showMyDB(PersonalMovieDB.privat);

function writeYourGenres() {
    for( let i = 1; i <= 3; i++) {
        PersonalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
