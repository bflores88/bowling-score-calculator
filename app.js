function bowlingScore(array) {
  let score = 0;
  let strike = false;
  let doubleStrike = false;
  let spare = false;

  function sumFrame(accumulator, currentValue) {
    return accumulator + currentValue;
  }

  for (let i = 0; i < array.length; i++) {
    //score for frames 1-9
    if (i < array.length - 1) {
      let frameScoreArray = Object.values(array[i]);

      //bonus for spare on previous frame & reset spare
      if (spare === true) {
        score += frameScoreArray[0];
        spare = false;
      }

      if (frameScoreArray[0] !== 10) {
        //scores for non-strike
        let frameScore = frameScoreArray.reduce(sumFrame);
        score += frameScore;

        //bonus for strike on previous frame & reset strike
        if (strike === true) {
          score += frameScore;
          strike = false;
          doubleStrike = false;
        }

        //set spare true
        if (frameScore === 10) {
          spare = true;
        }
      } else {
        //score for strike
        //bonus for strike on previous frame & don't reset strike
        if (strike === true) {
          let frameScore = frameScoreArray.reduce(sumFrame);
          score += frameScore;
          doubleStrike = true;
        }

        if (doubleStrike === true) {
          let frameScore = frameScoreArray.reduce(sumFrame);
          score += frameScore;
        }

        score += 10;
        strike = true;
      }
    } else {
      //score for frame 10
      let frameScoreArray = Object.values(array[i]);

      //bonus for strike on previous frame & reset strike
      if (strike === true) {
        score += frameScoreArray[0] + frameScoreArray[1];
      }

      if (frameScoreArray[0] === 10) {
        let frameScore = frameScoreArray.reduce(sumFrame);
        score += frameScore;
      } else if (frameScoreArray[0] + frameScoreArray[1] === 10) {
        let frameScore = frameScoreArray.reduce(sumFrame);
        score += frameScore;
      } else {
        score += frameScoreArray[0] + frameScoreArray[1];
      }
    }
  }

  return score;
}

module.exports = bowlingScore;
