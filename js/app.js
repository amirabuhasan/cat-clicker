let initialCats = [
  {
    name: "Steve",
    clickCount: 0,
    imgSrc: "https://lh3.ggpht.com/nlI91wYNCrjjNy5f-S3CmVehIBM4cprx-JFWOztLk7vFlhYuFR6YnxcT446AvxYg4Ab7M1Fy0twaOCWYcUk=s0#w=640&h=426",
    nicknames: ["Jobs"]
  },
  {
    name: "Carl",
    clickCount: 0,
    imgSrc: "https://lh3.ggpht.com/kixazxoJ2ufl3ACj2I85Xsy-Rfog97BM75ZiLaX02KgeYramAEqlEHqPC3rKqdQj4C1VFnXXryadFs1J9A=s0#w=640&h=496",
    nicknames: ["Karl"]
  },
  {
    name: "John and Dave",
    clickCount: 0,
    imgSrc: "https://lh5.ggpht.com/LfjkdmOKkGLvCt-VuRlWGjAjXqTBrPjRsokTNKBtCh8IFPRetGaXIpTQGE2e7ZCUaG2azKNkz38KkbM_emA=s0#w=640&h=454",
    nicknames: ["Johny and Dive"]
  },
  {
    name: "Louis",
    clickCount: 0,
    imgSrc: "https://www.petfinder.com/wp-content/uploads/2012/11/91615172-find-a-lump-on-cats-skin-632x475.jpg",
    nicknames: ["CK"]
  },
  {
    name: "Ricky",
    clickCount: 0,
    imgSrc: "https://www.royalcanin.com/~/media/Royal-Canin/Product-Categories/cat-adult-landing-hero.ashx",
    nicknames: ["Gervais"]
  }
]

let Cat = function(data) {
  this.clickCount = ko.observable(data.clickCount);
  this.name = ko.observable(data.name);
  this.imgSrc = ko.observable(data.imgSrc);
  this.nicknames = ko.observableArray(data.nicknames);
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
  let self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });

  this.currentCat = ko.observable(this.catList()[0]);

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat)
  }

  this.incrementCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  };
};



ko.applyBindings(new ViewModel());
