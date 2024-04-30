// Complete the js code
function Car(make, model) {
	this.make=make;
	this.model=model;
	getMakeModel()=>`${this.make} this is make and ${this.model} this is model`
}
Car.prototype.getMakeModel=function(){return `${this.make} this is make and ${this.model} this is model`}

function SportsCar(make, model, topSpeed) {
	super(this,make,model);
	this.topSpeed=topSpeed;
}

SportsCar.prototype=Object.create(Car.prototype);
SportsCar.prototype.constructor=SportsCar.prototype;
SportsCar.prototype=function(){
	return this.topSpeed;
}
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
