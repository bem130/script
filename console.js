if (document.getElementById("console") != null) {
    (function(){
        const log = console.log;
        console.log = function(...args){
          log(...args);
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
        console.clear = function(){
          document.getElementById('console').innerHTML = "";
        }
        console.error = function(...args){
          console.log(typeof(args))
          args = "<span style='color:rgba(255,0,0,1)'>" + args + "</span>";
          args = args;
          console.log(typeof(args))
          log(...args);
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
      })()
}
else {
    console.warn("'console' tag not found");
}
