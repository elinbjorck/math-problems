"use strict";

const pointsToWin = 10
const winProbability = 0.6
const loseProbability = 1 - winProbability
let probabilityMod = 0
let victoryProbability = 0

//using a for loop to calculate the formula described in the read me.
//Calculate how much wictoryProbability should deviate from winProbability

for (let i = 1; i < pointsToWin; i++) {
    let a = (winProbability ** pointsToWin) * (loseProbability ** i)
    let b = (loseProbability ** pointsToWin) * (winProbability ** i)
    let c = factorial(pointsToWin - 2 + i) / (factorial(i-1) * factorial(pointsToWin - 1))
    probabilityMod += (a - b) * c 
}
//Add the modifier to winProbability to get victoryProbability
victoryProbability = winProbability + probabilityMod

//Print ressult
console.log(`With a ${winProbability * 100}% chance to win each round, and first to ${pointsToWin} points win the match, the probability to be victorious is ${Math.round(victoryProbability * 100 * 1000) / 1000}%.`)

//function to calculate factorials. Used in calculation of modifier. 
function factorial(x) {
    let result = 1
    for (let i = 1; i <= x; i++) {
        result = i * result
    }
    return result
}