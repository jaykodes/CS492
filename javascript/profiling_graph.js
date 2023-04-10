async function getData_profiling() {

const response = await fetch('data/prosecutions-and-convictions.csv') // change to rawscores
    const compasData = await response.text()
const table = compasData.split('\n').slice(1)

    

    // declare the rates that we are trying to determine
   

    for (i = 0; i < table.length; i++) {
        var split = table[i].split(",")
        if (!split[1] || !split[3] || !split[5] || !split[6]) {
          continue;
        }
        if (split[1].includes("White") && split[3].includes("2009") && split[5].includes("All") && split[6].includes("All")) {
          var numberOfConvictionsCaucasian = split[12]
          console.log(numberOfConvictionsCaucasian)
          
        }
        else if (split[1].includes("Black") && split[3].includes("2009") && split[5].includes("All") && split[6].includes("All")) {
          var numberOfConvictionsBlack = split[12]
          console.log(numberOfConvictionsBlack)
        }

        else if (split[1].includes("Mixed") && split[3].includes("2009") && split[5].includes("All") && split[6].includes("All")) {
          var numberOfConvictionsMixed = split[12]
          console.log(numberOfConvictionsMixed)
        }

        else if (split[1].includes("Asian") && split[3].includes("2009" && split[5].includes("All")) && split[6].includes("All")) {
          var numberOfConvictionsAsian = split[21]
          console.log(numberOfConvictionsOther)
        }

        else if (split[1].includes("Other inc") && split[3].includes("2009" && split[5].includes("All")) && split[6].includes("All")) {
          var numberOfConvictionsOther = split[21]
          console.log(numberOfConvictionsOther)
        }
    }
}



const data_profiling = {
  labels: [
    'Asian',
    'Black',
    'Mixed',
    'Other (Including Chinese)',

    ],
  datasets: [{
    label: 'Number of Convictions',
    data: [13759,
      23581,
      8237,
      3799,],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 200, 132)',

      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
    ]
    }]
};

const config_profiling= {
  type: 'pie',
  data: data_profiling,
  options: {}
};

getData_profiling()

const polarChart_profiling = new Chart(
  document.getElementById('myChart_profiling'),
  config_profiling
);