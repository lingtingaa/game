const choices = ['✌️', '✊', '✋'];
const resultBox = document.getElementById('result-box');
const computerHand = document.getElementById('computer-hand');

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    const playerChoice = this.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // 显示对手选择
    computerHand.textContent = computerChoice;
    computerHand.style.animation = 'none';
    computerHand.offsetHeight; // 强制重绘
    computerHand.style.animation = 'flip 1s';

    // 判断结果
    let result;
    if (playerChoice === computerChoice) {
      result = "👊 加油吕阳阳！";
    } else if (
      (playerChoice === '✊' && computerChoice === '✌️') ||
      (playerChoice === '✌️' && computerChoice === '✋') ||
      (playerChoice === '✋' && computerChoice === '✊')
    ) {
      result = "🎉 吕阳阳天天开心！";
    } else {
      result = "💡 笨蛋吕阳阳～";
    }

    resultBox.innerHTML = result;
  });
});