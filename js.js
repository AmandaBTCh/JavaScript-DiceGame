var p;
var count = 0;
var result1 = 0;
var result2 = 0;
var numberOfStars ;
function disable1(){
    document.getElementById("rollsys").disabled = true;
}
function newGame(){
    document.getElementById("n1").innerHTML = 0;
    document.getElementById("n2").innerHTML = 0;
    document.getElementById("bn1").innerHTML = 0;
    document.getElementById("bn2").innerHTML = 0;
    document.getElementById("rollsys").disabled = false;
    document.getElementById("dp1").innerHTML +="*";
     p = true;
}

function roll(){
    var bigDecimal = Math.random();
    var improvedNum = (bigDecimal * 6) + 1;
    numberOfStars = Math.floor(improvedNum);
    if(p){
        diceShow();
        document.getElementById("n1").innerHTML = numberOfStars;   
        result1= result1 + numberOfStars;
        document.getElementById("bn1").innerHTML = result1;  
         
    }
    else{
        diceShow();
        document.getElementById("n2").innerHTML = numberOfStars;
        result2= result2 + numberOfStars;
        document.getElementById("bn2").innerHTML = result2;  
        count++;
        if(count===6){
            document.getElementById("rollsys").disabled = true; 
            if(result1 > result2)
            alert("Player 1 is won!");
            else{
                alert("Player 2 is won! ");
            }
        }       
    }
    
}
function change(){
    if(p){
        p = false;
        document.getElementById("dp2").innerHTML +="*";
        document.getElementById("dp1").innerHTML ="Player 1";
        document.getElementById("d1").style.backgroundColor = "white";
        document.getElementById("d2").style.backgroundColor = "aliceblue"
    }
    else{
        p = true;
        document.getElementById("dp1").innerHTML +="*";
        document.getElementById("dp2").innerHTML ="Player 2";
        document.getElementById("d2").style.backgroundColor = "white";
        document.getElementById("d1").style.backgroundColor = "aliceblue";
    }
}
function diceShow(){
    if(numberOfStars == 1){
        document.getElementById("one").style.visibility = "visible";
        document.getElementById("two").style.visibility = "hidden";
        document.getElementById("three").style.visibility = "hidden";
        document.getElementById("four").style.visibility = "hidden";
        document.getElementById("five").style.visibility = "hidden";
        document.getElementById("six").style.visibility = "hidden";
    }
    if(numberOfStars == 2){
        document.getElementById("one").style.visibility = "hidden";
        document.getElementById("two").style.visibility = "visible";
        document.getElementById("three").style.visibility = "hidden";
        document.getElementById("four").style.visibility = "hidden";
        document.getElementById("five").style.visibility = "hidden";
        document.getElementById("six").style.visibility = "hidden";
    }
    if(numberOfStars == 3){
        document.getElementById("one").style.visibility = "hidden";
        document.getElementById("two").style.visibility = "hidden";
        document.getElementById("three").style.visibility = "visible";
        document.getElementById("four").style.visibility = "hidden";
        document.getElementById("five").style.visibility = "hidden";
        document.getElementById("six").style.visibility = "hidden";
    }
    if(numberOfStars == 4){
        document.getElementById("one").style.visibility = "hidden";
        document.getElementById("two").style.visibility = "hidden";
        document.getElementById("three").style.visibility = "hidden";
        document.getElementById("four").style.visibility = "visible";
        document.getElementById("five").style.visibility = "hidden";
        document.getElementById("six").style.visibility = "hidden";
    }
    if(numberOfStars == 5){
        document.getElementById("one").style.visibility = "hidden";
        document.getElementById("two").style.visibility = "hidden";
        document.getElementById("three").style.visibility = "hidden";
        document.getElementById("four").style.visibility = "hidden";
        document.getElementById("five").style.visibility = "visible";
        document.getElementById("six").style.visibility = "hidden";
    }
    if(numberOfStars == 6){
        document.getElementById("one").style.visibility = "hidden";
        document.getElementById("two").style.visibility = "hidden";
        document.getElementById("three").style.visibility = "hidden";
        document.getElementById("four").style.visibility = "hidden";
        document.getElementById("five").style.visibility = "hidden";
        document.getElementById("six").style.visibility = "visible";
    }

}