let liCount = 1;
function addToDoList() {
  let addToDoListValue = $("#ToDoListValue").val();
  let list1 = document.createElement("li");
  list1.innerHTML = `${addToDoListValue}   <button class="float-right" style="border-radius: 15%;" id="removeButton${liCount}" onclick="removeList(${liCount})">삭제</button>`;
  $("#ul").append(list1);
  liCount++;
}
function removeList(count) {
  let removeButton = $(`#removeButton${count}`).parent();
  $(removeButton).remove();
}
