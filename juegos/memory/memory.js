const cardImages = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg'
  ];
  
  let gameStarted = false;
  let selectedCards = [];
  
  const gameDisplay = document.getElementById('game');
  const startButton = document.getElementById('start-button');
  
  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };
  const resetGame = () => {
    gameStarted = false;
    selectedCards = [];
    shuffleArray(cardImages);
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.classList.remove('selected');
      card.firstElementChild.src = cardImages[index];
    });
  };
  
  const handleCardClick = event => {
    const card = event.currentTarget;
    if (card.classList.contains('selected')) {
      return;
    }
    card.classList.add('selected');
    card.firstElementChild.style.display = 'block';
    selectedCards.push(card);
    if (selectedCards.length === 2) {
      gameStarted = true;
      const [card1, card2] = selectedCards;
      if (card1.firstElementChild.dataset.id === card2.firstElementChild.dataset.id) {
        selectedCards = [];
      } else {
        setTimeout(() => {
          card1.classList.remove('selected');
          card2.classList.remove('selected');
          card1.firstElementChild.style.display = 'none';
          card2.firstElementChild.style.display = 'none';
          selectedCards = [];
        }, 1000);
      }
    }
  };
  
  const startGame = () => {
    resetGame();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('click', handleCardClick);
    });
  };
  
  startButton.addEventListener('click', startGame);
  