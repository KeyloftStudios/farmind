//Storyline designed by /u/Realistickitty and code created by /u/topdude155
//Copyright 2017 KeyLoft Studios
//All assets and code used in this game were created by the developers

function splashScreen() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if(choice.indexOf(startKeyword) !=-1){
    startRoomAccess();
  } else if (choice.indexOf(instructionsKeyword) !=-1){
    instructionsAccess();
  } else{
    document.getElementById("userChoice").value = nothingness;
  }
}
function turnCounterUpdate() {
  turns = turns + 1;
  numOfTurns = turns.toString();
  document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
}
function startRoomAccess() { 
  document.getElementById("submit").onclick = function() {startRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaText").innerHTML = startDesc;
  document.getElementById("userChoice").innerHTML = nothingness;
  document.getElementById("areaName").innerHTML = startRoomName;
  document.getElementById("userChoice").value = nothingness;
}
function startRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(eastKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    waterFallAccess();
  } else if (choice.indexOf(northKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    document.getElementById("output").innerHTML = solidWallStart;
  } else if (choice.indexOf(southKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    chainRoomAccess();
  } else if (choice.indexOf(westKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    longRoomAccess();
  } else if (choice == nothingness) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function instructionsAccess() {      //Sets up the instruction layout, calls the text for the instructions and displays it to the player.  Will self destruct afterwards.  
  document.getElementById("submit").onclick = instructions;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaText").innerHTML = whatToDoAreaText;
  document.getElementById("instr1").innerHTML = instr1;
  document.getElementById("instr2").innerHTML = instr2;
  document.getElementById("instr3").innerHTML = instr3;
  document.getElementById("instr4").innerHTML = instr4;
}
function instructions() {            //Takes input from the user in the instructions area, will only respond to 'start' and will display error message otherwise
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(startKeyword) !=-1) {
   document.getElementById("instr1").innerHTML = nothingness;
   document.getElementById("instr2").innerHTML = nothingness;
   document.getElementById("instr3").innerHTML = nothingness;
   document.getElementById("instr4").innerHTML = nothingness;
   startRoomAccess();
  } else {
    document.getElementById("output").innerHTML = typeToContinue;
  }
}
function waterFallAccess() {
   document.getElementById("submit").onclick = function() {waterFallRoom(); turnCounterUpdate();}
   document.getElementById("output").innerHTML = nothingness;
   document.getElementById("areaText").innerHTML = waterFallDesc;
   document.getElementById("userChoice").value = nothingness;
   document.getElementById("areaName").innerHTML = waterFallName;
}
function waterFallRoom() {
   var choice = document.getElementById("userChoice").value;
   var choice = choice.toLowerCase();
   if (choice.indexOf(westKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    startRoomAccess();
   } else if (choice.indexOf(southKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    orcRoomDetect();
   } else if (choice.indexOf(westKeyword) !=-1) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
   } else if(choice.indexOf(jumpKeyword) !=-1 && (choice.indexOf(waterfallKeyword) !=-1)) {
    insideWaterfallAccess();
   } else if (choice == nothingness) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
   } else {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
   }
}
function insideWaterfallAccess() {
  document.getElementById("submit").onclick = function() {insideWaterfall(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = wetRoomName;
  document.getElementById("areaText").innerHTML = insideWaterfallText;
}
function insideWaterfall() {
  var choice = document.getElementById("submit").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(pickUpKeyword) !=-1 && (choice.indexOf(torchKeyword) !=-1)) {
    haveTorchWaterfall++;
  }
}
function chainRoomAccess() {
   document.getElementById("submit").onclick = function() {chainRoom(); turnCounterUpdate();}
   document.getElementById("output").innerHTML = nothingness;
   document.getElementById("areaText").innerHTML = chainRoomDesc;
   document.getElementById("userChoice").value = nothingness;
   document.getElementById("areaName").innerHTML = chainRoomName;
}
function chainRoom() {
   var choice = document.getElementById("userChoice").value;
   var choice = choice.toLowerCase();
   if (choice.indexOf(layKeyword) !=-1) {
     layingDownChainRoomAccess();
    } else if (choice.indexOf(goKeyword) !=-1 && (choice.indexOf(chestKeyword) !=-1)) {
     document.getElementById("output").innerHTML = deadByBall;
     playerAlive = playerAlive - 1;
    } else if (choice.indexOf(northKeyword) !=-1) {
     startRoomAccess();
    }
    else if (choice.indexOf(eastKeyword) !=-1) {
     document.getElementById("output").innerHTML = tryToCrossChainRoom;
     playerAlive = playerAlive - 1;
    } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
    } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
    }
}
function layingDownChainRoomAccess() {
  document.getElementById("submit").onclick = function() {layingDownChainRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = layingDown;
  document.getElementById("userChoice").value = nothingness;
}
function layingDownChainRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(goKeyword) !=-1 && (choice.indexOf(chestKeyword) !=-1)) {
    document.getElementById("output").innerHTML = gottenToChest;
    atChestChainRoomAccess();
  } else if (choice.indexOf(standKeyword) !=-1) {
    document.getElementById("output").innerHTML = deadByBallStandUp;
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else if (choice.indexOf(northKeyword) !=-1) {
    startRoomAccess();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    magnetRoomAccess();
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function atChestChainRoomAccess() {
  document.getElementById("submit").onclick = function() {atChestChainRoom(); turnCounterUpdate();}
  document.getElementById("userChoice").value = nothingness;
}
function atChestChainRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(kickKeyword) !=-1 && (choice.indexOf(lockKeyword) !=-1)) {
    document.getElementById("output").innerHTML = chestOpen;
    chestOpenChainRoomAccess();
  } else if (choice.indexOf(punchKeyword) !=-1 && (choice.indexOf(lockKeyword) !=-1)) {
    document.getElementById("output").innerHTML = punchChest;
    document.getElementById("userChoice").value = nothingness;
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function chestOpenChainRoomAccess() {
  document.getElementById("submit").onclick = function() {chestOpenChainRoom(); turnCounterUpdate();}
  document.getElementById("userChoice").value = nothingness;
}
function chestOpenChainRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(pickKeyword) !=-1 && (choice.indexOf(knifeKeyword) !=-1)) {
    document.getElementById("output").innerHTML = pickedUpKnife;
    haveKnife = haveKnife + 1;
  } else if (choice.indexOf(pickKeyword) !=-1 && (choice.indexOf(bannerKeyword) !=-1)) {
    document.getElementById("output").innerHTML = pickedUpBanner;
    haveBanner = haveBanner + 1;
  } else if (choice.indexOf(standKeyword) !=-1) {
    document.getElementById("output").innerHTML = deadByBallStandUp;
    playerAlive--;
  } else if (choice.indexOf(northKeyword) !=-1) {
    startRoomAccess();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    magnetRoomAccess();
  }
}
function magnetRoomAccess() {
  document.getElementById("submit").onclick = function() {magnetRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaText").innerHTML = magnetRoomDesc;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = magnetRoomName;
}
function magnetRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(northKeyword) !=-1) {
    magnetRoomDirectionDetermine();
  } else if (choice.indexOf(southKeyword) !=-1) {
    magnetRoomDirectionDetermine();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    magnetRoomDirectionDetermine();
  } else if (choice.indexOf(westKeyword) !=-1) {
    magnetRoomDirectionDetermine();
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function magnetRoomDirectionDetermine() {
  var index = Math.floor(Math.random() * directionDetermine.length);
  if (directionDetermine[index] == 0) {
    chainRoomAccess();
  } else if (directionDetermine[index] == 1) {
    magnetRoomAccess();
  } else if (directionDetermine[index] == 2) {
    orcRoomDetect();
  } else if (directionDetermine[index] == 3) {
    longRoomAccess();
  }
}
function orcRoomDetect() {
  if (orcAlive == 1) {
    knifeCheck();
  } else if (orcAlive == 0) {
    orcRoomAccess();
  }
}
function knifeCheck() {
  if (haveKnife == trueCheck) {
    orcRoomHaveKnifeAccess();
  } else if(haveKnife == falseCheck) {
    orcRoomNoKnifeAccess();
  }
}
function orcRoomAccess() {
  document.getElementById("submit").onclick = function() {orcRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = orcRoomName;
  document.getElementById("areaText").innerHTML = orcRoomDesc;
}
function orcRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(northKeyword) !=-1) {
    waterFallAccess();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    cliffAccess();
  } else if (choice.indexOf(westKeyword) !=-1) {
    magnetRoomAccess();
  } else if (choice.indexOf(inspectKeyword) !=-1 && (choice.indexOf(orcKeyword) !=-1)) {
    document.getElementById("output").innerHTML = inspectOrc;
  }
}
function orcRoomHaveKnifeAccess() {
  document.getElementById("submit").onclick = function() {orcRoomHaveKnife(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = orcRoomName;
  document.getElementById("areaText").innerHTML = orcRoomLiveDesc;
}
function orcRoomHaveKnife() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  document.getElementById("userChoice").value = nothingness;
  if (choice.indexOf(killKeyword) !=-1 && (choice.indexOf(orcKeyword) !=-1)) {
    document.getElementById("output").innerHTML = killedOrc;
    orcAlive = orcAlive - 1;
    orcRoomOrcKilledContinueAccess();
  } else if (choice == nothingness) {
    document.getElementById("output").innerHTML = waitingOrcRoomDeath;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function orcRoomOrcKilledContinueAccess() {
  document.getElementById("submit").onclick = function() {orcRoomOrcKilledContinue(); turnCounterUpdate();}
}
function orcRoomOrcKilledContinue() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(northKeyword) !=-1) {
    waterFallAccess();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    cliffAccess();
  } else if (choice.indexOf(westKeyword) !=-1) {
    magnetRoomAccess();
  }
}
function orcRoomNoKnifeAccess() {
  document.getElementById("submit").onclick = function() {orcRoomNoKnife(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = orcRoomName;
  document.getElementById("areaText").innerHTML = orcRoomLiveDesc;
}
function orcRoomNoKnife() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(killKeyword) !=-1 && (choice.indexOf(orcKeyword) !=-1)) {
    document.getElementById("output").innerHTML = tryToKillOrcNoWeapon;
    playerAlive--;
  } else if (choice.indexOf(northKeyword) !=-1) {
    document.getElementById("output").innerHTML = tryToFleeOrcRoom;
    playerAlive--;
  } else if (choice.indexOf(eastKeyword) !=-1) {
    document.getElementById("output").innerHTML = tryToFleeOrcRoom;
    playerAlive--;
  } else if (choice.indexOf(westKeyword) !=-1) {
    document.getElementById("output").innerHTML = tryToFleeOrcRoom;
    playerAlive--;
  } else if (choice.indexOf(southKeyword) !=-1) {
    document.getElementById("output").innerHTML = tryToFleeOrcRoom;
    playerAlive--;
  } else if (choice == nothingness) {
    document.getElementById("output").innerHTML = waitingOrcRoomDeath;
    playerAlive--;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function cliffAccess() {
  document.getElementById("submit").onclick = function() {cliff(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaText").innerHTML = cliffDesc;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = cliffRoomName;
}
function cliff() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(northKeyword) !=-1) {
    document.getElementById("output").innerHTML = deathByCliff;
    playerAlive--;
  } else if (choice.indexOf(southKeyword) !=-1) {
    document.getElementById("output").innerHTML = nothingness;
    orcRoomDetermine(); 
  } else if (choice.indexOf(pickKeyword) !=-1 && (choice.indexOf(amuletKeyword) !=-1)) {
    document.getElementById("output").innerHTML = pickedUpAmulet;
    hasAmulet++;
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function longRoomAccess() {
  document.getElementById("submit").onclick = function() {longRoom(); turnCounterUpdate();}
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaName").innerHTML = longRoomName;
  document.getElementById("areaText").innerHTML = longRoomDesc;
}
function longRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(westKeyword) !=-1) {
    startRoomAccess();
  } else if (choice.indexOf(northKeyword) !=-1) {
    magnetRoomAccess();
  } else if (choice.indexOf(southKeyword) !=-1) {
    armyOfBonesAccess();
  }
}
function armyOfBonesDetermine() {
  if (hasAmulet == 0) {
    armyOfBonesNoAmuletAccess();
  } else if (hasAmulet == 1) {
    armyOfBonesAmuletAccess();
  }
}
function armyOfBonesNoAmuletAccess() {
  document.getElementById("submit").onclick = function() {armyOfBonesNoAmulet(); turnCounterUpdate();}
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaName").innerHTML = armyOfBonesName;
  document.getElementById("areaText").innerHTML = armyOfBonesDesc;
}
function armyOfBonesNoAmulet() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(northKeyword) !=-1) {
    longRoomDesc();
  } else if (choice.indexOf(westKeyword) !=-1) {
    barrelRoomAccess();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    roomOfRiddlesAccess();
  } else if (choice .indexOf(southKeyword) !=-1) {
    document.getElementById("output").innerHTML = tryToPushSkeletons;
    playerAlive--;
  }
}
function armyOfBonesAmuletAccess() {
  document.getElementById("submit").onclick = function() {armyOfBonesAmulet(); turnCounterUpdate();}
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaName").innerHTML = armyOfBonesName;
  document.getElementById("areaText").innerHTML = armyOfBonesDesc;
}
function armyOfBonesAmulet() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(takeKeyword) !=-1 && (choice.indexOf(amuletKeyword) !=-1)) {
    usedAmulet++;
    armyOfBonesShowAmuletAccess();
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function armyOfBonesShowAmuletAccess() {
  document.getElementById("submit").onclick = function() {armyOfBonesShowAmulet(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = useAmuletText;
  document.getElementById("userChoice").value = nothingness;
}
function armyOfBonesShowAmulet() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(westKeyword) !=-1) {
    barrelRoomAccess();
  } else if (choice.indexOf(eastKeyword) !=-1) {
    roomOfRiddlesAccess();
  } else if (choice.indexOf(southKeyword) !=-1) {
    treasureRoomAccess();
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function barrelRoomAccess() {
  document.getElementById("submit").onclick = function() {barrelRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = barrelRoomName;
  document.getElementById("areaText").innerHTML = barrelRoomDesc;
}
function barrelRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(pickKeyword) !=-1 & (choice.indexOf(keyKeyword) !=-1)) {
    haveKey++;
    document.getElementById("output").innerHTML = pickedUpKey;
    barrelRoomTurnOne();
  } else if (choice.indexOf(grabKeyword) !=-1 && (choice.indexOf(keyKeyword) !=-1)) {
    haveKey++;
    document.getElementById("output").innerHTML = pickedUpKey;
    barrelRoomTurnOne();
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function barrelRoomTurnOne() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(eastKeyword) !=-1) {
    armyOfBonesDetermine();
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function treasureRoomAccess() {
  document.getElementById("submit").onclick = function() {treasureRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = treasureRoomName;
  document.getElementById("areaText").innerHTML = treasureRoomDesc;
}
function treasureRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice.indexOf(northKeyword) !=-1) {
    armyOfBonesDetermine();
  } else if (choice.indexOf(southKeyword) !=-1) {
    transportRoomAccess();
  }
}
function transportRoomAccess() {
  document.getElementById("submit").onclick = function() {transportRoom(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = transportRoomName;
  document.getElementById("areaText").innerHTML = transportRoomDesc;
}
function transportRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
}