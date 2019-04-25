console.log(chance.bool());

// name functions
function generateFemale() {
  var firstNameResponse = chance.first({
    nationality: "en",
    gender: "female"
  })
  var lastNameResponse = chance.last({
    nationality: "en"
  })
  console.log(firstNameResponse + lastNameResponse);
};

function generateMale() {
  var firstNameResponse = chance.first({
    nationality: "en",
    gender: "male"
  })
  var lastNameResponse = chance.last({
    nationality: "en"
  })
  console.log(firstNameResponse + lastNameResponse);
};

function generateRandom() {
  var firstNameResponse = chance.first({
    nationality: "en"
  })
  var lastNameResponse = chance.last({
    nationality: "en"
  })
  console.log(firstNameResponse + lastNameResponse);
};

function generateCharacter() {
  var eyeColor = chance.pickone(['brown', 'black', 'blue', 'green', 'hazel']);
  var hairColor = chance.pickone(['brown', 'black', 'blue', 'green', 'blonde', 'orange', 'pink', 'bald', 'purple', 'yellow', 'rainbow', 'mermaid', 'auburn', 'red', 'grey', 'white']);
  var hairLength = chance.pickone(['extra long', 'long', 'medium', 'short', 'cropped']);
  var skinTone;
  var birthday = chance.birthday({ string: true });
  var height = chance.integer({ min: 4, max: 6 });
  var location = chance.state({ full: true });
  console.log(eyeColor + hairColor);
}

generateFemale();
generateMale();
generateCharacter();
generateRandom();
