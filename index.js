

function validarString (cadenaAnalizar) {
    var arrayDummy = new Array();
    for (var i = 0; i< cadenaAnalizar.length; i++) {
          var caracter = cadenaAnalizar.charAt(i);
          var caracter2;
          if( caracter == "[" || caracter == "(" ||caracter == "{") {
             arrayDummy.push(caracter);
           }  else {
              if (caracter == "]"){
                  caracter2 = arrayDummy.pop();
                  if(caracter2 != "["){
                      return "Cadena incorrecta";
                  }
              }else{
                  if (caracter == ")"){
                      caracter2 = arrayDummy.pop()
                      if(caracter2 != "(")
                      {
                        return "Cadena incorrecta";
                      }
                  }else{
                    if (caracter == "}"){
                        caracter2 = arrayDummy.pop()
                        if(caracter2 != "{")
                        {
                          return "Cadena incorrecta";
                        }
                  }
              }
           }
     } 
 }

 if(arrayDummy.length > 0)
 {
    return "Cadena incorrecta";
 }else{
    return "Cadena correcta";
 }
}  
console.log(validarString("}(2+[3-12]*{8/3})"));
console.log(validarString("(2+[3-12]*{8/3})"));
console.log(validarString("{}(2+{3-12*{8/3})"));