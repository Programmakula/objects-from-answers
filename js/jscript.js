"use strict";

const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");


const personalMovieDB = {
    count:numberOfFilms,
    movies: 0,
    actors: 0,
    genres: [],
    privat: false
};


const answer1 = prompt("Один из последних просмотренных фильмов? ", "Девятый район");
const answer2 = prompt("на сколько оцените его? ", "10");
const answer3 = prompt("Еще какой нибудь вспомни? ", "Терминатор 2");
const answer4 = prompt("на сколько оцените его? ", "10");

const movies = {
    [answer1]:answer2,
    [answer3]:answer4
};

const movie={};
movie[answer1]=answer2;
movie[answer3]=answer4;

console.log(movies);
console.log(personalMovieDB);
console.log(movie);