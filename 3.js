function pairProgramming(experiences, isMostExperiencied) {
    var twoValue = [0, 0];
    if (experiences) {
        var firstIndex= getIndex(experiences, isMostExperiencied, 0);
        var secondIndex = getIndex(experiences.splice(firstIndex, 1), isMostExperiencied, 0);
        twoValue= [firstIndex, secondIndex];
    }
    return twoValue;
}
function getIndex(experiences, isBig, number) {
    var myArray = experiences;
    if (myArray && myArray.length > 0 && number) {
        for(i=0; i < myArray.length; i++) {
            if (isBig) {
                if (myArray[i] > number) {
                    return getIndex(myArray.splice(index));
                }
            }
            else {
                if (myArray[i] > number) {
                    return getIndex(myArray.splice(index, 1));
                }
            }
        };
    }
}