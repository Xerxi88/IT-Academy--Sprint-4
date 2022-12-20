// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result = array.map(function(movies){
    return movies.director;
  });
  //console.log("Exercici 1->",result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
 let movDirector= array.filter(movies=> movies.director==director);
//console.log("Exceriri 2->",movDirector);
  return movDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movDirector = array.filter(movies=>movies.director==director);
  let sumNotas = movDirector.reduce((total, peli)=>(total+peli.score),0);
  //console.log(sumNotas);
  let media = (sumNotas/movDirector.length);
  //console.log(media);
  return Number(media.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
