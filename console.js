
if (document.getElementById("console") != null) {
    (function(){
        console.log = function(args){
          console.log(args)
          document.getElementById('console').innerHTML += args + "<br>";
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
