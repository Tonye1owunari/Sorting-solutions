var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

function printAndGetHighScore(scores) {
var highScore = 0;
var i = 0;
while (i < scores.length) {
var solutionNumber = `Bubble solution #${i} score: ${scores[i]}`;
console.log(solutionNumber);
if (scores[i] > highScore) {
   highScore = scores[i];
}
i++;
}
return highScore;
}

function getBestResults(scores,highScore) {
var bestSolution = [];
for (i=0; i < scores.length; i++) {
if (scores[i] == highScore) {
   bestSolution.push(i);
}
}
return bestSolution;
}

var highScore = printAndGetHighScore(scores);

console.log(`Bubbles tests: ${scores.length}`);
console.log(`Highest bubble score: ${highScore}`);

var bestSolution = getBestResults(scores,highScore);
console.log(`Solutions with the highest score: ${bestSolution}`);


/************
Below is the cost for each of the corresponding solutions in the cost array.
We want to know the most cost effective solution.
****************/

var costs = [.25, .27, .25, .25, .25, .25,
   .33, .31, .25, .29, .27, .22,
   .31, .25, .25, .33, .21, .25,
   .25, .25, .28, .25, .24, .22,
   .20, .25, .30, .25, .24, .25,
   .25, .25, .27, .25, .26, .29];

function getMostCostEffectiveSolution(scores,costs,highScore) {
let lowCost = 100;
let index;
for(i=0; i < scores.length; i++) {
if(scores[i] == highScore) {
   if(costs[i] < lowCost) {
       index = i;
       lowCost = costs[i];
   }
}
}
return index;
}

var mostCostEffectiveSolution = getMostCostEffectiveSolution(scores,costs,highScore);
console.log(`Bubble solution #${mostCostEffectiveSolution} is the most cost effective.`);
