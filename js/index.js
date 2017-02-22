
function Jprogres(id,name,radio){
	
	var  contenedor = $(id);
	var  name = name;
	contenedor.append('<div data-pct="0" id="'+name+'"></div>');
	
	var strokercicle = Math.PI*(radio*2);
	 
	
	$("#"+name).css({
		"display": "block",
		"height": "200px",
		"width": "200px",
		"margin": "2em auto",
		"border-radius": "100%",
		"position": "relative",
		"display":"flex",
		"justify-content":"center",
		"align-items":"center"
	});
	
		

	
	$("#"+name).html(`
	<div id="${name}_percent">0</div>
	<svg id="${name}_svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	
		<circle r="${radio}" cx="100" cy="100" fill="transparent" stroke-dasharray="${strokercicle}" stroke-dashoffset="0"></circle>
		<circle id="${name}_bar" r="${radio}" cx="100" cy="100" fill="transparent" stroke-dasharray="${strokercicle}" stroke-dashoffset="0"></circle>
	
	</svg>

	`);

	
	$("#"+name+"_percent").css({
		"position":"absolute"
	});
	
	
	
	$("#"+name+"_svg "+ "circle").css({
		"stroke-dashoffset": "0",
		"transition": "stroke-dashoffset .5s ease",
		"stroke": "red",
		"stroke-width": ".7em"
	});
	
	
	$("#"+name+"_svg "+ " #"+name+"_bar").css({
		"stroke-dashoffset": "0",
		"transition": "stroke-dashoffset .5s ease",
		"stroke": "blue",
		"stroke-width": ".7em"
	});
	
	
	
	this.val = function(val){
	var val = val;
	var $circle = $('#'+name+'_bar');
	
	if (isNaN(val)) {
	val = 0; 
	}
	else
	{  
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
	
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
	
	
    
    $circle.css({strokeDashoffset: pct});
    
     $("#"+name).attr('data-pct',val);
	 
	 $("#"+name+"_percent").text(val+"%");
	 
	  
	}
  
	}
	
	
	
	
}


$(document).ready(function(){
	
	$("#val").change(function(){
		progressbar1.val($(this).val());
	});
	
	var progressbar1 = new Jprogres("body",'progress1',90);

});



