if (document.getElementById("console") != null) {
    (function(){
      const log = console.log;
      const error = console.error;
      const warn = console.warn;
        console.log = function(...args){
          log(...args)
          document.getElementById('console').innerHTML += "　  " + args + "<br>";
        }
        console.clear = function(){
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          error(...args)
          document.getElementById('console').innerHTML += "<span style='color:red'>　! " + args + "</span><br>";
        }
        console.warn = function(...args){
          warn(...args)
          document.getElementById('console').innerHTML += "<span style='color:yellow'>　! " + args + "</span><br>";
        }
        console.message = function(...args){
          document.getElementById('console').innerHTML += "　  " + args + "<br>";
          log(...args)
        }
      })()
}
else {
    console.warn("'console' tag not found");
    console.message = console.log;
}


console.message("--console.js--")
