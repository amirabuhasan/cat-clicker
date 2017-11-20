let Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
  this.nicknames = ko.observableArray([
    {name: "Tabtab"},
    {name: "T-Bone"},
    {name: "Mr. T"},
    {name:"Tabitha"}
  ]);
  this.level = ko.computed(function() {
    let level;
    if (this.clickCount() < 10) {
      level = "Newborn";
    }
    if (this.clickCount() >= 10) {
      level = "Infant";
    }
    if (this.clickCount() >= 20) {
      level = "Child";
    }
    if (this.clickCount() >= 30) {
      level = "Teen";
    }
    if (this.clickCount() >= 40) {
      level = "Adult";
    }
    if (this.clickCount() >= 50) {
      level = "Ninja";
    }
    return level;
  }, this);
}

let ViewModel = function() {
  this.currentCat = ko.observable(new Cat());

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };
};



ko.applyBindings(new ViewModel());
