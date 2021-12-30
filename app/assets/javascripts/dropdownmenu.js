function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

ready(function(){
    document.addEventListener('turbolinks:load', function(){
        const dropDownMenuItem = $('.ui.dropdown');
        dropDownMenuItem.dropdown();
    });
  })