window.onload = () => {

    let board = document.getElementById('board');
    let submitButton = document.getElementById('submitGuess'); // Corrected typo
    let input = document.getElementById('guess'); // Corrected typo

    let currentGuess = 0;

    let word = "media";
    let wordArray = word.split('');

    for (let i = 0; i < 6; i++) {
        let row = document.createElement('div');
        row.classList = 'row';
        board.appendChild(row);

        for (let j = 0; j < 5; j++) {
            let cell = document.createElement('div');
            cell.classList = 'cell';
            cell.setAttribute('data-row', i);
            cell.setAttribute('data-col', j); // Corrected typo
            row.appendChild(cell);
        }
    }

    submitButton.addEventListener('click', () => {
        let guess = input.value;

        for (let i = 0; i < 5; i++) {
            let currentLetter = guess[i];
            let currentCell = document.querySelector(`[data-row="${currentGuess}"][data-col="${i}"]`); // Corrected quotes
            let textNode = document.createTextNode(currentLetter);
            currentCell.append(textNode); // Corrected typo
            if (currentLetter === wordArray[i]) {
                currentCell.classList = 'cell green';
            }
            else{
                if(wordArray.indexOf(currentLetter) > -1){
                    currentCell.classList = 'cell yellow';
                }
                else{
                    currentCell.classList = 'cell red';
                }
            }
           
        }
        currentGuess++;
    })
}
