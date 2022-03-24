function conv (a) {
    var message1 =  " value in Dollars " ;
    var message2 = " value in Euros" ;
    result =  a * 1.11 ;
    return a.toString()  + message1 + result.toString() + message2
}
console.log(conv(10)) ;
console.log(conv(30)) ;
console.log(conv(40)) ;
console.log(conv(50)) ;

function conv1(b) {
    var message3 = " Value in Centimetes" ;
    var message4 = " Value in Inches"
    result1 = b * 0.393701 ;
    return b.toString() + message3 + result1.toString() + message4
}
console.log(conv1(50)) ;
console.log(conv1(100)) ;
console.log(conv1(150)) ;
console.log(conv1(200)) ;