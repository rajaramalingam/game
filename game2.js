var a;
var b;
var i=0;
var symbol=["<",">","="];

  function challenge() {
  	i++; 
	 a=Math.round( Math.random() * 100);
	 b=Math.round( Math.random() * 100);
 	document.getElementById('num1').value=a;
 	document.getElementById('num2').value=b;
 	document.getElementById('symb').value=symbol[i];
 	 
 	if(i>symbol.length){
 		i=0;
 	}
 }
 	function compare(){
 	var c =event.target.id;
 	switch(symbol[i])
 	{
 		case "<":
 		if(a<b){
 			if(c=="yes"){
 				alert("You Pass");
 			}
 			if(c=="no"){
 				alert("You Fail");
 			}
 		}
        break;

    	case ">":
    	if(a>b){
 			if(c=="yes"){
 				alert("You Pass");
 			}
 			if(c=="no"){
 				alert("You Fail");
 			}
 		}
        break;

    	case "=":
    	if(a==b){
 			if(c=="yes"){
 				alert("You Pass");
 			}
 			if(c=="no"){
 				alert("You Fail");
 			}
 		}
        break;
 	}
 	
 }
