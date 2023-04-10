// setup 


function riskOfViolence_compas(row) {
			var split = row.split(",")
			return "Risk of Violence" === split[21]
		}

		function riskOfRecidivism_compas(row) {
			var split = row.split(",")
			return "Risk of Recidivism" === split[21]
		}

		function riskFailureToAppear_compas(row) {
			var split = row.split(",")
			return "Risk of Failure to Appear" === split[21]
		}



// Race
function isCaucasian_compas(row) {
			var split = row.split(",")
			return "Caucasian" === split[8]

}
function isHispanic_compas(row) {
	var split = row.split(",")
	return "Hispanic" === split[8]
}

function isAfrican_compas(row) {
	var split = row.split(",")
	return "African-American" === split[8]
}

function isOther_compas(row) {
	var split = row.split(",")
	return "Other" === split[8]
}

// Gender
function isMale_compas(row) {
			var split = row.split(",")
			return "Male" === split[7]

}

function isFemale(row) {
			var split = row.split(",")
			return "Female" === split[7]

}
		
async function getData_compas() {

	const response = await fetch('../data/compas-scores-raw.csv') // change to rawscores
    const compasData = await response.text()
	const table = compasData.split('\n').slice(1)



	// Get Risk of Violence Data
	const violence = table.filter(riskOfViolence_compas)
	
	// Get Risk of Recidivism Data
	const recidivism = table.filter(riskOfRecidivism_compas)

	// Get Risk of Failure To Appear Data
	const failureToAppear = table.filter(riskFailureToAppear_compas)

	// Violence By Race
	const caucasianViolence = violence.filter(isCaucasian_compas)
	const hispanicViolence = violence.filter(isHispanic_compas)
	const africanViolence = violence.filter(isAfrican_compas)
	const otherViolence = violence.filter(isOther_compas)

	// Recidivism By Race
	const caucasianRecidivism = recidivism.filter(isCaucasian_compas)
	const hispanicRecidivism = recidivism.filter(isHispanic_compas)
	const africanRecidivism = recidivism.filter(isAfrican_compas)
	const otherRecidivism = recidivism.filter(isOther_compas)

	// Failure To Appear By Race
	const caucasianFailure = failureToAppear.filter(isCaucasian_compas)
	const hispanicFailure = failureToAppear.filter(isHispanic_compas)
	const africanFailure = failureToAppear.filter(isAfrican_compas)
	const otherFailure = failureToAppear.filter(isOther_compas)

	// Male Caucasian, Risk of Violence
	const maleCaucasianViolence = caucasianViolence.filter(isMale_compas)

	let maleCaucasianViolenceCounter = 0;
	let maleCaucasianViolenceSum = 0;
	let maleCaucasianViolenceAvg = 0;
	for (y of maleCaucasianViolence) {
		maleCaucasianViolenceCounter++;
		
		maleCaucasianViolenceSum+= parseInt(y.split(",")[23])
	}		
	maleCaucasianViolenceAvg = maleCaucasianViolenceSum / maleCaucasianViolenceCounter
	console.log("Male Caucasian Violence Average is " + maleCaucasianViolenceAvg)

	// Female Caucasian, Risk of Violence
	const femaleCaucasianViolence = caucasianViolence.filter(isFemale)

	let femaleCaucasianViolenceCounter = 0;
	let femaleCaucasianViolenceSum = 0;
	let femaleCaucasianViolenceAvg = 0;
	for (y of femaleCaucasianViolence) {
		femaleCaucasianViolenceCounter++;
		
		femaleCaucasianViolenceSum+= parseInt(y.split(",")[23])
	}		
	femaleCaucasianViolenceAvg = femaleCaucasianViolenceSum / femaleCaucasianViolenceCounter
	console.log("Female Caucasian Violence Average is " + femaleCaucasianViolenceAvg)

	// Male Hispanic, Risk of Violence
	const maleHispanicViolence = hispanicViolence.filter(isMale_compas)

	let maleHispanicViolenceCounter = 0;
	let maleHispanicViolenceSum = 0;
	let maleHispanicViolenceAvg = 0;
	for (y of maleHispanicViolence) {
		maleHispanicViolenceCounter++;
		
		maleHispanicViolenceSum+= parseInt(y.split(",")[23])
	}		
	maleHispanicViolenceAvg = maleHispanicViolenceSum / maleHispanicViolenceCounter
	console.log("Male Hispanic Violence Average is " + maleHispanicViolenceAvg)


	// Female Hispanic, Risk of Violence
	const femaleHispanicViolence = hispanicViolence.filter(isFemale)

	let femaleHispanicViolenceCounter = 0;
	let femaleHispanicViolenceSum = 0;
	let femaleHispanicViolenceAvg = 0;
	for (y of femaleHispanicViolence) {
		femaleHispanicViolenceCounter++;
		
		femaleHispanicViolenceSum+= parseInt(y.split(",")[23])
	}		
	femaleHispanicViolenceAvg = femaleHispanicViolenceSum / femaleHispanicViolenceCounter
	console.log("Female Hispanic Violence Average is " + femaleHispanicViolenceAvg)

	// Male African-American, Risk of Violence
	const maleAfricanViolence = africanViolence.filter(isMale_compas)

	let maleAfricanViolenceCounter = 0;
	let maleAfricanViolenceSum = 0;
	let maleAfricanViolenceAvg = 0;
	for (y of maleAfricanViolence) {
		maleAfricanViolenceCounter++;
		
		maleAfricanViolenceSum+= parseInt(y.split(",")[23])
	}		
	maleAfricanViolenceAvg = maleAfricanViolenceSum / maleAfricanViolenceCounter
	console.log("Male African-American Violence Average is " + maleAfricanViolenceAvg)

	// Female African-American, Risk of Violence
	const femaleAfricanViolence = africanViolence.filter(isFemale)

	let femaleAfricanViolenceCounter = 0;
	let femaleAfricanViolenceSum = 0;
	let femaleAfricanViolenceAvg = 0;
	for (y of femaleAfricanViolence) {
		femaleAfricanViolenceCounter++;
		
		femaleAfricanViolenceSum+= parseInt(y.split(",")[23])
	}		
	femaleAfricanViolenceAvg = femaleAfricanViolenceSum / femaleAfricanViolenceCounter
	console.log("Female African-American Violence Average is " + femaleAfricanViolenceAvg)

	// Male Other, Risk of Violence
	const maleOtherViolence = otherViolence.filter(isMale_compas)

	let maleOtherViolenceCounter = 0;
	let maleOtherViolenceSum = 0;
	let maleOtherViolenceAvg = 0;
	for (y of maleOtherViolence) {
		maleOtherViolenceCounter++;
		
		maleOtherViolenceSum+= parseInt(y.split(",")[23])
	}		
	maleOtherViolenceAvg = maleOtherViolenceSum / maleOtherViolenceCounter
	console.log("Male Other Violence Average is " + maleOtherViolenceAvg)

	// Female Other, Risk of Violence
	const femaleOtherViolence = otherViolence.filter(isFemale)

	let femaleOtherViolenceCounter = 0;
	let femaleOtherViolenceSum = 0;
	let femaleOtherViolenceAvg = 0;
	for (y of femaleOtherViolence) {
		femaleOtherViolenceCounter++;
		
		femaleOtherViolenceSum+= parseInt(y.split(",")[23])
	}		
	femaleOtherViolenceAvg = femaleOtherViolenceSum / femaleOtherViolenceCounter
	console.log("Male Other Violence Average is " + femaleOtherViolenceAvg)

	// Male Caucasian, Risk of Recidivism
	const maleCaucasianRecidivism = caucasianRecidivism.filter(isMale_compas)

	let maleCaucasianRecidivismCounter = 0;
	let maleCaucasianRecidivismSum = 0;
	let maleCaucasianRecidivismAvg = 0;
	for (y of maleCaucasianRecidivism) {
		maleCaucasianRecidivismCounter++;
		
		maleCaucasianRecidivismSum+= parseInt(y.split(",")[23])
	}		
	maleCaucasianRecidivismAvg = maleCaucasianRecidivismSum / maleCaucasianRecidivismCounter
	console.log("Male Caucasian Recidivism Average is " + maleCaucasianRecidivismAvg)

	// Female Caucasian, Risk of Recidivism
	const femaleCaucasianRecidivism = caucasianRecidivism.filter(isFemale)

	let femaleCaucasianRecidivismCounter = 0;
	let femaleCaucasianRecidivismSum = 0;
	let femaleCaucasianRecidivismAvg = 0;
	for (y of femaleCaucasianRecidivism) {
		femaleCaucasianRecidivismCounter++;
		
		femaleCaucasianRecidivismSum+= parseInt(y.split(",")[23])
	}		
	femaleCaucasianRecidivismAvg = femaleCaucasianRecidivismSum / femaleCaucasianRecidivismCounter
	console.log("Female Caucasian Recidivism Average is " + femaleCaucasianRecidivismAvg)

	// Male Hispanic, Risk of Recidivism
	const maleHispanicRecidivism = hispanicRecidivism.filter(isMale_compas)

	let maleHispanicRecidivismCounter = 0;
	let maleHispanicRecidivismSum = 0;
	let maleHispanicRecidivismAvg = 0;
	for (y of maleHispanicRecidivism) {
		maleHispanicRecidivismCounter++;
		
		maleHispanicRecidivismSum+= parseInt(y.split(",")[23])
	}		
	maleHispanicRecidivismAvg = maleHispanicRecidivismSum / maleHispanicRecidivismCounter
	console.log("Male Hispanic Recidivism Average is " + maleHispanicRecidivismAvg)

	// Female Hispanic, Risk of Recidivism
	const femaleHispanicRecidivism = hispanicRecidivism.filter(isFemale)

	let femaleHispanicRecidivismCounter = 0;
	let femaleHispanicRecidivismSum = 0;
	let femaleHispanicRecidivismAvg = 0;
	for (y of femaleHispanicRecidivism) {
		femaleHispanicRecidivismCounter++;
		
		femaleHispanicRecidivismSum+= parseInt(y.split(",")[23])
	}		
	femaleHispanicRecidivismAvg = femaleHispanicRecidivismSum / femaleHispanicRecidivismCounter
	console.log("Female Hispanic Recidivism Average is " + femaleHispanicRecidivismAvg)

	// Male African-American, Risk of Recidivism
	const maleAfricanRecidivism = africanRecidivism.filter(isMale_compas)

	let maleAfricanRecidivismCounter = 0;
	let maleAfricanRecidivismSum = 0;
	let maleAfricanRecidivismAvg = 0;
	for (y of maleAfricanRecidivism) {
		maleAfricanRecidivismCounter++;
		
		maleAfricanRecidivismSum+= parseInt(y.split(",")[23])
	}		
	maleAfricanRecidivismAvg = maleAfricanRecidivismSum / maleAfricanRecidivismCounter
	console.log("Male African Recidivism Average is " + maleAfricanRecidivismAvg)

	// Female African-American, Risk of Recidivism
	const femaleAfricanRecidivism = africanRecidivism.filter(isFemale)

	let femaleAfricanRecidivismCounter = 0;
	let femaleAfricanRecidivismSum = 0;
	let femaleAfricanRecidivismAvg = 0;
	for (y of femaleAfricanRecidivism) {
		femaleAfricanRecidivismCounter++;
		
		femaleAfricanRecidivismSum+= parseInt(y.split(",")[23])
	}		
	femaleAfricanRecidivismAvg = femaleAfricanRecidivismSum / femaleAfricanRecidivismCounter
	console.log("Female African Recidivism Average is " + femaleAfricanRecidivismAvg)


	// Male Other, Risk of Recidivism
	const maleOtherRecidivism = otherRecidivism.filter(isMale_compas)

	let maleOtherRecidivismCounter = 0;
	let maleOtherRecidivismSum = 0;
	let maleOtherRecidivismAvg = 0;
	for (y of maleOtherRecidivism) {
		maleOtherRecidivismCounter++;
		
		maleOtherRecidivismSum+= parseInt(y.split(",")[23])
	}		
	maleOtherRecidivismAvg = maleOtherRecidivismSum / maleOtherRecidivismCounter
	console.log("Male Other Recidivism Average is " + maleOtherRecidivismAvg)

	// Female Other, Risk of Recidivism
	const femaleOtherRecidivism = otherRecidivism.filter(isFemale)

	let femaleOtherRecidivismCounter = 0;
	let femaleOtherRecidivismSum = 0;
	let femaleOtherRecidivismAvg = 0;
	for (y of femaleOtherRecidivism) {
		femaleOtherRecidivismCounter++;
		
		femaleOtherRecidivismSum+= parseInt(y.split(",")[23])
	}		
	femaleOtherRecidivismAvg = femaleOtherRecidivismSum / femaleOtherRecidivismCounter
	console.log("Female Other Recidivism Average is " + femaleOtherRecidivismAvg)

	// Male Caucasian, Failure To Appear
	const maleCaucasianFailure = caucasianFailure.filter(isMale_compas)

	let maleCaucasianFailureCounter = 0;
	let maleCaucasianFailureSum = 0;
	let maleCaucasianFailureeAvg = 0;
	for (y of maleCaucasianFailure) {
		maleCaucasianFailureCounter++;
		
		maleCaucasianFailureSum+= parseInt(y.split(",")[23])
	}		
	maleCaucasianFailureAvg = maleCaucasianFailureSum / maleCaucasianFailureCounter
	console.log("Male Caucasian Failure Average is " + maleCaucasianFailureAvg)

	// Female Caucasian, Failure To Appear
	const femaleCaucasianFailure = caucasianFailure.filter(isFemale)

	let femaleCaucasianFailureCounter = 0;
	let femaleCaucasianFailureSum = 0;
	let femaleCaucasianFailureeAvg = 0;
	for (y of femaleCaucasianFailure) {
		femaleCaucasianFailureCounter++;
		
		femaleCaucasianFailureSum+= parseInt(y.split(",")[23])
	}		
	femaleCaucasianFailureAvg = femaleCaucasianFailureSum / femaleCaucasianFailureCounter
	console.log("Female Caucasian Failure Average is " + femaleCaucasianFailureAvg)


	// Male Hispanic, Failure To Appear
	const maleHispanicFailure = hispanicFailure.filter(isMale_compas)

	let maleHispanicFailureCounter = 0;
	let maleHispanicFailureSum = 0;
	let maleHispanicFailureeAvg = 0;
	for (y of maleHispanicFailure) {
		maleHispanicFailureCounter++;
		
		maleHispanicFailureSum+= parseInt(y.split(",")[23])
	}		
	maleHispanicFailureAvg = maleHispanicFailureSum / maleHispanicFailureCounter
	console.log("Male Hispanic Failure Average is " + maleHispanicFailureAvg)

	// Female Hispanic, Failure To Appear
	const femaleHispanicFailure = hispanicFailure.filter(isFemale)

	let femaleHispanicFailureCounter = 0;
	let femaleHispanicFailureSum = 0;
	let femaleHispanicFailureeAvg = 0;
	for (y of femaleHispanicFailure) {
		femaleHispanicFailureCounter++;
		
		femaleHispanicFailureSum+= parseInt(y.split(",")[23])
	}		
	femaleHispanicFailureAvg = femaleHispanicFailureSum / femaleHispanicFailureCounter
	console.log("Female Hispanic Failure Average is " + femaleHispanicFailureAvg)

	// Male African, Failure To Appear
	const maleAfricanFailure = africanFailure.filter(isMale_compas)

	let maleAfricanFailureCounter = 0;
	let maleAfricanFailureSum = 0;
	let maleAfricanFailureeAvg = 0;
	for (y of maleAfricanFailure) {
		maleAfricanFailureCounter++;
		
		maleAfricanFailureSum+= parseInt(y.split(",")[23])
	}		
	maleAfricanFailureAvg = maleAfricanFailureSum / maleAfricanFailureCounter
	console.log("Male African Failure Average is " + maleAfricanFailureAvg)

	// Female African, Failure To Appear
	const femaleAfricanFailure = africanFailure.filter(isFemale)

	let femaleAfricanFailureCounter = 0;
	let femaleAfricanFailureSum = 0;
	let femaleAfricanFailureeAvg = 0;
	for (y of femaleAfricanFailure) {
		femaleAfricanFailureCounter++;
		
		femaleAfricanFailureSum+= parseInt(y.split(",")[23])
	}		
	femaleAfricanFailureAvg = femaleAfricanFailureSum / femaleAfricanFailureCounter
	console.log("Female African Failure Average is " + femaleAfricanFailureAvg)

	// Male Other, Failure To Appear
	const maleOtherFailure = otherFailure.filter(isMale_compas)

	let maleOtherFailureCounter = 0;
	let maleOtherFailureSum = 0;
	let maleOtherFailureeAvg = 0;
	for (y of maleOtherFailure) {
		maleOtherFailureCounter++;
		
		maleOtherFailureSum+= parseInt(y.split(",")[23])
	}		
	maleOtherFailureAvg = maleOtherFailureSum / maleOtherFailureCounter
	console.log("Male Other Failure Average is " + maleOtherFailureAvg)

			// Female Other, Failure To Appear
	const femaleOtherFailure = otherFailure.filter(isFemale)

	let femaleOtherFailureCounter = 0;
	let femaleOtherFailureSum = 0;
	let femaleOtherFailureeAvg = 0;
	for (y of femaleOtherFailure) {
		femaleOtherFailureCounter++;
		
		femaleOtherFailureSum+= parseInt(y.split(",")[23])
	}		
	femaleOtherFailureAvg = femaleOtherFailureSum / femaleOtherFailureCounter
	console.log("Female Other Failure Average is " + femaleOtherFailureAvg)



	




	



}



const data_compas = {
  //labels: ['Caucasian', 'Hispanic', 'African-American', 'Other'],
  datasets: [{
    label: 'Risk of Violence',
    data: [
		{x : 'Caucasian', "Male": 2.7044036697247704, "Female": 2.297073440088349 },
		{x : 'Hispanic', "Male": 2.657680787334189, "Female": 2.216637781629116 },
		{x : 'African-American', "Male": 4.369909027291812, "Female": 3.455621301775148 },
		{x : 'Other', "Male": 2.6853932584269664, "Female": 2.1788079470198674 }



],
    backgroundColor: 
      'rgba(153, 102, 255, 0.2)',
    borderColor: 
	'rgba(153, 102, 255, 1)',

    borderWidth: 1
  },
  {
    label: 'Risk of Recidivism',
    data: [
		{x : 'Caucasian', "Male": 3.5385321100917433, "Female": 3.735505245720596 },
		{x : 'Hispanic', "Male": 3.3123662815575523, "Female": 3.31369150779896 },
		{x : 'African-American', "Male": 5.426172148355493, "Female": 4.909090909090909 },
		{x : 'Other', "Male": 2.919943820224719, "Female": 2.629139072847682 }



],
    backgroundColor: 
      'rgba(255, 26, 104, 0.2)',
      
    borderColor: 'rgba(255, 26, 104, 1)',
    borderWidth: 1
  },
  {
    label: 'Risk of Failure to Appear',
    data: [
		{x : 'Caucasian', "Male": 3.1945058414903693, "Female": 2.8658564033310827 },
		{x : 'Hispanic', "Male": 2.733846812152332, "Female": 2.419410745233969 },
		{x : 'African-American', "Male": 3.4720783764870538, "Female": 2.9472834857450243 },
		{x : 'Other', "Male": 2.091292134831461, "Female": 1.966887417218543 }



],
    backgroundColor: 
      'rgba(100, 200, 100, 0.2)',
      
    borderColor: 'rgba(100, 200, 100, 1)',
    borderWidth: 1
  }]
};

// config 
const config_compas = {
  type: 'bar',
  data: data_compas,
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
            text: "COMPAS Score"
        }
      }
    }
  }
};


getData_compas()
const myChart_compas = new Chart(
  document.getElementById('myChart_compas'),
  config_compas
);



function genderBasedData_compas(gender){
	console.log(gender.value)
	myChart_compas.config.options.parsing.yAxisKey = gender.value;
	myChart_compas.update()
}

function updateChart_compas(dataset) {
	const isVisible = myChart_compas.isDatasetVisible(dataset.value)
	console.log(isVisible)
	if (isVisible === false) {
		myChart_compas.show(dataset.value  )
	}
	if (isVisible === true) {
		myChart_compas.hide(dataset.value  )
	}
}