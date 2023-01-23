// create the Queue class with two methods to remove and add an element
class Queue {
    constructor(container = []) {
        this.container = container;
      }
    
      addToQueue(el) {
        return this.container.add(el);
      }
        
}

module.exports = Queue;





// Notes pop element removes an element from the top of the stack
// Shift element removes an element from the front of the queue