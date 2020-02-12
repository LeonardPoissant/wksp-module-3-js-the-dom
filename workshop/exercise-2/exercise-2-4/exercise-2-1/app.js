
const FROGS = 3;
const list = document.getElementById('track')

document.head.appendChild(stylesheet);

for (let laneCount = 1; laneCount <= FROGS; laneCount++) {
    let lane = document.createElement('li');
    track.appendChild(lane);
    
    let number = document.createElement('span');
    number.innerText = laneCount;
    lane.appendChild(number);
    
    lane.id = `frog-${laneCount}`;
}

let racers = []; 

for (let numFrogs = 0 ; numFrogs<=FROGS; numFrogs++){
    const newFrog = frogStable[numFrogs];
    racers.push(newFrog);
}
console.log(racers);



racers.forEach(function(racer, id){
    const newFrog = document.createElement('span');
    newFrog.innerText = `${racer,number}`;
    newFrog.classList.add('frog');
    newFrog.style.backgroundColor = racer.color;
    document.getElementById(`frog-${id+1}`).appendChild(newFrog);
});

racers[id].progress = 0;
racers[id].lane = `frog ${id+1}`;

const frogsProgress = document.createElement('span');
frogsProgress[id] = racers[id]
document.getElementById(`frog-${id+1}`).appendChild(frogsProgress);



    let ranking = [];

    function racingFrog(racer){
    let progress = racer.progress;

    const trackWidth = track.offsetWidth;

    const hopping = Math.floor(Math.random()*100)/ trackWidth*100;

    const endHop = setInterval(function(){
        progress += hopping;
        if (progress>100){
            progress = 100.1;
            console.log(racer.name, 'Is a big FrogPimp!')
            clearInterval(endHop);

            ranking.push(racer);
        }
        document.querySelector(`#${racer.lane} .frog`).style.left = `${progress}%`;

    }, Math.random() * 1000);

    }

    racers.forEach(function(racer){
        racingFrog(racer);

    });


const endRace = setInterval(function(){
    if (racer.length === ranking.length){
        console.log(ranking);
        clearInterval(endRace);
    }
}, 800);
