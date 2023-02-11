jQuery.noConflict();
    jQuery(document).ready(
    function($){
    //your other code here
    $(document).ready(
        function(){
    
      //chiusura al click sulla parte scura
      $("#hover").click(function(){
                $(this).fadeOut();
      $("#popup").fadeOut();
           });
      
      //chiusura al click sul pulsante
      $("#close").click(function(){
                $("#hover").fadeOut();
      $("#popup").fadeOut();
           });
      
      });
    });

