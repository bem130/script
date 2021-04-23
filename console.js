if (document.getElementById("console") != null) {
    (function(){
        const log = console.log;
        const clear = console.clear;
        const error = console.error;
        console.log = function(...args,style){
          if (style != null) {
            style = ""
          }
          args = "<span style="+style+">" + args + "</span>";
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
        console.error = function(...args,style){
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
