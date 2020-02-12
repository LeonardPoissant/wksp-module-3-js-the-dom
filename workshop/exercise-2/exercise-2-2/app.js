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

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane
