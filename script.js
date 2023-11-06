function censorWords(inputText, wordsToCensor) {

    const words = inputText.split(/\s+/);
    const wordsScanned = document.getElementById('wordsScanned');
    if(inputText === ""){
      emptyInput.style.display = "block"
      wordsScanned.innerHTML = "No words"
    }else{
    wordsScanned.textContent = words.length
    } 

   
    const scrambleOption = document.getElementById('scrambleOption')
    console.log()
    const censoredText = words.map(word => {
        const lowerCaseWord = word.toLowerCase();
        if (wordsToCensor.includes(lowerCaseWord)) {
          return scrambleOption.value.repeat(word.length);
        }
        return word;
      })
      return censoredText.join(' ');

}


const censorButton = document.getElementById('censorButton');
const inputText = document.getElementById('inputText');
const censorWordsInput = document.getElementById('censorWords');
const censoredOutput = document.getElementById('censoredOutput');
const wordsScanned = document.getElementById('wordsScanned');
const emptyInput = document.getElementById('empty');
const clearButton = document.getElementById('clearButton');
const noWordsScambled = document.getElementById('noWordsScambled')



censorButton.addEventListener('click', function() {
    const wordsToCensor = censorWordsInput.value
      .toLowerCase()
      .split(' ')
      .map(word => word.trim());
    const inputTextValue = inputText.value;

    const startTime = Date.now();
    const censoredText = censorWords(inputTextValue, wordsToCensor);
    censoredOutput.textContent = censoredText;
    noWordsScambled.textContent = wordsToCensor.length
    const endTime = Date.now()

  const timeTaken = document.getElementById('timeTaken')

  timeTaken.textContent = endTime - startTime;

  });



  clearButton.addEventListener('click', function(){
    location.reload();
})
