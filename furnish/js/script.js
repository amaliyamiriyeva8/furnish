const list=document.querySelector(".list")
const nav_list=document.querySelector(".nav-list")
const nav=document.querySelector("nav")
list.addEventListener("click",()=>{
    if(nav_list.style.display!="block"){
        nav_list.style.display="block"
    }
    else{
        nav_list.style.display="none"
      
    }
})