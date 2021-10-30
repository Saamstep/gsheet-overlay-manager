const STARTING_INDEX = 25;

function tally() {
   var spreadsheet = SpreadsheetApp.getActive();
  let indexCell = spreadsheet.getRange('L2:L2');
  let index = indexCell.getValue();
 
  let starting = "B" + index + ":K" + index;
  let previous = "B" + parseInt(index-3) + ":K" + parseInt(index-3);
  
  let newRange = spreadsheet.getRange(starting);
  let oldRange = spreadsheet.getRange(previous);

  if(index != 25) {
    if(index%2 == 0) {
      oldRange.setBackground('#d9d9d9');
    } else {
      oldRange.setBackground(null);
    }
  }

  newRange.setBackground('#72fc62');
  indexCell.setValue(index+3);
}

function resetTally() {
  var spreadsheet = SpreadsheetApp.getActive();
  let indexCell = spreadsheet.getRange('L2:L2');
  let index = indexCell.getValue();

  let previous = "B" + parseInt(index-3) + ":K" + parseInt(index-3);

  let oldRange = spreadsheet.getRange(previous);

    if((index-3) != 25) {
    if((index-3)%2 == 0) {
      oldRange.setBackground(null);
    } else {
      oldRange.setBackground('#d9d9d9');
    }
  }
  indexCell.setValue(25)
  tally()
}
