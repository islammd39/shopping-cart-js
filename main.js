
function shoppingCart(isIncricess){
    const doValue = document.getElementById('do-value');
    const invalue = doValue.value;
    const valueString = parseInt(invalue);
    let plusValue; 
    if(isIncricess === true){
        plusValue = valueString + 1;
    }
    else{
        
        plusValue = valueString - 1;
    }
    
    doValue.value = plusValue;
    return plusValue;
}


document.getElementById('btn-incrices').addEventListener('click',function(){
    const plusValue = shoppingCart(true);
    const multi = plusValue * 59;
    const multification = document.getElementById('multification');
    multification.innerText = multi; 
});
document.getElementById('btn-decricess').addEventListener('click',function(){
    const plusValue = shoppingCart(false);
    const multi = plusValue * 59;
    const multification = document.getElementById('multification');
    multification.innerText = multi;   
});


