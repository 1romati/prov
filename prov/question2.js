// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

const letterA = ["a"];

function filterWordsWithLetterA(words) {
  //Din kod här
  let wordWithA = "";

  for (let index = 0; index < words.length; index++) {
    const letter = words[index];

    if (!letterA.includes(letter)) {
      wordWithA = letter;
    }
  }
  return wordWithA;
}

console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]
//loggar endast "great!"

