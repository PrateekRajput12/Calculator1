const output=document.querySelector("#display")
const btns=document.querySelectorAll("button")
let str=''

btns.forEach(btn=>{

    btn.addEventListener("click",(e)=>{
        // console.log("tetxcontenr",e.target.textContent.trim());
        if(e.target.textContent.trim()==="AC"){
            str=''
output.value=str
        }

         else if(e.target.textContent.trim()==="="){
            str=eval(str)
            output.value=str
         }
         else if(e.target.textContent.trim()==='DEL'){
            str = str.substring(0, str.length - 1);
            output.value = str;
         }
         else{
            str+=e.target.textContent.trim()
            output.value=str
         }
        // const number=Number(btn.textContent)
        // const currentValue=Number(output.textContent)
        // output.textContent=currentValue+number
    })
 
})