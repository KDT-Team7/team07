let m = 0;
let s = 0;

let totalTime = 0;
let time1Time = 0;
let time2Time = 0;
let time3Time = 0;

//분, 초 입력

$(document).ready(function () {
  $('input[type="number"]').on("keyup", function () {
    v = parseInt($(this).val());
    min = parseInt($(this).attr("min"));
    max = parseInt($(this).attr("max"));

    if (v < min) {
      $(this).val(min);
    } else if (v > max) {
      $(this).val(max);
    }
  });
});

$('input[type="number"]').on("change", function () {
  if ($(this).val() < 10) {
    $(this).val($(this).val().padStart(2, "0"));
    $(this).val($(this).val().slice(-2));
  } else $(this).val(v);
});

//타이머 시간설정

function putTime(e) {
  m = parseInt($(".minBox").val());
  s = parseInt($(".secBox").val());
  $(e).html(`${m}분${s}초`);
  totalTime += m * 60 + s;
  console.log(totalTime);

  if ($(e).hasClass("time1")) {
    time1Time = m * 60 + s;
    $(".pb1 .progress-bar").html(`${m}분${s}초`);
    updateBar(time1Time, totalTime, ".pb1");
    updateBar(time2Time, totalTime, ".pb2");
    updateBar(time3Time, totalTime, ".pb3");
  }
  if ($(e).hasClass("time2")) {
    time2Time = m * 60 + s;
    $(".pb2 .progress-bar").html(`${m}분${s}초`);
    updateBar(time1Time, totalTime, ".pb1");
    updateBar(time2Time, totalTime, ".pb2");
    updateBar(time3Time, totalTime, ".pb3");
  }

  if ($(e).hasClass("time3")) {
    time3Time = m * 60 + s;
    $(".pb3 .progress-bar").html(`${m}분${s}초`);
    updateBar(time1Time, totalTime, ".pb1");
    updateBar(time2Time, totalTime, ".pb2");
    updateBar(time3Time, totalTime, ".pb3");
  }

  $(e).attr("disabled", true);
}

function updateBar(numTime, totTime, prName) {
  let updatePer = (numTime / totTime) * 100;
  if (isNaN(updatePer)) {
    $(`${prName}`).attr("style", `width: 0%; min-width: 0%`);
  } else {
    $(`${prName}`).attr(
      "style",
      `width: ${updatePer}%; min-width: ${updatePer}%; height: 30px`
    );
  }
}

function updateBar1(numTime, totTime, prName) {
  let updatePer = (numTime / totTime) * 100;
  $(`${prName}`).attr(
    "style",
    `width: ${updatePer}%; min-width: 0%; height: 30px`
  );
}

// 타이머 작동

$(".startTimer").on("click", function () {
  console.log(time3Time);
  $(".startTimer").text("시작");
  $(".startTimer").attr("disabled", true);
  $(".startTimer").attr("style", "background-color: darkgrey");
  let prtimerID = setInterval(function () {
    if (time3Time > 0) {
      time3Time -= 1;
      console.log(time3Time);
      $(".pb3 .progress-bar").html(
        `${Math.floor(time3Time / 60)}분${time3Time % 60}초`
      );
      updateBar1(time3Time, totalTime, ".pb3");
    } else if (time2Time > 0) {
      time2Time -= 1;
      console.log(time2Time);
      $(".pb2 .progress-bar").html(
        `${Math.floor(time2Time / 60)}분${time2Time % 60}초`
      );
      updateBar1(time2Time, totalTime, ".pb2");
    } else if (time1Time > 0) {
      time1Time -= 1;
      console.log(time1Time);
      $(".pb1 .progress-bar").html(
        `${Math.floor(time1Time / 60)}분${time1Time % 60}초`
      );
      updateBar1(time1Time, totalTime, ".pb1");
    } else {
      resetTimer();
      clearInterval(prtimerID);
    }
  }, 1000);

  $("#prstopTimer").click(function () {
    clearInterval(prtimerID);
    $(".startTimer").text("이어서");
    $(".startTimer").attr("disabled", false);
    $(".startTimer").attr("style", "background-color: black");
  });
});

//$(".resetTimer").on("click", resetTimer());

function resetTimer() {
  $(".time").attr("disabled", false);
  $(".startTimer").text("시작");
  $(".startTimer").attr("disabled", false);
  $(".startTimer").attr("style", "background-color: black");
  $(".time3").text("일정 1");
  $(".time2").text("일정 2");
  $(".time1").text("일정 3");
  time1Time = 0;
  time2Time = 0;
  time3Time = 0;
  totalTime = 0;
  updateBar(time1Time, totalTime, ".pb1");
  updateBar(time2Time, totalTime, ".pb2");
  updateBar(time3Time, totalTime, ".pb3");
}

function passTimer() {
  if (time3Time > 0) {
    time2Time += time3Time;
    time3Time = 0;
    updateBar(time2Time, totalTime, ".pb2");
    updateBar(time3Time, totalTime, ".pb3");
  } else if (time2Time > 0) {
    time1Time += time2Time;
    time2Time = 0;
    updateBar(time1Time, totalTime, ".pb1");
    updateBar(time2Time, totalTime, ".pb2");
  }
}
