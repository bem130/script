/*! background.js v1.0.0 | https://haruki1234.github.io | https://github.com/haruki1234 */

var ua = window.navigator.userAgent.toLowerCase();
allspeed=Math.random()*0.5+0.25;
h1csp=Math.random()*2;
h2csp=Math.random()*2;
h1=Math.random()*255;
s1=Math.random()*255;
l11=Math.random()*255;
l12=Math.random()*255;
h2=Math.random()*255;
s2=Math.random()*255;
l21=Math.random()*255;
l22=Math.random()*255;
deg2 = Math.random()*360;
deg = Math.random()*360;
cdeg = Math.random()*360;
c2deg = Math.random()*360;
c3deg = Math.random()*360;
per=Math.random()*100;
per2=Math.random()*100;
cper=Math.random()*100;
c2per=Math.random()*100;
c3per=Math.random()*100;
degreesp=Math.random()*1+0.5;
persp=Math.random()*1+0.5;
hccsp=Math.random()*2;
hc=Math.random()*255;
sc=Math.random()*255;
lc1=Math.random()*255;
lc2=Math.random()*255;
hc2csp=Math.random()*2;
hc2=Math.random()*255;
sc2=Math.random()*255;
lc21=Math.random()*255;
lc22=Math.random()*255;
lc3=Math.random()*255;
hc3csp=Math.random()*2;
hc3=Math.random()*255;
sc3=Math.random()*255;
lc31=Math.random()*255;
lc32=Math.random()*255;
function rbcolor1() {
    h1+=Math.random()*0.01*h1csp*allspeed;
    s1+=Math.random()*0.01*h1csp*allspeed;
    l11+=Math.random()*0.01*h1csp*allspeed;
    l12+=Math.random()*0.01*h1csp*allspeed;
    return "hsl("+[Math.sin(h1)*360]+","+[Math.sin(s1)*20+80]+"%,"+[Math.sin(l11)*10+90-[Math.sin(l12)*10+10]]+"%)";
}
function rbcolor2() {
    h2+=Math.random()*0.01*h1csp*allspeed;
    s2+=Math.random()*0.01*h1csp*allspeed;
    l21+=Math.random()*0.01*h1csp*allspeed;
    l22+=Math.random()*0.01*h1csp*allspeed;
    return "hsl("+[Math.sin(h2)*360]+","+[Math.sin(s2)*20+80]+"%,"+[Math.sin(l21)*10+90-[Math.sin(l22)*10+10]]+"%)";
}
function rbcolorc() {
    hc+=Math.random()*0.01*hccsp*allspeed;
    sc+=Math.random()*0.01*hccsp*allspeed;
    lc1+=Math.random()*0.01*hccsp*allspeed;
    lc2+=Math.random()*0.01*hccsp*allspeed;
    return "hsl("+[Math.sin(hc)*360]+","+[Math.sin(sc)*20+80]+"%,"+[Math.sin(lc1)*10+90-[Math.sin(lc2)*10+10]]+"%)";
}
function rbcolorc2() {
    hc2+=Math.random()*0.01*hccsp*allspeed;
    sc2+=Math.random()*0.01*hccsp*allspeed;
    lc21+=Math.random()*0.01*hccsp*allspeed;
    lc22+=Math.random()*0.01*hccsp*allspeed;
    return "hsl("+[Math.sin(hc2)*360]+","+[Math.sin(sc2)*20+80]+"%,"+[Math.sin(lc21)*10+90-[Math.sin(lc22)*10+10]]+"%)";
}
function rbcolorc3() {
    hc3+=Math.random()*0.01*hccsp*allspeed;
    sc3+=Math.random()*0.01*hccsp*allspeed;
    lc31+=Math.random()*0.01*hccsp*allspeed;
    lc32+=Math.random()*0.01*hccsp*allspeed;
    return "hsl("+[Math.sin(hc3)*360]+","+[Math.sin(sc3)*20+80]+"%,"+[Math.sin(lc31)*10+90-[Math.sin(lc32)*10+10]]+"%)";
}
function degree() {
    deg+=Math.random()*0.01*degreesp*allspeed;
    return Math.sin(deg)*360;
}
function degree2() {
    deg2+=Math.random()*0.01*degreesp*allspeed;
    return Math.sin(deg2)*360;
}
function cdegree() {
    cdeg-=Math.random()*0.01*degreesp*allspeed;
    return Math.sin(cdeg)*360;
}
function c2degree() {
    c2deg-=Math.random()*0.01*degreesp*allspeed;
    return Math.sin(c2deg)*360;
}
function c3degree() {
    c3deg-=Math.random()*0.01*degreesp*allspeed;
    return Math.sin(c3deg)*360;
}
function percentage() {
    per+=Math.random()*0.01*persp*allspeed;
    return Math.sin(per)*20+50;
}
function percentage2() {
    per2+=Math.random()*0.01*persp*allspeed;
    return Math.sin(per2)*20+50;
}
function cpercentage() {
    cper+=Math.random()*0.05*persp*allspeed;
    return Math.sin(cper)*2.5+5*1;
}
function c2percentage() {
    c2per+=Math.random()*0.05*persp*allspeed;
    return Math.sin(c2per)*2.5+5*1;
}
function c3percentage() {
    c3per+=Math.random()*0.05*persp*allspeed;
    return Math.sin(c3per)*2.5+5*1;
}
function background() {
    document.getElementsByClassName("background")[0].style.background = "linear-gradient("+degree()+"deg, "+rbcolor1()+" "+percentage()+"%, rgba(0,0,0,0))";
}
function background2() {
    document.getElementsByClassName("background")[1].style.background = "linear-gradient("+degree2()+"deg, "+rbcolor2()+" "+percentage2()+"%, rgba(0,0,0,0))";
}

function cground() {
    if (document.getElementsByClassName("background")[2]!=null){
        //if(ua.indexOf("windows nt") !== -1|| ua.indexOf("android") !== -1) {
            document.getElementsByClassName("background")[1].style.background = "linear-gradient("+cdegree()+"deg, "+rbcolorc()+" "+cpercentage()+"%, rgba(0,0,0,0))";
        //}
    }
}
function c2ground() {
    if (document.getElementsByClassName("background")[3]!=null){
        //if(ua.indexOf("windows nt") !== -1|| ua.indexOf("android") !== -1) {
            document.getElementsByClassName("background")[2].style.background = "linear-gradient("+c2degree()+"deg, "+rbcolorc2()+" "+c2percentage()+"%, rgba(0,0,0,0))";
        //}
    }
}
function c3ground() {
    if (document.getElementsByClassName("background")[4]!=null){
        //if(ua.indexOf("windows nt") !== -1|| ua.indexOf("android") !== -1) {
            document.getElementsByClassName("background")[3].style.background = "linear-gradient("+c3degree()+"deg, "+rbcolorc3()+" "+c3percentage()+"%, rgba(0,0,0,0))";
        //}
    }
}
setInterval("background()",30);
setInterval("background2()",30);
setInterval("cground()",30);
setInterval("c2ground()",30);
setInterval("c3ground()",30);

if(ua.indexOf("windows nt") !== -1|| ua.indexOf("android") !== -1) {
}
else console.warm("not windows or android");