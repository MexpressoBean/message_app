  scrollBottom = function() {
    if( $('#messages').length > 0){
      $('#messages').scrollTop($('#messages')[0].scrollHeight)
    }
  }

  submitMessage = function() {
    $('#message_body').on('keydown', function(e) {
      if(e.keyCode == 13) {
        $('button').click()
        e.target.value = ""
      }
    })
  }

  document.addEventListener('turbolinks:load', function(){
    const dropDownMenuItem = $('.ui.dropdown')
    dropDownMenuItem.dropdown()

    $('.message .close')
    .on('click', function() {
      $(this)
        .closest('.message')
        .transition('fade')
    });

    submitMessage()
    scrollBottom()
});