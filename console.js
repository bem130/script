if (document.getElementById("console") != null) {
    (function(){
        const log = console.log;
        const clear = console.clear;
        const error = console.error;
        console.log = function(...args){
          log(...args);
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
        console.clear = function(...args){
          clear(...args);
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          args = "<span style='color:rgba(255,0,0,1)'>" + args + "</span>";
          args = args;
          error(...args);
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
      })()
}
else {
    console.warn("'console' tag not found");
}
