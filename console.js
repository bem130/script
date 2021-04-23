if (document.getElementById("console") != null) {
    (function(){
        const log = console.log;
        console.log = function(...args){
          log(...args);
          const li = document.createElement('li');
          li.innerText = args[0];
          document.getElementById('console').appendChild(li);
        }
      })()
}
else {
    console.warn("'console' tag not found")
}