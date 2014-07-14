define(function(require, exports, module) {

    var levels = {
      demoLevel: {
        smallCube: [
                    // back face
                    [1, 2, 0],
                    [2, 0, 0],
                    [3, 1, 0],

                    // md back
                    [0, 0, 1],
                    [2, 3, 1],

                    // md front
                    [1, 0, 2],
                    [3, 3, 2],

                    // front
                    [0, 2, 3],
                    [1, 3, 3],
                    [2, 1, 3],
                    [3, 0, 3]
        ],
        
        destroyer: [0, 3, 0]
      },

      introVideo: {
        smallCube: [
                    // back face

                    // md back
                    [0, 3, 1],
                    [1, 0, 1],

                    // md front
                    [ 2, 0, 2],
                    [ 0, 2, 2],

                    // front
                    [ 3, 0, 3],
                    [ 0, 1, 3]
        ],

        destroyer: [3, 3, 0]
      },

      levels: [
        {// level 1 (*1)
            smallCube: [
                        [1, 3, 3],
                        [2, 3, 3],
                        [3, 3, 3]
                        ],
            
            destroyer: [0, 3, 3]
        },

        {// level 2 (*4)
            smallCube: [
                        [0, 2, 0],
                        [3, 1, 0],
                        [3, 0, 3]
                        ],
            
            destroyer: [0, 3, 3]
        },

        {// level 3(*5)
            smallCube: [
                        [0, 0, 3],
                        [0, 1, 3],
                        [0, 2, 3],
                        [1, 3, 3],
                        [2, 3, 3],
                        [3, 3, 3]
                        ],
            
            destroyer: [0, 3, 3]
        },

        {//level 4(*8)
            smallCube: [
                        [0, 0, 0],
                        [1, 0, 1],
                        [2, 0, 2],
                        [3, 1, 0],
                        [3, 2, 1],
                        [3, 3, 2]
            ],
            
            destroyer: [0, 3, 3]
        },

        {// level 5 (*9)
            smallCube: [
                        // back face
                        [1, 2, 0],
                        [2, 0, 0],
                        [3, 1, 0],

                        // md back
                        [0, 0, 1],
                        [2, 3, 1],

                        // md front
                        [1, 0, 2],
                        [3, 3, 2],

                        // front
                        [0, 2, 3],
                        [1, 3, 3],
                        [2, 1, 3],
                        [3, 0, 3]
            ],
            
            destroyer: [0, 3, 0]
        },

        {// level 6 (*10)
            smallCube: [
                        [0, 0, 0],
                        [0, 1, 0],
                        [0, 2, 0],
                        [1, 0, 0],
                        [2, 0, 0],
                        [3, 0, 0],
                        [3, 0, 1],
                        [3, 0, 2],
                        [3, 0, 3],
                        [3, 1, 3],
                        [3, 2, 3],
                        [3, 3, 3]
                        ],
            
            destroyer: [0, 3, 0]
        },

        {// level 7 (*11)
            smallCube: [
                        [0, 0, 0],
                        [0, 0, 1],
                        [0, 0, 2],
                        [1, 0, 3],
                        [2, 0, 3],
                        [3, 0, 3],
                        [2, 0, 0],
                        [3, 0, 1],
                        [3, 3, 0]
                        ],
            
            destroyer: [0, 3, 3]
        },

        {// level 8 (*12)
            smallCube: [
                        [0, 0, 0],
                        [0, 0, 1],
                        [0, 0, 2],
                        [3, 1, 0],
                        [3, 2, 0],
                        [3, 3, 0],
                        [1, 0, 3],
                        [2, 0, 3],
                        [3, 0, 3],
                        [0, 1, 3],
                        [0, 2, 3],
                        [0, 3, 3]
                        ],
            
            destroyer: [0, 0, 3]
        },

        {// level 9 (*13)
            smallCube: [
                        [1, 2, 0],
                        [3, 2, 1],
                        [0, 3, 2],
                        [1, 0, 2],
                        [2, 0, 2],
                        [3, 0, 2]
                        ],
            
            destroyer: [2, 3, 3]
        },

        {// level 10 (*14)
            smallCube: [
                        [0, 0, 0],
                        [1, 0, 0],
                        [0, 1, 0],
                        [0, 2, 0],
                        [1, 0, 2],
                        [3, 0, 2],
                        [3, 0, 3],
                        [3, 1, 3],
                        [3, 2, 3]
                        ],
            
            destroyer: [0, 3, 3]
        },

        {// level 11 (*15)
            smallCube: [
                        [3, 0, 0],
                        [0, 1, 0],
                        [3, 2, 0],
                        [0, 3, 0],
                        [2, 3, 0],
                        [0, 3, 1],
                        [3, 3, 1],
                        [0, 3, 2],
                        [3, 1, 3],
                        [1, 3, 3],
                        [2, 3, 3],
                        [3, 3, 3]
                        ],
            
            destroyer: [0, 3, 3]
        },

        {// level 12 (*16)
            smallCube: [
                        [0, 1, 0],
                        [0, 3, 0],
                        [3, 1, 0],
                        [3, 2, 0],
                        [3, 3, 0],
                        [0, 0, 3],
                        [0, 1, 3],
                        [0, 2, 3],
                        [3, 2, 3]
                        ],
            
            destroyer: [3, 0, 3]
        }
      ],
    };

    module.exports = levels;
});