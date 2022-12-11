const button = document.querySelector('#btn');
      const screenWidth = window.screen.width
      const screenHeight = window.screen.height
      button.addEventListener('click', () => {
        alert(`Your screen width is ${screenWidth}, your screen height is ${screenHeight}`)
    });