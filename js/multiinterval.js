function MultiInterval(callback, intervals) {
  
  for(var i = 0; i < intervals.length; i++)  if(intervals[i] <= 0) throw 'Invalid interval at position ' + i;
  
  this.intervals = intervals;
  
  this.cleared = false;
  
  MultiInterval.prototype.change = function(newIntervals) {
  
    if(newIntervals.length != this.intervals.length) return;
  
    for(var i = 0; i < newIntervals.length; i++)  if(newIntervals[i] <= 0) return;
  
    this.intervals = newIntervals;
  };
  
  MultiInterval.prototype.clearInterval = function() {
  
    this.cleared = true;
  };
  
  this.runner = function(self, index) {
    
    if(self.cleared) return;
    
    setTimeout(callback, self.intervals[index]);
    
    setTimeout(self.runner, self.intervals[index], self, index);
  };
  
  for(var i = 0; i < this.intervals.length; i++) {
  
    this.runner(this, i);
  }
}