$(function(){

    $('#todo').keydown(function(event){
        if( event.which === 13){
           if( $(this).val() != "" ) {
            var todoTemplate = $('.template li').clone();
               $(todoTemplate).prepend($(this).val());
               $('ul').append(todoTemplate);
               $(this).val("");
           }
        }
    });

    // In ascolto sull'evento click
    $('.content').on("click", "li button", function(){
        $(this).parent().remove();
    });

});