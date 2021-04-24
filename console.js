
if (document.getElementById("console") != null) {
    (function(){
      const log = console.log;
      const error = console.error;
      const warn = console.warn;
        console.log = function(args){
          log(args)
          document.getElementById('console').innerHTML += args + "<br>";
        }
        console.clear = function(){
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          error(args)
          document.getElementById('console').innerHTML += args + "<br>";
        }
        console.warn = function(...args){
          warn(args)
          document.getElementById('console').innerHTML += args + "<br>";
        }
      })()
}
else {
    console.warn("'console' tag not found");
}
