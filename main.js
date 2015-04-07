// var victimsList = [];
// var victims = prompt("How many disaster victims?");
// for(var i = 0; i < victims; i++) {
// 	var vicName = prompt("Victim Name?")
// 	var vicNumber = prompt("Victim number?")
// 	var vicStreet = prompt("Victim street?")

// 	victimsList.push(vicName)
// 	victimsList.push(vicNumber)
// 	victimsList.push(vicStreet)
// }

// var volList = [];
// var vols = prompt("How many volunteers?");
// for(var i = 0; i < vols; i++) {
// 	var volName = prompt("Volunteer name?")
// 	var volNumber = prompt("Volunteer number?")
// 	var volStreet = prompt("Volunteer street?")

// 	volList.push(volName)
// 	volList.push(volNumber)
// 	volList.push(volStreet)
// }


// for(var i = 0; i < volList.length; i++) {

// }

// alert(victimsList[0] + volList[0] + victimsList[1] + volList[1])

var victimAmount = prompt("How many victims?");
var victims = [];
var victimNames = [];

for(var i = 0; i <= victimAmount.length; i++) {
	var victim = {
		vicName:  prompt("Victim Name?"),
		vicNumber: prompt("Victim Number?")
	};

	victims.push(victim);
};
for(i = 0; i <= victimAmount.length; i++) {
	victimNames.push(victims[i].vicName);
}

var volAmount = prompt("How many volunteers?");
var volunteers = [];
var volNames = [];

for(var i = 0; i <= volAmount.length; i++) {
	var volunteer = {
		volName: prompt("Volunteer Name?"),
		volNumber: prompt("Volunteer number?")
	};

	volunteers.push(volunteer);
}
for(i = 0; i <= volAmount.length; i++) {
	volNames.push(volunteers[i].volName);
}

alert("There are " + victimAmount + " people in need" + "." + "There are " + volAmount + " volunteers" + ".\n"
	+ "The victim names are " + victimNames + ",\n" + "The volunteer names are " + volNames)
