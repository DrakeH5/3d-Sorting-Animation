const BubbleSort = async(cubes) => {
    for(var i=0; i<cubes.length-1; i++){
        for(var j=0; j < cubes.length-1; j++){
            swapColor(cubes[j], "green")
            if(cubes[j].position.y > cubes[j+1].position.y){
                cubes = Swap(cubes, j, j+1);
            }
            if(finishInstantly == false){
                await delay()
            }
            swapColor(cubes[j], 0xFFCC00)
        }
        swapColor(cubes[j], 0xFFCC00)
    }
}
