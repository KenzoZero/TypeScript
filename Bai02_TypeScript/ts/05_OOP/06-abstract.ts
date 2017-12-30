abstract class Laptop
{
	public keyboard():void
	{
		console.log("Laptop.keyboard");
	}

	public abstract mainboard(abc:string):string;

	public chipset():void
	{
		console.log("Laptop.chipset");
	}
}

class LapTopDell extends Laptop
{
	public keyboard():void
	{
		console.log("LaptopDel.keyboard");
	}

	public mainboard():string
	{
		console.log("LaptopDel.mainboard");
		return "123";
	}

}

let laptopObj : Laptop = new LapTopDell();
laptopObj.keyboard();
laptopObj.mainboard("abc");
laptopObj.chipset();
