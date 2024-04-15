let timeSecond = 20;
    const timeH = document.querySelector("h1");
    let countDownInterval;

    function startCountdown() {

      var audio = new Audio('sounds/fastmoney2.mp3');
      audio.play();

      clearInterval(countDownInterval); // Clear previous interval if any
      displayTime(timeSecond);
      countDownInterval = setInterval(() => {
        timeSecond--;
        displayTime(timeSecond);
        if (timeSecond <= 0) {
          endCount();
          clearInterval(countDownInterval);
        }
      }, 1000);
    }

    function displayTime(second) {
      const min = Math.floor(second / 60);
      const sec = Math.floor(second % 60);
      timeH.innerHTML = `
        ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
      `;
    }

    function endCount() {
      timeH.innerHTML = "Time's Up!";
    }