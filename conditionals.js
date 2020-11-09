$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    var buttonClicks = 0;

    $("#clickCounter").submit(countClick);

    $("#ageValidator").submit(checkAge);

    $("#salesTax").submit(calcSalesTax);

    $("#catFood").submit(recommendFood);

    $("#randomCard").submit(drawCard);

	function countClick(event) {
		// Increment a variable that tracks the
		// number of button clicks

        event.preventDefault();

        buttonClicks++;

        $("#clickCountOutput").text(buttonClicks);

        if(buttonClicks === 10)
        {
            buttonClicks = 0;
        }

		// Print the current number of clicks to the
		// <p> with ID "clickCountOutput"

		// When the count gets to 10, reset it to 0
	}


    function checkAge(event) {
        // Get the user's birth year from the text
        // box with ID of "birthYear"
        event.preventDefault();

        var birthYear = parseInt($("#birthYear").val());

        var age = 2020 - birthYear;

        if(age < 18)
        {
            $("#birthYearOutput").text("Child");
        }

        else
        {
            $("#birthYearOutput").text("Adult");
        }

        // If they are currently under 18, print "Child"
        // to the <p> with ID of "birthYearOutput"

        // If they are 18 or over, print "Adult" instead

    }

    function calcSalesTax(event) {
        // Get the purchase amount from the text
        // box with ID of "purchaseAmount"
        event.preventDefault();

        var amount = parseFloat($("#purchaseAmount").val());
        // Get the state from the text box with ID "state"
        var stateText = $("#state").val();

        var taxRate = 0;
        // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%
        if(stateText === "WI")
        {
            taxRate = 5;
        }
        else if(stateText === "IL")
        {
            taxRate = 8;
        }
        else if(stateText === "MN")
        {
            taxRate = 7.5;
        }
        else if(stateText === "MI")
        {
            taxRate = 5.5;
        }
        else{taxRate = 0;}

        var salesTax = amount * (taxRate * .01);
        // Calculate the sales tax amount and print to
        // the <p> with ID of "salesTaxOutput"
        if(taxRate != 0)
        {
            $("#salesTaxOutput").text(salesTax.toFixed(2));
        }
        else{$("#salesTaxOutput").text("Error")}
        // If the user enters a state not listed above,
        // print "Error" instead


    }

    function recommendFood(event) {
        // Get the cat's age from the text box with
        // ID of "catAge"
        event.preventDefault();

        var age = parseFloat($("#catAge").val());
        // Cats under 2 get "kitten chow", between 2 and 10
        // get "adult chow", and over 10 get "senior chow"
        var food;
        if(age < 2)
        {
            food = "kitten chow";
        }
        else if(age >= 2, age <=10)
        {
            food = "adult chow";
        }
        else
        {
            food = "senior chow";
        }

        $("#catAgeOutput").text(food);

        // Print the food recommendation to the <p> with
        // ID of "catAgeOutput"


    }

    function drawCard(event) {

	    event.preventDefault();
        // Generate a random card face value (1 - 13)
        var faceValue = Math.floor(Math.random() * 13) + 1;

        // Generate a random suit (1 - 4)
        var suit = Math.floor(Math.random() * 4) + 1;

        // Create the description of the card, for example
        // "King of Spades" or "2 of Hearts"
        var description;

        // For face values 2 - 10, you can just print the number
        // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
        // and 13 is "King"
        if(faceValue === 1)
        {
            faceValue = "Ace";
        }
        else if(faceValue === 11)
        {
            faceValue = "Jack";
        }
        else if(faceValue === 12)
        {
            faceValue = "Queen";
        }
        else if(faceValue === 13)
        {
            faceValue = "King";
        }
        else
        {
            faceValue = faceValue;
        }
        // For the suits, 1 is "Clubs", 2 is "Spades",
        // 3 is "Hearts", 4 is "Diamonds"
        if(suit === 1)
        {
            suit = "Clubs";
        }
        else if(suit === 2)
        {
            suit = "Spades"
        }
        else if(suit === 3)
        {
            suit = "Hearts";
        }
        else if(suit === 4)
        {
            suit = "Diamonds";
        }

        $("#drawCardOutput").text(`${faceValue} of ${suit}`);

        // Print the card's description to the <p> with
        // ID of "drawCardOutput"


    }

});