export class StopPropagation {
    constructor() {}
    
    stop(element) {
        return element.stopPropagation();
    }
}
