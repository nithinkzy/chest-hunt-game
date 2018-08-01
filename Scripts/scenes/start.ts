module scenes {
  export class StartScene extends objects.Scene {
    // Private Instance Variables
    private _welcomeLabel: objects.Label;
    private _startButton: objects.Button;
    private _instructionButton : objects.Button;
    private _ocean: objects.Ocean;

    // Public Properties

    // Constructor
    constructor(assetManager: createjs.LoadQueue) {
      super(assetManager);

      this.Start();
    }

    // Private Mathods
    private _startButtonClick():void {
      objects.Game.currentScene = config.Scene.PLAY;
    }


    // Public Methods

    // Initialize Game Variables and objects
    public Start(): void {
      this._ocean = new objects.Ocean(this.assetManager);

      this._welcomeLabel = new objects.Label("Chest Hunt", "60px", "Consolas", "#FAEFFF", 320, 180, true);
      this._startButton = new objects.Button(this.assetManager, "startButton", 320, 300);
      this._instructionButton = new objects.Button(this.assetManager, "instructionButton", 320, 380);
      this.Main();
    }

    public Update(): void {
      this._ocean.Update();
    }

    // This is where the fun happens
    public Main(): void {
      // add the ocean object
      this.addChild(this._ocean);

      // add the welcome label to the scene
      this.addChild(this._welcomeLabel);

      // add the startButton to the scene
      this.addChild(this._startButton);

      // add the instructionButton to the scene
      this.addChild(this._instructionButton);

      this._startButton.on("click", this._startButtonClick);
    }
  }
}
