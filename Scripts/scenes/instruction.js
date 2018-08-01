var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var InstructionScene = /** @class */ (function (_super) {
        __extends(InstructionScene, _super);
        // Public Properties
        // Constructor
        function InstructionScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.Start();
            return _this;
        }
        // Private Mathods
        InstructionScene.prototype._backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        // Public Methods
        // Initialize Game Variables and objects
        InstructionScene.prototype.Start = function () {
            this._ocean = new objects.Ocean(this.assetManager);
            this._instructionLabel = new objects.Label("INSTRUCTIONS", "60px", "Consolas", "#FAEFFF", 320, 50, true);
            this._moveup = new objects.Label("Moves up", "20px", "Consolas", "#FAEFFF", 290, 120, true);
            this._movedown = new objects.Label("Moves down", "20px", "Consolas", "#FAEFFF", 290, 360, true);
            this._moveleft = new objects.Label("Moves left", "20px", "Consolas", "#FAEFFF", 60, 280, true);
            this._moveright = new objects.Label("Moves right", "20px", "Consolas", "#FAEFFF", 400, 280, true);
            this._backButton = new objects.Button(this.assetManager, "backButton", 320, 430);
            this._instructions = new objects.ArrowKeys(this.assetManager, "instructionKeys", 250, 250);
            this._scoreboard = new managers.ScoreBoard();
            this.Main();
        };
        InstructionScene.prototype.Update = function () {
            this._ocean.Update();
        };
        // This is where the fun happens
        InstructionScene.prototype.Main = function () {
            // add the ocean object
            this.addChild(this._ocean);
            // add the welcome label to the scene
            this.addChild(this._instructionLabel);
            // add the backButton to the scene
            this.addChild(this._backButton);
            // add the arrow keys  to the scene
            this.addChild(this._instructions);
            // add the arrow keys  to the scene
            this.addChild(this._movedown);
            this.addChild(this._moveleft);
            this.addChild(this._moveright);
            this.addChild(this._moveup);
            // event listeners
            this._backButton.on("click", this._backButtonClick);
        };
        return InstructionScene;
    }(objects.Scene));
    scenes.InstructionScene = InstructionScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=instruction.js.map