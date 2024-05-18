// Cores: 
// background: #121619;
// footer: #00ff84;
// bottom: #00BF63;
// header nav ul li a: #00BF63;
// hover:  #057e43;


document.addEventListener('DOMContentLoaded', function() {
  const items = document.querySelectorAll('#quiz li');
  const feedbackElement = document.getElementById('feedback');

  items.forEach(item => {
    item.addEventListener('click', function() {
      const isCorrect = this.getAttribute('data-correct') === 'true';

      if (isCorrect) {
        // this.classList.add('correct-answer');
        
        feedbackElement.textContent = 'Bingo! Acertou em cheio! 😁';
        feedbackElement.style.textAlign = 'center';
        feedbackElement.style.color = '#121619';
        feedbackElement.style.fontWeight = 'bold';
      } else {
        // this.classList.add('wrong-answer');
        feedbackElement.textContent = '❌ Ops! Até Thomas Edison errou antes de acertar. Tente de novo.';
        feedbackElement.style.color = 'white';
        feedbackElement.style.fontWeight = 'bold';

        // setTimeout(() => {
        //   this.classList.remove('wrong-answer');
        // }, 2000);
      }

      feedbackElement.style.display = 'flex';
      feedbackElement.style.opacity = 1;
     

      items.forEach(item => {
        item.style.pointerEvents = 'none';
      });


      feedbackElement.textContent += '';
      feedbackElement.style.cursor = 'pointer';
      feedbackElement.onclick = () => window.location.reload();
    });
  });
});