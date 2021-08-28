"use strict";
let number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


let PersonalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


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

if (PersonalMovieDB.count < 10){
    alert("Просмотрено довольно мало фильмов");
} else if(PersonalMovieDB.count >= 10 & PersonalMovieDB.count < 30){
    alert("Вы классический зритель");
} else if(PersonalMovieDB.count >= 30){
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}
console.log(PersonalMovieDB);

