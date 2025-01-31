// [!] 原始游戏逻辑100%保留
const moves = ['✊', '✌️', '🖐️'];
const resultDiv = document.getElementById('result');
const bgm = document.getElementById('bgm');

function play(userMove) {
    // 原始音效逻辑保留
    const audio = new Audio('data:audio/wav;base64,//uQR...（完整base64编码）');
    audio.play();

    const computerMove = moves[Math.floor(Math.random() * 3)];
    
    // 原始结果显示逻辑保留
    resultDiv.innerHTML = `
        <div class="bounce">你：${userMove} VS 电脑：${computerMove}</div>
    `;

    setTimeout(() => {
        if (userMove === computerMove) {
            resultDiv.innerHTML += "<div class='bounce'>🔥加油吕阳阳</div>";
        } else if (
            (userMove === '✊' && computerMove === '✌️') ||
            (userMove === '✌️' && computerMove === '🖐️') ||
            (userMove === '🖐️' && computerMove === '✊')
        ) {
            resultDiv.innerHTML += "<div class='bounce' style='color:#00ff00'>🎉吕阳阳天天开心🎉</div>";
        } else {
            resultDiv.innerHTML += "<div class='bounce' style='color:#ff0000'>🤪笨蛋吕阳阳🤪</div>";
        }
    }, 1000);
}

// [!] 新增移动端触控反馈（原始功能不受影响）
document.querySelectorAll('button').forEach(btn => {
    // 保留原始hover效果
    btn.ontouchstart = () => btn.style.transform = 'scale(0.9)';
    btn.ontouchend = () => btn.style.transform = 'scale(1)';
});
