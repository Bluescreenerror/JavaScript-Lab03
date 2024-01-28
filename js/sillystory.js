// VARIABLE DECLARATIONS

// STEP 1: Declare and initialize variables
var customName = document.getElementById('customName');
var randomize = document.getElementById('generateBtn');
var story = document.getElementById('story');

// STEP 3: Create the variable that contains the story string that will be modified
var storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// STEP 4: Create three arrays, insertX, insertY, and insertZ
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'rapidly sublimated', 'evaporated instantly'];

// FUNCTIONS

// STEP 2: Function to randomly select a value from an array
function randomValueFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// STEP 6: Review the partially complete result() function
function result() {
    // STEP 7: Create a new variable called newStory
    var newStory = storyText;

    // STEP 8: Generate a value for each of three new variables - xItem, yItem, and zItem
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    // STEP 9: Replace the placeholders in the newStory string
    newStory = newStory.replace(':insertx:', xItem).replace(':insertx:', xItem); // xItem is replaced twice
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // STEP 10: Replace 'Bob' with custom name if provided
    if (customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // STEP 11: Metric conversion if needed
    if (document.getElementById("metric").checked) {
        // STEP 11a: Convert weight
        var weight = Math.round(300 * 0.453592);
        // STEP 11b: Replace weight in the story
        newStory = newStory.replace('300 pounds', weight + ' kilograms');

        // STEP 12a: Convert temperature
        var temperature = Math.round((94 - 32) * 5 / 9);
        // STEP 12b: Replace temperature in the story
        newStory = newStory.replace('94 fahrenheit', temperature + ' celsius');
    }

    // STEP 13: Update the story paragraph
    story.textContent = newStory;

    // Make the paragraph visible
    story.style.visibility = "visible";
}

// EVENT LISTENERS

// STEP 5: Add a click event listener to the randomize button
randomize.addEventListener("click", result);
