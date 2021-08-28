"use strict";
let number0fFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


let PersonalMovieDB = {
    count: number0fFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let movie1 = prompt('Один из последних просмотренных фильмов?', ""),
    grade1 = prompt('На сколько его оцените?', ""),
    movie2 = prompt('Один из последних просмотренных фильмов?', ""),
    grade2 = prompt('На сколько его оцените?', "");

PersonalMovieDB.movies[movie1] = grade1;
PersonalMovieDB.movies[movie2] = grade2;
    console.log(PersonalMovieDB);