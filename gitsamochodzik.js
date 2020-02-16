const up = document.getElementById("uuuuuuup");
const up = document.getElementById("upppppp");
const down = document.getElementById("dddown");
const left = document.getElementById("lllleft");
const right = document.getElementById("right");
const fuel = document.getElementById("fffffuel");
const upCar = 90
const downCar = 2700
const leftCar = 0
const rightCar = 180
// komentarz
let myCar = {
  car: document.getElementById("car"),
  tank: 30,
  y: 100,
  x: 100,
  showName: function(){
    console.log('seiko');
  },
  showTank: function(){
    fuel.innerHTML = this.tank;
  },
  hideCar: function(){
    this.car.style.display = 'none'
  },
  showThis: function(){
    console.log(this);
  }
}
// pokazuje odanidoiwa

// samochód ma:
// spalać benzynę ma bak 50 l 
// po wjechaniu na stację ma tankować do momentu wyjechania ze stacji
// po wjechaniu na pole x od 0 - 100 i y 0 - 100

const combustion = () => {
  myCar.tank -= 0.5; // myCar.tank = myCar.tank - 0.5
}
const gasTank = () => {
  if((myCar.x < 100 && myCar.x > 0) && (myCar.y < 100 && myCar.y > 0) )
  myCar.tank = 50;
}

// firtst carReposition
// lawndlwanldwak

const carReposition = (positionChangeX, positionChangeY, rotation) => {
  if (myCar.tank > 0){
    myCar.y += positionChangeY;
    myCar.x += positionChangeX;
    myCar.car.style.top = `${myCar.y}px`;
    myCar.car.style.left = `${myCar.x}px`;
    myCar.car.style.transform = `rotate(${rotation}deg)`;
    combustion();
    gasTank();
    fuel.innerHTML = myCar.tank;
  }
}
carReposition(0, 0, leftCar);



const keyboard = (e) => {
  console.log(e);
  if (e.code == 'ArrowRight') carReposition(3, 0, rightCar)
  else if (e.code == "ArrowLeft") carReposition(-3, 0, leftCar)
  else if (e.code == "ArrowUp") carReposition(0, -3, upCar)
  else if (e.code == "ArrowDown") carReposition(0, 3, downCar)
}


up.addEventListener("click", () => {carReposition(0, -3, upCar)});
down.addEventListener("click", () =>{carReposition(0, 3, downCar)});
left.addEventListener("click", () =>{carReposition(-3, 0, leftCar)});
right.addEventListener("click", () =>{carReposition(3, 0, rightCar)});
document.addEventListener("keydown", (e) =>{keyboard(e)});
