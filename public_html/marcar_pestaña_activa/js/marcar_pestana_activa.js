$(document).on('click', 'ul li', function(){ 
    var $this= $(this);

    $('ul li').removeClass('active');
    $this.addClass('active');
});