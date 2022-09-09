// setting up variables with dom manipulation to grab the tags and IDs in the html

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

//first function to randomize selection in array

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// setting up variables with the string text to find and replace with strings in array

const storyText = 'It was 94 fahrenheit outside, so insertx went for a walk. When they got to inserty, they stared in horror for a few moments, then insertz. Bob saw the whole thing, but was not surprised — insertx weighs 300 pounds, and it was a hot day.';

//setting up the arrays with strings to insert into storyText

const insertx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas', 'captain picard', 'Homer Simpson', 'bill shakespeare'];
const inserty = ['the soup kitchen', 'Disneyland', 'the White House', 'the starship', 'the end of the universe', 'willy wonkas chocolate factory'];
const insertz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away', 'witnessed the heat death of the universe', 'became the human torch', 'got the meat sweats', ''];

//makes button randomize results when clicked

randomize.addEventListener('click', result);

//setting up the result function to generate and replace the generic insert text in storyText

function result() {

    let newStory = storyText;

//grabbing a random value from the arrays previously defined above and assigning them to a variable

    let xItem = randomValueFromArray(insertx)
    let yItem = randomValueFromArray(inserty)
    let zItem = randomValueFromArray(insertz)

//replacing the generic insert text with newly generated random value from above arrays 

     newStory = newStory.replace('insertx', xItem);
     newStory = newStory.replace('insertx', xItem);
     newStory = newStory.replace ('inserty', yItem);
     newStory = newStory.replace ('insertz', zItem);

//gets name from textbox

    if(customName.value !== '') {
        const name = customName.value;
    
         newStory = newStory.replace('Bob', name);
  }
//checks what radio button is selected, then changes flavor to text to match units either in USA or UK

    if(document.getElementById("uk").checked) {
        const weight = Math.round(300/14) + ' stone';
        const temperature =  Math.round((94 - 32) * (5/9)) + ' centigrade';
         newStory = newStory.replace('94 fahrenheit', temperature);
         newStory = newStory.replace('300 pounds', weight);
  }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
