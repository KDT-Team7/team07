function getBrightness(rgb) {
  const [r, g, b] = rgb;
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

// 주어진 RGB 값에 대한 적절한 텍스트 색상 계산
function getContrastColor(rgb) {
  const brightness = getBrightness(rgb);
  if (brightness > 0.5) {
    // 밝은 배경
    return [0, 0, 0]; // 검은색 텍스트 (RGB: 0, 0, 0)
  } else {
    // 어두운 배경
    return [255, 255, 255]; // 흰색 텍스트 (RGB: 255, 255, 255)
  }
}

// 배경색의 밝기에 따라 텍스트 색상 변경
function updateTextColor() {
  const dateTextElement = document.getElementById("date-text");
  const morningTextElement = document.querySelector(".nav_bar");
  const newsTextElement = document.querySelector(".banner_main");
  const messageContainer = document.querySelector(".day_msg");

  const dateComputedStyle = getComputedStyle(dateTextElement);
  const dateBackgroundColor = dateComputedStyle.backgroundColor;
  const dateRgbMatch = dateBackgroundColor.match(/\d+/g);

  if (dateRgbMatch) {
    const dateRgbValues = dateRgbMatch.map(Number);
    const dateTextColor = getContrastColor(dateRgbValues);
    const dateTextColorString = `rgb(${dateTextColor[0]}, ${dateTextColor[1]}, ${dateTextColor[2]})`;
    dateTextElement.style.color = dateTextColorString;
  }

  const morningComputedStyle = getComputedStyle(morningTextElement);
  const morningBackgroundColor = morningComputedStyle.backgroundColor;
  const morningRgbMatch = morningBackgroundColor.match(/\d+/g);

  if (morningRgbMatch) {
    const morningRgbValues = morningRgbMatch.map(Number);
    const morningTextColor = getContrastColor(morningRgbValues);
    const morningTextColorString = `rgb(${morningTextColor[0]}, ${morningTextColor[1]}, ${morningTextColor[2]})`;
    morningTextElement.style.color = morningTextColorString;
  }

  const newsComputedStyle = getComputedStyle(newsTextElement);
  const newsBackgroundColor = newsComputedStyle.backgroundColor;
  const newsRgbMatch = newsBackgroundColor.match(/\d+/g);

  if (newsRgbMatch) {
    const newsRgbValues = newsRgbMatch.map(Number);
    const newsTextColor = getContrastColor(newsRgbValues);
    const newsTextColorString = `rgb(${newsTextColor[0]}, ${newsTextColor[1]}, ${newsTextColor[2]})`;
    newsTextElement.style.color = newsTextColorString;
  }

  const messageComputedStyle = getComputedStyle(messageContainer);
  const messageBackgroundColor = messageComputedStyle.backgroundColor;
  const messageRgbMatch = messageBackgroundColor.match(/\d+/g);

  if (messageRgbMatch) {
    const messageRgbValues = messageRgbMatch.map(Number);
    const messageTextColor = getContrastColor(messageRgbValues);
    const messageTextColorString = `rgb(${messageTextColor[0]}, ${messageTextColor[1]}, ${messageTextColor[2]})`;
    messageContainer.style.color = messageTextColorString;
  }
}

// 페이지 로드 시 현재 날짜 텍스트 설정
window.addEventListener("load", function () {
  setCurrentDateText();
  updateTextColor();
});
