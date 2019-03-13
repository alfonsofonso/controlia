var mapaMidi={
  "volumen":[75,false],
  "velocidad":[95,false],
  "luzPlaneta":[2,false],
  "radioPlaneta":[76,false],
  "cercaniaPlaneta":[92,false],
  "luzPlanetaAlienSWITCH":[22,false]
};

mapaMidiFast={};

for (let i in mapaMidi) {
  mapaMidiFast[mapaMidi[i][0]]=[i,mapaMidi[i][1]];
}
