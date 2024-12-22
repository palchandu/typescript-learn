abstract class TakePhoto1 {
  constructor(public cameraMode: string, public filter: string) {
    this.cameraMode = cameraMode;
    this.filter = filter;
  }
  abstract getSepia(): void;
  abstract sendPhoto(): string;
  totalPhoto(): number {
    return this.cameraMode.length;
  }
}

//Cannot create an instance of an abstract class
//const chandra=new TakePhoto1("test","test")

class Instaram extends TakePhoto1 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Hello,implemented abstract method.");
  }
  sendPhoto(): string {
    return this.cameraMode;
  }
}

const chandra = new Instaram("test", "test", 4);
console.log(chandra.totalPhoto());
