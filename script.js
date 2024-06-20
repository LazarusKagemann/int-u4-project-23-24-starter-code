
const textElement = document.getElementById('result');
const count = document.getElementById('count');

let counter = 0;

let o1 = document.getElementById("o1");
let o2 = document.getElementById("o2");
let o3 = document.getElementById("o3");
let o4 = document.getElementById("o4");
o1.value=0;
o2.value=0;
o3.value=0;
o4.value=0;

// textElement.innerHTML = "e";
// o11.value = "";

console.log(o1.value);

o1.addEventListener("click", function() {
    o1.value = 1;
    console.log(o1.value);

  });
o2.addEventListener("click", function() {
    o2.value = 1;
  });
o3.addEventListener("click", function() {
    o3.value = 1;
    check();
  });
o4.addEventListener("click", function() {
    o4.value = 1;
    check();
  });


function check(){
    console.log(o1.value);
    console.log(o2.value);
    console.log(o3.value);
    console.log(o4.value);

    if ((o1.value==1 || o2.value==1)&&o3.value==1){
        textElement.innerHTML = "Try System Shock.";
    }

    else if ((o1.value==1 || o2.value==1)&&o4.value==1){
        textElement.innerHTML = "Try Cruelty Squad.";
    
    count += 1;
    o1.value=0;
    o2.value=0;
    o3.value=0;
    o4.value=0;
    count.innerHTML = counter;
    }};