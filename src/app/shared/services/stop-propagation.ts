import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class StopPropagation {
    constructor() {}
    
    stop(element) {
        return element.stopPropagation();
    }
}
