console.log('jonas.js loaded :-O and today is Aug 26!')
document.body.innerHTML+=' <h2>hello from the console :O</h2>'
console.log('hello world!')
lala = function(x){
    var lele=9
    4
    
}


function callback () {
  console.log(this.responseText);
}

url = 'https://health.data.ny.gov/resource/5q8c-d6xq.json?patient_zipcode=11790'

xhr = new XMLHttpRequest();
xhr.addEventListener("load", callback);
xhr.open("GET", url, true);
xhr.send();

//

////