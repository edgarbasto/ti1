$(function(){
    //alert("jquery pronto");
    $('li:odd').addClass('red');
    $('li:odd').bind('mouseover', function(evt){
       var ele = $(this);
       ele.css({color:'yellow', 'font-weight': 'bold'});
    });
    $('li:odd').bind('mouseout', function(evt){
       var ele = $(this);
       ele.css({color:'black', 'font-weight': 'bold'});
    });
});

