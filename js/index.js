
function Jprogres(id,name,radio,funcion){
	
	var  contenedor = $(id);
	var  name = name;
	contenedor.append('<div data-pct="0" id="'+name+'"></div>');
	
	var strokercicle = Math.PI*(radio*2);
	 
	$("#"+name).click(funcion);
	
	 
	$("#"+name).css({
		"display": "block",
		"height": "200px",
		"width": "200px",
		"margin": "2em auto",
		"border-radius": "100%",
		"position": "relative",
		"display":"flex",
		"justify-content":"center",
		"align-items":"center",
		"font-size":"24px",
		"font-family":"verdana",
		"-webkit-user-select":"none",
		"cursor":"default"
	});
	
		

	
	$("#"+name).html(`
	<div id="${name}_percent">0</div>
	<svg id="${name}_svg" width="200" height="200" viewPort="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
	
		<circle id="${name}_back" r="${radio}" cx="100" cy="100" fill="transparent" stroke-dasharray="${strokercicle}" stroke-dashoffset="0"></circle>
		<circle id="${name}_bar" r="${radio}" cx="100" cy="100" fill="transparent" stroke-dasharray="${strokercicle}" stroke-dashoffset="0"></circle>
	
	</svg>

	`);

	
	$("#"+name+"_percent").css({
		"position":"absolute"
	});
	
	var colorback = "#eee";
	
	this.color = function(color){
	

		$("#"+name+"_svg "+ " #"+name+"_bar").css({
			"stroke": color
		});
	};
	
	this.backcolor = function(color){
		
		$("#"+name+"_back").css({
			"stroke": color
		});		
		
	}
	
	$("#"+name+"_svg "+ "circle").css({
		"stroke-dashoffset": "0",
		"transition": "stroke-dashoffset .5s ease",
		"stroke": colorback,
		"stroke-width": ".7em"
	});
	
	
	$("#"+name+"_svg "+ " #"+name+"_bar").css({
		"stroke-dashoffset": "0",
		"transition": "stroke-dashoffset .5s ease",
		"stroke": "#727272",
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
	var progressbar1 = new Jprogres("body",'progress1',90);
	progressbar1.val(50);
	
	progressbar1.color("#5d5d5d");
	progressbar1.backcolor("#ddd")

});



