// let h1= document.querySelector("h1")
// let p= document.querySelector("p")
// p.innerText= "hello"
// h1.appendChild(p)
// console.log(h1);






let inp = document.querySelector("input")
let h1= document.querySelector("h1")
let btn= document.querySelector("button")
btn.addEventListener("click",()=>{
    h1.innerText += "\n" + inp.value
    inp.value= ""
})




// inp.addEventListener("input",(e)=>{
//     // console.log(e.target.value);
//     h1.innerText= e.target.value;
// })



// setInterval(()=>{
//     console.log("hello");
// },1000)
// setTimeout(()=>{
//     console.log("byee");
// },2000)