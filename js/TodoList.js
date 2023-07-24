let liCount = 1;
function addToDoList() {
  let addToDoListValue = $("#ToDoListValue").val();

  // 입력창에 아무 텍스트도 띄우지 않는 경우, alert 창 띄움
  if (addToDoListValue.trim() === "") {
    alert("오늘의 할 일을 입력해주세요!");
    return;
  }

  let list1 = document.createElement("li");
  list1.innerHTML = `<p>${addToDoListValue}</p>   
  <button class="float-right" style="border-radius: 15%;" id="doneButton${liCount}" onclick="doneList(${liCount})">완료</button>  
  <button class="float-right" style="border-radius: 15%;" id="removeButton${liCount}" onclick="removeList(${liCount})">삭제</button>`;
  $("#ul").append(list1);
  $(list1).addClass("animate__animated animate__bounceIn");
  $(`#doneButton${liCount}`).addClass("btn btn-outline-primary btn-sm");
  $(`#removeButton${liCount}`).addClass("btn btn-outline-danger btn-sm");

  //텍스트박스 리셋
  $("#ToDoListValue").val("");

  liCount++;
}
function removeList(count) {
  let removeButton = $(`#removeButton${count}`).parent();
  $(removeButton).addClass("animate__animated animate__fadeOut");
  setTimeout(function () {
    $(removeButton).remove();
  }, 400);
}
function doneList(count) {
  let doneButton = $(`#doneButton${count}`).parent();
  $(doneButton).children().first().css("text-decoration", "line-through");
  $(doneButton).children().first().css("opacity", "0.3");
}

function handleKeyDown(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addToDoList();
  }
}
