// D-Day 계산기 스크립트 함수
function calculateRemainingDays() {
  // 입력한 날짜 가져오기
  const inputDate = document.getElementById("dday-input").value;

  //   날짜 입력 안 할 경우 alert
  if (!inputDate) {
    alert("디데이를 설정해주세요!");
    return;
  }

  // 오늘 날짜 가져오기
  const today = new Date();

  // 입력한 날짜를 Date 객체로 변환하기
  const ddayDate = new Date(inputDate);

  // D-Day 계산하기
  const timeDiff = ddayDate - today;
  const remainingDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  // 결과를 HTML에 업데이트하기
  const resultElement = document.getElementById("result");

  if (remainingDays > 0) {
    resultElement.innerHTML = `D-${remainingDays}`;
    $(resultElement).addClass("animate__animated animate__tada");
  } else if (remainingDays === 0) {
    resultElement.innerHTML = "D-DAY";
    $(resultElement).addClass("animate__animated animate__tada");
  } else {
    resultElement.innerHTML = `D+${Math.abs(remainingDays)}`;
    $(resultElement).addClass("animate__animated animate__tada");
  }
  setTimeout(() => {
    $(resultElement).removeClass("animate__animated animate__tada");
  }, 700);
}

// 재설정 버튼
//
function dDayReset() {
  const resetConfirmed = confirm("정말 재설정하시겠습니까?");

  if (resetConfirmed) {
    const inputElement = document.getElementById("dday-input");
    const resultElement = document.getElementById("result");

    inputElement.value = "";
    resultElement.innerHTML = "";
  } else {
    return;
  }
}
