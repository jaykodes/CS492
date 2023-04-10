function filterByNative(row){
      var split = row.split(",")
      return split[3]==="AMERICAN INDIAN/ALASKAN NATIVE"
  }

  function filterByAAPI(row) {
    var split = row.split(",")
    return split[3] === "ASIAN/PACIFIC ISLANDER"
  }

  function filterBySearch(row) {
    var split = row.split(",")
    return split[7]==="YES = 1"
  }

  function filterByBlack(row) {
    var split = row.split(",")
    return split[3] === "BLACK"
  }
  function filterByHispanic(row) {
    var split = row.split(",")
    return split[3] === "HISPANIC OR LATINO"
  }

  function filterByWhite(row) {
    var split = row.split(",")
    return split[3] === "WHITE"
  }

// setup 

async function getData_search() {

  const response = await fetch('data/2020_Racial_Profiling.csv') // change to rawscores
  const compasData = await response.text()
  const table = compasData.split('\n').slice(1)

  const native = table.filter(filterByNative)
  const nativeSearched = native.filter(filterBySearch)
  const nativeRatio = nativeSearched.length / native.length

  console.log(nativeRatio)

  const aapi = table.filter(filterByAAPI)
  const aapiSearched = aapi.filter(filterBySearch)
  const aapiRatio = aapiSearched.length / aapi.length
  console.log(aapiRatio)

  const black = table.filter(filterByBlack)
  const blackSearched = black.filter(filterBySearch)
  const blackRatio =blackSearched.length / black.length
  console.log(blackRatio)

  
  const hispanic = table.filter(filterByHispanic)
  const hispanicSearched = hispanic.filter(filterBySearch)
  const hispanicRatio =hispanicSearched.length / hispanic.length
  console.log(hispanicRatio)

  const white = table.filter(filterByWhite)
  const whiteSearched = white.filter(filterBySearch)
  const whiteRatio =whiteSearched.length / white.length
  console.log(whiteRatio)



}

const data_search = {
    //labels: ['Caucasian', 'Hispanic', 'African-American', 'Other'],
    datasets: [{
      label: 'Search Conducted Ratio',
      data: [
  	{x : 'American Indian', "Male": 0.08333333333333333, "Female": 0 },
  	{x : 'AAPI', "Male": 0.029492725127801808, "Female": 0 },
  	{x : 'African-American', "Male": 0.1420510650303287, "Female": 0 },
  	{x : 'Hispanic or Latino', "Male": 0.14406140771708587, "Female": 0 },
    {x : 'White', "Male": 0.06331742665252739, "Female": 0 }




  ],
      backgroundColor: 
        'rgba(153, 102, 255, 0.2)',
      borderColor: 
  'rgba(153, 102, 255, 1)',

      borderWidth: 1
    },

  {
      
      label: 'Search Not Conducted Ratio',
      data: [
  	{x : 'American Indian', "Male": 0.91666666666, "Female": 8 },
  	{x : 'AAPI', "Male": 0.97050727487, "Not Searched": 0 },
  	{x : 'African-American', "Male": 0.85794893497, "Female": 0 },
  	{x : 'Hispanic or Latino', "Male": 0.85593859228, "Female": 0 },
    {x : 'White', "Male": 0.93668257334, "Female": 0 }




  ],
      backgroundColor: 
        'rgba(43, 192, 255, 0.2)',
      borderColor: 
  'rgba(43, 102, 255, 1)',

      borderWidth: 1
    
    },
  ]
};

// config 
const config_search = {
    type: 'bar',
    data: data_search,
    options: {
      scales: {
  yAxes: [{
    scaleLabel: {
      display: true,
      labelString: 'probability'
    }
  }]
  },
  parsing: {
  	xAxisKey: 'x',
  	yAxisKey: 'Male'
  },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Ratio"
          }
        }
      }
  }
};


getData_search()
const myChart_search = new Chart(
  document.getElementById('myChart_search'),
  config_search
);