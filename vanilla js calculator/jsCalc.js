window.onload= function(){

    const zero = document.getElementById("zero");
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    const three = document.getElementById("three");
    const four = document.getElementById("four");
    const five = document.getElementById("five");
    const six = document.getElementById("six");
    const seven = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const nine = document.getElementById("nine")
    const divide = document.getElementById("divide");
    const multiply = document.getElementById("multiply");
    const add = document.getElementById("add");
    const subtract = document.getElementById("subtract");
    const calcOutput = document.getElementById("calcOutput")
    const enter = document.getElementById("enter")

    let numArray = [zero,one,two,three,four,five,six,seven,eight,nine];

    let calcOutputContent = [];
    let firstValue;
    let secondValue;
    let operator;
    

    function giveValue (element){
        calcOutputContent.push(element.innerText);
        calcOutput.innerHTML = calcOutputContent.join('')
    }
    numArray.forEach(function(item){
        item.addEventListener("click",function(){giveValue(item)})
    });
    divide.addEventListener("click",function(){
        firstValue = calcOutputContent.join('')
        operator = "/"
        calcOutputContent = []
    })
    add.addEventListener("click",function(){
        firstValue = calcOutputContent.join('')
        operator = "+"
        calcOutputContent = []
    })
    subtract.addEventListener("click",function(){
        firstValue = calcOutputContent.join('')
        operator = "-"
        calcOutputContent = []
    })
    multiply.addEventListener("click",function(){
        firstValue = calcOutputContent.join('')
        operator = "x"
        calcOutputContent = []
    })

    enter.addEventListener("click",function(){
        if(firstValue){
            secondValue = calcOutput.innerHTML
            if(operator == "/"){
                return calcOutput.innerHTML = firstValue + operator + secondValue + "=" + firstValue/secondValue
            }
            if(operator == "+"){
                return calcOutput.innerHTML = firstValue + operator + secondValue + "=" + firstValue+secondValue
            }
            if(operator == "x"){
                return calcOutput.innerHTML = firstValue + operator + secondValue + "=" + firstValue*secondValue
            }
            if(operator == "-"){
                return calcOutput.innerHTML = firstValue + operator + secondValue + "=" + firstValue-secondValue
            }
            
        }
        calcOutputContent=[];
        firstValue=0;
        secondValue=0;
    })


}


