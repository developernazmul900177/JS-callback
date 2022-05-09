

function myDisplayer(some){
    document.getElementById('demo').innerHTML = some;
}


function myDisplay1(){
    myDisplayer("Hello");
}

function myDisplay2(){
    myDisplayer("World");
}


myDisplay2();
myDisplay1();