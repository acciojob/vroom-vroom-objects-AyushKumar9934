// Complete the js code
function Car(make, model) {
	getMakeModel()=>`${this.make} this is make and ${this.model} this is model`
}

function SportsCar(make, model, topSpeed) {
	super(make,model);
	getTopSpeed()=>this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
