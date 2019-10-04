var upload = document.getElementById("upload"),
    upload2 = document.getElementById("upload2"),
    formAddRecurso = document.getElementById("form-agregar-recurso"),
    formAddRecurso2 = document.getElementById("form-agregar-recurso2")
    isHidden = true;
upload.addEventListener("click", function(e){
    e.preventDefault();
    if(isHidden){
        formAddRecurso.className = "agregar-recurso animated  flipInY col-md-3 visible";
        isHidden = false;
    }else{
        formAddRecurso.className += "agregar-recurso animated hidden ";
        isHidden = true;
    }
});
upload2.addEventListener("click", function(e){
    e.preventDefault();
    if(isHidden){
        formAddRecurso.className = "agregar-recurso animated  flipInY col-md-3 visible";
        isHidden = false;
    }else{
        formAddRecurso.className += "agregar-recurso animated hidden ";
        isHidden = true;
    }
});

upload3.addEventListener("click", function(e){
    e.preventDefault();
    if(isHidden){
        formAddRecurso2.className = "agregar-recurso animated  flipInY col-md-3 visible";
        isHidden = false;
    }else{
        formAddRecurso2.className += "agregar-recurso animated hidden ";
        isHidden = true;
    }
});

upload4.addEventListener("click", function(e){
    e.preventDefault();
    if(isHidden){
        formAddRecurso2.className = "agregar-recurso animated  flipInY col-md-3 visible";
        isHidden = false;
    }else{
        formAddRecurso2.className += "agregar-recurso animated hidden ";
        isHidden = true;
    }
});