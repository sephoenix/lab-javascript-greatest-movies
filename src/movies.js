// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

let directors;
function getAllDirectors (array) {
  directors  = array.map(function(arr){
    return arr.director
  })
  return directors
}

const notRepeatDirectors = directors.filter(function(ele , pos){
  return directors.indexOf(ele) == pos;
}) 
console.log( notRepeatDirectors)
getAllDirectors(movies)



// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  if (array.genre = " Drama"){
  let moviesSp = array.filter(function (arr){
  return arr.director == "Steven Spielberg"
  })
  return moviesSp}}
 howManyMovies(movies)



// Iteration 3: All scores average - Get the average of all scores with 2 decimals

let scores = [];
function scoresAverage(array) {
scores = array.map (function (arr){
 return arr.score;
 })
 return scores
}
scoresAverage(movies)

let sum = 0;
let length = scores.length
function scoresAverage2(array) {
 sum = scores.reduce (function (a, b){
return a+b;
})
return sum / length;
}
scoresAverage2()



// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore() {   
  if (genre = " drama ") {
    let scores = [];
  function scoresAverage(array) {
  scores = array.map (function (arr){
   return arr.score;
   })
   return scores
  }
  scoresAverage(movies)
  
  let sum = 0;
  let length = scores.length
  function scoresAverage2(array) {
   sum = scores.reduce (function (a, b){
  return a+b;
  })
  return sum / length;
  }
  scoresAverage2()
  }return scoresAverage2()
  } 
  dramaMoviesScore(movies)



// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear() {
  let year = movies.sort (function (a, b){
    if (a.year > b.year) {
      return -1
    }
  return 0;
  })
  return year;
  }
  orderByYear(movies)



// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(alphabet) {
 let  ord = alphabet.sort (function (a, b){
  if (a.title > b.title) {
    return 1
  } if (a.title < b.title) {
    return -1
  }
return 0;
})
return ord;
}
orderAlphabetically(movies)



// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function convertHourstoMinute(array) {
  let horas = array.duration.split('h');
  let total = parseInt(horas[0])*60 + parseInt(horas[1]);
     return total
    }
  convertHourstoMinute(movies[0])



// BONUS - Iteration 8: Best yearly score average - Best yearly score average
let ordenar;
function bestYearAvg(array){
  for (let i = 0; i< array.length; i++){
   ordenar = array.sort(function(a,b){
      if (a.score > b.score) {
        return -1
      } if (a.score < b.score ) {
        return 1
      }
      return 0;
      }
    )}
  return ordenar
}
let best = bestYearAvg(movies)
console.log(`The best year was ${best[0].year} with an average score of ${best[0].score}`)



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
