// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
  let arrOfAllDirectors = moviesArr.map((movie) => movie.director);

  //   console.log("arrOfAllDirectors", arrOfAllDirectors);

  return arrOfAllDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let dramaMovieOfSpielberg = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.indexOf("Drama") !== -1
    );
  });

  return dramaMovieOfSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }
  let sumScore = moviesArray.reduce((acc, movie) => {
    if (!movie.score) {
      movie.score = 0;
    }
    return acc + movie.score;
  }, 0);
  let avgScore = sumScore / moviesArray.length;
  return parseFloat(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter((movie) => {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  let sumScore = dramaMovies.reduce((acc, movie) => {
    return acc + movie.score;
  }, 0);

  let avgScore = sumScore / dramaMovies.length;
  return parseFloat(avgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let moviesArrayCopy = moviesArray.slice();

  let moviesOrderedByYear = moviesArrayCopy.sort((a, b) => {
    if (a.year < b.year) {
      return -1; // putting a.year before b.year
    } else if (a.year > b.year) {
      return 1; // putting b.year before a.year
    } else {
      if (a.title < b.title) {
        return -1; // putting a.title before b.title
      } else if (a.title > b.title) {
        return 1; // putting b.title before a.title
      }
    }
  });

  return moviesOrderedByYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let moviesArrayCopy = moviesArray.slice();

  let moviesOrdredAlphabetically = moviesArrayCopy.sort((a, b) => {
    if (a.title < b.title) {
      return -1; // putting a.title before b.title
    } else if (a.title > b.title) {
      return 1; // putting b.title before a.title
    } else {
      return 0; // keep a.title and b.title in the same place
    }
  });

  let arrOfOrderedTitles = moviesOrdredAlphabetically.map((movie) => {
    return movie.title;
  });

  return arrOfOrderedTitles.slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  // Create a copy of the original array
  let moviesArrayCopy = moviesArray.slice();

  // Loop through the new array and convert duration to minutes
  moviesArrayCopy.forEach((movie) => {
    // Split the duration string into sections (hours and minutes)
    const duration = movie.duration.split(" ");
    // Initialize a totalMinutes variable to accumulate the total duration in min
    let totalMinutes = 0;
    // Iterate through the sections
    duration.forEach((section) => {
      if (section.includes("h")) {
        // Check for hours
        // Convert to integer and add it to totalMinutes
        totalMinutes += parseInt(section) * 60;
      } else if (section.includes("min")) {
        // Check for minutes
        // Convert to integer and add it to totalMinutes
        totalMinutes += parseInt(section);
      }
    });
    // Update the duration property of the movie object in the new array with the total duration in minutes
    movie.duration = totalMinutes;
  });
  // Return the new array with duration values converted to minutes
  return moviesArrayCopy;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  // Check if there is an array of movies
  if (moviesArray.length === 0) {
    return null;
  }

  // Create an object to store the total scores and counts for each year
  const yearScores = {};

  //   Iterate through the movies and update the yearScores object with the total score and count for each year
  moviesArray.forEach((movie) => {
    const year = movie.year;
    const score = movie.score;

    if (!yearScores[year]) {
      yearScores[year] = { total: 0, count: 0 };
    }

    yearScores[year].total += score;
    yearScores[year].count += 1;
  });

  //
  // Find the year with the best average score
  //
  let bestYear = null;
  let bestAverageScore = -1;

  // Iterate through the yearScores object
  for (const year in yearScores) {
    // Calculate the average Score for each year
    const averageScore = yearScores[year].total / yearScores[year].count;

    // Compare the averageScore of the year with the actual bestAverageScore
    if (averageScore > bestAverageScore) {
      // Update the best year and the best average score
      bestYear = year;
      bestAverageScore = averageScore;
    }
  }

  return `The best year was ${bestYear} with an average score of ${bestAverageScore}`;
}
