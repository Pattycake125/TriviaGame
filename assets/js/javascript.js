
	 $("#start").on("click", function(event){
			     // Preventing the submit button from trying to submit the form
        	// We're optionally using a form so the user may hit Enter to search instead of clicking the button
        event.preventDefault();
		      //console.log("I clicked");
        score=0;

        quest();
             
    function quest(){
        setTimeout(quest, 1000 * 2);
		    var questions = ["The sky is blue.","There are 365 days in a year.", "There are 42 ounces in a pound.","The Declaration of Independence was created in 1745.", "Bananas are vegetables."];
        var answers = ["t","t","f","f","f"];
      	var num=Math.floor(Math.random() * 5);
        var question1= questions[num];
        var answer = answers[num];
        var page1= "<strong><h4> True or False (t or f) </h4></strong> <p><h1><ul><li>" + question1 + "</li></ul></h1></p>";
            //console.log(page1);
        $("#button").html(page1); 


          document.onkeyup = function(event) {
            event.preventDefault();
          var userInput = String.fromCharCode(event.keyCode).toLowerCase();
            console.log(userInput);
            // Only run this code if "t" or "f" were pressed.
          if (userInput === "t" || userInput === "f") {
          if (userInput === answer ) {
            clearTimeout();
            $("#button").append("   You WON! :)   <img src='assets/image/homer.jpg' alt='Winner!'>");
            setTimeout(quest, 10000);
            score++;
            updateScore();
          }
          // If wrong, alert them they are wrong.
          else {
             $("#button").append("   You Lost! :( ");
            
            
            console.log(page1);
          }
        }
     
      updateScore(); 
    }
  }});
      

function updateScore() {
        document.querySelector("#score").innerHTML = "Score: " + score;
      };

    $("#stop").on("click", function(){
        clearTimeout();
        var page2="<p ><a class='btn btn-primary btn-lg' href='' id='start' role='button'>Start</a>"
        $("#button").html(page2); 
    });



