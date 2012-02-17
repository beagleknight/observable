tddjs.namespace("util");

(function() {
  function Observable() {
    this.observers = [];
  }

  function addObserver(observer) {
    if(typeof observer != "function") {
      throw new TypeError("observer is not a function");
    }

    this.observers.push(observer);
  }

  function hasObserver(observer) {
    for(var i = 0, l = this.observers.length; i < l; i++) {
      if(this.observers[i] == observer) {
        return true;
      }
    }
    return false;
  }

  function notifyObservers() {
    for(var i = 0, l = this.observers.length; i < l; i++) {
      try {
        this.observers[i].apply(this, arguments);
      } catch(e) { }
    }
  }

  Observable.prototype.addObserver = addObserver;
  Observable.prototype.hasObserver = hasObserver;
  Observable.prototype.notifyObservers = notifyObservers;

  tddjs.util.Observable = Observable;
}());
