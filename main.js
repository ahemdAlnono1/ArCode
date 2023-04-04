const pages = document.querySelectorAll(".pages-links li");

pages.forEach(function(page){
    page.addEventListener("click" , function(){
        document.querySelector(".sec-active").classList.remove("sec-active");
        document.querySelector(".li-active").classList.remove("li-active");
        document.getElementById(`${page.className}`).classList.add("sec-active");
        page.classList.add("li-active");
    })
})

document.querySelector(".nav-icon").addEventListener("click" , function(){
    const ul = document.querySelector(".pages-links");
    if(ul.getAttribute("expanded")== "true"){
        ul.setAttribute("expanded" , "false");
    }else{
        ul.setAttribute("expanded" , "true");
    }
})