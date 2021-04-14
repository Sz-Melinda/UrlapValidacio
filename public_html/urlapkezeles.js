window.addEventListener("load", init);

/*-------------------------------------------------------*/
function ID(nev){
    
    return document.getElementById(nev);
}

function $(nev){
    
    return document.guerySelectorAll(nev); 
}

/*-------------------------------------------------------*/
function init(){
    
    ID("kuld").addEventListener("click", validalas); 
}
/*-------------------------------------------------------*/

function validalas(){
    
    var megadottAdatok = "";
    
    /*-------------------------------------------------------*/
    // NÉV VALIDÁLÁS
    
    var uzenet = "";
    
    if(ID("nev").value.length < 3){
        
        uzenet = "A név legalább 3 karakter hosszú legyen!<br>";
        
        ID("nev").style.border = "2px solid red";
        
    }else{
        
        ID("nev").style.border = "none";
    }
    
    
    var regNev = /[A-Z] + [a-z] {2,}/;
    
    if(!regNev.test(ID("nev").value)){
        
        uzenet = "A név legalább 3 karakter hosszú legyen, és nagybetűvel kezdődjön!<br>";
        
        ID("nev").style.border = "2px solid red";
        
    }else{
        
        ID("nev").style.border = "none";
        
        megadottAdatok += "Név: " + ID("nev").value + "<br>";
    }
    
    /*-------------------------------------------------------*/
    // EMAIL VALIDÁLÁS
    
    var regEmail = /[a-z]+@[a-z]+.hu$/;
    
    if(!regEmail.test(ID("email").value)){
        
        uzenet = "Nem megfelelő az email formátuma!<br>";
        
        ID("email").style.border = "2px solid red";
        
    }else{
        
        ID("email").style.border = "none";
        
        megadottAdatok += "Email: " + ID("email").value + "<br>";
    }
    
    
    
    
    if(ID("email") != ID("emailUj")){
        
        uzenet = "Az Email címek nem egyeznek!<br>";
        
        ID("emailUj").style.border = "2px solid red";
    }else{
        
        ID("nev").style.border = "none";
    }
    
    
    
    /*-------------------------------------------------------*/
    
    $("aside section:nth-child(1) p")[0].innerHTML = uzenet;
    $("aside section:nth-child(2) p")[0].innerHTML = megadottAdatok;
}