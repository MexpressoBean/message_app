  scrollBottom = function(){
    if( $('#messages').length > 0){
      $('#messages').scrollTop($('#messages')[0].scrollHeight);
    }
  };

  document.addEventListener('turbolinks:load', function(){
    const dropDownMenuItem = $('.ui.dropdown');
    dropDownMenuItem.dropdown();

    $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade');
    });

    scrollBottom();
});