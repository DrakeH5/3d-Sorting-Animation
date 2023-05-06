        var scene = new THREE.Scene(); //created a three.js scene

        var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000) //create a camera
        camera.position.z = 40;
        camera.position.y = 20;
        camera.rotation.y = -6;

        var renderer = new THREE.WebGLRenderer({antialias: true}); //create renderer
        renderer.setClearColor("darkgrey"); //essentially a background color
        renderer.setSize(window.innerWidth,window.innerHeight); //set renderer size to size of the page

        document.body.appendChild(renderer.domElement); //creates a canvas with our render's specifications

        renderer.render(scene, camera); //just render (show) everything on our canvas


        var cubes = [];

        var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});

        for(var i=0; i<100; i++){
            var height = Math.floor(Math.random() * 60) + 1;
            var geometry = new THREE.BoxGeometry(1, height, 1); 
            var cube = new THREE.Mesh(geometry, material);
            scene.add(cube)
            cube.position.x=i-75;
            cube.position.y=(height/2)-15;
            cubes.push(cube);
        }

        function resetArray(){
            for(var i=0; i<cubes.length; i++){
                var height = Math.floor(Math.random() * 60) + 1;
                cubes[i].geometry = new THREE.BoxGeometry(1, height, 1); 
                cubes[i].position.y=(height/2)-15;
            }
            Start()
        }


        var light = new THREE.PointLight(0xFFFFFF, 1, 500); //creates a light (color, intensity, distance)
        light.position.set(10, 0, 25); //sets light position (x, y, z)
        scene.add(light); //add the light to the scene



        var geometry = new THREE.BoxGeometry(1, 0.1, 1); 
            var hightlightMarkerCube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: "grey"}));
            scene.add(hightlightMarkerCube)
            hightlightMarkerCube.position.y=10000;
        raycaster = new THREE.Raycaster();
        const pointer = new THREE.Vector2();
        var highlightedCube = hightlightMarkerCube;
        document.body.onmousemove = function(evt) {
            pointer.x = ( evt.clientX / window.innerWidth ) * 2 - 1;
            pointer.y = - ( evt.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( pointer, camera );
			const intersects = raycaster.intersectObjects( scene.children, false );
			if ( intersects.length > 0 && intersects[0].object != highlightedCube && intersects[0].object.position.z > camera.position.z && intersects[0].object.material == material) {
                //swapColor(highlightedCube, 0xFFCC00)
                highlightedCube = intersects[0].object;
                hightlightMarkerCube.position.set(highlightedCube.position.x, highlightedCube.position.y+0.5, highlightedCube.position.z)
                //swapColor(highlightedCube, "grey")
            }
        };

        var pathfindingWalls = [];
        var pathfindingStart ='';
        var pathfindingEnd = '';
        var pathfindingcube;
        document.body.onmousedown = function(evt) {
            pointer.x = ( evt.clientX / window.innerWidth ) * 2 - 1;
            pointer.y = - ( evt.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( pointer, camera );
			const intersects = raycaster.intersectObjects( scene.children, false );
                if(intersects.length > 0){
                geometry = new THREE.BoxGeometry(1, 1, 1); 
                pathfindingcube = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial({color: getColorOfSelectedBlock()}));
                scene.add(pathfindingcube)
                pathfindingcube.position.x=highlightedCube.position.x;
                pathfindingcube.position.y=highlightedCube.position.y+1;
                pathfindingcube.position.z=highlightedCube.position.z;
                if(document.getElementById("PathfindingBlockChoice").value == "Start"){
                    if(pathfindingStart.length != 0){
                        pathfindingStart.position.set(-100000, -100000, -10000);
                    }
                    pathfindingStart = pathfindingcube;
                } else if(document.getElementById("PathfindingBlockChoice").value == "End"){
                    if(pathfindingEnd.length != 0){
                        pathfindingEnd.position.set(-100000, -100000, -10000);
                    }
                    pathfindingEnd = pathfindingcube;
                } else {
                    pathfindingWalls.push(pathfindingcube)
                }
            }
        }


        var render = function() {
          requestAnimationFrame(render);
          renderer.render(scene, camera); //just render (show) everything on our canvas
        }

        render();


        const delay = () => new Promise(res => setTimeout(res, document.getElementById("speedSlider").value));

        finishInstantly = false;


        function Start(){
            finishInstantly = false;
            if(document.getElementById("algorithmsChoice").value == "selectionSort"){
                selectionSort(cubes)
            } else if(document.getElementById("algorithmsChoice").value == "BubbleSort"){
                BubbleSort(cubes)
            }
        }

        async function ChangedSortingAlgo(){
            finishInstantly = true;
            await delay();
            resetArray();
            Start();
        }


        Start()



        function rotateCamera180(){
            this.tl = new TimelineMax().delay(0); 
            this.tl.to(camera.rotation, 1, {y: camera.rotation.y-Math.PI, ease: Expo.easeOut})
        }



        var light = new THREE.PointLight(0xFFFFFF, 10, 50); //creates a light (color, intensity, distance)
        light.position.set(5, 15, 80); //sets light position (x, y, z)
        scene.add(light); //add the light to the scene

        var pathfindingCubes = [];

        var material = new THREE.MeshLambertMaterial({color: 0xFFCC00});

        for(var i=0; i<15; i++){
            for(var j=0; j<10; j++){
                var geometry = new THREE.BoxGeometry(1, 1, 1); 
                var cube = new THREE.Mesh(geometry, material);
                scene.add(cube)
                cube.position.x=i*1.1-3;
                cube.position.y = 12;
                cube.position.z=j*1.1+53;
                pathfindingCubes.push(cube);
            }
        }


        function getColorOfSelectedBlock(){
            var options = document.getElementById("PathfindingBlockChoice").getElementsByTagName('option')
            for(var i=0; i<options.length; i++){
                if(options[i].value == document.getElementById("PathfindingBlockChoice").value){
                    return options[i].style.background
                }
            }
        }

        function ChangedPathfindingBlockChoice(){
            var options = document.getElementById("PathfindingBlockChoice").getElementsByTagName('option')
            for(var i=0; i<options.length; i++){
                if(options[i].value == document.getElementById("PathfindingBlockChoice").value){
                    document.getElementById("PathfindingBlockChoice").style.background = getColorOfSelectedBlock();
                }
            }
        }