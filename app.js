const nouns = ['people', 'pets', 'TVs', 'electronics', 'things'];
const noun = ['brother', 'hospital', 'iPad', 'sock', 'cereal', 'couch', 'jacket', 'rug'];
const adjective = ['strange', 'silly', 'peturbed', 'pretty', 'dangerous', 'high'];
const food = ['steak', 'rice', 'turkey', 'hamburger helper', 'pizza', 'McDonalds', 'Checkers'];
const bodyPart = ['elbow', 'leg', 'left eye', 'pinkie fingernail', 'gums', 'hair', 'ear'];
const verbing = ['skipping', 'trotting', 'laughing', 'heckling', 'wiggling', 'painting', 'sitting', 'gaming'];
const verb = ['jump', 'stomp', 'point', 'touch', 'climb', 'fly', 'put', 'lie', 'sleep'];
const color = ['cyan', 'magenta', 'lime', 'hot pink', 'turquoise', 'matte black', 'off-white'];
const animal = ['cheetah', 'black panther', 'hippo', 'platypus', 'octopus', 'ladybug', 'chamelon', 'anteater', 'armadillo'];

const random = arr => {
    let i = Math.floor(Math.random() * arr.length);
    return arr[i];
}

const madLib = `Our ${random(nouns)} are packed for a hike in the ${random(adjective)} Mountains! We are carrying a picnic lunch with ${random(food)} and ${random(food)} on our ${random(bodyPart)}, 
and I have a ${random(noun)} for ${random(verbing)} photos. We will ${random(verb)} past meadows filled with ${random(color)} and ${random(color)} flowers, and pass a ${random(adjective)} waterfall that sounds 
like a ${random(noun)}. Many animals live in the the mountains, like the ${random(adjective)} ${random(animal)} and ${random(adjective)} ${random(animal)}. It's fun to ${random(verb)} them but important to be 
safe and keep a ${random(adjective)} distance. The higher we ${random(verb)}, the smaller the wildflower meadow and waterfall appear; we may even see ${random(noun)} still on the ground
from last winter.`;

console.log(madLib);