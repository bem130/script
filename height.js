/*! height.js v1.0.0 July 29, 2021 | https://haruki1234.github.io | https://github.com/haruki1234 */

// 斜辺：x,y 底辺：z
function getheight(x,y,z){
    return Math.sqrt((x**2)-(((-1*(y**2)+x**2+z**2)/(2*z))**2))
}