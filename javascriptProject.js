var expected_Inputs = ["Farm", "Cheese", "Apple", "Character", "Planet", "Godfrey", "Orange", "Story", "Animated", "User", "Empty", "Still", "Water", "Grapes", "Fill", "When", "Why", "Worry", "Sad", "Pensive", "Because", "Intuition", "Pattern", "Recognition",
"Oval", "Square", "Paper", "Developer", "Controls", "Button", "Listener", "String", "Data", "Explained", "Error", "Means", "Exist", "Queue", "Event", "Object", "Exuberant", "Terrified", "Grief", "Morning", "Sunny", "Rain", "Vigorously",
"Rich", "Abundant", "Lush", "Lubricant", "Average", "Mode", "Mind", "Direction", "Rock", "Cartoon", "Stories", "Protagonist", "Anti-Hero", "Robot", "Drone", "King", "History", "Exiled", "Death", "Tortured", "Soul", "Religion",
"Eagle", "Black", "Blue", "Pigeon", "Parrot", "Extraordinary", "Powerful", "Earth", "Air", "Fire", "Water", "Avatar", "Lazy", "Brilliant", "Genius", "Gas", "Parliament", "Government", "Decree", "Judge", "Jury", "Execute", "Program",
"Algorithm", "Strong", "Timid", "Assembly", "Require", "Spontaneous", "Tore", "Rip", "Schedule", "Often", "Occasionally", "Always", "Never", "Cow", "Animal", "Dog", "Sheep", "Banana", "Rarely", "However", "Oil", "Defined", "Variable"];
 
let paragraph = document.createElement("p");
var completed_Words = 0;
var timerInterval;
var startTime;
var interval;

function displayExpectedInputs()
{
	let arrayDisplayElement = document.getElementById("displayArray");
	arrayDisplayElement.style.fontWeight = "bold";
	for (var i = 0; i< expected_Inputs.length; i++)
	{
        paragraph.textContent += expected_Inputs[i] + " ";
	}
	arrayDisplayElement.appendChild(paragraph);
}

function validateForm() {
  event.preventDefault(); 
  let input_Box = document.getElementById("inputBox").value;
  
	if (input_Box == expected_Inputs[0])
	{
		completed_Words++;
		expected_Inputs.shift(); // want it to glow green when true + remove it from input box
		paragraph.innerHTML = "";
		input_Box.value = ""
		displayExpectedInputs();
		input_Box.className = "input.green";
	}
	else
	{
		input_Box.className = "input.red";
	}
  }

function timer()
{
	let current_Time = new Date();
    let time_Passed = current_Time - start_Time;

    if (time_Passed >= 10000) { // 60000 milliseconds = 60 seconds
      console.log("It has been ",time_Passed/1000,"seconds."); //changes this so it updates nicely on screen
	  clearInterval(timer_Interval);
      calculateWPM()
    } else {
      console.log("It has been",time_Passed/1000,"seconds.");
    }
}
function calculateWPM()
{
	var WPM = completed_Words;
	console.log("You have a",WPM,"WPM") //changes this so it updates nicely on screen	
} // will also have to change for different inputs in time!

function checkIfInputBoxEmpty()
{
	let inputBox = document.getElementById("inputBox").value;
	if (inputBox != "")
	{
	start_Time = new Date();
	timer_Interval = setInterval(timer, 1000);
	clearInterval(interval);
	}
}
function timerCallback()
{
	console.log("End of Timer");
}

function selectTime()
{
	selected_time 
}

displayExpectedInputs();
interval = setInterval(checkIfInputBoxEmpty, 1000);
