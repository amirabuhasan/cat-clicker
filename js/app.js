let ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable("Tabby");
  this.imgSrc = ko.observable("img/434164568_fea0ad4013_z.jpg");
  this.level = ko.observable("Newborn");

  this.incrementCounter = function() {
    this.clickCount(this.clickCount() + 1);
  };

  this.incrementLevel = ko.computed(function() {
    if (this.clickCount() >= 10) {
      return this.level("Infant")
    }
  }, this)
};

ko.applyBindings(new ViewModel());
