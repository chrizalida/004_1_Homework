 function testValue(param){
   var inp = document.getElementById("ED"+param);
   var val = inp.value;
   if (val===""){
       alert("Enter text!");	
   }else {
     var p="";
     var yesA="";
     var notA="";
	    switch (param) {
	    	 case "1":   
                p =/(25[0-5]?)\.(25[0-5]?)\.(25[0-5]?)\.(25[0-5]?)/gm;
                yesA = "IP entered correctly";
                notA=  "IP entered incorrectly";
                break;
              case "2": 
                p =/^\d{5}$/;
                yesA = "Postcode entered correctly";
                notA=  "Postcode entered incorrectly";
                break;
              case "3": 
                p =/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/gm;
                yesA = "Date entered correctly";
                notA=  "Date entered incorrectly";
                break;
               case "4":   
                p =/(\$[0-9\.]*(\.[0-9]{2})?)/gm;
                yesA = "Price entered correctly";
                notA=  "Price entered incorrectly";
                break;
           }	
       	    var result = document.getElementById("RES"+param);          
            if (p.test(val)){
       	        result.value = yesA;
            } else {
                result.value = notA;	
            }
        }
    }