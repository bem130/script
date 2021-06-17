/*! background.js v2.0.0 June 17, 2021 | https://haruki1234.github.io | https://github.com/haruki1234 */

/*
<div class="background" style="position: absolute;left: 0px;top: 0px;z-index: -1000;width: 100vw;height: 100vh;margin: 0;padding: 0;position: fixed;"></div>
<div class="background" style="position: absolute;left: 0px;top: 0px;z-index: -1000;width: 100vw;height: 100vh;margin: 0;padding: 0;position: fixed;"></div>
<div class="background" style="position: absolute;left: 0px;top: 0px;z-index: -1000;width: 100vw;height: 100vh;margin: 0;padding: 0;position: fixed;"></div>
<script src="https://haruki1234.github.io/script/background.js"></script>
*/

{
alback = document.getElementsByClassName("background").length;
alspeed = Math.random()*2+0.01;
}

{
{
speed0=Math.random()*2+0.01;
h0=Math.random()*255;
s0=Math.random()*255;
l01=Math.random()*255;
l02=Math.random()*255;
deg0 = Math.random()*360;
per0=Math.random()*100;
function rbcolor0() {
    h0+=Math.random()*0.02*alspeed*speed0;
    s0+=Math.random()*0.02*alspeed*speed0;
    l01+=Math.random()*0.02*alspeed*speed0;
    l02+=Math.random()*0.02*alspeed*speed0;
    return "hsl("+[Math.sin(h0)*360]+","+[Math.sin(s0)*20+80]+"%,"+[Math.sin(l01)*10+90-[Math.sin(l02)*10+10]]+"%)";
}
function background0() {
    document.getElementsByClassName("background")[0].style.background = "linear-gradient("+degree0()+"deg, "+rbcolor0()+", rgba(0,0,0,0) 60%)";
}
function percentage0() {
    per0+=Math.random()*0.01*alspeed*speed0;
    return Math.sin(per0)*20+50;
}
function degree0() {
    deg0-=Math.random()*0.01*alspeed*speed0;
    return Math.sin(deg0)*360;
}
setInterval("background0()",60);
}
for(nowback=1;nowback<alback;nowback++){
    setTimeout(`
    speed`+nowback+`=Math.random()*2+0.01;
    h`+nowback+`=Math.random()*255;
    s`+nowback+`=Math.random()*255;
    l`+nowback+`1=Math.random()*255;
    l`+nowback+`2=Math.random()*255;
    deg`+nowback+` = Math.random()*360;
    per`+nowback+`=Math.random()*100;
    function rbcolor`+nowback+`() {
        h`+nowback+`+=Math.random()*0.02*alspeed*speed`+nowback+`;
        s`+nowback+`+=Math.random()*0.02*alspeed*speed`+nowback+`;
        l`+nowback+`1+=Math.random()*0.02*alspeed*speed`+nowback+`;
        l`+nowback+`2+=Math.random()*0.02*alspeed*speed`+nowback+`;
        return "hsl("+[Math.sin(h`+nowback+`)*360]+","+[Math.sin(s`+nowback+`)*20+80]+"%,"+[Math.sin(l`+nowback+`1)*10+90-[Math.sin(l`+nowback+`2)*10+10]]+"%)";
    }
    function background`+nowback+`() {
        document.getElementsByClassName("background")[`+nowback+`].style.background = "linear-gradient("+degree`+nowback+`()+"deg, "+rbcolor`+nowback+`()+", rgba(0,0,0,0) "+percentage`+nowback+`()+"%)";
    }
    function percentage`+nowback+`() {
        per`+nowback+`+=Math.random()*0.01*alspeed*speed`+nowback+`;
        return Math.sin(per`+nowback+`)*20+50;
    }
    function degree`+nowback+`() {
        deg`+nowback+`+=Math.random()*0.01*alspeed*speed`+nowback+`;
        return Math.sin(deg`+nowback+`)*360;
    }
    setInterval("background`+nowback+`()",60);
    `,0)
}
}