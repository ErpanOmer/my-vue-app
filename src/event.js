class EventBus {
    constructor() {
      this.events = new Map();
    }
  
    on(event, callback) {
      if (!this.events.has(event)) {
        this.events.set(event, new Set());
      }
      this.events.get(event).add(callback);
    }
  
    off(event, callback) {
      if (this.events.has(event)) {
        this.events.get(event).delete(callback);
        if (this.events.get(event).size === 0) {
          this.events.delete(event);
        }
      }
    }
  
    emit(event, ...args) {
      if (this.events.has(event)) {
        this.events.get(event).forEach(callback => {
          setTimeout(() => {
            callback(...args)
          })
        });
      }
    }
  
    once(event, callback) {
      const wrapper = (...args) => {
        callback(...args);
        this.off(event, wrapper);
      };
      this.on(event, wrapper);
    }
  }

  export default new EventBus()