define(function(require, exports, module) {

  var Engine = require('famous/core/Engine');  
  var RotatingCube = require('views/RotatingCube');
  var Modifier       = require('famous/core/Modifier');

  var rotatingCube = new RotatingCube();

  var mainContext = Engine.createContext();
  mainContext.setPerspective(400);
  modifier = new Modifier({
    origin: [0.5, 0.5],
    align: [0.5, 0.5]
  });
  mainContext.add(modifier).add(rotatingCube);
  

});


// define(function(require, exports, module) {
//     var Engine     = require('famous/core/Engine');
//     var Surface    = require('famous/core/Surface');
//     var Modifier   = require('famous/core/Modifier');
//     var Transform  = require('famous/core/Transform');
//     var Quaternion = require('famous/math/Quaternion');

//     var mainContext = Engine.createContext();

//     var quaternion = new Quaternion(Math.PI/4, .5, .5, 0);

//     var surface = new Surface({
//         size: [200, 200],
//         content: 'Hello World',
//         classes: ["red-bg"],
//         properties: {
//             lineHeight: '200px',
//             textAlign: 'center'
//         }
//     });

//     var modifier = new Modifier();
//     modifier.transformFrom(function() {
//         return toggle ? Transform.identity : quaternion.getTransform();
//     });

//     mainContext.add(new Modifier({origin: [.5, .5]})).add(modifier).add(surface);

//     var toggle = true;
//     Engine.on('click', function() {
//         toggle = toggle ? false : true;
//         console.log(quaternion.getTransform());

//     });
// });


/*
define(function(require, exports, module) {
    var Engine     = require('famous/core/Engine');
    var Surface    = require('famous/core/Surface');
    var Modifier   = require('famous/core/Modifier');
    var Transform  = require('famous/core/Transform');
    var RenderNode = require('famous/core/RenderNode');
    var Quaternion = require('famous/math/Quaternion');

    var mainContext = Engine.createContext();

    // The axis of the rotation is a Left Hand Rule vector with X Y Z (i j k) components
    var quaternion = new Quaternion(1, 0, 0, 0);
    var smallQuaternion = new Quaternion(185, 1, 1, 0);

    var rotationModifier = new Modifier({
        origin: [0.5, 0.5]
    });

    // Bind the box's rotation to the quaternion
    rotationModifier.transformFrom(function() {
        return quaternion.getTransform();
    });

    mainContext.add(rotationModifier)
               .add(createBox(260, 260, 260));
    mainContext.setPerspective(1000);

    // This is where the rotation is created
    Engine.on('prerender', function() {
        // You combine rotations through quaternion multiplication
        quaternion = quaternion.multiply(smallQuaternion);
    });

    Engine.on('click', function() {
        smallQuaternion = new Quaternion(40, 0, 0, 0);
    });

    // Creates box renderable
    function createBox(width, height, depth) {
        var box = new RenderNode();

        function createSide(params){
            var surface = new Surface({
                size: params.size,
                content: params.content,
                classes: params.classes,
                properties: params.properties
            });

            var modifier = new Modifier({
                transform: params.transform
            });

            box.add(modifier).add(surface);
        };

        // Front
        createSide({
            size: [width, height],
            content: '<h2>Hello World, let\'s get friendly.</h2><p>Isn\'t it awesome that you can scroll this scroller while the cube is moving?</p>',
            classes: ["red-bg"],
            properties: {
                lineHeight: 25 + 'px',
                textSize: '20px',
                backgroundColor: '#222',
                color: '#fff',
                textAlign: 'center',
                overflow: 'auto'
            },
            transform: Transform.translate(0, 0, depth / 2)
        });

        // Back
        createSide({
            size: [width, height],
            content: 'G\'bye world, Good to know you :D',
            properties: {
                lineHeight: height + 'px',
                textAlign: 'center',
                backgroundColor: '#ccc',
                fontSize: '18px',
                overflow: 'hidden',
                color: '#777'
            },
            transform: Transform.multiply(Transform.translate(0, 0, - depth / 2), Transform.multiply(Transform.rotateZ(Math.PI), Transform.rotateX(Math.PI))),
        });

        // Top
        createSide({
            size: [width, depth],
            content: 'I\'m on Top! Just a shimmy and a shake',
            properties: {
                lineHeight: depth + 'px',
                textAlign: 'center',
                backgroundColor: '#0cf',
                overflow: 'hidden',
                color: '#666'
            },
            transform: Transform.multiply(Transform.translate(0, -height / 2, 0), Transform.rotateX(Math.PI/2)),
        });

        // Bottom
        createSide({
            size: [width, depth],
            content: 'I\'m the bottom!',
            properties: {
                lineHeight: depth + 'px',
                textAlign: 'center',
                backgroundColor: '#fc0',
                overflow: 'hidden',
                color: '#777'
            },
            transform: Transform.multiply(Transform.translate(0, height / 2, 0), Transform.multiply(Transform.rotateX(-Math.PI/2), Transform.rotateZ(Math.PI))),
        });

        // Left
        createSide({
            size: [depth, height],
            content: 'I\'m the Left! I\'m content',
            properties: {
                lineHeight: height + 'px',
                textAlign: 'center',
                backgroundColor: '#f0c',
                overflow: 'hidden',
                color: '#777'
            },
            transform: Transform.multiply(Transform.translate(-width / 2, 0, 0), Transform.rotateY(-Math.PI/2))
        });

        // Right
        createSide({
            size: [depth, height],
            content: 'I\'m always Right!',
            properties: {
                lineHeight: height + 'px',
                textAlign: 'center',
                backgroundColor: '#c0f',
                overflow: 'hidden',
                color: '#777',
            },
            transform: Transform.multiply(Transform.translate(width / 2, 0, 0), Transform.rotateY(Math.PI/2))
        });

        return box;
    }
});
*/
