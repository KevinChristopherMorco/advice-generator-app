const dice = document.getElementById('advice__dice-container')
    const adviceNumber = document.querySelector('.main-advice-container .advice__number>p')
    const adviceContent = document.querySelector('.main-advice-container .advice__content>p ')

    dice.addEventListener('click', (e) => {
      fetch('https://api.adviceslip.com/advice').then(response => response.json()).then(data => {
        adviceNumber.textContent = `ADVICE #${data.slip.id}`
        adviceContent.textContent = `"${data.slip.advice}"`
      })
    })
