const choices = ['✌️', '✊', '✋'];
const resultBox = document.getElementById('result-box');
const computerHand = document.getElementById('computer-hand');

const hands = ['✌️', '✊', '✋'];
const resultBox = document.getElementById('result-box');
const computerHand = document.getElementById('computer-hand');
const bgm = document.getElementById('bgm');

// 自动播放音乐
document.body.addEventListener('touchstart', function() {
    bgm.play();
}, { once: true });

// 游戏逻辑
document.querySelectorAll('button').forEach(btn => {
    btn.addEventListener('click', function() {
        const player = this.dataset.hand;
        const computer = hands[Math.floor(Math.random() * 3)];
        
        computerHand.textContent = computer;
        computerHand.style.animation = 'flip 1s';
        
        let result;
        if (player === computer) {
            result = "👊 加油吕阳阳！";
            resultBox.style.background = '#f1c40f';
        } else if (
            (player === '✊' && computer === '✌️') ||
            (player === '✌️' && computer === '✋') ||
            (player === '✋' && computer === '✊')
        ) {
            result = "🎉 吕阳阳天天开心！";
            resultBox.style.background = '#2ecc71';
        } else {
            result = "💡 笨蛋吕阳阳～";
            resultBox.style.background = '#e74c3c';
        }

        resultBox.innerHTML = result;
        resultBox.style.opacity = 1;
        setTimeout(() => resultBox.style.opacity = 0, 2000);
    });
});