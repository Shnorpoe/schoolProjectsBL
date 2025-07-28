let bike = {
    make: "Arroyo",
    model: "G2",
    gear: "7",
    color: "Matte green",

    start: function() {
        console.log("Sepeda dikayuh");
    },
    brake: function() {
        console.log("Sepeda direm");
    },

};
    console.log(bike.make);
    console.log(bike.model);
    console.log(bike.gear);
    console.log(bike.color);

    bike.start();
    bike.brake();
