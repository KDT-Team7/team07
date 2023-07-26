// 현재 날짜를 가져와서 텍스트에 적용하는 함수
function setCurrentDateText() {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const day = currentDate.getDate();
  const dateTextElement = document.getElementById("date-text");
  dateTextElement.textContent = month + "월" + day;
}

// 페이지 로드 시 현재 날짜 텍스트 설정
window.addEventListener("load", setCurrentDateText);
