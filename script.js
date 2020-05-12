function buttonclick(val){
    console.log(val)
    document.getElementById("screen").value = document.getElementById("screen").value+val;
}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    let filled=document.getElementById('screen').value
    let result=eval(filled)
    document.getElementById('screen').value=result
}