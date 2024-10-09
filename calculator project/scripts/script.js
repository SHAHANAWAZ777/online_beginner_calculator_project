function clearScreen(){
    document.getElementById("result").value='';
}


function append(value){
    document.getElementById('result').value +=value;
}

function square(){
    let currentValue= document.getElementById('result').value;
    document.getElementById('result').value= eval(currentValue * currentValue);
}


function calculate(){
    let expression = document.getElementById('result').value;
    try{
        document.getElementById('result').value=eval(expression);

    }catch(error){
        document.getElementById('result').value='Error';
    }
}