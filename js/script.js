
jQuery(document).ready(function($) {
$("img").hover(
		function(event){
			$(this).css({"border":"1px solid red"});
			
		},
		function(event){
			$(this).css({"border":"0px"});
		}

	);	
	
	
	$(".but").hover(
function(){
$("#d_menu").css({"visibility":"visible"});	
},
function(){
$("#d_menu").hover(
function(){
	
},
function(){
	$(this).css({"visibility":"hidden"});	
});	
});

$("li").each(function(v_index,elem){
	if(v_index%2==0){
		$(this).css({"backgroundColor":"#FFF8DC"});
	}
	else{
		$(this).css({"backgroundColor":"#F8F8FF"});
	}
});

$("#for_parent > .title").click(
	function(){
	$(this).next().next().hide(3000,"linear",function(){
				alert(this);
			});	
	
});
});

	











	
	

		
		
		
		
		
		
		
		
		
		
		
	
	
