
export function getData(length) {
    // var len=""
    var Entries = []
    var Olddata= []
    let data= {method:"GET"};
  fetch("https://api.publicapis.org/entries",data)
  .then((response)=>response.json())
  .then((jsonData)=>{
    Olddata.push(jsonData.entries)
    // len=jsonData.entries.length;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
    
      Entries.push({
        
        API: Olddata[i][j].API,
        Description: Olddata[i][j].Auth,
        Auth: Olddata[i][j].Cors,
        HTTPS: Olddata[i][j].Description,
        Cors: Olddata[i][j].HTTPS,
        Link: Olddata[i][j].Link,
        Category: Olddata[i][j].Category
      })
    }
  }
})
return Entries
}

  
  