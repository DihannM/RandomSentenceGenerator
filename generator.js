// function name 
const randomSentence = () => {

    // 4 different arrays with string data types to help with generating a random sentence
    let adjectives = ['Ashamed', 'Adorable', 'Attractive', 'Beautiful', 'Awful', 'Aggressive', 'Cruel', 'Clever', 'Nasty', 'Jealous', 'Filthy', 'Poor'];
    let humans = ['King', 'Queen', 'Man', 'Woman', 'Child', 'Teenager', 'Boy', 'Girl'];
    let verbs = ['Killed', 'Bullied', 'Ate', 'Taunted', 'Petted', 'Fed', 'Trained', 'Kissed', 'Caught', 'Chased'];
    let animals = ['Cow', 'Pig', 'Dog', 'Cat', 'Fish', 'Sheep', 'Chicken', 'Bird'];

    // function to return a random value in the above arrays. Also converts the value to lowercase 
    const randomItem = array => {
        let random = array.length;
        return array[Math.floor(Math.random() * random)].toLowerCase();
    }

    // Generating random values from arrays and assigning to variables to use in end result
    let adjective = randomItem(adjectives);
    let adjective2 = randomItem(adjectives);
    let human = randomItem(humans);
    let verb = randomItem(verbs);
    let animal = randomItem(animals);
    

    // End result
    return `The ${adjective} ${human} ${verb} the ${adjective2} ${animal}`;
}

// Test result
console.log(randomSentence());