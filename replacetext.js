/*! replacetext.js v1.0.0 June 15, 2021 | https://haruki1234.github.io | https://github.com/haruki1234 */

console.log("%creplacetext.js v1.0.0 https://haruki1234.github.io","color:rgb(120,110,120);font-size:25px;padding:10px;border:1px solid rgba(150,140,100);border-radius:10px;")

    soundspeed = 100

    map = [
        ["00","00","000000","A"],
        ["01","01","000001","B"],
        ["02","02","000010","C"],
        ["03","03","000011","D"],
        ["04","04","000100","E"],
        ["05","05","000101","F"],
        ["06","06","000110","G"],
        ["07","07","000111","H"],
        ["08","08","001000","I"],
        ["09","09","001001","J"],
        ["10","0a","001010","K"],
        ["11","0b","001011","L"],
        ["12","0c","001100","M"],
        ["13","0d","001101","N"],
        ["14","0e","001110","O"],
        ["15","0f","001111","P"],
        ["16","10","010000","Q"],
        ["17","11","010001","R"],
        ["18","12","010010","S"],
        ["19","13","010011","T"],
        ["20","14","010100","U"],
        ["21","15","010101","V"],
        ["22","16","010110","W"],
        ["23","17","010111","X"],
        ["24","18","011000","Y"],
        ["25","19","011001","Z"],
        ["26","1a","011010","a"],
        ["27","1b","011011","b"],
        ["28","1c","011100","c"],
        ["29","1d","011101","d"],
        ["30","1e","011110","e"],
        ["31","1f","011111","f"],
        ["32","20","100000","g"],
        ["33","21","100001","h"],
        ["34","22","100010","i"],
        ["35","23","100011","j"],
        ["36","24","100100","k"],
        ["37","25","100101","l"],
        ["38","26","100110","m"],
        ["39","27","100111","n"],
        ["40","28","101000","o"],
        ["41","29","101001","p"],
        ["42","2a","101010","q"],
        ["43","2b","101011","r"],
        ["44","2c","101100","s"],
        ["45","2d","101101","t"],
        ["46","2e","101110","u"],
        ["47","2f","101111","v"],
        ["48","30","110000","w"],
        ["49","31","110001","x"],
        ["50","32","110010","y"],
        ["51","33","110011","z"],
        ["52","34","110100","0"],
        ["53","35","110101","1"],
        ["54","36","110110","2"],
        ["55","37","110111","3"],
        ["56","38","111000","4"],
        ["57","39","111001","5"],
        ["58","3a","111010","6"],
        ["59","3b","111011","7"],
        ["60","3c","111100","8"],
        ["61","3d","111101","9"],
        ["62","3e","111110","+"],
        ["63","3f","111111","/"],
    ]
    function copy() {
        textarea = document.getElementById("outputtext")
        textarea.select()
        document.execCommand("copy")
    }
    function starte2(text) {
        base64text = btoa(encodeURIComponent(text))
        base64textarray = base64text.match(/.{1}/g)
        for (j=0;j<base64textarray.length;j++) {
            rep = true
            for (i=0;i<64;i++) {
                if (base64textarray[j] == map[i][3]) {
                    if (rep) {
                        base64textarray[j] = base64textarray[j].replace(map[i][3],map[i][2]+"")
                        rep = false
                    }
                }
            }
        }
        outtext = base64textarray.join("")
        for (i=0;i<4;i++) {
            outtext = outtext.replace("=","")
        }
        return outtext
    }
    function startd2(text) {
        base64text = text
        base64textarray = base64text.match(/.{6}/g)
        for (j=0;j<base64textarray.length;j++) {
            rep = true
            for (i=0;i<64;i++) {
                if (base64textarray[j] == map[i][2]) {
                    if (rep) {
                        base64textarray[j] = base64textarray[j].replace(map[i][2],map[i][3]+"")
                        rep = false
                    }
                }
            }
        }
        outtext = base64textarray.join("")
        outtext = decodeURIComponent(atob(outtext))
        return outtext
    }
    function starte16(text) {
        base64text = btoa(encodeURIComponent(text))
        base64textarray = base64text.match(/.{1}/g)
        for (j=0;j<base64textarray.length;j++) {
            rep = true
            for (i=0;i<64;i++) {
                if (base64textarray[j] == map[i][3]) {
                    if (rep) {
                        base64textarray[j] = base64textarray[j].replace(map[i][3],map[i][1]+"")
                        rep = false
                    }
                }
            }
        }
        outtext = base64textarray.join("")
        for (i=0;i<4;i++) {
            outtext = outtext.replace("=","")
        }
        return outtext
    }
    function startd16(text) {
        base64text = text
        base64textarray = base64text.match(/.{2}/g)
        for (j=0;j<base64textarray.length;j++) {
            rep = true
            for (i=0;i<64;i++) {
                if (base64textarray[j] == map[i][1]) {
                    if (rep) {
                        base64textarray[j] = base64textarray[j].replace(map[i][1],map[i][3]+"")
                        rep = false
                    }
                }
            }
        }
        outtext = base64textarray.join("")
        outtext = decodeURIComponent(atob(outtext))
        return outtext
    }
    function starte10(text) {
        base64text = btoa(encodeURIComponent(text))
        base64textarray = base64text.match(/.{1}/g)
        for (j=0;j<base64textarray.length;j++) {
            rep = true
            for (i=0;i<64;i++) {
                if (base64textarray[j] == map[i][3]) {
                    if (rep) {
                        base64textarray[j] = base64textarray[j].replace(map[i][3],map[i][0]+"")
                        rep = false
                    }
                }
            }
        }
        outtext = base64textarray.join("")
        for (i=0;i<4;i++) {
            outtext = outtext.replace("=","")
        }
        return outtext
    }
    function startd10(text) {
        base64text = text
        base64textarray = base64text.match(/.{2}/g)
        for (j=0;j<base64textarray.length;j++) {
            rep = true
            for (i=0;i<64;i++) {
                if (base64textarray[j] == map[i][0]) {
                    if (rep) {
                        base64textarray[j] = base64textarray[j].replace(map[i][0],map[i][3]+"")
                        rep = false
                    }
                }
            }
        }
        outtext = base64textarray.join("")
        outtext = decodeURIComponent(atob(outtext))
        return outtext
    }
    function play_sound(morse){
        var mstrs=morse.split('');
        var mesEle=document.getElementById("mes");
        mesEle.value="";
        var timer=setInterval(function(){
                audio.currentTime = 0;
                if(mstrs.length<=0){
                    audio.pause();
                    clearInterval(timer);
                    return;
                }
                var onoff=mstrs.shift();
                if(onoff=="0"){
                    audio.pause();
                }else{
                    audio.play();
                }
                mesEle.value=mesEle.value+onoff;
        },soundspeed)
    }
    function sound_speed(speed) {
        soundspeed = speed
    }