// Here do we see all the stats of all enemies. Dont foreget to load in image of the enemy in the animationfile.

var StickPerson = function() {
    this.name       = "Stickman";
    this.Helht      = 50;
    this.armor      = 1;
    this.Flying     = false;
    this.ImageName  = "Stickfigure";
    this.Height     = 35;
    this.Width      = 20;
    this.PosX       = 50;
    this.PosY       = 50;
  };

var StickPerson2 = function() {
    this.name       = "Stickman2";
    this.Helht      = 50;
    this.armor      = 3;
    this.Flying     = false;
    this.ImageName  = "Stickfigure";
    this.Height     = 35;
    this.Width      = 20;
    this.PosX       = 50;
    this.PosY       = 50;
  };

var StickPerson3 = function() {
    this.name       = "Stickman3";
    this.Helht      = 75;
    this.armor      = 3;
    this.Flying     = false;
    this.ImageName  = "Stickfigure";
    this.Height     = 35;
    this.Width      = 20;
    this.PosX       = 50;
    this.PosY       = 50;
  };

var Orge = function() {
    this.name = "Orge";
    this.Helht = 150;
    this.armor = 2;
    this.Flying = false;
  };

var Orge2 = function() {
    this.name = "Orge2";
    this.Helht = 150;
    this.armor = 2;
    this.Flying = false;
  };

var Bird = function() {
    this.name = "Bird";
    this.Helht = 150;
    this.armor = 0;
    this.Flying = false;
    this.ImageName  = "Stickfigure";
  };

var enemyObject = {Name:"", Helht:"", armor:"",Flying:"",PosX:"",PosY:"",ImageName:"",Width:"",Height:""}