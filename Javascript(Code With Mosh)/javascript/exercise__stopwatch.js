
function StopWatch(){

    let startTime, endTime,isStarted, duration = 0;

    this.start = function(){
        if (isStarted)
            throw new Error("Stopwatch is already started.");
            
        isStarted = true;
        
        startTime = new Date();
    }

    this.stop = function(){
        if (!isStarted)
            throw new Error("Stopwatch is already stoppped.");

        isStarted = false;

        endTime = new Date();

        let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;

        console.log(duration);
    }

    this.reset = function(){
        isStarted = false;
        startTime = null;
        endTime = null;
        duration = 0;
    }
    
    Object.defineProperty(this, 'duration', {
    get: function() { return duration; }
  });
}


const sw = new StopWatch();



