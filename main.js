


let header = document.getElementById("header")
let  mahQowiw = document.getElementById("mahQowiw")
let ull = document.getElementById("ull")
let createMaxsulot = document.getElementById("createMaxsulot")
let newMaxNomi  = document.getElementById("newMaxNomi")

createMaxsulot.addEventListener("click", ()=>{
let yangiNom = newMaxNomi.value.trim()
if(yangiNom === "") return
let a = document.createElement("a")
a.style.textDecoration = "none"
a.href = "#"
a.textContent = yangiNom
let li = document.createElement("li")
li.appendChild(a)
ull.appendChild(li)

})

