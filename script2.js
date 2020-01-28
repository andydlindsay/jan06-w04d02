$(document).ready(() => {

  const $button = $('button');
  $button.on('click', (event) => {
    // grab the list
    const $list = $('#main-list');
    // get the content of the input field
    const input = $('#input').val();
    // create a new li
    const $li = $('<li>');
    $li.text(input);
    // append the li to the list
    $list.append($li);
    // clear the input?
    $('#input').val('').focus();
  });

});
