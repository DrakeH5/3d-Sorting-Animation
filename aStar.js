function aStarPathfinding(startX, startZ, endX, endZ, width, height, walls, cubes){
     var collectionOfNearbyCubeVals = []
     for(var i = -1; i <= 1; i++){
        var thisXIndex = startX + i;
        for(var j = -1; j <= 1; j++){
            var thisZIndex = startZ + j; 
            if(thisXIndex >= 0 && thisXIndex < width && thisZIndex >= 0 && thisZIndex < height){
                collectionOfNearbyCubeVals.push([thisXIndex, thisZIndex, calcDistanceForAStar(startX, startZ, endX, endZ, thisXIndex, thisXIndex)])
                swapColor(cubes[thisXIndex][thisZIndex], "lightblue");
            }
        }
     }
     var smallest = collectionOfNearbyCubeVals[findSmallestCubeVal(collectionOfNearbyCubeVals)];
     swapColor(cubes[smallest[0]][smallest[1]], "green")
}

function distanceFormula(x1, y1, x2, y2){
    return Math.sqrt(Math.pow((x2-x1), 2)+Math.pow((y2-y1), 2));
}
function calcDistanceForAStar(startX, startZ, endX, endZ, xIndex, zIndex){
    return distanceFormula(startX, startZ, xIndex, zIndex) + distanceFormula(endX, endZ, xIndex, zIndex);
}

function findSmallestCubeVal(cubeVals){
    var min = 0;
    for(var i=1; i<cubeVals.length; i++){
        if(min > cubeVals[i][2]){
            min = i;
        }
    }
    return min;
}