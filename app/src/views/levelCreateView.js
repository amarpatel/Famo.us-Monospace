define(function(require, exports, module) {
    var View          = require('famous/core/View');
    var Surface       = require('famous/core/Surface');
    var Transform     = require('famous/core/Transform');
    var StateModifier = require('famous/modifiers/StateModifier');

    function levelCreateView() {
        View.apply(this, arguments);
    }

    levelCreateView.prototype = Object.create(View.prototype);
    levelCreateView.prototype.constructor = levelCreateView;

    levelCreateView.DEFAULT_OPTIONS = {};

    module.exports = levelCreateView;
});
