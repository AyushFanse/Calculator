function calc(x){
    calcform.text1.value=calcform.text1.value+x;
    return calcform.text2.value;
}
function reset(){
    calcform.text1.value=" ";
}
function equal(){
    calcform.text1.value=eval(calcform.text1.value);
}
function clr(){
    calcform.text1.value='';
}
function slice(){
    calcform.text1.value=calcform.text1.value.slice(0,-1);
}
