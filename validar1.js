function validar()
{
    var nombredeususario=document.getElementById("textusuario").value;
    var ingresecontraceña=document.getElementById("textpass").value;
    
        if(nombredeususario=="Levi" && ingresecontraceña=="123456"){
            alert("Bienvenido, su usuario y contraceña son correctos")
            window.open("https://youtu.be/7CmRPERBUj8")
        }
        else{
            alert("Ingrese su usuario y contraseña corrrectos");
            window.open("index.html");
        }
    
}