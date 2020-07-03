var thepoliticians = function(newPolitician, partyColor) 
{
  // politician object
  var politician = {};
  
  politician.politicianName = newPolitician;
  politician.electionResults = null;
  politician.partyColor = partyColor;
  
  
  //method to tally up the votes for each politician. 
  politician.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
  
    for (var i = 0; i < this.electionResults.length; i++)
      {
        this.totalVotes = this.totalVotes + this.electionResults[i]; 
      }
  };
  
  return politician;

};
    
  // the politicians names and their party colors.
var politician1 = thepoliticians("Mary Changemaker", [132, 17, 11]);
var politician2 = thepoliticians("John Egalitarian", [245, 141, 136]);

//array of votes from each state, for each candidate. 
politician1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

politician2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

// Update vote results for the array.
politician1.electionResults[9] = 1;
politician2.electionResults[9] = 28;
 
politician1.electionResults[4] = 17;
politician2.electionResults[4] = 38;
 
politician1.electionResults[43] = 11;
politician2.electionResults[43] = 27;
 
//console.log(politician1.electionResults);
//console.log(politician2.electionResults);

 
//Assigns the winner of each state
var setStateResults = function(state) {
    theStates[state].winner = null;
  
  if (politician1.electionResults[state] > politician2.electionResults[state]) {
        
        theStates[state].winner = politician1; //sets the winner to the candidate object, not the candidate's name here.
  
  } else if (politician1.electionResults[state] < politician2.electionResults[state]) {
 
        theStates[state].winner = politician2;
    }
  
  // if the winner is not null, then set the state color to be a candidate's color. If it's a draw, then turn the state in to a blue color.
  var stateWinner = theStates[state].winner;
    
    if (stateWinner !== null) {
      theStates[state].rgbColor = stateWinner.partyColor;
    }
      else {
        theStates[state].rgbColor = [11, 32, 57];
      }


//Populate the table on the top of the page to show total amounts of votes and announce the winner.
var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];
 
row.children[0].innerText = politician1.politicianName;
row.children[1].innerText = politician1.totalVotes;
row.children[2].innerText = politician2.politicianName;
row.children[3].innerText = politician2.totalVotes;
row.children[5].innerText = winner;


//the variables for populating the table in the bottom of the page with results for each state.
var stateInfoTable = document.getElementById('stateResults');

var tableHeader = stateInfoTable.children[0];
var tableBody = stateInfoTable.children[1];
var stateName = tableHeader.children[0].children[0];
var abbreviation = tableHeader.children[0].children[1];
var firstPolitician = tableBody.children[0].children[0];
var secondPolitician = tableBody.children[1].children[0];
var firstPoliticianResults = tableBody.children[0].children[1];
var secondPoliticianResults = tableBody.children[1].children[1];
var winnersName = tableBody.children[2].children[1];
  
  
 // populating the table in the bottom of the page to show results for each state.
  stateName.innerText = theStates[state].nameFull;
  abbreviation.innerText = "(" +theStates[state].nameAbbrev + ")";
 
  firstPolitician.innerText = politician1.politicianName;
  secondPolitician.innerText = politician2.politicianName;
 
  firstPoliticianResults.innerText = politician1.electionResults[state];
  secondPoliticianResults.innerText = politician2.electionResults[state];
 
    if (theStates[state].winner === null) {
        winnersName.innerText = "DRAW";
    } else {
        winnersName.innerText = theStates[state].winner.politicianName;
      }
  
}; //setStateResults function ends here


 //calling the tally up method for each politician. 
     politician1.tallyUpTotalVotes();
     politician2.tallyUpTotalVotes();


//console.log("Mary's color is: " + politician1.partyColor);
//console.log("John's color is: " + politician2.partyColor);

//console log total votes for each politician
console.log("Mary Changemaker's total votes are: " + politician1.totalVotes);
console.log("John Egalitarian's total votes are: " + politician2.totalVotes); 


// See which politician has the most votes and declare the winner.
   var winner = "?";  
      if (politician1.totalVotes > politician2.totalVotes) {
          winner = politician1.politicianName;
      } else if (politician1.totalVotes < politician2.totalVotes) {
          winner = politician2.politicianName;
      } else {
          winner = "DRAW.";
     }
    console.log("AND THE WINNER IS..." + winner + "!!!");