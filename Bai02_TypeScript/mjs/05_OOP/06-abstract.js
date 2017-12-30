class Laptop {
    keyboard() {
        console.log("Laptop.keyboard");
    }
    chipset() {
        console.log("Laptop.chipset");
    }
}
class LapTopDell extends Laptop {
    keyboard() {
        console.log("LaptopDel.keyboard");
    }
    mainboard() {
        console.log("LaptopDel.mainboard");
        return "123";
    }
}
let laptopObj = new LapTopDell();
laptopObj.keyboard();
laptopObj.mainboard("abc");
laptopObj.chipset();
