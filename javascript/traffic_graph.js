function speeding(row) {
	var split = row.split(",")
	return "Speeding" === split[7]
}

function equipment(row) {
	var split = row.split(",")
	return "Equipment" === split[7]
}

function registration(row) {
	var split = row.split(",")
	return "Registration/plates" === split[7]
}

function otherReason(row) {
	var split = row.split(",")
	return "Registration/plates" !== split[7] && "Equipment" !== split[7] && "Speeding" !== split[7]
}
	
	

// Race
function isCaucasian(row) {
			var split = row.split(",")
			return "White" === split[5]

}
function isHispanic(row) {
	var split = row.split(",")
	return "Hispanic" === split[5]
}

function isAfrican(row) {
	var split = row.split(",")
	return "Black" === split[5]
}

function isOther(row) {
	var split = row.split(",")
	return "Asian" === split[5]
}

// Gender
function isMale(row) {
			var split = row.split(",")
			return "M" === split[4]

}

function isFemale(row) {
			var split = row.split(",")
			return "F" === split[4]

}

function blankUsedColumns(row) {
    var split = row.split(",")
    return "" !== split[4] && "" !== split[5] && "" !== split[6]
}

function blankOutcomeColumns(row) {
    var split = row.split(",")
    return "" !== split[10]
}
		
async function getPolarData() {
    const response = await fetch('../data/trafficStop.csv')
    const trafficStopData = await response.text()
	const table = trafficStopData.split('\n').slice(1)

    const filtered = table.filter(blankOutcomeColumns)

    var arrestDriver = 0;
    var arrestPass = 0;
    var noAction = 0;
    var citation = 0;
    var warning = 0;
    var nd = 0;
    for (i = 0; i < filtered.length; i++) {
        var split = filtered[i].split(",")
        if (split[10] === "Warning") {
            warning++
        }
        else if(split[10]=== "No Action") {
            noAction++
        }
        else if (split[10] === "N/D"){
            nd++
        }
        else if (split[10] === "Citation") {
            citation++
        }
        else if (split[10] === "Arrest Driver") {
            arrestDriver++
        }
        else if (split[10] === "Arrest Passenger") {
            arrestPass ++
        }

    }
    console.log("Warning, " + warning)
    console.log("citation " + citation)
    console.log("arrestDriver " + arrestDriver)
    console.log("arrestPass " + arrestPass)
    console.log("noAction " + noAction)
    console.log("ND " + nd)



    



}

// Simply need the total number of arrests by race. 
async function getData() {

	const response = await fetch('data/trafficStop.csv')
    const trafficStopData = await response.text()
	const table = trafficStopData.split('\n').slice(1)

    const filtered = table.filter(blankUsedColumns)

    // Get speeding data
    const speedingData = filtered.filter(speeding)

    // Speeding by race
    const caucasianSpeeding = speedingData.filter(isCaucasian)
	const hispanicSpeeding = speedingData.filter(isHispanic)
	const africanSpeeding = speedingData.filter(isAfrican)
	const otherSpeeding = speedingData.filter(isOther)

    // Get equipment data
    const equipmentData = filtered.filter(equipment)

    // Get other data
    const otherData = filtered.filter(otherReason)

    // Equipment by race
    const caucasianEquipment= equipmentData.filter(isCaucasian)
	const hispanicEquipment = equipmentData.filter(isHispanic)
	const africanEquipment = equipmentData.filter(isAfrican)
	const otherEquipment = equipmentData.filter(isOther)


    // Get registration data
    const registrationData = filtered.filter(registration)

    // Registration by race
    const caucasianRegistration = registrationData.filter(isCaucasian)
    const hispanicRegistration = registrationData.filter(isHispanic)
    const africanRegistration = registrationData.filter(isAfrican)
    const otherRegistration = registrationData.filter(isOther)

    // Other Reason by Race
    const caucasianOther = otherData.filter(isCaucasian)
    const hispanicOther = otherData.filter(isHispanic)
    const africanOther = otherData.filter(isAfrican)
    const otherOther = otherData.filter(isOther)



    // Male Caucasian, Arrests for Speeding
	const maleCaucasianSpeeding = caucasianSpeeding.filter(isMale)

	let maleCaucasianSpeedingCounter = 0;
	let maleCaucasianSpeedingArrests = 0;
	let maleCaucasianSpeedingPercentage = 0;
	for (y of maleCaucasianSpeeding) {
		maleCaucasianSpeedingCounter++;
		if (y.split(",")[11] === "TRUE") {
            maleCaucasianSpeedingArrests++
        }
	}		
	maleCaucasianSpeedingAvg = (maleCaucasianSpeedingArrests / maleCaucasianSpeedingCounter) * 100
	console.log("Male Caucasian Speeding Percentage is " + maleCaucasianSpeedingAvg)

    // Female Caucasian, Arrests for Speeding

    const femaleCaucasianSpeeding = caucasianSpeeding.filter(isFemale)

	let femaleCaucasianSpeedingCounter = 0;
	let femaleCaucasianSpeedingArrests = 0;
	let femaleCaucasianSpeedingPercentage = 0;
	for (y of femaleCaucasianSpeeding) {
		femaleCaucasianSpeedingCounter++;
		if (y.split(",")[11] === "TRUE") {
            femaleCaucasianSpeedingArrests++
        }
	}		
	femaleCaucasianSpeedingAvg = (femaleCaucasianSpeedingArrests / femaleCaucasianSpeedingCounter) * 100
	console.log("Female Caucasian Speeding Percentage is " + femaleCaucasianSpeedingAvg)


     // Male Hispanic, Arrests for Speeding
	const maleHispanicSpeeding = hispanicSpeeding.filter(isMale)

    let maleHispanicSpeedingCounter = 0;
    let maleHispanicSpeedingArrests = 0;
    let maleHispanicSpeedingPercentage = 0;
    for (y of maleHispanicSpeeding) {
        maleHispanicSpeedingCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleHispanicSpeedingArrests++
        }
    }		
    maleHispanicSpeedingAvg = (maleHispanicSpeedingArrests / maleHispanicSpeedingCounter) * 100
    console.log("Male Hispanic Speeding Percentage is " + maleHispanicSpeedingAvg)

     // Female Hispanic, Arrests for Speeding
	const femaleHispanicSpeeding = hispanicSpeeding.filter(isFemale)

    let femaleHispanicSpeedingCounter = 0;
    let femaleHispanicSpeedingArrests = 0;
    let femaleHispanicSpeedingPercentage = 0;
    for (y of femaleHispanicSpeeding) {
        femaleHispanicSpeedingCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleHispanicSpeedingArrests++
        }
    }		
    femaleHispanicSpeedingAvg = (femaleHispanicSpeedingArrests / femaleHispanicSpeedingCounter) * 100
    console.log("Female Hispanic Speeding Percentage is " + femaleHispanicSpeedingAvg)

    

    // Male African, Arrests for Speeding
    const maleAfricanSpeeding = africanSpeeding.filter(isMale)

    let maleAfricanSpeedingCounter = 0;
    let maleAfricanSpeedingArrests = 0;
    let maleAfricanSpeedingPercentage = 0;
    for (y of maleAfricanSpeeding) {
        maleAfricanSpeedingCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleAfricanSpeedingArrests++
        }
    }		
    maleAfricanSpeedingAvg = (maleAfricanSpeedingArrests / maleAfricanSpeedingCounter) * 100
    console.log("Male African Speeding Percentage is " + maleAfricanSpeedingAvg)

    // Female African, Arrests for Speeding
    const femaleAfricanSpeeding = africanSpeeding.filter(isFemale)

    let femaleAfricanSpeedingCounter = 0;
    let femaleAfricanSpeedingArrests = 0;
    let femaleAfricanSpeedingPercentage = 0;
    for (y of femaleAfricanSpeeding) {
        femaleAfricanSpeedingCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleAfricanSpeedingArrests++
        }
    }		
    femaleAfricanSpeedingAvg = (femaleAfricanSpeedingArrests / femaleAfricanSpeedingCounter) * 100
    console.log("Female African Speeding Percentage is " + femaleAfricanSpeedingAvg)

      // Male Other, Arrests for Speeding
    const maleOtherSpeeding = otherSpeeding.filter(isMale)

    let maleOtherSpeedingCounter = 0;
    let maleOtherSpeedingArrests = 0;
    let maleOtherSpeedingPercentage = 0;
    for (y of maleOtherSpeeding) {
        maleOtherSpeedingCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleOtherSpeedingArrests++
        }
    }		
    maleOtherSpeedingAvg = (maleOtherSpeedingArrests / maleOtherSpeedingCounter) * 100
    console.log("Male Other Speeding Percentage is " + maleOtherSpeedingAvg)

    // Female Other, Arrests for Speeding
    const femaleOtherSpeeding = otherSpeeding.filter(isFemale)

    let femaleOtherSpeedingCounter = 0;
    let femaleOtherSpeedingArrests = 0;
    let femaleOtherSpeedingPercentage = 0;
    for (y of femaleOtherSpeeding) {
        femaleOtherSpeedingCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleOtherSpeedingArrests++
        }
    }		
    femaleOtherSpeedingAvg = (femaleOtherSpeedingArrests / femaleOtherSpeedingCounter) * 100
    console.log("Female Other Speeding Percentage is " + femaleOtherSpeedingAvg)


    // Male Caucasian, Arrests for Equipment
    const maleCaucasianEquipment = caucasianEquipment.filter(isMale)

    let maleCaucasianEquipmentCounter = 0;
    let maleCaucasianEquipmentArrests = 0;
    let maleCaucasianEquipmentPercentage = 0;
    for (y of maleCaucasianEquipment) {
        maleCaucasianEquipmentCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleCaucasianEquipmentArrests++
        }
    }		
    maleCaucasianEquipmentAvg = (maleCaucasianEquipmentArrests / maleCaucasianEquipmentCounter) * 100
    console.log("Male Caucasian Equipment Percentage is " + maleCaucasianEquipmentAvg)

     // Female Caucasian, Arrests for Equipment
    const femaleCaucasianEquipment = caucasianEquipment.filter(isFemale)

    let femaleCaucasianEquipmentCounter = 0;
    let femaleCaucasianEquipmentArrests = 0;
    let femaleCaucasianEquipmentPercentage = 0;
    for (y of femaleCaucasianEquipment) {
        femaleCaucasianEquipmentCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleCaucasianEquipmentArrests++
        }
    }		
    femaleCaucasianEquipmentAvg = (femaleCaucasianEquipmentArrests / femaleCaucasianEquipmentCounter) * 100
    console.log("Female Caucasian Equipment Percentage is " + femaleCaucasianEquipmentAvg)

    // Male Hispanic, Arrests for Equipment
    const maleHispanicEquipment = hispanicEquipment.filter(isMale)

    let maleHispanicEquipmentCounter = 0;
    let maleHispanicEquipmentArrests = 0;
    let maleHispanicEquipmentPercentage = 0;
    for (y of maleHispanicEquipment) {
        maleHispanicEquipmentCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleHispanicEquipmentArrests++
        }
    }		
    maleHispanicEquipmentAvg = (maleHispanicEquipmentArrests / maleHispanicEquipmentCounter) * 100
    console.log("Male Hispanic Equipment Percentage is " + maleHispanicEquipmentAvg)

    // Female Hispanic, Arrests for Equipment
    const femaleHispanicEquipment = hispanicEquipment.filter(isFemale)

    let femaleHispanicEquipmentCounter = 0;
    let femaleHispanicEquipmentArrests = 0;
    let femaleHispanicEquipmentPercentage = 0;
    for (y of femaleHispanicEquipment) {
        femaleHispanicEquipmentCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleHispanicEquipmentArrests++
        }
    }		
    femaleHispanicEquipmentAvg = (femaleHispanicEquipmentArrests / femaleHispanicEquipmentCounter) * 100
    console.log("Female Hispanic Equipment Percentage is " + femaleHispanicEquipmentAvg)

     // Male African, Arrests for Equipment
     const maleAfricanEquipment = africanEquipment.filter(isMale)

        let maleAfricanEquipmentCounter = 0;
        let maleAfricanEquipmentArrests = 0;
        let maleAfricanEquipmentPercentage = 0;
        for (y of maleAfricanEquipment) {
            maleAfricanEquipmentCounter++;
            if (y.split(",")[11] === "TRUE") {
                maleAfricanEquipmentArrests++
            }
        }		
        maleAfricanEquipmentAvg = (maleAfricanEquipmentArrests / maleAfricanEquipmentCounter) * 100
        console.log("Male African Equipment Percentage is " + maleAfricanEquipmentAvg)

        // Female African, Arrests for Equipment
        const femaleAfricanEquipment = africanEquipment.filter(isFemale)

        let femaleAfricanEquipmentCounter = 0;
        let femaleAfricanEquipmentArrests = 0;
        let femaleAfricanEquipmentPercentage = 0;
        for (y of femaleAfricanEquipment) {
            femaleAfricanEquipmentCounter++;
            if (y.split(",")[11] === "TRUE") {
                femaleAfricanEquipmentArrests++
            }
        }		
        femaleAfricanEquipmentAvg = (femaleAfricanEquipmentArrests / femaleAfricanEquipmentCounter) * 100
        console.log("Female African Equipment Percentage is " + femaleAfricanEquipmentAvg)

         // Male Other, Arrests for Equipment
        const maleOtherEquipment = otherEquipment.filter(isMale)

        let maleOtherEquipmentCounter = 0;
        let maleOtherEquipmentArrests = 0;
        let maleOtherEquipmentPercentage = 0;
        for (y of maleOtherEquipment) {
            maleOtherEquipmentCounter++;
            if (y.split(",")[11] === "TRUE") {
                maleOtherEquipmentArrests++
            }
        }		
        maleOtherEquipmentAvg = (maleOtherEquipmentArrests / maleOtherEquipmentCounter) * 100
        console.log("Male Other Equipment Percentage is " + maleOtherEquipmentAvg)
                
          // Female Other, Arrests for Equipment
          const femaleOtherEquipment = otherEquipment.filter(isMale)

        let femaleOtherEquipmentCounter = 0;
        let femaleOtherEquipmentArrests = 0;
        let femaleOtherEquipmentPercentage = 0;
        for (y of femaleOtherEquipment) {
            femaleOtherEquipmentCounter++;
            if (y.split(",")[11] === "TRUE") {
                femaleOtherEquipmentArrests++
            }
        }		
        femaleOtherEquipmentAvg = (femaleOtherEquipmentArrests / femaleOtherEquipmentCounter) * 100
        console.log("Female Other Equipment Percentage is " + femaleOtherEquipmentAvg)


        


        // Male Caucasian, Arrests for Registration/Plates
	const maleCaucasianRegistration = caucasianRegistration.filter(isMale)

    let maleCaucasianRegistrationCounter = 0;
    let maleCaucasianRegistrationArrests = 0;
    let maleCaucasianRegistrationPercentage = 0;
    for (y of maleCaucasianRegistration) {
        maleCaucasianRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleCaucasianRegistrationArrests++
        }
    }		
    maleCaucasianRegistrationAvg = (maleCaucasianRegistrationArrests / maleCaucasianRegistrationCounter) * 100
    console.log("Male Caucasian Registration Percentage is " + maleCaucasianRegistrationAvg)

         // Female Caucasian, Arrests for Registration/Plates
	const femaleCaucasianRegistration = caucasianRegistration.filter(isFemale)

    let femaleCaucasianRegistrationCounter = 0;
    let femaleCaucasianRegistrationArrests = 0;
    let femaleCaucasianRegistrationPercentage = 0;
    for (y of femaleCaucasianRegistration) {
        femaleCaucasianRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleCaucasianRegistrationArrests++
        }
    }		
    femaleCaucasianRegistrationAvg = (femaleCaucasianRegistrationArrests / femaleCaucasianRegistrationCounter) * 100
    console.log("Female Caucasian Registration Percentage is " + femaleCaucasianRegistrationAvg)

    



          // Male Hispanic, Arrests for Registration/Plates
         
if (hispanicRegistration) {
	const maleHispanicRegistration = hispanicRegistration.filter(isMale)

    let maleHispanicRegistrationCounter = 0;
    let maleHispanicRegistrationArrests = 0;
    let maleHispanicRegistrationPercentage = 0;
    for (y of maleHispanicRegistration) {
        maleHispanicRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleHispanicRegistrationArrests++
        }
    }		
    maleHispanicRegistrationAvg = (maleHispanicRegistrationArrests / maleHispanicRegistrationCounter) * 100
    console.log("Male Hispanic Registration Percentage is " + maleHispanicRegistrationAvg)


    // Female Hispanic, Arrests for Registration/Plates
	const femaleHispanicRegistration = hispanicRegistration.filter(isFemale)

    let femaleHispanicRegistrationCounter = 0;
    let femaleHispanicRegistrationArrests = 0;
    let femaleHispanicRegistrationPercentage = 0;
    for (y of femaleHispanicRegistration) {
        femaleHispanicRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleHispanicRegistrationArrests++
        }
    }		
    femaleHispanicRegistrationAvg = (femaleHispanicRegistrationArrests / femaleHispanicRegistrationCounter) * 100
    console.log("Female Hispanic Registration Percentage is " + femaleHispanicRegistrationAvg)


}

const maleAfricanRegistration = africanRegistration.filter(isMale)

    let maleAfricanRegistrationCounter = 0;
    let maleAfricanRegistrationArrests = 0;
    let maleAfricanRegistrationPercentage = 0;
    for (y of maleAfricanRegistration) {
        maleAfricanRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleAfricanRegistrationArrests++
        }
    }		
    maleAfricanRegistrationAvg = (maleAfricanRegistrationArrests / maleAfricanRegistrationCounter) * 100
    console.log("Male African Registration Percentage is " + maleAfricanRegistrationAvg)

    const femaleAfricanRegistration = africanRegistration.filter(isFemale)

    let femaleAfricanRegistrationCounter = 0;
    let femaleAfricanRegistrationArrests = 0;
    let femaleAfricanRegistrationPercentage = 0;
    for (y of femaleAfricanRegistration) {
        femaleAfricanRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleAfricanRegistrationArrests++
        }
    }		
    femaleAfricanRegistrationAvg = (femaleAfricanRegistrationArrests / femaleAfricanRegistrationCounter) * 100
    console.log("Female African Registration Percentage is " + femaleAfricanRegistrationAvg)

    const maleOtherRegistration = otherRegistration.filter(isMale)

    let maleOtherRegistrationCounter = 0;
    let maleOtherRegistrationArrests = 0;
    let maleOtherRegistrationPercentage = 0;
    for (y of maleOtherRegistration) {
        maleOtherRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleOtherRegistrationArrests++
        }
    }		
    maleOtherRegistrationAvg = (maleOtherRegistrationArrests / maleOtherRegistrationCounter) * 100
    console.log("Male Other Registration Percentage is " + maleOtherRegistrationAvg)

    const femaleOtherRegistration = otherRegistration.filter(isFemale)

    let femaleOtherRegistrationCounter = 0;
    let femaleOtherRegistrationArrests = 0;
    let femaleOtherRegistrationPercentage = 0;
    for (y of femaleOtherRegistration) {
        femaleOtherRegistrationCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleOtherRegistrationArrests++
        }
    }		
    femaleOtherRegistrationAvg = (femaleOtherRegistrationArrests / femaleOtherRegistrationCounter) * 100
    console.log("Female Other Registration Percentage is " + femaleOtherRegistrationAvg)



    // Male Caucasian, Arrests for Other Reasons
    const maleCaucasianOther = caucasianOther.filter(isMale)

    let maleCaucasianOtherCounter = 0;
    let maleCaucasianOtherArrests = 0;
    let maleCaucasianOtherPercentage = 0;
    for (y of maleCaucasianOther) {
        maleCaucasianOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleCaucasianOtherArrests++
        }
    }		
    maleCaucasianOtherAvg = (maleCaucasianOtherArrests / maleCaucasianOtherCounter) * 100
    console.log("Male Caucasian Other Reason Arrest Percentage is " + maleCaucasianOtherAvg)


     // Female Caucasian, Arrests for Other Reasons
     const femaleCaucasianOther = caucasianOther.filter(isFemale)

    let femaleCaucasianOtherCounter = 0;
    let femaleCaucasianOtherArrests = 0;
    let femaleCaucasianOtherPercentage = 0;
    for (y of femaleCaucasianOther) {
        femaleCaucasianOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleCaucasianOtherArrests++
        }
    }		
    femaleCaucasianOtherAvg = (femaleCaucasianOtherArrests / femaleCaucasianOtherCounter) * 100
    console.log("Female Caucasian Other Reason Arrest Percentage is " + femaleCaucasianOtherAvg)


    // Male Hispanic, Arrests for Other Reasons
    const maleHispanicOther = hispanicOther.filter(isMale)

    let maleHispanicOtherCounter = 0;
    let maleHispanicOtherArrests = 0;
    let maleHispanicOtherPercentage = 0;
    for (y of maleHispanicOther) {
        maleHispanicOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleHispanicOtherArrests++
        }
    }		
    maleHispanicOtherAvg = (maleHispanicOtherArrests / maleHispanicOtherCounter) * 100
    console.log("Male Hispanic Other Reason Arrest Percentage is " + maleHispanicOtherAvg)

     // Male Hispanic, Arrests for Other Reasons
     const femaleHispanicOther = hispanicOther.filter(isFemale)

    let femaleHispanicOtherCounter = 0;
    let femaleHispanicOtherArrests = 0;
    let femaleHispanicOtherPercentage = 0;
    for (y of femaleHispanicOther) {
        femaleHispanicOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleHispanicOtherArrests++
        }
    }		
    femaleHispanicOtherAvg = (femaleHispanicOtherArrests / femaleHispanicOtherCounter) * 100
    console.log("Female Hispanic Other Reason Arrest Percentage is " + femaleHispanicOtherAvg)


     // Male African, Arrests for Other Reasons
     const maleAfricanOther = africanOther.filter(isMale)

    let maleAfricanOtherCounter = 0;
    let maleAfricanOtherArrests = 0;
    let maleAfricanOtherPercentage = 0;
    for (y of maleAfricanOther) {
        maleAfricanOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleAfricanOtherArrests++
        }
    }		
    maleAfricanOtherAvg = (maleAfricanOtherArrests / maleAfricanOtherCounter) * 100
    console.log("Male African Other Reason Arrest Percentage is " + maleAfricanOtherAvg)

       // Female African, Arrests for Other Reasons
       const femaleAfricanOther = africanOther.filter(isFemale)

    let femaleAfricanOtherCounter = 0;
    let femaleAfricanOtherArrests = 0;
    let femaleAfricanOtherPercentage = 0;
    for (y of femaleAfricanOther) {
        femaleAfricanOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleAfricanOtherArrests++
        }
    }		
    femaleAfricanOtherAvg = (femaleAfricanOtherArrests / femaleAfricanOtherCounter) * 100
    console.log("Female African Other Reason Arrest Percentage is " + femaleAfricanOtherAvg)


    // Male Other, Arrests for Other Reasons
    const maleOtherOther = otherOther.filter(isMale)

    let maleOtherOtherCounter = 0;
    let maleOtherOtherArrests = 0;
    let maleOtherOtherPercentage = 0;
    for (y of maleOtherOther) {
        maleOtherOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            maleOtherOtherArrests++
        }
    }		
    maleOtherOtherAvg = (maleOtherOtherArrests / maleOtherOtherCounter) * 100
    console.log("Male Other Race, Other Reason Arrest Percentage is " + maleOtherOtherAvg)

     // Female Other, Arrests for Other Reasons
     const femaleOtherOther = otherOther.filter(isFemale)

    let femaleOtherOtherCounter = 0;
    let femaleOtherOtherArrests = 0;
    let femaleOtherOtherPercentage = 0;
    for (y of femaleOtherOther) {
        femaleOtherOtherCounter++;
        if (y.split(",")[11] === "TRUE") {
            femaleOtherOtherArrests++
        }
    }		
    femaleOtherOtherAvg = (femaleOtherOtherArrests / femaleOtherOtherCounter) * 100
    console.log("Female Other Race, Other Reason Arrest Percentage is " + femaleOtherOtherAvg)



    


}


	
const data = {
  //labels: ['Caucasian', 'Hispanic', 'African-American', 'Other'],
  datasets: [{
    label: 'Speeding Stops Leading To Arrest',
    data: [
		{x : 'Caucasian', "Male": 1.1884012042465535, "Female": 0.4128124761103891 },
		{x : 'Hispanic', "Male": 3.197086199919061, "Female": 1.5189873417721518 },
		{x : 'African-American', "Male": 3.051391862955032, "Female": 1.36986301369863 },
		{x : 'Other', "Male": 0.4191114836546521, "Female": 0.936768149882904 }



],
    backgroundColor: 
      'rgba(153, 102, 255, 0.2)',
    borderColor: 
	'rgba(153, 102, 255, 1)',

    borderWidth: 1
  },
  {
    label: 'Equipment Stops Leading To Arrest',
    data: [
		{x : 'Caucasian', "Male": 4.526404023470243, "Female": 5.454545454545454 },
		{x : 'Hispanic', "Male": 7.779670641680863, "Female": 7.371007371007371 },
		{x : 'African-American', "Male": 9.101654846335698, "Female": 9.327548806941431 },
		{x : 'Other', "Male": 2.73224043715847, "Female": 2.629139072847682 }



],
    backgroundColor: 
      'rgba(255, 26, 104, 0.2)',
      
    borderColor: 'rgba(255, 26, 104, 1)',
    borderWidth: 1
  },
  {
    label: 'Registration/Plate Stops Leading to Arrest',
    data: [
		{x : 'Caucasian', "Male": 7.675753228120516, "Female": 6.825938566552901 },
		{x : 'Hispanic', "Male": 6.770833333333333, "Female": 6.770833333333333 },
		{x : 'African-American', "Male": 12.214983713355048, "Female": 12.549019607843137 },
		{x : 'Other', "Male": 3.7735849056603774, "Female": 6.25 }



],
    backgroundColor: 
      'rgba(100, 200, 100, 0.2)',
      
    borderColor: 'rgba(100, 200, 100, 1)',
    borderWidth: 1
  },
  {
    label: 'Other Reason for Traffic Stop',
    data: [
		{x : 'Caucasian', "Male": 4.3944984904394495, "Female": 5.742211362248015 },
		{x : 'Hispanic', "Male": 6.930358350236647, "Female": 7.446808510638298 },
		{x : 'African-American', "Male": 6.09208309938237, "Female": 9.67741935483871 },
		{x : 'Other', "Male": 4.645476772616137, "Female": 4.166666666666666 }



],
    backgroundColor: 
      'rgba(100, 100, 100, 0.2)',
      
    borderColor: 'rgba(100, 100, 100, 1)',
    borderWidth: 1
  },

  


]
  
};

// config 
const config = {
  type: 'line',
  data,
  options: {
	parsing: {
		xAxisKey: 'x',
		yAxisKey: 'Male'
	},
    scales: {
      y: {
        beginAtZero: true,
        title: {
            display: true,
            text: "% of Stops Leading to Arrest"
        }
      }
    }
  }
};


getData()
getPolarData()
const myChart = new Chart(
  document.getElementById('myChart'),
  config
);

function genderBasedData(gender){
	console.log(gender.value)
	myChart.config.options.parsing.yAxisKey = gender.value;
	myChart.update()
}

function updateChart(dataset) {
	const isVisible = myChart.isDatasetVisible(dataset.value)
	console.log(isVisible)
	if (isVisible === false) {
		myChart.show(dataset.value  )
	}
	if (isVisible === true) {
		myChart.hide(dataset.value  )
	}
}

const data2 = {
  labels: [
    'Driver Arrested',
    'Passenger Arrested',
    'No Action',
    'Citation',
    'Warning',
    'N/D'
  ],
  datasets: [{
    label: '',
    data: [2521, 320, 617, 7685, 5129, 606],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 200, 132)',

      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};

const config2= {
  type: 'polarArea',
  data: data2,
  options: {}
};

const polarChart = new Chart(
  document.getElementById('polarChart'),
  config2
);