

// Manejo de data 
function filterData(data, condition) {
  const filteredData = data.filter(element => {
       return element.type.includes(condition)
     })
     return filteredData
   }

  const sortPoke = (data, sortBy, sortOrder) => {
    let orderPoke = data.sort((a, b) => {
      return a[sortBy].localeCompare(b[sortBy]);
    }) 
    if(sortOrder === 'ZA'){
      orderPoke.reverse();
    }
    return orderPoke;
  }
  
  const computeStats = (data, condition) =>{
    let result = filterData(data, condition).length;
    return result;
    
  }
  

  window.filterData = filterData;
  window.sortPoke =sortPoke;
  window.computeStats = computeStats;

  
