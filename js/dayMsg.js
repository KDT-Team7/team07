//페이지 가장 하단에 문구 출력
// 랜덤한 문구 목록
const messages = [
  "좋은 아침입니다!",
  "Guten Morgen!",
  "¡Buenos días!",
  "おはようございます！",
  "Bonjour !",
];

// 랜덤한 문구 선택 및 출력
function displayRandomMessage() {
  const messageContainer = document.querySelector(".day_msg");
  const randomIndex = Math.floor(Math.random() * messages.length);
  const randomMessage = messages[randomIndex];
  messageContainer.textContent = randomMessage;
}

// 페이지 로드 시 랜덤한 문구 출력
window.addEventListener("load", displayRandomMessage);
