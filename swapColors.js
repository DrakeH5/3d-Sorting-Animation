function swapColor(cube, color){
    var coloredMaterial = cube.material.clone();
    coloredMaterial.color.set(cube.material.color.clone().g = color);
    cube.material = coloredMaterial;
}