const selectionSort = async(cubes) => {
    for(var i=0; i<cubes.length; i++){
        var minHeight = i;


        swapColor(cubes[i], "green")
        
        for(var j=i+1; j<cubes.length; j++){
            swapColor(cubes[j], "red")
            await delay()
            swapColor(cubes[j], 0xFFCC00)
            if(cubes[j].position.y < cubes[minHeight].position.y){
                swapColor(cubes[minHeight], 0xFFCC00)
                if(minHeight == i){
                    swapColor(cubes[i], "green");
                }
                minHeight = j;
                swapColor(cubes[minHeight], "blue")
            }
        }

        swapColor(cubes[i], 0xFFCC00)
        swapColor(cubes[minHeight], 0xFFCC00)

        cubes = Swap(cubes, i, minHeight);

    }
}
