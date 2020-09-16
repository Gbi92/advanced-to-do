let count = 3;

$('#mainButton').click(() => {
    $('ul').append(`<li id="todo-${count}">${$('input').val()}</li>`);
    $('.icons-holder').append(`<div class="icons" id="icon-${count}">
    <img src="trashBin.svg" id="dlt-${count}" class="delete-button">
    <img src="tick.svg" id="tick-${count}" class="complete-button">
</div> `)
    count++;
  });

$('.todos-container').on('click', '.delete-button', (event) => {
    console.log(event.target);
    let currentIndex = event.target.id.split("-")[1];
    $(`#todo-${currentIndex}`).remove();
    $(`#icon-${currentIndex}`).remove();
  });

  $('.todos-container').on('click', '.complete-button', (event) => {
    console.log(event.target);
    let currentIndex = event.target.id.split("-")[1];
    $(`#todo-${currentIndex}`).css('text-decoration', 'line-through');
    $(`#tick-${currentIndex}`).css('background', 'salmon',);
  });