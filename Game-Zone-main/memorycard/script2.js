let score = 0;
const scoreElement = document.getElementById('score');
const emojis = ['🍌', '🍌', '🍇', '🍇', '🍊', '🍊', '🍓', '🍓', '🍒', '🍒', '🍑', '🍑', '🥝', '🥝', '🍍', '🍍'];
var shuffledEmojis = emojis.sort(() => (Math.random() > 0.5) ? 2 : -1);
for (let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffledEmojis[i];
    document.querySelector('.game').appendChild(box);
    box.onclick = function () {
        this.classList.add('boxOpen');
    setTimeout(function () {
        if (document.querySelectorAll('.boxOpen').length > 1) {
            if (document.querySelectorAll('.boxOpen')[0].innerHTML == 
            document.querySelectorAll('.boxOpen')[1].innerHTML) {
                document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch');
                document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch');
                score += 10;
                scoreElement.textContent = score;
                document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
                if (document.querySelectorAll('.boxMatch').length == emojis.length) {
                   alert('You Win! Final Score '+ score);
                }
                
            }else {
    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen');
                document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen');
            }
}}, 500);
}
 document.querySelector('.game').appendChild(box); 
    
   

}

