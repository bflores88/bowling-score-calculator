const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const bowlingScore = require('../app.js');

describe ('Bowling Score Calculator', function(){

  it('should calculate correct bowling score for spares and strikes', function (){
    let testScore = [
      { roll_1: 5, roll_2: 5 },
      { roll_1: 0, roll_2: 7 },
      { roll_1: 5, roll_2: 3 },
      { roll_1: 5, roll_2: 5 },
      { roll_1: 1, roll_2: 7 },
      { roll_1: 2, roll_2: 7 },
      { roll_1: 5, roll_2: 3 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 5, roll_2: 2 },
      { roll_1: 10, roll_2: 0, roll_3: 7 },
    ];
    bowlingScore(testScore).should.equal(102);
  })

  it('should calculate correct bowling score for a perfect game', function (){
    let testScore = [
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 0 },
      { roll_1: 10, roll_2: 10, roll_3: 10 },
    ];
    bowlingScore(testScore).should.equal(300);
  })


})