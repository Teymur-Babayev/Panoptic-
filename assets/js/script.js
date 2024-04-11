const chk = document.querySelector(".chk-box");
const pass = document.querySelector(".pass-inpt");
const passs = document.querySelector(".two");
chk.addEventListener("click", tglclass);
function tglclass(){
    chk.classList.toggle("active");
    if (pass.type == "password"){
        pass.type = "text"
        passs.type = "text"
    }
    else{
        pass.type = "password"
        passs.type = "password"
    }
};

const back = () =>{
    window.location.href= ("index.html")
}
