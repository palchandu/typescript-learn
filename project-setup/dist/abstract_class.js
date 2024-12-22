"use strict";
class TakePhoto1 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    totalPhoto() {
        return this.cameraMode.length;
    }
}
//Cannot create an instance of an abstract class
//const chandra=new TakePhoto1("test","test")
class Instaram extends TakePhoto1 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Hello,implemented abstract method.");
    }
    sendPhoto() {
        return this.cameraMode;
    }
}
const chandra = new Instaram("test", "test", 4);
console.log(chandra.totalPhoto());
