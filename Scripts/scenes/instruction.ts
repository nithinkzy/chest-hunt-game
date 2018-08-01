// NITHIN KUMAR KOLLERETHU SURESH 
// 300991463
// CHEST HUNT
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
        this._moveup = new objects.Label("1.Collect chest for points", "20px", "Consolas", "#FAEFFF", 450, 150, true);
        this._movedown = new objects.Label("2.Avoid Crates", "20px", "Consolas", "#FAEFFF", 450, 180, true);
        this._moveleft = new objects.Label("3.Kill Enemies to get to Boss", "20px", "Consolas", "#FAEFFF", 450, 210, true);
        this._moveright = new objects.Label("4.Kill Boss to Win", "20px", "Consolas", "#FAEFFF", 450, 240, true);

        
        this._backButton = new objects.Button(this.assetManager, "backButton", 320, 430);
        this._instructions = new objects.ArrowKeys(this.assetManager, "instructionKeys", 150, 250);
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
  