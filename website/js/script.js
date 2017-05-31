var counter =1;
$(function(){
	$( '#example' ).photobooth().on( "image", function( event, dataUrl ){
		if(counter<5){
			var node = document.createElement("img");                 												
			node.setAttribute("class", "alist" + counter); 
			node.setAttribute("id", "alist" + counter);  
			// node.setAttribute("width","700px");
			// node.setAttribute("height","525px");
			node.setAttribute('src',dataUrl);
			document.getElementById("gallery").appendChild(node);
			counter++;	
		}else {
			counter = 1;
			
			var node = document.createElement("img");                 												
			node.setAttribute("class", "alist" + counter);  
			// node.setAttribute("width","700px");
			// node.setAttribute("height","525px");
			node.setAttribute('src',dataUrl);
			document.getElementById("gallery").appendChild(node);
			counter++;
		}
		
	});
	
});

//$( ".gallery div:nth-child(1)").css({'margin-left' : '500px',});
 