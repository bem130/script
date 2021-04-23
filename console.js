if (document.getElementById("console") != null) {
    (function(){
        console.log = function(args){
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').innerHTML += li + "<br>";
        }
        console.clear = function(){
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          console.log(...args);
        }
        console.warn = function(...args){
          console.log(...args);
        }
      })()
}
else {
    console.warn("'console' tag not found");
}
