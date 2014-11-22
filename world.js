
window.onload = function(){
 
  
   document.getElementById("controls").innerHTML+='<input type="checkbox" name="Country" value="Jamaica">';
   //getiden();
    geted();
   
}

function geted(){
    $('lookup').observe('click', function(){
 var term = $("term").getValue();
     new Ajax.Request("world.php", {
               method : 'get',
      parameters : {lookup : term},
               onSuccess: function(transport) {
                var response = transport.responseText ||
                "no response text";
                //alert(transport.responseText);
                   $('result').update(response);
                   alert("Your search was successful!")
                  
              },
              onFailure: function() { alert('An error has occur'); }        
     });
   });

}