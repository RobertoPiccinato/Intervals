function Interval(callback, interval) {
  
  if(interval <= 0) throw 'Invalid interval';
  
  this.interval = interval;
  
  this.cleared = false;
  
  Interval.prototype.change = function(newInterval) {
  
    if(newInterval <= 0) return;
  
    this.interval = newInterval;
  };
  
  Interval.prototype.clearInterval = function() {
  
    this.cleared = true;
  };
  
  this.runner = function(self) {
    
    if(self.cleared) return;
    
    setTimeout(callback, self.interval);
    
    setTimeout(self.runner, self.interval, self);
  };
  
  this.runner(this);
}