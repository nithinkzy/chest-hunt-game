module scenes {
    export class InstructionScene extends objects.Scene {
      // Private Instance Variables
      private _instructionLabel: objects.Label;
      private _moveup: objects.Label;
      private _moveleft: objects.Label;
      private _moveright: objects.Label;
      private _movedown: objects.Label;
      private _instructions: objects.ArrowKeys;
      private _backButton: objects.Button;
      private _ocean: objects.Ocean;
  
      private _scoreboard: managers.ScoreBoard;
  
      // Public Properties
  
      // Constructor
      constructor(assetManager: createjs.LoadQueue) {
        super(assetManager);
  
        this.Start();
      }
  
      // Private Mathods
      private _backButtonClick():void {
        objects.Game.currentScene = config.Scene.START;
      }
  
  
      // Public Methods
  
      // Initialize Game Variables and objects
      public Start(): void {
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
      }
  
      public Update(): void {
        this._ocean.Update();
      }
  
      // This is where the fun happens
      public Main(): void {
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
      }
    }
  }
  