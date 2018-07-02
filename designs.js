


// Select color input
function addColor(){
 $('td').click(function (){
        color = $('#colorPicker').val();
    
        if ($(this).attr('style')){
            $(this).removeAttr('style');
        } 
        else{
            $(this).attr('style', 'background-color:' + color);
        }
    });
}



// Select size input

$('#sizePicker').submit(function(event){
	event.preventDefault();
	 height = $('#inputHeight').val();
	 width = $('#inputWeight').val();
    makeGrid(height, width); 
});

// When size is submitted by the user, call makeGrid()

   
function makeGrid(r,c) {
    $('tr').remove();

    for (let i = 1; i<=r; i++){
    $('#pixelCanvas').append('<tr></tr>');
    for(let j = 1; j<=c; j++) {
        $('tr').filter(':last').append('<td></td>');	
        }
    }
addColor();
   
}
