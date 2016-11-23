//For True/False variables, "1" = true; "0" = false
//TRUE / FALSE VALUES
var playerAlive = 1;       //Used to determine if the player is alive, T/F
var isAtStart = 1;       //Used to determine if user is in start area, T/F
var isAtWaterFall = 0;   //Used to determine if user is in waterfall area, T/F
var isAtChainRoom = 0;   //Used to determine if user is in chain room area, T/F
var isAtOrcRoom = 0;     //Used to determine if use is in orc room area, T/F
var orcAlive = true;        //Used to determine if orc in orc room is alive, T/F
var trueCheck = 1;    //Used as a comparable value to set equal to a value to determine if it is true  DO NOT CHANGE
var falseCheck = 0;   //Used as a comparable value to set equal to a value to determine if it is false  DO NOT CHANGE
var haveKnife = 1;  //Used to determine if the user has obtained the knife (FROM CHAIN ROOM CHEST)  (FOR USE IN ORC ROOM)
//INPUT / CHECK VALUES
var startInput = "start";  
var dontKnow = "I have no idea what you just said!";  //Used when user input is not recognized as a possible choice
var goEast = "go east";       //Used for determining direction of user input
var goNorth = "go north";     //Used for determining direction of user input
var goSouth = "go south";     //Used for determining direction of user input
var goWest = "go west";       //Used for determining direction of user input
var nothingness = "";    //Used to reset areas to an empty value
var testing = "test";  //Used ONLY in testing areas (DO NOT USE IN GAME)
var killOrc = "kill orc";  //Used to determine if the user wants to kill the orc 1/2(FOR USE IN ORC ROOM)
var killOrcOther = "kill the orc";  //Used to determine if the user wants to kill the orc 2/2 (FOR USE IN ORC ROOM)
var layDown = "lay down";   //Used to determine if the user wants to lay down (FOR USE IN CHAIN ROOM)
var goToChest = "go to chest";  //Used to determine if the user wants to go to the chest (FOR USE IN CHAIN ROOM)
var standUp = "stand up";  //Used to determine if the user wants to stand up (FOR USE IN CHAIN ROOM ONCE PLAYER IS LAYING DOWN)
var kickLock = "kick lock";  //Used to determine if the user wants to kick the chest lock 1/2 (FOR USE IN CHAIN ROOM WITH CHEST)
var kickLockOther = "kick the lock";  //Used to determine if the user wants to kick the chest lock 2/2 (FOR USE IN CHAIN ROOM WITH CHEST)
var punchLock = "punch lock";  //Used to determine if the user wants to punch the chest lock 1/2 (FOR USE IN CHAIN ROOM WITH CHEST)
var punchLockOther = "punch the lock";  //Used to determine if the user wants to punch the chest lock 2/2 (FOR USE IN CHAIN ROOM WITH CHEST)
//DESCRIPTIONS
var startDesc = "Your eyes snap open.  The dank smell of mildew is strong as you take a deep breath.  The room that you're in is dimly illuminated by a lantern.  There are three passageways leading south, west, and east.";
var waterFallDesc = "You emerge into open air, with the sound of a roaring waterfall echoing around the cavern you are currently standing in.  A rainbow is reflected in the mist.  A cave entrance leads south, and a passage branches off to the west.";
var orcRoomLiveDesc = "As you stride into the expanse, the stench of dried blood catches you off guard.  All of the sudden, an axe comes swinging at your head!  You duck in time to see a large, grizzled orc staring down at you.  He seems to be guarding an entrance towards the east corner of the room.  Two other entrances enter from the west and north.";
var orcRoomDesc = "You step into the room, nearly hurling at the new smell of blood coming from the carcass of the orc.  There are exits from the room to the north, west, and east.";
var magnetRoomDesc = "As soon as you step into the room, your compass starts to go haywire.  There are exits on all walls, and without your compass there is no telling which way is which.";
var chainRoomDesc = "As you stride into the room, you are almost clobbered by a swinging ball, which is connected to the ceiling by a long, rusty chain.  There's a small chest in the far corner of the room.  The only exits are on the north and east sides.";
var longRoomDesc = "A gust of air hits you as you emerge into the long corridor.  Windows, large and proud, reveal nothing but earth and rocks.  In the distance to the south, you can see the outline of a doorway.  A winding passageway leads to the west.";
var cliffDesc = "You fill your lungs with a breath of cool, fresh air.  You emerge on the edge of a cliff, overlooking a ravine that looks to be a couple hundred feet deep.  A lookout post is to the north, and what looks to be a shining piece of golden armor.  Another passageway leads to the south.  A strange amulet of some sort lays buried in the dirt.";
var barrelRoomDesc = "The sound of trickling water can be heard.  Hundreds of barrels line the walls, full of everything from wine to pig heads.  At one point, a small, scruff figure pops out and rushes off.  At the end of the room, an altar is visible.  A golden key is visible on top of the altar.  The room starts to shake.  THe structure is unstable!  There are no other exits besides the one you came through.";
var armyOfBonesDesc = "A chill runs through you, making your entire body subconsciously shudders.  You seem to be in a vast underground graveyard!  To the west, a doorway opens.  To the south, a grand, ornamented door yawns.  But all of the sudden, skeletons begin crawling out from all of the graves!  They begin to guard the south side door, and out of the corner of your eye, you spot an archway leading east with the inscription, 'No fools beyond this point.'";
var gottenToChest = "You have successfully gotten to the chest.  There is a small lock on the front, but it looks very rusty and fragile.";
var layingDown = "You are now laying down, staying safely out of reach from the massive ball swinging from the ceiling.";
var deadByBall = "You walk into the middle of the room, where the huge ball comes and slams your body into the wall.  You are dead.";
var deadByBallStandUp = "You jump onto your feet, instantly being hit by the ball swinging around the room, and you are killed on impact.  You are dead.";
var deadByBallWaiting = "Waiting was not an option in this situation.  While you are dilly-dallying, the massive ball crushes your body into the wall.  You are dead.";
var solidWallStart = "You run your hand along the wall, searching for some sort of opening, but there is nothing there.";
var chestOpen = "The lock has crumbled beneath your foot, making the chest pop open.  Inside, you see a rusty knife and a tattered cloth.";
var punchChest = "You punch the lock, but fail to penetrate it.  Your knuckles now sting and you are purely angry.";
var deathByCliff = "You step forward, and the floor beneath you begins to crumble.  You lose your footing, and go plummeting to the bottom of the ravine.  You are dead.";
var tryToKillOrcNoWeapon = "You look at your hands, and, with no discerable weapon, you clench your fists and take a huge swing at the orc.  It easily sidesteps your blow and whips its massive axe through your stomach.  You are dead.";
var tryToFleeOrcRoom = "You try to flee from the room, but you stumble and fall to your knees.  The last thing you will ever see is the cold, bare floor of this dungeon you were exiled to.  You can hear the orc's axe whirling through the air behind you, and you brace for the worst.  You are dead on impact.";
var killedOrc = "The orc takes a wide swing at you, but his long, slow blows are easy to avoid.  You run around him and jump up, puncturing the orc's slimy skin with your rusty dagger and causing the orc to stumble back and fall to the floor with a loud THUMP.  You have defeated the orc.  The exits from this room are to the west, north, and east.";
var waitingOrcRoomDeath = "You stand there cluelessly as the orc takes advantage of your lack of speed.  He makes a massive cleaving swing with his axe, skimming the walls of the room before it slices you right in half.  You are dead.";
//ROOM NAMES
var startRoomName = "START ROOM";  //START ROOM NEEDS NEW NAME
var chainRoomName = "CHAIN ROOM";
var waterFallName = "WATERFALL";
var magnetRoomName = "MAGNET ROOM";
var orcRoomName = "ORC ROOM";
var cliffRoomName = "CLIFF";
var barrelRoomName = "BARREL ROOM";
var longRoomName = "LONG ROOM"; 
var armyOfBonesName = "ARMY OF BONES";  //NEED A NEW IDEA FOR WHAT TO CALL ARMY OF BONES ROOM.
//MISC ITEMS
var areYouAliveItems = ["Hello?  Anyone there?", "Echo...echo...echo...", "I didn't quite catch that."];
var dontKnowItems  = ["I have no idea what you just said!", "Nope.  Doesn't ring a bell.", "404 - INPUT NOT FOUND"];
//INSTRUCTIONS
var instructionsInput = "instructions";
var instr1 = "To play, read the description of the room that you are in and enter what you would like to do into the text box, then click Continue";
var instr2 = "Some movement instructions include: go [north, south, east, west], lay down, go to [object].";
var instr3 = "Others include actions, like: kill [creature], collect [item], inspect [object].";
var instr4 = "To start the game, type in 'start' and click Continue";
var typeToContinue = "Whoops!  That isn't right!  Type in 'start' and click Continue to start the game.";
var whatToDoAreaText = "The description of the room that you are in will appear here.";
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
function startRoomAccess() { 
  document.getElementById("submit").onclick = startRoom;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaText").innerHTML = startDesc;
  document.getElementById("userChoice").innerHTML = nothingness;
  document.getElementById("areaName").innerHTML = startRoomName;
  document.getElementById("userChoice").value = nothingness;
}
function startRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase(); 
  if (choice == startInput) {
     document.getElementById("areaText").innerHTML = startDesc;
     document.getElementById("output").innerHTML = nothingness;
     document.getElementById("userChoice").value = nothingness;
  } else if (choice == goEast) {
     document.getElementById("output").innerHTML = nothingness;
     waterFallAccess();
  } else if (choice == goNorth) {
     document.getElementById("output").innerHTML = solidWallStart;
  } else if (choice == goSouth) {
    document.getElementById("output").innerHTML = nothingness;
    chainRoomAccess();
  } else if (choice == goWest) {
    longRoomAccess();
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
function instructionsAccess() {
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("submit").onclick = instructions;
  document.getElementById("areaText").innerHTML = whatToDoAreaText;
  document.getElementById("instr1").innerHTML = instr1;
  document.getElementById("instr2").innerHTML = instr2;
  document.getElementById("instr3").innerHTML = instr3;
  document.getElementById("instr4").innerHTML = instr4;
}
function instructions() {
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
   document.getElementById("submit").onclick = waterFallRoom;
   document.getElementById("output").innerHTML = nothingness;
   document.getElementById("areaText").innerHTML = waterFallDesc;
   document.getElementById("userChoice").value = nothingness;
   document.getElementById("areaName").innerHTML = waterFallName;
}
function waterFallRoom() {
   var choice = document.getElementById("userChoice").value;
   var choice = choice.toLowerCase();
  if (choice == goWest) {
     startRoomAccess();
  } else if (choice == goSouth) {
     orcRoomDetect();
  } else if (choice == goWest) {
     var index = Math.floor(Math.random() * areYouAliveItems.length);
     document.getElementById("output").innerHTML = areYouAliveItems[index];
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
function chainRoomAccess() {
   document.getElementById("submit").onclick = chainRoom;
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
  } else if (choice == goNorth) {
     startRoomAccess();
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
  document.getElementById("submit").onclick = layingDownChainRoom;
  document.getElementById("output").innerHTML = nothingness;
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
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function atChestChainRoomAccess() {
  document.getElementById("submit").onclick = atChestChainRoom;
  document.getElementById("userChoice").innerHTML = nothingness;
}
function atChestChainRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice == kickLock) {
    document.getElementById("output").innerHTML = chestOpen;
  } else if (choice == kickLockOther) {
    document.getElementById("output").innerHTML = chestOpen;
  } else if (choice == punchLock) {
    document.getElementById("output").innerHTML = punchLock;
  } else if (choice == punchLockOther) {
    document.getElementById("output").innerHTML = punchLock;
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
function magnetRoomAccess() {
  document.getElementById("submit").onclick = magnetRoom;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaText").innerHTML = magnetRoomDesc;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = magnetRoomName;
}
function magnetRoom() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
  if (choice == goNorth) {
    document.getElementById("output").innerHTML = "LOL";
  }  else if (choice == nothingness) {
    var index = Math.floor(Math.random() * areYouAliveItems.length);
    document.getElementById("output").innerHTML = areYouAliveItems[index];
    document.getElementById("userChoice").value = nothingness;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function orcRoomDetect() {
  if (orcAlive = true) {
    knifeCheck();
  } else if (orcAlive = false) {
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
  document.getElementById("submit").onclick = orcRoom;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = orcRoomName;
  document.getElementById("areaText").innerHTML = orcRoomDesc;
}
function orcRoom() {
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
function orcRoomHaveKnifeAccess() {
  document.getElementById("submit").onclick = orcRoomHaveKnife;
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
    orcAlive = false;
    var haveKnife = haveKnife - 1;
    orcRoomAccess();
  } else if (choice == killOrcOther) {
    document.getElementById("output").innerHTML = killedOrc;
    orcAlive = false;
    var haveKnife = haveKnife - 1;
    orcRoomAccess();
  } else if (choice == nothingness) {
    document.getElementById("output").innerHTML = waitingOrcRoomDeath;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function orcRoomNoKnifeAccess() {
  document.getElementById("submit").onclick = orcRoomNoKnife;
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
  } else if (choice == killOrcOther) {
    document.getElementById("output").innerHTML = tryToKillOrcNoWeapon;
  } else if (choice == goNorth) {
    document.getElementById("output").innerHTML = tryToFleeOrcRoom;
  } else if (choice == nothingness) {
    document.getElementById("output").innerHTML = waitingOrcRoomDeath;
  } else {
    var index = Math.floor(Math.random() * dontKnowItems.length);
    document.getElementById("output").innerHTML = dontKnowItems[index];
    document.getElementById("userChoice").value = nothingness;
  }
}
function cliffAccess() {
  document.getElementById("submit").onclick = cliff;
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
  } else if (choice == goSouth) {
    document.getElementById("output").innerHTML = nothingness;
    orcRoomDetermine(); 
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
  document.getElementById("submit").onclick = longRoom;
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
function armyOfBonesAccess() {
  document.getElementById("submit").onclick = armyOfBones;
  document.getElementById("output").innerHTML = nothingness;
  document.getElementById("areaText").innerHTML = armyOfBonesDesc;
  document.getElementById("userChoice").value = nothingness;
  document.getElementById("areaName").innerHTML = armyOfBonesName;
}
function armyOfBones() {
  var choice = document.getElementById("userChoice").value;
  var choice = choice.toLowerCase();
}