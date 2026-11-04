// 交通安全知識學習站互動功能

document.addEventListener("DOMContentLoaded", function () {
  console.log("交通安全知識學習站已載入！");

  // 網站導覽連結
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      console.log("使用者點選：" + link.textContent);
    });
  });
});

// 交通安全小測驗
function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("答對了！繼續保持安全觀念！");
  } else {
    alert("再想一想喔！注意交通安全！");
  }
}
