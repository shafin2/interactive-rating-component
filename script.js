let box1=document.getElementById("box1")
let box2=document.getElementById("box2")
let btns=document.getElementsByClassName("btns")
let submit_btn=document.getElementById("submit")
let msg=document.getElementById("message")
let btnval=6
for(let i=0;i<btns.length;i++){
    btns[i].addEventListener("click",()=>{
        btnval=parseInt(btns[i].innerHTML)
        console.log(btnval)
    })
}
submit_btn.addEventListener("click",()=>{
    if(btnval==6){
        alert("Please select ratting")
    }
    else{
        box1.style.display="none"
        box2.style.display="flex"
        msg.innerHTML=`you select ${btnval} out of 5`
    }
})