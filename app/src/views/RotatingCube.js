define(function(require, exports, module) {
    var View           = require('famous/core/View');
    var Surface        = require('famous/core/Surface');
    var Transform      = require('famous/core/Transform');
    var Modifier       = require('famous/core/Modifier');
    var StateModifier  = require('famous/modifiers/StateModifier');
    var MouseSync      = require('famous/inputs/MouseSync');
    var Transitionable      = require('famous/transitions/Transitionable');

    var CubeView = require('views/CubeView');
    var DestroyerCube = require('views/DestroyerCube');

    var transitionable = new Transitionable(0);

    function RotatingCube() {
        View.apply(this, arguments);

        this.yTracker = 0;

        this.position = [0, 0, 0];
        this.endMouseData = undefined;
        
        _createRotateModifier.call(this);
        _createBackground.call(this);
        _setBackgroundListeners.call(this);
        _createParentCube.call(this);
        _createDestroyerCube.call(this);
    }

    RotatingCube.prototype = Object.create(View.prototype);
    RotatingCube.prototype.constructor = RotatingCube;

    RotatingCube.DEFAULT_OPTIONS = {};

    function _createDestroyerCube () {
        var destroyerCube = new DestroyerCube();
        this.node.add(destroyerCube);
    }

    function _createParentCube () {
        this.cube = new CubeView();

        for (var j=0;j<this.cube.surfaces.length;j++) {
            this.cube.surfaces[j].setProperties({pointerEvents: 'none'});
        }

        this.node.add(this.cube);
    }

    function _createBackground () {
        this.backgroundSurface = new Surface({
            size: [undefined, undefined]
        });

        this.add(this.backgroundSurface);
    }

    function _createRotateModifier () {
        var self = this;
        var rotateModifier = new Modifier({
            // transform: function () {
            //     var trans = Transform.multiply(
            //         Transform.rotate(self.position[1]/100, self.position[0]/100, 0),
            //         Transform.rotate([self.position[0] * Math.PI, self.position[0] * Math.PI, self.position[0] * Math.PI])
            //         );
            //     return Transform.aboutOrigin([window.innerWidth/2, window.innerHeight/2, 0], trans);
            // }
            transform: function () {
                var trans = Transform.rotate(self.position[1]/100, self.position[0]/100, 0);
                return Transform.aboutOrigin([window.innerWidth/2, window.innerHeight/2, 0], trans);
            }
        });

        this.node = this.add(rotateModifier);
    }

    function _setBackgroundListeners () {
        var ParentCubeSync = new MouseSync();

        this.backgroundSurface.pipe(ParentCubeSync);

        ParentCubeSync.on('end', function (data) {
            this.endMouseData = data;
            _identifyRotateDirection.call(this);
        }.bind(this));
    }

    function _identifyRotateDirection () {
        var xDelta = this.endMouseData.delta[0];
        var yDelta = this.endMouseData.delta[1];


        // vertical 
        if (Math.abs(xDelta) < Math.abs(yDelta)) {
            if (yDelta > 0) {
                this.yTracker--;
                if (this.yTracker === -5 || this.yTracker === -1) {
                    if (this.yTracker === -5) this.yTracker = -1;
                    console.log('neg y!');
                    this.position[1] -= Math.PI * 50;
                } else if (this.yTracker === 3) {
                    console.log('neg y!');
                    this.position[1] -= Math.PI * 50;
                } else {
                    this.position[1] -= Math.PI * 50;
                }
                console.log('neg: ', this.yTracker);
            } else {
                this.yTracker++;
                if (this.yTracker === 5 || this.yTracker === 1) {
                    if (this.yTracker === 5) this.yTracker = 1;
                    console.log('pos y!');
                    this.position[1] += Math.PI * 50;
                } else if (this.yTracker === -3) {
                    console.log('pos y!');
                    this.position[1] -= Math.PI * 50;
                } else {
                    this.position[1] += Math.PI * 50;
                }
                console.log('pos: ', this.yTracker);
            }
        // horizontal
        } else {
            if (xDelta > 0) {
                this.position[0] += Math.PI * 50;
            } else {
                this.position[0] -= Math.PI * 50;
            }
        }
    }

    module.exports = RotatingCube;


});
