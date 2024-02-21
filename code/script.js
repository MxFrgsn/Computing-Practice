var word_bank= ["farm", "cheese", "apple", "character", "planet", "godfrey", "orange", "story", "animated", "user", "empty", "still", "grapes", "fill", 
"worry", "sad", "pensive", "because", "intuition", "pattern", "recognition","oval", "square", "paper", "developer", "controls", "button", "listener", "string", "data", "explained",
 "error", "means", "exist", "queue", "event", "object", "exuberant", "terrified", "grief", "morning", "sunny", "rain", "vigorously",
"rich", "abundant", "lush", "lubricant", "average", "mode", "mind", "direction", "rock", "cartoon", "stories", "protagonist", "anti-hero", "robot", "drone", "king", "history", 
"exiled", "death", "tortured", "soul", "religion","eagle", "black", "blue", "pigeon", "parrot", "extraordinary", "powerful", "earth", "air", "fire","water", "avatar","prophet","lazy",
 "brilliant", "genius", "gas", "parliament", "government", "decree", "judge", "jury", "execute", "program","algorithm", "strong", "timid", 
"assembly", "require", "spontaneous", "tore", "rip", "schedule", "often", "occasionally", "always", "never", "cow", "animal", "dog", "sheep", "banana", "rarely", "however", "oil", 
"defined", "variable","sky", "mountain", "wind", "festival", "whisper", "invisible", "reveal", "vision", "silence", "embrace", "quest", "journey", "harmony",
"sculpture", "canvas", "masterpiece", "timeless", "immortal","doctor","cat","tardis","chamber","echo", "bat","night","moonlight","fireflies","illuminate", "leaves","wisdom",
 "shadow", "enigma", "mystery", "ripple", "serenity", "astonish", "puzzle", "infinite","photosynthesis","god","plant","bandit","thug","horse",
"forgotten","lonely", "gentle", "symphony", "symmetry", "asymmetry",  "celestial", "wonder", "eternal", "once", "flourish", "degragation", "divergent", "astel", "catalyst", 
"surrender", "capitulate", "radiant", "nebula", "luminous", "orbit", "fusion", "essence", "majestic", "resonate", "traverse", "crest", "lunar", "solar", "galaxy", "blossom", "quench",
"ambient",  "velvet", "exquisite", "whirlwind", "abyss", "reverie", "enchant", "cascade", "melody", "ethereal", "spectacle",
"unveil", "infinity", "catharsis", "arthritis", "bone", "undead", "lich", "dragon", "greater", "zombie","apocalypse","paradox",  "labyrinth", 
"phenomenon","solitude", "serene", "tranquil","emperor","ironic","enigmatic", "utopia", "vivid", "pandemonium", "chaos", "fragile",
"arcane", "divergence", "eclipse", "radiance", "glimmer","bow","adore","pink","princess",  "lustrous", "pantheon", "vortex", "juxtapose", "epiphany", "harbinger", "is",
"the", "why", "you", "who", "what", "where", "when", "how", "then", "than", "depressed", "dinosaur", "common", "uncommon", "legendary", "rare", "exotic", "if",
 "are", "good", "bad", "that", "will", "be", "going", "now", "okay", "end", "beginning", "narrative", "games", "manga", "anime", "slime", "isekai", "books", "movies", "mouse", 
 "keyboard", "laptop", "cable", "wire", "vector", "parallel", "line", "drawing", "drew", "fan", "gone", "baked", "walked", "walking", "smiling", "likes", "hates",
 "too", "late", "to", "smitten", "her", "they", "them", "him", "she", "fiction", "non-fiction", "early", "let", "go","grimoire","elves","dwarves","humans","induction",
 "electrical","lighting","yard","couch","desk","baby","pen", "coffee", "smile", "traffic", "sleep", "friend", "book", "phone", "window", "meeting", "dinner", "laugh", "music", "news", "work", "key", "home", "idea",
 "bread", "clock", "chair", "cloud", "light", "garden", "bus", "pencil","map", "jacket", "flower", "market", "raincoat", "memory", "table", "door", "sun", "moon", "hand", "eye", "mouth", 
 "food", "clothes", "school", "family", "love", "hate", "happy", "angry", "tired", "hungry", "thirsty", "hot", "cold", "big", "small", "tall", "short","dark", "fast", "slow", 
 "new", "old", "in", "out", "up", "down", "left", "right", "on", "off", "open", "close", "yes", "no", "maybe", "stop", "look", "listen", "talk", "think", "read", "write", "sing", "dance", "play","cry", "walk", "run", 
 "jump", "eat", "drink","dream", "hope", "fear", "today", "tomorrow", "yesterday", "afternoon", "evening", "spring", "summer", "autumn", "winter", "one", "two", "three", "four", "five", "six", "seven", "eight", 
 "nine", "ten"]

var written_characters = 0;
var timer_started = false;
var time = 60000; // 60000 milliseconds = 60 seconds
let time_passed = 0;
var WPM = 0;
let word_bank_span = document.querySelector("#displayWordBank p");
let chars_Correct = 0;
let words_Correct = 0;


function displayWordBank() {
  // Displays expected inputs on website, removing previously correct input
  document.getElementById("inputBox").value = "";
  let max_height = 200;
  let current_height = 0;
  var i = 0;
  while (i < word_bank.length && current_height < max_height) {
    var string = word_bank[i];
    for (var j = 0; j < string.length; j++)
	{
      var span_word = document.createElement("span");
      span_word.textContent = string[j];
      word_bank_span.appendChild(span_word);
    }
    var span_space = document.createElement("span");
    span_space.textContent = " ";
    word_bank_span.appendChild(span_space);
    current_height = word_bank_span.offsetHeight;
    if (current_height >= max_height) 
	{
      for (var j = 0; j < string.length; j++) 
	  {
        let last_word = word_bank_span.lastChild.previousSibling;
        last_word.remove();
      }
    }
    i++;
  }
}

function validateInputBox() {
  //Checks if input box has been written in, if so, starts time and checks if inputted value is correct
  var input_value = document.getElementById("inputBox").value;
  if (timer_started == false && input_value != "") 
  {
    timer_started = true;
    start_time = new Date();
    timer_interval = setInterval(timer, 950);
  }
  styleWordBank(input_value);
  const last_letter_typed = input_value[input_value.length - 1];
  if (last_letter_typed == " ")
  {
    const word = input_value.split(" ")[0];
    if (word == word_bank_span.textContent.split(" ")[words_Correct]) 
	{
      chars_Correct += input_value.length;
      words_Correct++;
      checkEndOfLine();
      document.getElementById("inputBox").value = "";
      written_characters += word_bank[words_Correct].length+1; // Add one to include spaces
    }
  }
}
//Checks whether we are at the end of the line, if so, removes the line and redisplays words
function checkEndOfLine() {
  /** @type {HTMLSpanElement} */
  const first_Span = document.querySelector(`#displayWordBank p span:nth-child(1)`);
	
  /** @type {HTMLSpanElement} */
  const next_Span = document.querySelector(`#displayWordBank p span:nth-child(${chars_Correct + 1})`);
	
  if (next_Span.offsetTop > first_Span.offsetTop) 
  {
    for (let i = 0; i < words_Correct; i++)
	{
      word_bank.shift();
    }
    word_bank_span.innerHTML = "";
    words_Correct = 0;
    chars_Correct = 0;
    displayWordBank();
  }
}
function randomiseArray() {
  // Durstenfeld shuffle, psuedo-randomises the array
  for (var current_index = 0;current_index < word_bank.length;current_index++)
  {
    var random_index = Math.floor(Math.random() * (current_index + 1));
    var temp = word_bank[current_index];
    word_bank[current_index] = word_bank[random_index];
    word_bank[random_index] = temp;
  }
}
function styleWordBank(input_value) {
  // Styles wordbank, comparing each letter to input box value, checking if its right or wrong and displays it apporiately. 
  document.querySelectorAll("#displayWordBank p span").forEach((span, i) => 
  {
    if (i < chars_Correct && window.matchMedia("(prefers-color-scheme: dark)").matches) 
	{
		span.style.color = "white";
	}
	else
	{
		span.style.color="black"
	}
  });
  for (var i = 0; i < input_value.length; i++) 
  {
    if (input_value[i] == word_bank_span.textContent[i + chars_Correct])
	{
      var current_letter = document.querySelector(
      "#displayWordBank p span:nth-child(" + (i + 1 + chars_Correct) + ")");
      current_letter.style.color = "green";
    } 
	else 
	{
      var current_letter = document.querySelector(
      "#displayWordBank p span:nth-child(" + (i + 1 + chars_Correct) + ")" );
      current_letter.style.color = "red";
    }
  }
}

function timer() {
  //Checks the amount of time that has passed
  let current_Time = new Date();
  time_passed = current_Time - start_time;
  if (time_passed >= time) 
  {
    clearInterval(timer_interval);
    calculateWPM(); // create an alert when test is over!!!
	for (let i = 0; i < words_Correct; i++)
	{
      word_bank.shift();
    }
    main();
  }
  updateTimerUI();
}

function updateTimerUI() {
  // Formats amount of time passed onto website
  let timer_HTML = document.getElementById("timer");
  let total_seconds = Math.floor(time_passed / 1000);
  let minutes = Math.floor(total_seconds / 60);
  let seconds = total_seconds % 60;
  let formatted_time =
    " ‎ ‎ " + minutes + ":" + (seconds < 10 ? "0" : "") + seconds + " ‎ ‎ ‎";
  timer_HTML.innerHTML = formatted_time;
}

function calculateWPM() {
  //Calculates WPM, which is to be displayed to the user
  WPM = written_characters / 5 / (time / 60000);
  updateWpmUI();
  alert("Test finished"); //change this, but keep idea
}

function updateWpmUI() {
 // Displays the WPM on the website
  let wpm_HTML = document.getElementById("WordsPerMinutes");
  let formatted_WPM = "WPM: " + WPM;
  wpm_HTML.innerHTML = formatted_WPM;
}

function validateTimerOptions() {
  // Enables changing of length of typing test (by default its 60s long)
  var timer_options = [30, 60, 90, 120];
  for (var i = 0; i < timerOptions.length; i++) 
  {
    if (document.getElementById(timer_options[i]).checked)
	{
      time = timer_options[i] * 1000;
    }
  }
}

function main() {
  // Start of typing test
  document.getElementById("inputBox").value = "";
  timer_started = false;
  var start_time = 0;
  var timer_interval;
  updateWpmUI();
  written_characters = 0;
  time_passed = 0;
  WPM = 0;
  words_Correct = 0;
  chars_Correct = 0;
  updateTimerUI();
  randomiseArray();
  displayWordBank();
}

main();
//Event listener for Punctuation difficulty option
const possible_punctuation = "-,.;:'";
document.getElementById('Punctuation').addEventListener('change', (event) => {
	if (!event.currentTarget.checked) 
	{
		for (var i = 0;i < word_bank.length;i++)
		{
			var word = word_bank[i];
			var removed_punct_word = "";
			for (var j = 0; j < word.length; j++)
			{
				if (possible_punctuation.indexOf(word[j])===-1)
				{
					removed_punct_word+=word[j];
				}
			}	
			word_bank[i] = removed_punct_word;
		}	
	}
	else
	{
		for (var i = 0;i < word_bank.length;i++)
		{
			if (Math.random()<0.5)
			{
				word_bank[i]=word_bank[i]+(possible_punctuation[Math.floor(Math.random() * possible_punctuation.length)]);
			}
		}
	}
	word_bank_span.innerHTML="";
	displayWordBank();
});

//Event listener for Capitalization difficulty option
document.getElementById('Capitalization').addEventListener('change', (event) => {
	if (!event.currentTarget.checked) 
	{
		for (var i = 0; i < word_bank.length; i++)
		{
			if (word_bank[i].length > 1) 
			{
				word_bank[i] =word_bank[i].charAt(0).toLowerCase() + word_bank[i].slice(1);
			}
			else 
			{
				word_bank[i] = word_bank[i].charAt(0).toLowerCase();
			}
		}
	}
	else
	{
		for (var i = 0; i < word_bank.length; i++)
		{
			if (word_bank[i].length > 1) 
			{
				word_bank[i] =word_bank[i].charAt(0).toUpperCase() + word_bank[i].slice(1);
			}
			else 
			{
				word_bank[i] = word_bank[i].charAt(0).toUpperCase();
			}
		}
	}	
	word_bank_span.innerHTML="";
	displayWordBank();
});