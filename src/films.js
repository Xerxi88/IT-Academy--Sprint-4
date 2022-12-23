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
  let sumNotas = movDirector.reduce((total,peli)=>(total+peli.score),0);
  let media = sumNotas/movDirector.length;
  //console.log(media);
  return Number(media.toFixed(2));
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.map(movies=>movies.title);
  let orden = result.sort();
  let primeras = orden.slice(0 , 20);
  //console.log(primeras);
  return primeras;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let newArray= array.slice();
  let year = newArray.sort((a, b) => {
    
    if (a.year < b.year) {
      return -1;
    }
    else if (a.year > b.year) {
      return 1;
    }
    else if (a.title < b.title) {
      return -1;
    }
    else if (a.title > b.title) {
      return 1;
    }
    else{
      return 0;
    }
  })
  // console.log(year);
  return year;

  



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
