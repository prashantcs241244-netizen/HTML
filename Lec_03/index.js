 let btn= document.querySelector("button")
  let body = document.querySelector("body") 
  let h2= document.querySelector("h2") 
  let data = prompt("Enter the username")
  console.log(data);
//      btn.addEventListener("click",function(){
//         console.log("hello");
//         body.style.backgroundColor="pink"

//     })
    let isBool = true
    h2.innerText= "hello " +" " + data;
    // btn.addEventListener("click",function(){
    //     if(isBoolean){
    //         body.style.backgroundColor="pink"
    //         isBoolean=false;
    //     }   
    //     else{
    //         body.style.backgroundColor="green"
    //         isBoolean=true;
    //     }
    // })
    body.appendChild(h2);

