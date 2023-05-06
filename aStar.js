function aStarPathfinding(startX, startZ, endX, endZ, width, height, walls, cubes){
    var currentPos = [startX, startZ]
    //while(currentPos != [endX, endZ]){
        currentPos = searchNearby(currentPos[0], currentPos[1], endX, endZ, width, height, walls, cubes)
        console.log(currentPos, endX, endZ)
    //}
}
 
function searchNearby(startX, startZ, endX, endZ, width, height, walls, cubes){
    var collectionOfNearbyCubeVals = []
     for(var i = -1; i <= 1; i++){
        var thisXIndex = startX + i;
        for(var j = -1; j <= 1; j++){
            var thisZIndex = startZ + j; 
            if((thisXIndex != startX || thisZIndex != startZ) && thisXIndex >= 0 && thisXIndex < width && thisZIndex >= 0 && thisZIndex < height){
                collectionOfNearbyCubeVals.push([thisXIndex, thisZIndex, calcDistanceForAStar(startX, startZ, endX, endZ, thisXIndex, thisZIndex)])
                swapColor(cubes[thisXIndex][thisZIndex], "lightblue");
            }
        }
     }
     var smallest = collectionOfNearbyCubeVals[findSmallestCubeVal(collectionOfNearbyCubeVals)];
     swapColor(cubes[smallest[0]][smallest[1]], "green")
     return [smallest[0], smallest[1]];
}

function distanceFormula(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2)) * 10;
}
function calcDistanceForAStar(startX, startZ, endX, endZ, xIndex, zIndex){
    return distanceFormula(startX, startZ, xIndex, zIndex) + distanceFormula(endX, endZ, xIndex, zIndex);
}

function findSmallestCubeVal(cubeVals){
    var min = cubeVals[0][2];
    var minIndex = 0;
    for(var i=1; i<cubeVals.length; i++){
        console.log(cubeVals[i][2])
        if(min > cubeVals[i][2]){
            min = cubeVals[i][2];
            minIndex = i
        }
    }
    return minIndex;
}