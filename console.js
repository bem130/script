if (document.getElementById("console") != null) {
    (function(){
      const log = console.log
        console.log = function(...args){
          log(...args)
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
        console.clear = function(){
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          console.log(...args)
        }
      })()
}
else {
    console.warn("'console' tag not found");
}
