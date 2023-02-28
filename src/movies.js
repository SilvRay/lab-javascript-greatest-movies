// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArr) {
    let result = moviesArr.map(function(el) {
            return el.director
    })
    return result
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    let result = moviesArray.filter( function(el){
        return el.director=== "Steven Spielberg"&& el.genre.indexOf('Drama')!==-1
    })
    return result.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.length === 0) {
        return 0
    }
    let sumScore = moviesArray.reduce(function(acc, el) {
        if(!el.score) {
            el.score = 0
        }
        return acc + el.score
    }, 0)
    let avgScore = sumScore / moviesArray.length
    return  parseFloat(avgScore.toFixed(2))

    
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    let drama = moviesArray.filter((el) => {
        return el.genre.includes('Drama')
    })
    if (drama.length === 0) {
        return 0
    }
    let sumScore = drama.reduce((acc, el) => {
        return acc + el.score
    }, 0)
    let avgScore = sumScore / drama.length
    return parseFloat(avgScore.toFixed(2))
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
