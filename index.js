var paragraph = function (number) {
    if(number===1)
    {
        return "    1 bottle of beer on the wall, 1 bottle of beer.\n" +
            "    Take one down and pass it around, no more bottles of beer on the wall.\n" +
            "    No more bottles of beer on the wall, no more bottles of beer.\n" +
            "    Go to the store and buy some more, 99 bottles of beer on the wall."
    }
    return "    " +number+" bottles of beer on the wall, "+number+" bottles of beer.\n    Take one down and pass it around, "+(number-1)+" bottles of beer on the wall."

}

function beersong(number) {
    if (number===1)
    {
        return paragraph(1);
    }
    var num=[];
    for(var i=number;i>0;i--)
    {
        num.push(i);
    }
    return num.map(n => paragraph(n)).join('\n');

}

module.exports = beersong;