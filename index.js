let record = [
    {
        year : 1968,
        result: "N/A"
    },
    {
        year : 1969,
        result: "W"
    },
    {
        year :1970,
        result: "N/A"

    }
]
function superbowlWin(newArray){
    let theWin = newArray.find(object => object.result === "W")
    if (theWin === undefined){
        return undefined
    }
    return theWin.year
}

superbowlWin(newArray)


