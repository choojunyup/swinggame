/*
window.requestAnimationFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        // if all else fails, use setTimeout
        function(callback) {
            return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
        };
})();
(function() {

    if ("performance" in window == false) {
        window.performance = {};
    }

    Date.now = (Date.now || function() { // thanks IE8
        return new Date().getTime();
    });

    if ("now" in window.performance == false) {

        var nowOffset = Date.now();

        if (performance.timing && performance.timing.navigationStart) {
            nowOffset = performance.timing.navigationStart
        }

        window.performance.now = function now() {
            return Date.now() - nowOffset;
        }
    }

})();
*/

"use strict";
var _get = function a(b, c, f) {
        null === b && (b = Function.prototype);
        var g = Object.getOwnPropertyDescriptor(b, c);
        if (g === void 0) {
            var k = Object.getPrototypeOf(b);
            return null === k ? void 0 : a(k, c, f)
        }
        if ("value" in g) return g.value;
        var l = g.get;
        return void 0 === l ? void 0 : l.call(f)
    },
    _createClass = function() {
        function a(b, c) {
            for (var g, f = 0; f < c.length; f++) g = c[f], g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(b, g.key, g)
        }
        return function(b, c, f) {
            return c && a(b.prototype, c), f && a(b, f), b
        }
    }();

function _possibleConstructorReturn(a, b) {
    if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return b && ("object" == typeof b || "function" == typeof b) ? b : a
}

function _inherits(a, b) {
    if ("function" != typeof b && null !== b) throw new TypeError("Super expression must either be null or a function, not " + typeof b);
    a.prototype = Object.create(b && b.prototype, {
        constructor: {
            value: a,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), b && (Object.setPrototypeOf ? Object.setPrototypeOf(a, b) : a.__proto__ = b)
}

function _classCallCheck(a, b) {
    if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
}
var SpriteDefs = {
        character: [{
            x: 0,
            y: 0,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 40,
            y: 0,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 0,
            y: 40,
            w: 40,
            h: 39,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 40,
            y: 40,
            w: 40,
            h: 39,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 80,
            y: 40,
            w: 40,
            h: 39,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 0,
            y: 80,
            w: 40,
            h: 41,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 40,
            y: 80,
            w: 40,
            h: 41,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 80,
            y: 80,
            w: 40,
            h: 41,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 0,
            y: 122,
            w: 40,
            h: 41,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 40,
            y: 122,
            w: 40,
            h: 40,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 80,
            y: 122,
            w: 40,
            h: 40,
            origin: {
                x: 30,
                y: 20
            }
        }, {
            x: 0,
            y: 186,
            w: 40,
            h: 59,
            origin: {
                x: 20,
                y: 39
            }
        }, {
            x: 40,
            y: 186,
            w: 40,
            h: 59,
            origin: {
                x: 20,
                y: 39
            }
        }, {
            x: 80,
            y: 186,
            w: 40,
            h: 59,
            origin: {
                x: 20,
                y: 39
            }
        }, {
            x: 340,
            y: 0,
            w: 18,
            h: 12,
            origin: {
                x: 9,
                y: 6
            }
        }, {
            x: 200,
            y: 260,
            w: 50,
            h: 50,
            origin: {
                x: 25,
                y: 25
            }
        }, {
            x: 250,
            y: 260,
            w: 50,
            h: 50,
            origin: {
                x: 25,
                y: 25
            }
        }, {
            x: 300,
            y: 260,
            w: 50,
            h: 50,
            origin: {
                x: 25,
                y: 25
            }
        }, {
            x: 350,
            y: 260,
            w: 50,
            h: 50,
            origin: {
                x: 25,
                y: 25
            }
        }],
        item: [{
            x: 160,
            y: 80,
            w: 50,
            h: 50,
            origin: {
                x: 25,
                y: 25
            }
        }, {
            x: 210,
            y: 80,
            w: 50,
            h: 50,
            origin: {
                x: 25,
                y: 25
            }
        }, {
            x: 300,
            y: 0,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 300,
            y: 40,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 300,
            y: 80,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 300,
            y: 120,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 300,
            y: 160,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 300,
            y: 200,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 160,
            y: 260,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }],
        effect: [{
            x: 160,
            y: 0,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 190,
            y: 0,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 220,
            y: 0,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 250,
            y: 0,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 160,
            y: 40,
            w: 30,
            h: 30,
            origin: {
                x: 0,
                y: 0
            }
        }, {
            x: 190,
            y: 40,
            w: 30,
            h: 30,
            origin: {
                x: 0,
                y: 0
            }
        }, {
            x: 220,
            y: 40,
            w: 30,
            h: 30,
            origin: {
                x: 0,
                y: 0
            }
        }, {
            x: 250,
            y: 40,
            w: 30,
            h: 30,
            origin: {
                x: 0,
                y: 0
            }
        }, {
            x: 0,
            y: 250,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 30,
            y: 250,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 60,
            y: 250,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 90,
            y: 250,
            w: 30,
            h: 30,
            origin: {
                x: 15,
                y: 15
            }
        }, {
            x: 0,
            y: 280,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 40,
            y: 280,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 80,
            y: 280,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }, {
            x: 120,
            y: 280,
            w: 40,
            h: 40,
            origin: {
                x: 20,
                y: 20
            }
        }]
    },
    AnimationDefs = {
        character: {
            spin: [{
                frame: 0,
                duration: 0.05
            }, {
                frame: 1,
                duration: 0.05
            }],
            forward: [{
                frame: 2,
                duration: 0.08
            }, {
                frame: 3,
                duration: 0.08
            }, {
                frame: 4,
                duration: 0.08
            }, {
                frame: 3,
                duration: 0.08
            }],
            nutral: [{
                frame: 5,
                duration: 0.05
            }, {
                frame: 6,
                duration: 0.05
            }, {
                frame: 7,
                duration: 0.05
            }, {
                frame: 6,
                duration: 0.05
            }],
            backward: [{
                frame: 8,
                duration: 0.05
            }, {
                frame: 9,
                duration: 0.05
            }, {
                frame: 10,
                duration: 0.05
            }, {
                frame: 9,
                duration: 0.05
            }],
            fall: [{
                frame: 11,
                duration: 0.05
            }, {
                frame: 12,
                duration: 0.05
            }, {
                frame: 13,
                duration: 0.05
            }, {
                frame: 12,
                duration: 0.05
            }],
            sword: [{
                frame: 14,
                duration: 1
            }],
            magnet_field: [{
                frame: 15,
                duration: 0.05
            }, {
                frame: 16,
                duration: 0.05
            }, {
                frame: 17,
                duration: 0.05
            }, {
                frame: 18,
                duration: 0.05
            }]
        },
        item: {
            potion: [{
                frame: 0,
                duration: 1
            }],
            mana: [{
                frame: 1,
                duration: 1
            }],
            coin: [{
                frame: 2,
                duration: 0.1
            }, {
                frame: 3,
                duration: 0.1
            }, {
                frame: 4,
                duration: 0.1
            }, {
                frame: 5,
                duration: 0.1
            }, {
                frame: 6,
                duration: 0.1
            }, {
                frame: 7,
                duration: 0.1
            }],
            magnet: [{
                frame: 8,
                duration: 1
            }]
        },
        effect: {
            jump: [{
                frame: 0,
                duration: 0.05
            }, {
                frame: 1,
                duration: 0.05
            }, {
                frame: 2,
                duration: 0.05
            }, {
                frame: 3,
                duration: 0.05
            }],
            clap: [{
                frame: 4,
                duration: 0.05
            }, {
                frame: 5,
                duration: 0.05
            }, {
                frame: 6,
                duration: 0.05
            }, {
                frame: 7,
                duration: 0.05
            }],
            coin: [{
                frame: 8,
                duration: 0.05
            }, {
                frame: 9,
                duration: 0.05
            }, {
                frame: 10,
                duration: 0.05
            }, {
                frame: 11,
                duration: 0.05
            }],
            mana: [{
                frame: 12,
                duration: 0.05
            }, {
                frame: 13,
                duration: 0.05
            }, {
                frame: 14,
                duration: 0.05
            }, {
                frame: 15,
                duration: 0.05
            }]
        }
    },
    Images = {
        sprites: function() {
            var a = new Image;
            return a.src = "img/sprite_img.png", a
        }()
    },
    tileSets = [
        [5, 5, 6, 7, 6, 5],
        [5, 40, 80, 90, 100, 100, 120, 120, 100, 50, 30, 10],
        [5, 10, 15, 15, 10, 8],
        [5, 10, 15, 15, 30, 20, 16, 8],
        [5, 8, 11, 14, 17, 20, 30, 20, 10],
        [5, 30, 50, 90, 120, 120, 90, 50, 20],
        [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 45, 40, 30, 20, 10],
        [5, 20, 40, 60, 70, 80, 80, 70, 60, 50, 40, 30, 20, 10],
        [5, 15, 20, 25, 30, 35, 50, 60, 70, 80, 90, 90, 90, 80, 75, 70, 50, 30, 10],
        [20, 30, 40, 50, 60, 80, 100, 120, 140, 160, 180, 200, 200, 200, 190, 190, 187, 185, 185 , 185, 181, 150, 80, 60, 40, 20],
        [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 70, 90, 110, 130, 150, 170, 190, 210, 210, 190, 180, 170, 160, 150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
    ];
Array.prototype.last = function() {
    return 0 < this.length ? this[this.length - 1] : null
}, Math.distanceToLine = function(a, b) {
    var c = Math.distance(b[0], b[1]);
    if (0 == c) return Math.distance(a, b[0]);
    var f = ((a.x - b[0].x) * (b[1].x - b[0].x) + (a.y - b[0].y) * (b[1].y - b[0].y)) / c;
    return 0 > f ? Math.distance(a, b[0]) : f > c ? Math.distance(a, b[1]) : Math.abs(-(a.x - b[0].x) * (b[1].y - b[0].y) + (a.y - b[0].y) * (b[1].x - b[0].x)) / c
}, Math.distance = function(a, b) {
    return Math.abs(Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2)))
}, Math.rad2deg = function(a) {
    return 180 * a / Math.PI
}, Math.deg2rad = function(a) {
    return a / 180 * Math.PI
}, Math.angle = function(a, b) {
    var c = b.x - a.x,
        f = b.y - a.y;
    return Math.atan2(-f, c) - Math.PI / 2
}, Math.getPoint = function(a, b, c) {
    return {
        x: a.x + c * Math.cos(b),
        y: a.y + c * Math.sin(b)
    }
}, Math.lineToPoint = function(a, b) {
    return (a.y - b[0].y) * (b[1].x - b[0].x) - (a.x - b[0].x) * (b[1].y - b[0].y)
}, Math.isCross = function(a, b) {
    if (a.y > b[0].y != a.y > b[1].y) {
        var c = (b[1].x - b[0].x) * (b[1].y - b[0].y) / (b[1].y - b[0].y) + b[0].x;
        if (a.x > c) return !0
    }
    return !1
};
var Sprite = function() {
        function a(b, c, f, g, k, l, m) {
            _classCallCheck(this, a), 
            this.img = b, 
            this.sx = c, 
            this.sy = f, 
            this.sw = g, 
            this.sh = k, 
            this.ox = l || 0, 
            this.oy = m || 0
        }
        return _createClass(a, [{
            key: "draw",
            value: function draw(b, c, f, g) {
                b.save();
                var k = g && g.scale || 1;
                b.translate(c, f), g && g.rotate && b.rotate(-g.rotate), b.drawImage(this.img, this.sx, this.sy, this.sw, this.sh, -this.ox * k, -this.oy * k, this.sw * k, this.sh * k), b.restore()
            }
        }]), a
    }(),
    SpriteSheet = function() {
        function a(b, c) {
            var f = this;
            _classCallCheck(this, a), this.img = b, this.sprites = [], c.forEach(function(g) {
                var k = new Sprite(f.img, g.x, g.y, g.w, g.h, g.origin.x, g.origin.y);
                f.sprites.push(k)
            })
        }
        return _createClass(a, [{
            key: "get",
            value: function get(b) {
                return this.sprites[b]
            }
        }]), a
    }(),
    Animation = function() {
        function a(b, c, f) {
            _classCallCheck(this, a), 
            this.elapsed = 0, 
            this.curFrame = 0, 
            this.sprites = b, 
            this.frames = c, 
            this.done = !1, 
            this.duration = c.reduce(function(g, k) {
                return g + k.duration
            }, 0), 
            this.loop = f && f.hasOwnProperty("loop") ? f.loop : !0
        }
        return _createClass(a, [{
            key: "clone",
            value: function clone() {
                return new a(this.sprites, this.frames)
            }
        }, {
            key: "reset",
            value: function reset() {
                this.elapsed = 0, this.curFrame = 0
            }
        }, {
            key: "update",
            value: function update(b) {
                if (!this.done)
                    if (this.elapsed += b, !this.loop && this.elapsed > this.duration) this.done = !0, this.curFrame = this.frames.length - 1;
                    else {
                        for (var c = 0, f = 0; f += this.frames[c].duration, !(f >= this.elapsed);) c += 1, c %= this.frames.length;
                        this.curFrame = c
                    }
            }
        }, {
            key: "draw",
            value: function draw(b, c, f, g) {
                this.sprites.get(this.frames[this.curFrame].frame).draw(b, c, f, g)
            }
        }, {
            key: "current",
            get: function get() {
                return this.sprites.get(this.frames[this.curFrame].frame)
            }
        }]), a
    }(),
    Game = function() {
        function a(b) {
            _classCallCheck(this, a), 
            this.canvas = b, 
            this.ctx = this.canvas.getContext("2d"), 
            this.scenes = [], 
            this.now = 0, 
            this.last = 0, 
            this.elapsed = 0, 
            this.timeDelta = 0, 
            this.paused = !1, 
            this.key = null, 
            this.mouse = null, 
            this.scoreManager = new ScoreManager, 
            document.addEventListener("keydown", this.keyHandler.bind(this), !1), 
            window.addEventListener("focus", this.focusHandler.bind(this), !1), 
            window.addEventListener("blur", this.blurHandler.bind(this), !1), 
            this.canvas.addEventListener("click", this.mouseHandler.bind(this, "click"), !1)
        }
        return _createClass(a, [{
            key: "mouseHandler",
            value: function mouseHandler(b, c) {
                var f = window.getComputedStyle(this.canvas),
                    g = parseInt(this.canvas.width, 0) / parseInt(f.width, 0),
                    k = parseInt(this.canvas.height, 0) / parseInt(f.height, 0),
                    l = {
                        type: b,
                        x: c.offsetX * g,
                        y: c.offsetY * k
                    };
                this.mouse = l
            }
        }, {
            key: "blurHandler",
            value: function blurHandler() {
                this.paused = !0
            }
        }, {
            key: "focusHandler",
            value: function focusHandler() {
                console.log("swing focus");
                this.now = this.last = performance.now(), this.paused = !1
            }
        }, {
            key: "keyHandler",
            value: function keyHandler(b) {
                if (b.repeat || (this.key = b.keyCode), 32 === b.keyCode) return b.preventDefault(), !1
            }
        }, {
            key: "sceneEventHandler",
            value: function sceneEventHandler(b, c) {
                "push" === b ? this.push(c) : "pop" === b ? this.pop() : void 0
            }
        }, {
            key: "update",
            value: function update() {
                this.paused || (this.last = this.now, this.now = performance.now(), this.timeDelta = (this.now - this.last) / 1e3, this.elapsed += this.timeDelta), !this.scoreManager.inited && window.FB && this.scoreManager.init(), this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height), 0 < this.scenes.length && (!this.paused && this.scenes.last().update(this.timeDelta, this.key, this.mouse), this.scenes.last().render(this.ctx)), this.key = null, this.mouse = null, requestAnimationFrame(this.update.bind(this))
            }
        }, {
            key: "push",
            value: function push(b) {
                0 < this.scenes.length && this.scenes.last().pause(), b.parent = this, b.init(), b.on("push", this.sceneEventHandler.bind(this)), this.scenes.push(b)
            }
        }, {
            key: "pop",
            value: function pop() {
                if (0 === this.scenes.length) return null;
                var b = this.scenes.pop();
                return 0 < this.scenes.length && this.scenes.last().resume(), b //,b.destroy()
            }
        }]), a
    }(),
    Scene = function() {
        function a() {
            _classCallCheck(this, a),
            this.children = [], 
            this.elapsed = 0, 
            this.events = {}, 
            this.scoreManager = null, 
            this.parent = null
        }
        return _createClass(a, [{
            key: "on",
            value: function on(b, c) {
                this.events[b] || (this.events[b] = []), this.events[b].some(function() {
                    return fb == c
                }) || this.events[b].push(c)
            }
        }, {
            key: "fire",
            value: function fire(b, c) {
                this.events[b] && this.events[b].forEach(function(f) {
                    return f(b, c)
                })
            }
        }, {
            key: "init",
            value: function init() {
                this.scoreManager = this.parent.scoreManager
            }
        }, {
            key: "update",
            value: function update(b) {
                this.elapsed += b, this.children.forEach(function(c) {
                    c.update(b)
                })
            }
        }, {
            key: "render",
            value: function render(b) {
                this.children.forEach(function(c) {
                    c.render(b)
                })
            }
        }, {
            key: "pause",
            value: function pause() {}
        }, {
            key: "resume",
            value: function resume() {}
        }]), a
    }(),
    GameStartScene = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return c.bgImg = new Image,   
            c.startImg = new Image,
            c.maidImg = new Image,
            c.maid_mag = new Image,
            c.title = new Image,
            c.startImg.src = "img/startbtn.png",
            c.bgImg.src = "img/bgtitle.png",
            c.maidImg.src = "img/maid.png",
            c.maid_mag.src = "img/maid_mag.png",
            c.title.src = "img/title.png",
            c.img = Images.sprites,
            //c.pressStart = new Sprite(c.img, 140, 375, 272, 25, 136, 0),
            c.fbButton = new Sprite(c.img, 400, 90, 145, 90, 0, 0),
            c.fbLogged = new Sprite(c.img, 400, 0, 145, 90, 0, 0),
            c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "update",
            value: function update(c, f, g) {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "update", this).call(this, c), 
                32 == f && this.fire("push", new GameScene),   //key space
                g && 540 <= g.y && 110 <= g.x && 430 >= g.x && 640 >= g.y && this.fire("push", new GameScene) //start button
                //g && 2 > this.scoreManager.state && 360 >= g.x != 505 >= g.x && 125 >= g.y != 215 >= g.y && this.scoreManager.login()
            }
        }, {
            key: "render",
            value: function render(c) {
                c.drawImage(this.bgImg, 0, 0),
                ////stat
                c.drawImage(this.startImg, 110, 540, 320 , 100), //up 

                
                c.drawImage(this.maidImg, 30, -25 + Math.cos(this.elapsed)*22),
                
                c.drawImage(this.maid_mag, 60, 130 + Math.sin(this.elapsed)*20),

                c.drawImage(this.title, 50 ,300)
                
                ////
                /*
                1 >= this.elapsed % 4 && c.drawImage( this.maidImg, -50, -30, 600, 600)
                1.5 >= this.elapsed % 4 && 1 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -26, 600, 600)
                2 >= this.elapsed % 4  && 1.5 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -23, 600, 600)
                2.5 >= this.elapsed % 4 && 2 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -21, 600, 600)
                3 >= this.elapsed % 4 && 2.5 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -20, 600, 600)
                3.5 >= this.elapsed % 4 && 3 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -24, 600, 600)
                4 >= this.elapsed % 4  && 3.5 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -28, 600, 600)
                4 < this.elapsed % 4 && c.drawImage( this.maidImg, -50, -29, 600, 600)
                */
                //2 > this.scoreManager.state ? this.fbButton.draw(c, 360, 125) : (this.fbLogged.draw(c, 360, 125), c.save(), c.fillStyle = "white", c.textAlign = "center", c.font = "15px sans-serif", c.fillText(this.scoreManager.name ? this.scoreManager.name : "FACEBOOK \uB85C\uADF8\uC778 \uC644\uB8CC", 432, 155), c.font = "14px sans-serif", c.fillText("\uCD5C\uACE0\uAE30\uB85D " + this.scoreManager.highscore + "m", 432, 175), c.restore())
            }
        }]), b
    }(Scene),

    GameScene = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return c.cameraX = 100, 
            c.itemPrice = [500, 800], 
            c.character = new Character, 
            c.background = new Background, 
            c.terrain = new Terrain, 
            c.itemManager = new ItemManager, 
            c.effectManager = new EffectManager, 
            c.soundManager = new SoundManager, 
            c.ui = new UI(null, c.character), 
            c.children.push(c.background), 
            c.children.push(c.terrain), 
            c.children.push(c.itemManager), 
            c.children.push(c.character), 
            c.children.push(c.effectManager), 
            c.children.push(c.ui), 
            c.children.forEach(function(f) {
                f.parent = c
            }), 
            c.character.effect = c.effect.bind(c), 
            c.character.sound = c.soundManager.play.bind(c.soundManager), 
            c.state = 0, 
            c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "effect",
            value: function effect(c, f, g) {
                this.effectManager.create(c, f, g)
            }
        }, {
            key: "init",
            value: function init() {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "init", this).call(this), 
                this.cameraX = 100, 
                this.itemPrice = [500, 800], 
                this.ui.scoreManager = this.scoreManager, 
                this.background.init(), 
                this.character.init(), 
                this.terrain.init(), 
                this.itemManager.init(), 
                this.effectManager.init(), 
                this.scoreManager.reset(), 
                this.soundManager.bgmStart(), 
                this.state = 0
            }
        }, {
            key: "update",
            value: function update(c, f, g) {
                var l = this;
                if (this.elapsed += c, 0 == this.state) {
                    if (this.children.forEach(function(n) {
                            n.update(c, l.character, g)
                        }), 
                        this.cameraX = Math.max(this.cameraX, this.character.x), 
                        this.scoreManager.score = Math.max(0, 0 | (this.cameraX - 100) / 10), 
                        this.itemManager.checkCollision(this.character), 
                        //32 === f,    //"key space"
                        g && 540 < g.y && 640 > g.y && 110 < g.x && 340 > g.x  || 32 === f//"jump button touch" and keyboard
                       ){
                        var k = Math.cos(Math.PI / 4) * this.character.y + this.character.x;
                        this.character.setPivot({
                            x: k,
                            y: 0
                        })
                    } else if (83 === f || 68 == f) {
                        var m = 83 === f ? 0 : 1;
                        this.character.money >= this.itemPrice[m] && (this.character.money -= this.itemPrice[m], this.character.gotItem(0 == m ? "mana" : "jump"))
                    } else if ( g && 540 <= g.y && 640 >= g.y && 5 <= g.x && 105 >= g.x) {    //button mana touch
                        var m = 0;
                        this.character.money >= this.itemPrice[0] && (this.character.money -= this.itemPrice[0], this.character.gotItem("mana"))
                    } else if ( g && 540 <= g.y && 640 >= g.y && 435 <= g.x && 535 >= g.x) {    //button highjump touch
                        var m = 0;
                        this.character.money >= this.itemPrice[1] && (this.character.money -= this.itemPrice[1], this.character.gotItem("jump"))
                    }

                    540 < this.character.y || this.terrain.isHit(this.character) ? (this.terrain.fillStyle = "red", this.state = 1, this.elapsed = 0, this.soundManager.play("gameover"), saveScore(this.scoreManager.score)) : this.terrain.fillStyle = "black"
                }else if(g && 440 < g.y && 540 > g.y && 110 < g.x && 430 > g.x){
                    this.init();
                    //alert("pop"+this.scenes.length);
                    //this.fire("pop");
                    //location.reload(true);
                }else if(g && 105 > g.x && 5 < g.x && 640 > g.y && 540 < g.y){
                    game.pop();  //titlebtn

                }
                else 32 === f && this.init();
                g && this.ui.click(g)
            }
        }, {
            key: "render",
            value: function render(c) {
                if (c.save(), c.translate(-this.cameraX + 200, 0), 1 === this.state) {
                    var f = 540 * (1 - 2 * Math.min(this.elapsed, 0.5));
                    c.save(), 
                    c.beginPath(), 
                    //c.arc(this.character.x, this.character.y, 2 * this.character.radius + f, 0, 2 * Math.PI),
                    c.arc(this.character.x, this.character.y, f, 0, 2 * Math.PI), 
                    c.clip(), 
                    this.background.render(c), 
                    this.terrain.render(c), 
                    this.itemManager.render(c), 
                    this.character.render(c), 
                    c.restore(), 
                    this.ui.render(c)
                } else _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "render", this).call(this, c);
                c.restore()
            }
        }]), b
    }(Scene),
    GameObject = function() {
        function a() {
            _classCallCheck(this, a)
        }
        return _createClass(a, [{
            key: "constructr",
            value: function constructr() {
                this.parent = null
            }
        }, {
            key: "init",
            value: function init() {}
        }, {
            key: "update",
            value: function update() {}
        }, {
            key: "render",
            value: function render() {}
        }]), a
    }(),
    Character = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            for (var f in c.img = Images.sprites, c.spriteSheet = new SpriteSheet(c.img, SpriteDefs.character), c.animations = {}, AnimationDefs.character) AnimationDefs.character.hasOwnProperty(f) && (c.animations[f] = new Animation(c.spriteSheet, AnimationDefs.character[f]));
            return c.radius = 20, 
                   c.money = 0, 
                   c.mp = 10, 
                   c.magnet = 0, 
                   c.rotation = 0, 
                   c.currentAnimation = "forward", 
                   c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "init",
            value: function init() {
                this.x = 50, this.y = 50, this.gravity = 9, this.pivot = null, this.position = null, this.force = {
                    x: 0,
                    y: 0
                }, this.pLen = 0, this.angle = 0, this.accel = 0, this.money = 0, this.mp = 10, this.magnet = 0, this.rotation = 0, this.currentAnimation = "forward"
            }
        }, {
            key: "gotItem",
            value: function gotItem(c) {
                "jump" === c ? (this.pivot = null, this.force.y = -8, this.force.x += 10, this.mp = Math.min(10, this.mp + 1), this.effect("jump", this.x, this.y), this.sound("highjump")) : "mana" === c ? (this.mp = Math.min(10, this.mp + 3), this.effect("mana", this.x, this.y), this.sound("potion")) : "magnet" === c ? this.magnet = 3 : "coin" === c ? (this.money += 100, this.effect("coin", this.x, this.y), this.sound("coin")) : void 0
            }
        }, {
            key: "setPivot",
            value: function setPivot(c) {
                null === this.pivot && 0 < this.mp ? (this.mp--, this.pivot = c, this.pLen = Math.distance(this, this.pivot), this.position = {
                    x: this.x - this.pivot.x,
                    y: this.y - this.pivot.y
                }, this.angle = Math.angle({
                    x: this.x,
                    y: this.y
                }, this.pivot), this.accel = -1.3 * (this.force.x + this.force.y) / this.pLen * Math.sin(this.angle), this.effect("clap", c.x, c.y), this.sound("whip"), this.update(0)) : null !== this.pivot && (this.pivot = null, this.pLen = 0, this.position = null, this.angle = 0, this.accel = 0, this.effect("jump", this.x, this.y), this.sound("jump"), this.update(0))
            }
        }, {
            key: "update",
            value: function update(c) {
                if (null === this.pivot) this.currentAnimation = 0 == this.mp ? "fall" : "spin", this.force.y += this.gravity * c, this.force.x *= 0.99, this.x += this.force.x, this.y += this.force.y, this.rotation += -360 * c;
                else {
                    var f = this.angle,
                        g = -1 * this.gravity / this.pLen * Math.sin(f);
                    this.accel += g * c, this.accel *= 0.999, f += this.accel, 90 <= Math.abs(Math.rad2deg(f)) ? this.setPivot(null) : (this.angle = f, this.force.x = this.pLen * this.accel * Math.cos(f), this.force.y = -this.pLen * this.accel * Math.sin(f), this.position.x += this.force.x, this.position.y += this.force.y, this.x = this.position.x + this.pivot.x, this.y = this.position.y + this.pivot.y), this.currentAnimation = -3 > this.force.x ? "backward" : 3 < this.force.x ? "forward" : "nutral"
                }
                this.magnet = Math.max(0, this.magnet - c), this.animations.magnet_field.update(c), this.animations[this.currentAnimation].update(c)
            }
        }, {
            key: "render",
            value: function render(c) {
                if (c.save(), null !== this.pivot) {
                    c.strokeStyle = "orange", c.lineWidth = 3, c.beginPath(), c.moveTo(this.pivot.x, this.pivot.y), c.lineTo(this.pivot.x + this.position.x, this.pivot.y + this.position.y), c.stroke();
                    /*
                    for (var f = {
                            x: this.x,
                            y: this.y
                        }, g = {
                            x: this.pivot.x,
                            y: this.pivot.y
                        }, k = Math.atan2(g.y - f.y, g.x - f.x), l = this.pLen / 12, m = -k - Math.PI / 2, n = 0; 12 > n; n++) this.spriteSheet.get(14).draw(c, f.x, f.y, {
                        rotate: m
                    }), f = Math.getPoint(f, k, l)
                    */
                }
                c.restore(), 0 < this.magnet && this.animations.magnet_field.draw(c, this.x, this.y, {}), -20 > this.y ? (c.save(), c.translate(this.x, 0), c.fillStyle = "rgba(17,17,17,0.5)", c.fillRect(-35, 5, 70, 50), c.fillRect(-30, 10, 60, 40), c.fillRect(-2, 0, 5, 5), c.fillStyle = "white", c.textAlign = "center", c.font = "bold 16px sans-serif", c.fillText(Math.abs(0 | this.y / 10) + "m", 0, 35), c.restore()) : this.animations[this.currentAnimation].draw(c, this.x, this.y, {
                    rotate: "spin" == this.currentAnimation ? this.rotation : 0
                })
            }
        }, {
            key: "collisionCheckPosition",
            get: function get() {
                var c = this.animations[this.currentAnimation].current;
                return {
                    x: this.x - (c.ox - c.sw / 2),
                    y: this.y - (c.oy - c.sh / 2)
                }
            }
        }]), b
    }(GameObject),
    Background = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return c.images = [], 
                   c.images = ["img/background.png", "img/star1.png", "img/star2.png", "img/mountains.png"].map(function(g) {
                var k = new Image;
                return k.src = g, k
            }), c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "render",
            value: function render(c) {
                var f = this.parent.cameraX - 200;
                c.save(), 
                c.translate(f, 0);
                var g = -(f / 25) % 540,
                    k = -(f / 4) % 540,
                    l = -(f / 2) % 800,
                    m = 540 - this.images[3].height;
                c.drawImage(this.images[0], 0, 0), 
                c.drawImage(this.images[1], g, 0), 
                c.drawImage(this.images[1], g + 540, 0), 
                c.drawImage(this.images[2], k, 0), 
                c.drawImage(this.images[2], k + 540, 0), 
                c.drawImage(this.images[3], l, m), 
                c.drawImage(this.images[3], l + 800, m), 
                c.restore()
            }
        }]), b
    }(GameObject),
    Terrain = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return c.points = [], 
                   c.tileWidth = 540 / 50, 
                   c.maxX = 0, 
                   c.fillStyle = "black", 
                   c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "init",
            value: function init() {
                this.points = [], this.maxX = 0
            }
        }, {
            key: "addTile",
            value: function addTile() {
                for (var c, f = this; 55 >= this.points.length;) c = tileSets[0 | Math.floor(Math.random() * tileSets.length)], c.forEach(function(g) {
                    f.maxX += f.tileWidth, f.points.push({
                        x: f.maxX,
                        y: 540 - g
                    })
                })
            }
        }, {
            key: "isHit",
            value: function isHit(c) {
                var f = {
                        x: this.points[0].x,
                        y: 540
                    },
                    g = f,
                    k = !1,
                    l = c.collisionCheckPosition;
                if (this.points.forEach(function(o) {
                        return Math.distanceToLine(l, [g, o]) < c.radius ? (k = !0, !1) : void(g = o)
                    }), k) return !0;
                g = f;
                for (var m = 0, n = 1; g.x < l.x;) Math.isCross(l, [g, this.points[n]]) && m++, g = this.points[n], n++;
                return 0 != m % 2
            }
        }, {
            key: "update",
            value: function update(c) {
                var g = this;
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "update", this).call(this, c);
                var f = this.parent.cameraX - 200;
                this.points = this.points.filter(function(k) {
                    return k.x + g.tileWidth > f
                }), 55 > this.points.length && this.addTile()
            }
        }, {
            key: "render",
            value: function render(c) {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "render", this).call(this, c), 0 == this.points.length || (c.save(), c.fillStyle = this.fillStyle, c.beginPath(), c.moveTo(this.points[0].x, this.points[0].y), this.points.forEach(function(f) {
                    c.lineTo(f.x, f.y)
                }), c.lineTo(this.points.last().x, 540), c.lineTo(this.points[0].x, 540), c.fill(), c.restore())
            }
        }]), b
    }(GameObject),
    ItemManager = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return c.items = [], 
                   c.minX = 0, 
                   c.img = Images.sprites, 
                   c.spriteSheet = new SpriteSheet(c.img, SpriteDefs.item), 
                   c.lastItemX = 0, 
                   c.itemTypes = ["potion", "mana", "magnet"], 
                   c.coinY = 260, 
                   c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "init",
            value: function init() {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "init", this).call(this), this.items = [], this.minX = 0, this.lastItemX = 0, this.coinY = 260
            }
        }, {
            key: "getRandomItemType",
            value: function getRandomItemType() {
                var c = 0 | 10 * Math.random();
                return 1 > c ? "magnet" : 6 > c ? "mana" : "potion"
            }
        }, {
            key: "checkCollision",
            value: function checkCollision(c) {
                this.items.forEach(function(f) {
                    f.isHit(c)
                })
            }
        }, {
            key: "update",
            value: function update(c, f) {
                var k = this,
                    g = 0 < f.magnet;
                if (this.minX = this.parent.cameraX - 200, this.items.forEach(function(m) {
                        if (m.update(c, g), g) {
                            m.originY = m.y, m.ty = 0;
                            var n = Math.atan2(f.y - m.y, f.x - m.x),
                                o = Math.getPoint(m, n, 540 * c);
                            m.x = o.x, m.originY = o.y
                        }
                        m.x < k.minX - 50 && (m.destroy = !0)
                    }), this.items = this.items.filter(function(m) {
                        return !m.destroy
                    }), 920 >= this.lastItemX - this.minX && (this.lastItemX += 80, this.coinY += Math.floor(40 * Math.random()) - 20, 20 > this.coinY && (this.coinY = 20), 520 < this.coinY && (this.coinY = 520), this.createItem("coin", this.lastItemX, this.coinY), 0 == this.lastItemX % 400)) {
                    var l = Math.floor(420 * Math.random()) + 40;
                    this.createItem(this.getRandomItemType(), this.lastItemX, l)
                }
            }
        }, {
            key: "render",
            value: function render(c) {
                var f = this.minX + 540;
                this.items.forEach(function(g) {
                    g.render(c, f)
                })
            }
        }, {
            key: "createItem",
            value: function createItem(c, f, g) {
                var k = null;
                "potion" === c ? k = new Potion(f, g, new Animation(this.spriteSheet, AnimationDefs.item.potion)) : "mana" === c ? k = new Mana(f, g, new Animation(this.spriteSheet, AnimationDefs.item.mana)) : "coin" === c ? k = new Coin(f, g, new Animation(this.spriteSheet, AnimationDefs.item.coin)) : "magnet" === c ? k = new Magnet(f, g, new Animation(this.spriteSheet, AnimationDefs.item.magnet)) : void 0, k && this.items.push(k)
            }
        }]), b
    }(GameObject),
    Item = function(a) {
        function b(c, f, g) {
            _classCallCheck(this, b);
            var k = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return k.x = c, k.originY = f, k.ty = 0, k.radius = 20, k.elapsed = 0, k.destroy = !1, k.anim = g, k
        }
        return _inherits(b, a), _createClass(b, [{
            key: "update",
            value: function update(c, f) {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "update", this).call(this, c), this.elapsed += 2 * c, f ? (this.ty = 0, this.elapsed = 0) : this.ty = 80 * Math.sin(this.elapsed) - 40, this.anim.update(c)
            }
        }, {
            key: "isHit",
            value: function isHit(c) {
                Math.distance(c, this) <= c.radius + this.radius && c.gotItem(this.action())
            }
        }, {
            key: "render",
            value: function render(c, f) {
                this.x > f + 2 * this.radius ? (c.save(), c.beginPath(), c.arc(f - 25, this.y, 20, 0, Math.PI * 2,true), c.fillStyle = "rgba(255,255,255,0.7)", c.fill(), c.fillRect(f - 5, this.y - 2, 10, 5), this.anim.draw(c, f - 25, this.y, {
                    scale: 0.5
                }), c.restore()) : this.anim.draw(c, this.x, this.y, {})
            }
        }, {
            key: "action",
            value: function action() {
                this.destroy = !0
            }
        }, {
            key: "y",
            get: function get() {
                return this.originY + this.ty
            }
        }]), b
    }(GameObject),
    Potion = function(a) {
        function b() {
            return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
        }
        return _inherits(b, a), _createClass(b, [{
            key: "action",
            value: function action() {
                return _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "action", this).call(this), "jump"
            }
        }]), b
    }(Item),
    Mana = function(a) {
        function b() {
            return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
        }
        return _inherits(b, a), _createClass(b, [{
            key: "action",
            value: function action() {
                return _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "action", this).call(this), "mana"
            }
        }]), b
    }(Item),
    Magnet = function(a) {
        function b() {
            return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
        }
        return _inherits(b, a), _createClass(b, [{
            key: "action",
            value: function action() {
                return _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "action", this).call(this), "magnet"
            }
        }]), b
    }(Item),
    Coin = function(a) {
        function b() {
            return _classCallCheck(this, b), _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).apply(this, arguments))
        }
        return _inherits(b, a), _createClass(b, [{
            key: "action",
            value: function action() {
                return _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "action", this).call(this), "coin"
            }
        }, {
            key: "render",
            value: function render(c) {
                this.anim.draw(c, this.x, this.y, {})
            }
        }, {
            key: "update",
            value: function update(c, f) {
                this.elapsed += 2 * c, f ? (this.ty = 0, this.elapsed = 0) : this.ty = 20 * Math.sin(this.elapsed) - 10, this.anim.update(c)
            }
        }]), b
    }(Item),
    EffectManager = function(a) {
        function b() {
            _classCallCheck(this, b);
            var c = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return c.effects = [], c.img = Images.sprites, c.spriteSheet = new SpriteSheet(c.img, SpriteDefs.effect), c
        }
        return _inherits(b, a), _createClass(b, [{
            key: "update",
            value: function update(c) {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "update", this).call(this, c), this.effects = this.effects.filter(function(f) {
                    return f.update(c), !f.done
                })
            }
        }, {
            key: "render",
            value: function render(c) {
                _get(b.prototype.__proto__ || Object.getPrototypeOf(b.prototype), "render", this).call(this, c), this.effects.forEach(function(f) {
                    f.render(c)
                })
            }
        }, {
            key: "create",
            value: function create(c, f, g) {
                var k = new Animation(this.spriteSheet, AnimationDefs.effect[c], {
                        loop: !1
                    }),
                    l = new Effect(k, f, g);
                l.init(), this.effects.push(l)
            }
        }]), b
    }(GameObject),
    Effect = function(a) {
        function b(c, f, g) {
            _classCallCheck(this, b);
            var k = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return k.animation = c, k.x = f, k.y = g, k
        }
        return _inherits(b, a), _createClass(b, [{
            key: "update",
            value: function update(c) {
                this.animation.update(c)
            }
        }, {
            key: "render",
            value: function render(c) {
                this.animation.draw(c, this.x, this.y)
            }
        }, {
            key: "done",
            get: function get() {
                return this.animation.done
            }
        }]), b
    }(GameObject),
    SoundManager = function() {
        function a() {
            var b = this;
            _classCallCheck(this, a), 
            this.sounds = {}, 
            this.enable = !0, 
            this.soundFiles = ["whip", "jump", "highjump", "coin", "gameover", "potion", "bgm", "gameover"], 
            this.soundFiles.forEach(function(c) {
                //b.sounds[c] = new Audio(),
                b.sounds[c] = document.createElement("audio"), 
                b.sounds[c].src = "sound/" + c + ".mp3"
            }), 
            this.sounds.bgm.volume = 0.1, 
            this.sounds.bgm.addEventListener("ended", function() {
                b.sounds.bgm.currentTime = 0, 
                b.sounds.bgm.play()
            })
        }
        return _createClass(a, [{
            key: "init",
            value: function init() {
                this.bgm.play()
            }
        }, {
            key: "stop",
            value: function stop(b) {
                this.sounds[b].pause(), this.sounds[b].currentTime = 0
            }
        }, {
            key: "bgmStart",
            value: function bgmStart() {
                //this.stop("bgm")
                //this.play("bgm");
            }
        }, {
            key: "bgmStop",
            value: function bgmStop() {
                this.sounds.bgm.pause()
            }
        }, {
            key: "play",
            value: function play(b) {
                this.sounds[b] && (this.stop(b), this.sounds[b].play())
            }
        }, {
            key: "toggle",
            value: function toggle() {
                var b = this;
                this.enable = !this.enable, 
                this.soundFiles.forEach(
                    function(c) {
                        //b.sounds[c].volume = b.enable ? "bgm" == i ? 0.3 : 1 : 0
                    }
                )
            }
        }, {
            key: "distructor",
            value: function distructor() {
                var b = this;
                this.soundFiles.forEach(function(c) {
                    b.soundFiles[c].pause(), b.soundFiles[c] = null
                })
            }
        }]), a
    }(),
    ScoreManager = function() {
        function a() {
            _classCallCheck(this, a), this.highscore = 0, this.gotCoin = 0, this.usedCoin = 0, this._score = 0, this.state = 0, this.name = "", this.authResp = null, this.inited = !1, this.scoreBoard = null, this.myRank = -1, this.appID = "337791496591646"
        }
        return _createClass(a, [{
            key: "getScore",
            value: function getScore() {
                var b = this;
                FB.api("/me/scores", "GET", function(c) {
                    0 < c.data.length && (b.highscore = Math.max(b.highscore, c.data[0].score), b.name = c.data[0].user.name)
                })
            }
        }, {
            key: "getScoreBoard",
            value: function getScoreBoard() {
                var b = this;
                /*
                2 > this.state || FB.api("/" + this.appID + "/scores", "GET", {}, function(c) {
                    b.scoreBoard = c.data.slice(), b.scoreBoard.forEach(function(f, g) {
                        f.user.id == b.authResp.userID && (b.myRank = g + 1), f.user.picture = new Image, f.user.picture.src = "https://graph.facebook.com/" + f.user.id + "/picture"
                    })
                })
                */
            }
        }, {
            key: "loginCallback",
            value: function loginCallback(b) {
                switch (b.status) {
                    case "connected":
                        this.state = 2, this.authResp = b.authResponse;
                        break;
                    case "not_authorized":
                        this.state = 1;
                        break;
                    case "unknown":
                        this.state = 0;
                }
                2 === this.state && (this.getScore(), this.getScoreBoard())
            }
        }, {
            key: "reset",
            value: function reset() {
                this._score = 0, this.gotCoin = 0, this.usedCoin = 0
            }
        }, {
            key: "save",
            value: function save() {
                var b = this;
                alert("+ " + b.getScore() + " +");

                /*
                2 == this.state && this.authResp && FB.api("/" + this.authResp.userID + "/scores", "POST", {
                    score: this.highscore
                }, function() {
                    b.getScore(), b.getScoreBoard()
                })
                */
            }
        }, {
            key: "init",
            value: function init() {
                if (this.score = 0, 0 == this.state) {
                    var b = this.loginCallback.bind(this);
                    window.FB.getLoginStatus(b), this.inited = !0
                }
            }
        }, {
            key: "login",
            value: function login() {
                var b = this.loginCallback.bind(this);
                FB.login(b, {
                    scope: "publish_actions,user_friends"
                })
            }
        }, {
            key: "logout",
            value: function logout() {
                var b = this.loginCallback.bind(this);
                FB.logout(b)
            }
        }, {
            key: "score",
            set: function set(b) {
                this._score = b, this._score > this.highscore && (this.highscore = this._score)
            },
            get: function get() {
                return this._score
            }
        }]), a
    }(),
    UI = function(a) {
        function b(c, f) {
            _classCallCheck(this, b);
            var g = _possibleConstructorReturn(this, (b.__proto__ || Object.getPrototypeOf(b)).call(this));
            return g.scoreManager = c, 
                   g.character = f, 
                   g.img = Images.sprites, 
                   g.coin = new Sprite(g.img, 300, 0, 40, 40, 0, 0), 
                   g.gameover = new Sprite(g.img, 0, 400, 348, 105, 174, 0), 
                   g.rankTitle = new Sprite(g.img, 400, 180, 134, 20, 67, 10), 
                   g.fbButton = new Sprite(g.img, 187, 310, 213, 62, 106, 0),
                   /*
                   g.sounds = {
                        on: new Sprite(g.img, 412, 310, 49, 49, 0, 0),
                        off: new Sprite(g.img, 462, 310, 49, 49, 0, 0)
                   },
                   */
                   g
        }
        return _inherits(b, a), _createClass(b, [
        {

            key: "render",
            value: function render(c) {

                var jumpimg = new Image();
                var ropeimg = new Image();
                var item11img = new Image();
                var item10img = new Image();
                var item21img = new Image();
                var item20img = new Image();
                var restartimg = new Image();
                var homeimg = new Image();
                jumpimg.src = "img/jumpbtn.png";
                ropeimg.src = "img/rope.png";
                item11img.src = "img/rope1.png";
                item10img.src = "img/rope0.png";
                item21img.src = "img/potion1.png";
                item20img.src = "img/potion0.png";
                restartimg.src = "img/replaybtn.png";
                homeimg.src = "img/home.png";

                if (c.save(), 
                    c.translate(this.parent.cameraX - 200, 0), 
                    c.fillStyle = "white", 
                    c.strokeStyle = "black", 
                    c.strokeWidth = 2, 
                    c.font = "bold 40px verdana", 
                    c.fillText(this.scoreManager.score + "m", 10, 40), 
                    c.strokeText(this.scoreManager.score + "m", 10, 40), 
                    c.font = "bold 30px verdana", 
                    c.fillStyle = "#ffb82f", 
                    c.fillText(this.character.money, 40, 80), 
                    c.strokeText(this.character.money, 40, 80),
                    this.coin.draw(c, 10, 58, {
                        scale: 0.625
                    }),
                      //jump btn img
                    //c.font = "16px verdana", 
                    //c.strokeText("HIGHSCORE " + this.scoreManager.highscore + "m", 0, 523), 
                    //c.fillText("HIGHSCORE " + this.scoreManager.highscore + "m", 0, 523), 
                    2 == this.scoreManager.state
                   ){
                        c.font = "12px verdana", 
                        c.fillStyle = "white";
                        //var f = this.scoreManager.name ? this.scoreManager.name + "\uB2D8" : "FACEBOOK \uB85C\uADF8\uC778 \uB428";
                        //0 < this.scoreManager.myRank && (f = this.scoreManager.myRank + "\uC704/" + f), 
                        c.fillText(f, 0, 537)
  
                    }
                1 == this.parent.state && (c.globalAlpha = Math.max(0, 1 - this.parent.elapsed));
                var g = (this.character.mp / 10);

                if (0 < g && c.drawImage(ropeimg, 0,80, g*539, 90 , 0, 500 , g*539 , 90),//rope img
                    c.drawImage(jumpimg,110,540,320,100), //jump button
                    //this.character.money >= this.parent.itemPrice[0] ? c.drawImage(this.img, 160, 151, 50, 51, 5, 540, 100, 100) : c.drawImage(this.img, 210, 151, 50, 51, 5, 540, 100, 100), 
                    //this.character.money >= this.parent.itemPrice[1] ? c.drawImage(this.img, 160, 202, 50, 51, 435, 540, 100, 100) : c.drawImage(this.img, 210, 202, 50, 51, 435, 540, 100, 100),
                    this.character.money >= this.parent.itemPrice[0] ? c.drawImage(item11img, 5, 540) : c.drawImage(item10img, 5, 540), 
                    this.character.money >= this.parent.itemPrice[1] ? c.drawImage(item21img, 435, 540) : c.drawImage(item20img, 435, 540), 
                    //c.font = "15px verdana", 
                    //c.textAlign = "left", 
                    //c.fillStyle = "white", 
                    //c.fillText(this.parent.itemPrice[0], 40, 635),   //rope
                    //c.fillText(this.parent.itemPrice[1], 480, 635),  //stimpak
                    1 === this.parent.state
                   )
                    if (c.globalAlpha = Math.min(1, this.parent.elapsed), this.gameover.draw(c, 270, 160), 2 == this.scoreManager.state && this.scoreManager.scoreBoard) {
                        var k = 270;
                        c.fillStyle = "white", 
                        c.save();
                        var l = Math.max(0, this.scoreManager.myRank - 5);
                        c.translate(0, -(60 * l)), c.strokeStyle = "white", c.lineWidth = 1, c.strokeRect(3, 180, 534, 222), this.rankTitle.draw(c, k, 180), this.scoreManager.scoreBoard.slice(l, 8).forEach(function(m, n) {
                            var o = n % 4,
                                q = 45 * o,
                                r = 4 > n ? 3 : k;
                            c.font = "bold 32px verdana", 
                            c.fillText(l + n + 1, 30 + r, q + 237), 
                            c.font = "bold 14px sans-serif", 
                            c.fillText(m.user.name, 110 + r, q + 220), 
                            c.font = "16px verdana", 
                            c.fillText(m.score + "m", 110 + r, q + 240), 
                            m.user.picture && c.drawImage(m.user.picture, 0, 0, 50, 50, 60 + (4 > n ? 3 : k), 45 * o + 205, 40, 40), 
                            c.strokeStyle = "white", 
                            c.strokeRect(60 + r, q + 205, 40, 40)

                        }), 
                        c.restore(), 
                        c.fillStyle = "#3b5998", 
                        c.fillRect(455, 505, 80, 30), 
                        c.fillStyle = "white", 
                        c.font = "14px sans-serif", 
                        c.textAlign = "center", 
                        c.fillText("\uB85C\uADF8\uC544\uC6C3", 495, 525)


                    } //else c.textAlign = "center", c.font = "16px sans-serif", c.fillText("Facebook\uC5D0 \uB85C\uADF8\uC778\uD574\uC11C \uCE5C\uAD6C\uB4E4\uC758 \uC810\uC218\uB97C \uC54C\uC544\uBCF4\uC138\uC694!", 270, 220), this.fbButton.draw(c, 270, 250), c.textAlign = "left";
                    else{

                        c.textAlign = "center",
                        c.font = "40px sans-serif", 
                        //c.fillText("SCORE", 270, 290),
                        c.textAlign = "center",
                        c.fillStyle = "black", 
                        c.strokeStyle = "white", 
                        c.strokeWidth = 5,
                        c.font = "80px sans-serif", 
                        c.fillText(this.scoreManager.score + "m", 270, 360),
                        c.strokeText(this.scoreManager.score + "m", 270, 360),
                        c.drawImage(homeimg, 5, 540),   //homebtn
                        c.drawImage(restartimg, 110, 440)   //retsartbtn

                    }
                //this.sounds["on"].draw(c, 486, 5), 
                c.restore()
            }
        }, 
        {
            key: "click",
            value: function click(c) {
                //alert("pause");
                //facebook btn
                //0 === this.parent.state && c && 486 <= c.x && 535 >= c.x &&  54 >= c.y && 5 <= c.y && alert("pause");

                //1 === this.parent.state && c && 105 > c.x && 5 < c.x && 640 > c.y && 540 < c.y && game.pop() //titlebtn

                //alert('ok');
                                           //,c && 486 > c.x != 535 > c.x && 5 > c.y != 54 > c.y && this.parent.soundManager.toggle()
            }
        }
        ]), b
    }(GameObject),

game = new Game(document.getElementById("canv"));
game.push(new GameStartScene), game.update();