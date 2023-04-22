function Swap(array, x, y){
    var store = array[x].position.x;
    array[x].position.x = array[y].position.x;
    array[y].position.x = store;
    var store = array[x];
    array[x] = array[y];
    array[y] = store;
    return array;
}