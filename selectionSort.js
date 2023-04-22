const selectionSort = async(cubes) => {
    for(var i=0; i<cubes.length; i++){
        var minHeight = i;

        var coloredMaterial = cubes[i].material.clone();
        coloredMaterial.color.set(cubes[i].material.color.clone().g = "green");
        cubes[i].material = coloredMaterial;
        
        for(var j=i+1; j<cubes.length; j++){
            var coloredMaterial = cubes[j].material.clone();
            coloredMaterial.color.set(cubes[j].material.color.clone().g = "red");
            cubes[j].material = coloredMaterial;
            await delay(1)
            var coloredMaterial = cubes[j].material.clone();
            coloredMaterial.color.set(cubes[j].material.color.clone().g = 0xFFCC00);
            cubes[j].material = coloredMaterial;
            if(cubes[j].position.y < cubes[minHeight].position.y){
                var coloredMaterial = cubes[minHeight].material.clone();
                coloredMaterial.color.set(cubes[minHeight].material.color.clone().g = 0xFFCC00);
                cubes[minHeight].material = coloredMaterial;
                var coloredMaterial = cubes[i].material.clone();
                coloredMaterial.color.set(cubes[i].material.color.clone().g = "green");
                cubes[i].material = coloredMaterial;
                minHeight = j;
                var coloredMaterial = cubes[minHeight].material.clone();
                coloredMaterial.color.set(cubes[minHeight].material.color.clone().g = "blue");
                cubes[minHeight].material = coloredMaterial;
            }
        }

        var coloredMaterial = cubes[i].material.clone();
        coloredMaterial.color.set(cubes[i].material.color.clone().g = 0xFFCC00);
        cubes[i].material = coloredMaterial;
        var coloredMaterial = cubes[minHeight].material.clone();
        coloredMaterial.color.set(cubes[minHeight].material.color.clone().g = 0xFFCC00);
        cubes[minHeight].material = coloredMaterial;

        cubes = Swap(cubes, i, minHeight);

    }
}
