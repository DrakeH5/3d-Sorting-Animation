function aStarPathfinding(startX, startZ, endX, endZ, width, height, walls, cubes){
     var collectionOfNearbyCubeVals = []
     for(var i = -1; i <= 1; i++){
        var thisXIndex = startX + i;
        for(var j = -1; j <= 1; j++){
            var thisZIndex = startZ + j; 
            collectionOfNearbyCubeVals.push(calcDistanceForAStar(startX, startZ, endX, endZ, thisXIndex, thisXIndex))
            swapColor(cubes[thisXIndex][thisZIndex], "green");
        }
     }
     //findSmallestCubeVal(collectionOfNearbyCubeVals);
}

function distanceFormula(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2));
}
function calcDistanceForAStar(startX, startZ, endX, endZ, xIndex, zIndex){
    return distanceFormula(startX, startZ, xIndex, zIndex) + distanceFormula(endX, endZ, xIndex, zIndex);
}

function findSmallestCubeVal(cubeVals){
    var min = cubeVals[0];
    for(var i=1; i<cubeVals.length; i++){
        if(min > cubeVals[i]){
            min = i;
        }
    }
    return min;
}