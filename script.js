let count = 3;

$('#mainButton').click(() => {
    if($('input').val().trim() !== ''){
    $('ul').append(`<li id="todo-${count}">${$('input').val()}</li>`);
    $('.icons-holder').append(`<div class="icons" id="icon-${count}">
    <img src="trashBin.svg" id="dlt-${count}" class="delete-button">
    <img src="tick.svg" id="tick-${count}" class="complete-button">
</div> `)
    count++;
    $('input').val('');
    }
  });

$('input').keypress(event => {
  if(event.which == 13) {
    $('#mainButton').trigger('click');
  }
})  

$('.todos-container').on('click', '.delete-button', (event) => {
    let currentIndex = event.target.id.split("-")[1];
    $(`#todo-${currentIndex}`).remove();
    $(`#icon-${currentIndex}`).remove();
  });

  $('.todos-container').on('click', '.complete-button', (event) => {
    let currentIndex = event.target.id.split("-")[1];
    if ($(`#todo-${currentIndex}`).css('text-decoration').indexOf('line-through') != -1) {
      $(`#todo-${currentIndex}`).css('text-decoration', 'none');
      $(`#tick-${currentIndex}`).css('background', 'transparent',);
    }else {
      $(`#todo-${currentIndex}`).css('text-decoration', 'line-through');
      $(`#tick-${currentIndex}`).css('background', 'salmon',);
    }
  });