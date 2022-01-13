// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const getAllDirectors = (arr) => {return arr.map(e => e.director);}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
const howManyMovies = (arr) => {
  let counter = 0;
  arr.forEach((e) => {let check = (e.director === "Steven Spielberg" && e.genre.includes("Drama")) ? counter++ : 0;})
  return counter;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
const scoresAverage = (arr) => {
  let total = 0;
  if (arr.length === 0) {
    return 0;
  }
  let scores = arr.map(e => e.score);
  scores.forEach((e) => {total = (e) ? total += e : total;})
  return Math.round((total / scores.length)*100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
const dramaMoviesScore = (arr) => {
  let total = 0, len = 0;
  arr.forEach((e) => {
    if (e.genre.includes("Drama")) {
      total += e.score;
      len++;
    }
  })
  return (len === 0) ? 0 : Math.round((total / len) * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
const orderByYear = (arr) => {
  let years = [];
  arr.map(e => {years.push(e);});
  years.sort((a,b) => {return (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0;});
  years.sort((a,b) => a.year - b.year);
  return years;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
const orderAlphabetically = (arr) => {return arr.map(e => e.title).sort().slice(0,20);}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
const turnHoursToMinutes = (arr) => {
  return arr.map(e => {
      let words = String(e.duration).split(" ");
      let fullTime = 0;

      if (words[0].includes("h")) {
          words[0] = words[0].replace("h", "");
          words[0] = parseInt(words[0]) * 60;
          fullTime = words[0];
      } else if (words[0].includes("min")) {
          words[0] = words[0].replace("min", "");
          words[0] = parseInt(words[0]);
          fullTime = words[0];
      }

      if (words[1]) {
          if (words[1].includes("min")) {
              words[1] = words[1].replace("min", "");
              words[1] = parseInt(words[1]);
              fullTime = words[0] + words[1];
          }
      }

      let obj = {...e};
      obj.duration = fullTime;
      return obj;
  })
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(arr) {
  return arr.map(e => {
    let obj = [...e];
    let sum = 0;
    obj.sort((a,b) => {
      a.year - b.year;
      if (a.year === b.year) {
        sum += a.score + b.score;
      }
      return sum;
    });
    let avg = (len === 0) ? 0 : Math.round((sum / obj.length) * 100) / 100;
    return `The best year was $ with an average score of ${avg}`;
  });
}

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
