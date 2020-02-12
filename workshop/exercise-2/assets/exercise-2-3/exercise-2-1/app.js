// Preset values
const FROGS = 3;
const list = document.getElementById('track')

// 1. Create for loop that makes use of FROGS to know how many lanes to create.
for(let i = 0; i<= FROGS; i ++){
    const lanes = document.createElement('li');
    console.log(list);
    console.log(list[0]);
    list.appendChild(lanes);
    let number = document.createElement('span');
    number.innerText = i;
    lanes.appendChild(number);

    lanes.id = `frog-${i}`;
}

/*
3. Define an empty array called `racers`. We will push random frogs from the stable into this array.
4. Write a `for` loop that keeps pushing frogs from `frogStable` into `racers` until we have the required number of frogs (as defined by `FROGS`).
5. Output the racers array to the console to make sure you actually have frogs in there.*/

let racers = []; 

for (let numFrogs = 0 ; numFrogs<=FROGS; numFrogs++){
    const newFrog = frogStable[numFrogs];
    racers.push(newFrog);
}
console.log(racers);

racers.forEach([numFrogs])

/*1. Duplicate `📂 exercise-2-2` folder and name it `📂 exercise-2-3`
2. Use the racers array to assign each frog to a lane.
3. We should also show the name/number of the frog in the lane. (This will involve creating at least one element inside the lane `li`)
4. Add a class of `frog` to each of the frogs so that we can style them later.
5. Let's also temporarily set the background color of the frog element to the color assigned to it in its object.
6. Set the frog's progress to 0 inside its object, inside of the racers array.
7. Add each frog's progress to the progress to the screen as well.
8. This might also be a good time to add the stylesheet that is in the assets folder.*/

racers.forEach(function(racer, id)){
    const newFrog = document.createElement('span');
    newFrog.innerText = `${racer,number}`;
    newFrog.classList.add('frog');
    newFrog.style.backgroundColor = racer.color;
    document.getElementById(`frog-${id+1}`).appendChild(newFrog);
}

racers[id].progress = 0;
racers[id].lane = `frog ${id+1}`;

const frogsProgress = document.createElement('span');
frogsProgress.innerTe[id] = racers[id]
    document.getElementById(`frog-${id+1}`).appendChild(frogsProgress);


