//Storyline designed by /u/Realistickitty and code created by /u/topdude155
//Copyright 2017 KeyLoft Studios
//All assets and code used in this game were created by the developers

function splashScreen() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if(choice == startInput){
    startRoomAccess();
  } else if (choice == instructionsInput){
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
  if (choice == goEast) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    waterFallAccess();
  } else if (choice == goNorth) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    document.getElementById("output").innerHTML = solidWallStart;
  } else if (choice == goSouth) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    chainRoomAccess();
  } else if (choice == goWest) {
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
  if (choice == startInput) {
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
   if (choice == goWest) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    startRoomAccess();
   } else if (choice == goSouth) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    orcRoomDetect();
   } else if (choice == goWest) {
    document.getElementById("turnCounter").innerHTML = "Turns: " + numOfTurns;
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
   } else if(choice == jumpIntoWaterfall) {
    insideWaterfallAccess();
   } else if(choice = jumpIntoWaterfallOther) {
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
  if (choice == pickUpTorchWaterfall) {
    haveTorchWaterfall++;
  } else if (choice == pickUpTorchWatefallOther) {
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
   if (choice == layDown) {
     layingDownChainRoomAccess();
    } else if (choice == goToChest) {
     document.getElementById("output").innerHTML = deadByBall;
     playerAlive = playerAlive - 1;
    } else if (choice == goNorth) {
     startRoomAccess();
    }
    else if (choice == goEast) {
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
  if (choice == goToChest) {
    document.getElementById("output").innerHTML = gottenToChest;
    atChestChainRoomAccess();
  } else if (choice == standUp) {
    document.getElementById("output").innerHTML = deadByBallStandUp;
  } else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else if (choice == goNorth) {
    startRoomAccess();
  } else if (choice == goEast) {
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
  if (choice == kickLock) {
    document.getElementById("output").innerHTML = chestOpen;
    chestOpenChainRoomAccess();
  } else if (choice == kickLockOther) {
    document.getElementById("output").innerHTML = chestOpen;
    chestOpenChainRoomAccess();
  } else if (choice == punchLock) {
    document.getElementById("output").innerHTML = punchChest;
    document.getElementById("userChoice").value = nothingness;
  } else if (choice == punchLockOther) {
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
  if (choice == pickUpKnife) {
    document.getElementById("output").innerHTML = pickedUpKnife;
    haveKnife = haveKnife + 1;
    chainRoomHaveKnifeNoBannerAccess();
  } else if (choice == pickUpKnifeOther) {
    document.getElementById("output").innerHTML = pickedUpKnife;
    haveKnife = haveKnife + 1;
    chainRoomHaveKnifeNoBannerAccess();
  } else if (choice == pickUpBanner) {
    document.getElementById("output").innerHTML = pickedUpBanner;
    haveBanner = haveBanner + 1;
    chainRoomHaveItemsAccess();
  } else if (choice == pickUpBannerOther) {
    document.getElementById("output").innerHTML = pickedUpBanner;
    haveBanner = haveBanner + 1;
    chainRoomHaveItemsAccess();
  }
}
function chainRoomHaveKnifeNoBannerAccess() {
  document.getElementById("submit").onclick = function() {chainRoomHaveKnifeNoBanner(); turnCounterUpdate();}
  document.getElementById("userChoice").value = nothingness;
}
function chainRoomHaveKnifeNoBanner() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice == pickUpBanner) {
    document.getElementById("output").innerHTML = pickedUpBanner;
    haveBanner = haveBanner + 1;
  } else if (choice == pickUpBannerOther) {
    document.getElementById("output").innerHTML = pickedUpBanner;
    haveBanner = haveBanner + 1;
  } else if (choice == goNorth) {
    startRoomAccess();
  } else if (choice == goEast) {
    magnetRoomAccess();
  }
}
function chainRoomHaveItemsAccess() {
  document.getElementById("submit").onclick = function() {chainRoomHaveItems(); turnCounterUpdate();}
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
}
function chainRoomHaveItems() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice == goNorth) {
    startRoomAccess();
  } else if (choice == goEast) {
    magnetRoomAccess();
  } else if (choice == standUp) {
    document.getElementById("output").innerHTML = deadByBallStandUp;
    playerAlive = playerAlive - 1;
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
  if (choice == goNorth) {
    magnetRoomDirectionDetermine();
  } else if(choice == goSouth) {
    magnetRoomDirectionDetermine();
  } else if (choice == goEast) {
    magnetRoomDirectionDetermine();
  } else if (choice == goWest) {
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
  if (choice == killOrc) {
    document.getElementById("output").innerHTML = killedOrc;
    orcAlive = orcAlive - 1;
    orcRoomOrcKilledContinueAccess();
  } else if (choice == killOrcOther) {
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
  if (choice == goNorth) {
    waterFallAccess();
  } else if (choice == goEast) {
    cliffAccess();
  } else if (choice == goWest) {
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
  document.getElementById("userChoice").value = nothingness;
  if (choice == killOrc) {
    document.getElementById("output").innerHTML = tryToKillOrcNoWeapon;
    playerAlive = playerAlive - 1;
  } else if (choice == killOrcOther) {
    document.getElementById("output").innerHTML = tryToKillOrcNoWeapon;
    playerAlive = playerAlive - 1;
  } else if (choice == goNorth) {
    document.getElementById("output").innerHTML = tryToFleeOrcRoom;
    playerAlive = playerAlive - 1;
  } else if (choice == nothingness) {
    document.getElementById("output").innerHTML = waitingOrcRoomDeath;
    playerAlive = playerAlive - 1;
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
  if (choice == goNorth) {
    document.getElementById("output").innerHTML = deathByCliff;
    playerAlive = playerAlive - 1;
  } else if (choice == goSouth) {
    document.getElementById("output").innerHTML = nothingness;
    orcRoomDetermine(); 
  } else if (choice == pickUpAmulet) {
    document.getElementById("output").innerHTML = pickedUpAmulet;
    hasAmulet = hasAmulet + 1;
  } else if (choice == pickUpAmuletOther) {
    document.getElementById("output").innerHTML = pickedUpAmulet;
    hasAmulet = hasAmulet + 1;
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
  if (choice == goWest) {
    startRoomAccess();
  } else if (choice == goNorth) {
    magnetRoomAccess();
  } else if (choice == goSouth) {
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
  if (choice == goNorth) {
    longRoomDesc();
  } else if (choice == goWest) {
    barrelRoomAccess();
  } else if (choice == goEast) {
    roomOfRiddlesAccess();
  } else if (choice == goSouth) {
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
  if (choice == takeOutAmulet) {
    usedAmulet++;
    armyOfBonesShowAmuletAccess();
  } else if (choice == takeOutAmuletOther) {
    usedAmulet++;
    armyOfBonesShowAmuletAccess();
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
  if (choice == goWest) {
    barrelRoomAccess();
  } else if (choice == goEast) {
    roomOfRiddlesAccess();
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
  if (choice == pickUpKey) {
    haveKey++;
    document.getElementById("output").innerHTML = pickedUpKey;
    barrelRoomTurnOne();
  } else if (choice == pickUpKeyOther) {
    haveKey++;
    document.getElementById("output").innerHTML = pickedUpKey;
    barrelRoomTurnOne();
  } else if (choice == grabKey) {
    haveKey++;
    document.getElementById("output").innerHTML = pickedUpKey;
    barrelRoomTurnOne();
  } else if (choice == grabKeyOther) {
    haveKey++;
    document.getElementById("output").innerHTML = pickedUpKey;
    barrelRoomTurnOne();
  }
}