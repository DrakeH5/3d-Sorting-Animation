# 3d-Sorting-Animation


https://github.com/DrakeH5/3d-Sorting-Animation/assets/68834232/699f09ca-fde9-4b72-8da7-9d4c683ae908


## Project showcasing 2 sorting algorithms (selection sort and bubble sort) and a pathfinding algorithm (A*)



### Pseudo code explanation: 


Selection Sort:
<code>
  interate through each item -- i:
     ->declare a minimum equal to value of i
     ->iterate through each item after i -- j:
        ->->if value at j is greater than that at i, replace minimum value with i
     ->swap item at i with item at minimum value
</code>



Bubble Sort: 
<code>
  iterate through each item except last:
    ->iterate through each item except last -- i:
      ->->if value at i is larger than value at i + 1, then swap the values at i and i + 1
</code>




A*
<code>
  create a closed list
  while node is not on the end position: 
    ->create an array of nearby nodes
    ->assuming node position is valid (on board and not covered the position of a wall), assign it a value of the distance between it and the starting node plus the distance from it and ending node
    ->find the node with the lowest value and make that the new main node to search from
</code>
