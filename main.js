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
var victimStreets = [];

for(var i = 0; i < victimAmount.length; i++) {
	var victim = {
		vicName:  prompt("Victim Name?"),
		vicStreet: prompt("Victim Street?")
	};

	victims.push(victim);
}
for(var i = 0; i < victimAmount; i++) {
	victimNames.push(victims[i].vicName);
}
for(var i = 0; i < victimAmount; i++) {
	victimStreets.push(victims[i].vicStreet);
}

var volAmount = prompt("How many volunteers?");
var volunteers = [];
var volNames = [];
var volStreets = [];

for(var i = 0; i < volAmount; i++) {
	var volunteer = {
		volName: prompt("Volunteer Name?"),
		volStreet: prompt("Volunteer Street?")
	};

	volunteers.push(volunteer);
}
for(var i = 0; i < volAmount; i++) {
	volNames.push(volunteers[i].volName);
}
for(var i = 0; i < volAmount; i++) {
	volStreets.push(volunteers[i].volStreet);
}

var inNeed = prompt("Enter the name of a person in need");
	for(var i = 0; i < victimAmount; i++) {
		if(inNeed === victims[i].vicName) {
			var streetMatch = victims[i].vicStreet;

			for(var j = 0; j < volunteers.length; j++) {
				if(volunteers[j].volStreet === streetMatch) {
					console.log(volunteers[j], victims[i]);
				} 
			}
		}
	}



// alert("There are " + victimAmount + " people in need" + "." + "There are " + volAmount + " volunteers" + ".\n"
// 	+ "The victim names are " + victimNames + ",\n" + "The volunteer names are " + volNames)





// ConfirmExercise
// var victims = [];
// var victimNames = [];

// var r = true;

// while (r) {
// 	var victim = {
// 		vicName:  prompt("Victim Name?"),
// 		vicNumber: prompt("Victim Number?")
// 	};

// 	victims.push(victim);

// 	r = confirm("More victims to enter?");

// };


