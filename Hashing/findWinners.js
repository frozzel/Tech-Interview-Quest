// You are given an integer array matches where matches[i] = [winneri, loseri] indicates that the player winneri defeated player loseri in a match.

// Return a list answer of size 2 where:

// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.

// Example 1:

// Input: matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]]
// Output: [[1,2,10],[4,5,7,8]]
// Explanation:
// Players 1, 2, and 10 have not lost any matches.
// Players 4, 5, 7, and 8 each have lost one match.
// Players 3, 6, and 9 each have lost two matches.
// Thus, answer[0] = [1,2,10] and answer[1] = [4,5,7,8].
// Example 2:

// Input: matches = [[2,3],[1,3],[5,4],[6,4]]
// Output: [[1,2,5,6],[]]
// Explanation:
// Players 1, 2, 5, and 6 have not lost any matches.
// Players 3 and 4 each have lost two matches.
// Thus, answer[0] = [1,2,5,6] and answer[1] = [].

/**
 * @param {number[][]} matches
 * @return {number[][]}
 */

var matches = [[1,3],[2,3],[3,6],[5,6],[5,7],[4,5],[4,8],[4,9],[10,4],[10,9]];
var matches1 = [[2,3],[1,3],[5,4],[6,4]];

var findWinners = function(matches) {
    const countDefeats = {};// created object to store the count of defeats
  let winners = new Set([]);// created set to store the winners
  let losers = new Set([]);// created set to store the losers

  for (const [winner, loser] of matches) {// loop through the matches
    console.log(`Winner:`,winner, `Loser:`,loser)
    if (!(winner in countDefeats)) {// if the winner is not in the countDefeats object
      winners.add(winner);// add the winner to the winners set
      console.log(`winner:`,winners, `is added to winners`)
    }

    countDefeats[loser] = (countDefeats[loser] || 0) + 1;
    console.log(loser, `has a defeat count of:`,countDefeats[loser], `is added to countDefeats`, countDefeats)

    if (countDefeats[loser] === 1) {// if the loser has a defeat count of 1
      losers.add(loser);//add the loser to the losers set
      console.log(`loser:`,losers, `is added to losers`)
      if (winners.has(loser)) winners.delete(loser);// if the loser is in the winners set, remove the loser from the winners set
      console.log(`if winner set:`,winners, `has loser:`,loser, `then delete loser from winners set`)
    } else {
      losers.delete(loser);
      console.log(`Delete loser in count is more than 1:`,losers, countDefeats);
    }
  }

  winners = Array.from(winners).sort((a, b) => a - b);// convert the winners set to an array and sort the array
  losers = Array.from(losers).sort((a, b) => a - b);// convert the losers set to an array and sort the array

  return [winners, losers];
};

// console.log(findWinners(matches));
console.log(findWinners(matches1));