const randomSentence = () => {

    let adjectives = ['Ashamed', 'Adorable', 'Attractive', 'Beautiful', 'Awful', 'Aggressive', 'Cruel', 'Clever', 'Nasty', 'Jealous', 'Filthy', 'Poor'];
    let humans = ['King', 'Queen', 'Man', 'Woman', 'Child', 'Teenager', 'Boy', 'Girl'];
    let verbs = ['Killed', 'Bullied', 'Ate', 'Taunted', 'Petted', 'Fed', 'Trained', 'Kissed', 'Caught', 'Chased'];
    let animals = ['Cow', 'Pig', 'Dog', 'Cat', 'Fish', 'Sheep', 'Chicken', 'Bird'];

    const randomItem = array => {
        let random = array.length;
        return array[Math.floor(Math.random() * random)].toLowerCase();
    }

    let adjective = randomItem(adjectives);
    let adjective2 = randomItem(adjectives);
    let human = randomItem(humans);
    let verb = randomItem(verbs);
    let animal = randomItem(animals);
    
    return `The ${adjective} ${human} ${verb} the ${adjective2} ${animal}`;
}

console.log(randomSentence());