var button= document.getElementById("button-subscribe");
var input= document.getElementsByTagName("button")[0];

button.addEventListener("click", function (){

		if(input.value.length>0){
			console.log("Thanks for subscribing");
		}
});