const selectionSort = async(cubes) => {
    for(var i=0; i<cubes.length; i++){
        var minHeight = i;
        await delay(100)
        //cubes[i].material.color.setRGB(1,0,1)
        for(var j=i+1; j<cubes.length; j++){
            if(cubes[j].position.y < cubes[minHeight].position.y){
                minHeight = j;
            }
        }
        cubes = Swap(cubes, i, minHeight);
    }
}
