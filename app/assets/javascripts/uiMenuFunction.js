
  document.addEventListener('turbolinks:load', function(){
    const dropDownMenuItem = $('.ui.dropdown');
    dropDownMenuItem.dropdown();

    $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade');
    });
});