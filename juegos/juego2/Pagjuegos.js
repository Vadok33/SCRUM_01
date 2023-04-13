const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');
const resetButton = document.querySelector('.reset');
let currentPlayer = 'x';
let gameOver = false;

function checkForWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      cells[a].classList.contains(currentPlayer) &&
      cells[b].classList.contains(currentPlayer) &&
      cells[c].classList.contains(currentPlayer)
    ) {
      return true;
    }
  }

  return false;
}

function checkForDraw() {
  // Verifica si todas las celdas están marcadas
  // y si no hay un ganador
  // lo que significa que el juego ha terminado en un empate
  if (!gameOver) {
    for (let i = 0; i < cells.length; i++) {
      if (!cells[i].classList.contains('x') && !cells[i].classList.contains('o')) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

function handleClick() {
  if (!gameOver && !this.classList.contains('x') && !this.classList.contains('o')) {
    this.classList.add(currentPlayer);
    if (checkForWin()) {
      message.innerHTML = `¡El jugador ${currentPlayer.toUpperCase()} ha ganado!`;
      gameOver = true;
    } else if (checkForDraw()) {
      message.innerHTML = '¡Empate!';
      gameOver = true;
    } else {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        message.innerHTML = `Turno del jugador ${currentPlayer.toUpperCase()}`;
      }
      }
      }
      
      function resetGame() {
        for (let i = 0; i < cells.length; i++) {
            cells[i].classList.remove('x', 'o');
            }
            currentPlayer = 'x';
            gameOver = false;
            message.innerHTML = 'Turno del jugador X';
            }
            
            // Agrega el evento click a cada celda
            for (let i = 0; i < cells.length; i++) {
            cells[i].addEventListener('click', handleClick);
            }
            resetButton.addEventListener('click', resetGame);



