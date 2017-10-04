function myFunc (event) {
	move=move+1;

	console.log(event.target.id);
    
    if(move%2==0){
    	document.getElementById(event.target.id).innerHTML="y";
    }
    else{
    	document.getElementById(event.target.id).innerHTML="x";
    }

widthadjust();
    var one=document.getElementById("1").innerHTML;
     var two=document.getElementById("2").innerHTML;
      var three=document.getElementById("3").innerHTML;
       var four=document.getElementById("4").innerHTML;
        var five=document.getElementById("5").innerHTML;
         var six=document.getElementById("6").innerHTML;
          var seven=document.getElementById("7").innerHTML;
    	   var eight=document.getElementById("8").innerHTML;
    		var nine=document.getElementById("9").innerHTML;
    if(one=="x"&&two=="x"&&three=="x" || four=="x"&&five=="x"&&six=="x"||seven=="x"&&eight=="x"&&nine=="x"||one=="x"&&four=="x"&&seven=="x"||two=="x"&&five=="x"&&eight=="x"||three=="x"&&six=="x"&&nine=="x"||seven=="x"&&five=="x"&&three=="x"||one=="x"&&five=="x"&&nine=="x")
    {
		alert("x is the winner");
    }
    // else{
    	// alert("the match draw");
    // }
    if(one=="y"&&two=="y"&&three=="y" || four=="y"&&five=="y"&&six=="y"||seven=="y"&&eight=="y"&&nine=="y"||one=="y"&&four=="y"&&seven=="y"||two=="y"&&five=="y"&&eight=="y"||three=="y"&&six=="y"&&nine=="y"||seven=="y"&&five=="y"&&three=="y"||one=="y"&&five=="y"&&nine=="y")
    {
		alert("y is the winner");
    }
    // else{
    	// alert("The match draw")
    // }
    
}
function reSet(){
	
	 
	 var i;
	 for(i = 1; i<=9 ; i++){
        document.getElementById(i).innerHTML="&nbsp";
        // document.getElementById(i).width=100;

	 }
}


function widthadjust(){
    
     
     var i;
     for(i = 1; i<=9 ; i++){
      // document.getElementById(i).innerHTML="&nbsp";
        document.getElementById(i).width=100;

     }
}
var move=0;