// creteElements
let body = document.body;

let container = document.createElement('div');

let block1 = document.createElement('div');
let block2 = document.createElement('div');
let block3 = document.createElement('div');
let block4 = document.createElement('div');
let block5 = document.createElement('div');
let block6 = document.createElement('div');
let block7 = document.createElement('div');
let block8 = document.createElement('div');
let block9 = document.createElement('div');

let heads1 = document.createElement('div');
let heads2 = document.createElement('div');
let heads3 = document.createElement('div');
let heads4 = document.createElement('div');
let heads5 = document.createElement('div');
let heads6 = document.createElement('div');
let heads7 = document.createElement('div');
let heads8 = document.createElement('div');
let heads9 = document.createElement('div');

let box1 = document.createElement('div');
let box2 = document.createElement('div');
let box3 = document.createElement('div');
let box4 = document.createElement('div');
let box5 = document.createElement('div');
let box6 = document.createElement('div');
let box7 = document.createElement('div');
let box8 = document.createElement('div');
let box9 = document.createElement('div');

let bath = document.createElement('img');
let bike = document.createElement('img');
let boat = document.createElement('img');
let car = document.createElement('img');
let coffee = document.createElement('img');
let gym = document.createElement('img');
let translate = document.createElement('img');
let airplan = document.createElement('img');
let airplan_up = document.createElement('img');

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let p3 = document.createElement('p');
let p4 = document.createElement('p');
let p5 = document.createElement('p');
let p6 = document.createElement('p');
let p7 = document.createElement('p');
let p8 = document.createElement('p');
let p9 = document.createElement('p');

// class
container.className = 'container';

block1.className = 'block blue';
block2.className = 'block blue';
block3.className = 'block blue';
block4.className = 'block orange';
block5.className = 'block orange';
block6.className = 'block orange';
block7.className = 'block red';
block8.className = 'block red';
block9.className = 'block red';

heads1.className = 'heads head-blue';
heads2.className = 'heads head-blue';
heads3.className = 'heads head-blue';
heads4.className = 'heads head-orange';
heads5.className = 'heads head-orange';
heads6.className = 'heads head-orange';
heads7.className = 'heads head-red';
heads8.className = 'heads head-red';
heads9.className = 'heads head-red';

box1.className = 'box';
box2.className = 'box';
box3.className = 'box';
box4.className = 'box';
box5.className = 'box';
box6.className = 'box';
box7.className = 'box';
box8.className = 'box';
box9.className = 'box';

// texts
heads1.innerHTML = "7:25AM";
heads2.innerHTML = "8:15PM";
heads3.innerHTML = "Translate";
heads4.innerHTML = "Bike";
heads5.innerHTML = "Boat";
heads6.innerHTML = "Drive";
heads7.innerHTML = "Morning";
heads8.innerHTML = "Afternoon";
heads9.innerHTML = "Night";

airplan.src = './image/airplan.png';
airplan_up.src = './image/airplan_up.png';
bath.src = './image/bath.png';
bike.src = './image/bike.png';
boat.src = './image/boat.png';
car.src = './image/car.png';
coffee.src = './image/coffee.png';
gym.src = './image/gym.png';
translate.src = './image/translate.png';

p1.innerHTML = "Boston";
p2.innerHTML = "Madrid";
p3.innerHTML = "Spanish";
p4.innerHTML = "13.1 Miles";
p5.innerHTML = "90 Miles";
p6.innerHTML = "48 Miles";
p7.innerHTML = "Coffee";
p8.innerHTML = "Gym";
p9.innerHTML = "Hot Tub";


// put
body.append(container);
container.append(block1, block2, block3, block4, block5, block6, block7, block8, block9);

block1.append(heads1);
block2.append(heads2);
block3.append(heads3);
block4.append(heads4);
block5.append(heads5);
block6.append(heads6);
block7.append(heads7);
block8.append(heads8);
block9.append(heads9);

box1.append(airplan);
box2.append(airplan_up);
box3.append(bath);
box4.append(bike);
box5.append(boat);
box6.append(car);
box7.append(coffee);
box8.append(gym);
box9.append(translate); 

block1.append(box1);
block2.append(box2);
block3.append(box3);
block4.append(box4);
block5.append(box5);
block6.append(box6);
block7.append(box7);
block8.append(box8);
block9.append(box9);

box1.append(p1);
box2.append(p2);
box3.append(p3);
box4.append(p4);
box5.append(p5);
box6.append(p6);
box7.append(p7);
box8.append(p8);
box9.append(p9);