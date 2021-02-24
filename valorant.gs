//Valorant

var sheet = SpreadsheetApp.getActiveSpreadsheet();

var s = sheet.getSheets()[0];

const location = {
  team1Score: "C11",
  team2Score: "E11",
  team1Name: "B11",
  team2Name: "F11"
}

function addTeam1() {
  let cell = s.getRange(location.team1Score);
  let score;
  if(cell.isBlank()) {
    score = 0;
  } else {
    score = cell.getValue();
  }
  cell.setValue(score+1);
}

function addTeam2() {
  let cell = s.getRange(location.team2Score);
  let score;
  if(cell.isBlank()) {
    score = 0;
  } else {
    score = cell.getValue();
  }
  cell.setValue(score+1);
}

function resetScores() {
  let team1 = s.getRange(location.team1Score);
  let team2 = s.getRange(location.team2Score);

  let ui = SpreadsheetApp.getUi();
  var response = ui.alert("Reset Scores", "Are you sure you want to reset all scores? This is IRREVERSIBLE.", ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES) {
    team1.setValue(0);
    team2.setValue(0);
  } else {
    return;
  }
}

function swapSides() {
  var response = ui.alert("Switch Sides", "Are you sure you want to switch sides? There is no going back...", ui.ButtonSet.YES_NO);
  if(response == ui.Button.YES) {
  let team2 = s.getRange(location.team2Name);
  let team1 = s.getRange(location.team1Name);
  let t2Name = team2.getValue();
  let t1Name = team1.getValue();

  let score2 = s.getRange(location.team2Score);
  let score1 = s.getRange(location.team1Score);
  let t2Score = parseInt(score2.getValue());
  let t1Score = parseInt(score1.getValue());

  s.getRange(location.team2Score).setValue(t1Score);
  s.getRange(location.team1Score).setValue(t2Score);
  
  s.getRange(location.team1Name).setValue(t2Name);
  s.getRange(location.team2Name).setValue(t1Name);
  } else {
    return;
  } 
}
