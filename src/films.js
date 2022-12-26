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
function moviesAverageByCategory(array,category) {

  let movCategory = array.filter(movies=>movies.genre==category && movies.score !='');
  return moviesAverageOfDirector(movCategory);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  let newArray = JSON.parse(JSON.stringify(array));
  for (movie of newArray) {
    movie.duration.split("", 8);                                         
    if (movie.duration[0] == "0") {
      movie.duration = Number(movie.duration[3] + movie.duration[4]);
    } 
    else if (movie.duration[0] != "0" && !isNaN(movie.duration[4])) {
      movie.duration = Number(movie.duration[0]) * 60 + Number(movie.duration[3] + movie.duration[4]);
    } 
    else if(movie.duration[0] != "0" && isNaN(movie.duration[2])){
      movie.duration = Number(movie.duration[0]) * 60;
    }
    else{
      movie.duration = Number(movie.duration[0]) * 60 + Number(movie.duration[3]);
}
  }
  console.log(newArray);
  return newArray;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {

  let arrayByYear = array.filter(movie=>movie.year==year);
  let orderArrayByScore= arrayByYear.sort((a,b)=>{
    if(a.score < b.score){
      return 1;
    }else if(a.score > b.score){
      return -1;
    }else{
      return 0;
    }
  });

  let bestMovie = orderArrayByScore.slice(0,1);// eliminar esta línea en el caso de querer ejecutar el código comentado.

  // console.log(bestMovie);
  return bestMovie; // eliminar esta línea en el caso de querer ejecutar el código comentado.

  /* Esta parte del código adicional la cree porque me pareció más razonable que en el caso de que hubiese dos o
    más películas con la nota máxima se mostraran todas y no solo la primera que aparece en la array.

  let arrayFilterByScore = orderArrayByScore.map(movie=>movie.score);

  let contador=0;

    for(let k=0;k < orderArrayByScore.length;k++){
      if(arrayFilterByScore[k] === arrayFilterByScore[k+1]){
        contador+=1;
      }else{
        contador+=0;
      }
    }

    let bestMovies = orderArrayByScore.slice(0,`${contador}`);

    console.log(bestMovies);

    return bestMovies;*/
  
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
