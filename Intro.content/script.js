var currentIndex = 0;
var isFinished = false;
window.onload = function () {
  var lyrics = document.querySelector(".lyrics-large");
  var popup = document.querySelector(".lyrics-box");

  var fontSize = 30;
  while (lyrics.scrollHeight > lyrics.offsetHeight) {
    fontSize -= 1;
    lyrics.style.fontSize = fontSize + "px";
  }

  var maxWidth = Math.max(lyrics.offsetWidth, lyrics.scrollWidth);
  popup.style.width = maxWidth + "px";
}

function closeAlert() {
  var lyrics = document.querySelector(".lyrics-large");
  var songLines = [
    "Bé lại chuẩn bị bước vào mùa thi áp lực rồi",
    "Bo không biết làm sao để giúp bé bớt căng thẳng hơn </br></br><img src='https://i.pinimg.com/564x/6a/8e/38/6a8e382ac47e9a4abac382650b344427.jpg' alt='' width='200' height='200' style='border-radius: 20px;'/>",
    "Hmm",
    "Bo gửi tới em bé vài lời chúc động viên </br></br><img src='https://i.pinimg.com/736x/19/de/03/19de03fa835209e2ecd01e3c63859a5c.jpg' alt='' width='200' height='200' style='border-radius: 20px;'/> ",
    "Click tiếp đi",
    "Sắp thấy rùi click tiếp đi",
    "Click thêm lần nữa chắc không làm em bé giận đâu",
    "Click lần cuối"

  ];

  // Update lyrics content if currentIndex is within bounds
  if (currentIndex < songLines.length) {
    lyrics.innerHTML = songLines[currentIndex];
    currentIndex++;
  }

  // Check if reached end of songLines
  if (currentIndex >= songLines.length) {
    if (!isFinished) {
      isFinished = true; // Set flag to true after reading the last line
    } else {
      // Redirect user to index.html and set next destination to 'main'
      localStorage.setItem('destination', 'main');
      window.location.href = "../index.html"; // Replace with your desired URL
    }
  }
}


