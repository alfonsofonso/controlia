//midimap needs a funciones array and some ids
var mapping=false;
var funcSelected;
var chequeado;
var botonClicado=false;
var caja=document.getElementById("midimapper")

midimap=function(){
  if(mapping){
    caja.style="display:none";
    mapping=false
    funcSelected="";
    chequeado="";
    for (let i in mapaMidi) {
      mapaMidiFast[mapaMidi[i][0]]=[i,mapaMidi[i][1]];
      }
  }else{
    caja.style="display:block";
    caja.style.height=alt*.8;
    caja.style.width=amp*.8;
    mapping=true;
  }
}

buttover=function(d){
  d.path[0].style.backgroundColor="yellow"
}
buttout=function(d){
  d.path[0].style.backgroundColor=""
}

buttclick=function(d){
  botonClicado=d.path[0].parentElement.parentElement;
  funcSelected=d.path[0].textContent;//recojo el nombre de la función
  chequeado=botonClicado.lastChild.firstChild.checked;
}

addFunctions=function(){
  var tabla=document.getElementById("mitabla");

  for (let i in mapaMidi) {
    var cont=document.createElement("div");
    var bot=document.createElement("div");

    var t = document.createTextNode(i);
    var d=document.createElement("div");
    var t2 = document.createTextNode(mapaMidi[i][0]);
    var toggle=document.createElement("input");
    toggle.type="checkbox";
    toggle.className="toggl";

    var row=tabla.insertRow();
    var cel1=row.insertCell(0);
    bot.className="boto";
    bot.onmouseover=buttover;
    bot.onmouseout=buttout;
    bot.onclick=buttclick;
    bot.appendChild(t);
    cel1.appendChild(bot)
    var cel2=row.insertCell(1);
    d.appendChild(t2);
    d.className="knob";
    cel2.appendChild(d);
    var cel3=row.insertCell(2);
    cel3.appendChild(toggle);
    cel3.onclick=function(){this.parentElement.children[1].firstChild.textContent=""};
  }
}

mapea=function(data){
  mapaMidi[funcSelected]=[data[1],chequeado];//asigno el num del knob a la funcion
  if(botonClicado){botonClicado.children[1].children[0].textContent=data[1]}
}

mueveknob=function(k,v){// evaluo la funcion que corresponde a ese knob
      let infinito=mapaMidiFast[k][1]||false;
      eval(mapaMidiFast[k][0])(v,infinito);
}
  //eval(mapaMidi[k][0])(v,infinito)// le envio velocidad y si es encode
