//planets

var starLoc=false;
var velSpacial=2000;
var percVel=300;
var noteVel=1000;
var radioCircle=2;
var radioCircleFinal=24;
var gris=255;
var grisRandom=false;
var starLocThick=1;
var starLocMaxThick=300;
var starLocRandom=false;
var starLocColor="rgb(256,256,256)";
var radioVelo=false;

ponEstrella=function(a,v){// es un circulo-planta-cuadrado-nave
  let vel;
  let ang= Math.random()*360;
  let radius=radio+margen;
  let equis=(radius/(2 + Math.random()*20) )* Math.cos(ang) + amp/2;
  let igriega=(radius/(2 + Math.random()*20) ) * Math.abs(Math.sin(ang)) + alt/2;

  vel=velSpacial;
  creaDestello(equis,igriega)
  let radioVel=radioCircle;
  if(radioVelo){radioVel*v/10}
  if (grisRandom){gris=Math.round(Math.random()*256)}
  var c = new createjs.Shape();
  c.graphics.beginFill("rgb("+gris+","+gris+","+gris+")").drawCircle(2, 2, radioVel);
  c.x = equis
  c.y = igriega;
  stage.addChild(c);
  var tamanyo=Math.random()*radioCircleFinal;
  createjs.Tween.get(c)
    .to({ x:radius * Math.cos(ang)+amp/2,y:radius*Math.sin(ang)+alt/2,
      scaleX:tamanyo, scaleY:tamanyo},vel, createjs.Ease.getPowIn(2))
    .call(handleComplete, [c]);
}

creaDestello=function(x,y){
  if(!starLoc){return}
  var destello=new createjs.Shape();

  destello.graphics.beginFill(starLocColor).drawRect(-2000,-starLocThick/2,4000,starLocThick);
  if(starLocRandom){
    starLocThick=Math.round(Math.random()*starLocMaxThick);
    starLocColor=getRandomColor()
  }
  destello.graphics.beginFill(starLocColor).drawRect(-starLocThick/2,-1000,starLocThick,2000);
  destello.x=x;destello.y=y;
  stage.addChild(destello);
  createjs.Tween.get(destello).to({visible:false }, 100).call(handleComplete, [destello]);
}

function velocidad(a,i){
  if(!i){//1-127
    velSpacial=a*a*8;
  }else{// si es encoder
    if(a<0){
      velSpacial--;
    }else{
      velSpacial++;
    }
    if(velSpacial<0){velSpacial=0;
    }else if(velSpacial>120000){velSpacial=120000}
  }
  console.log("velSp: "+velSpacial+" "+a);
}

function radioPlaneta(a,i){
  if(!i){
    radioCircle=a;
  }else{
    if(a>0&&radioCircle<50){
      radioCircle++;
    }else if (a<0&&radioCircle>0){
      radioCircle--;
    }
  }
  if (radioCircle<1){radioCircle=1}
  console.log("radioPlantet:" +radioCircle)
}//radio planets

function cercaniaPlaneta(a,i){
  if(!i){
      radioCircleFinal=a*4;
    }else{
    if(a>0&&radioCircleFinal<500){
      radioCircleFinal++;
    }else if (a<0&&radioCircleFinal>0){
      radioCircleFinal--;
    }
  }
  console.log("radioNearPlantet:" +radioCircleFinal)
}

function luzPlaneta(a,i){
  if(!i){
    gris=a*2;
  }else{
    if(a>0&&gris<254){
      gris+=10;
    }else if (a<0&&gris>2){
      gris-=10;
    }
  }
  console.log("#" +gris)
}

luzPlanetaAlienSWITCH=function(d,v){
  if(grisRandom){grisRandom=false}else{grisRandom=true}
  console.log("luzPlanetaAlienSWITCH: "+grisRandom)
}
