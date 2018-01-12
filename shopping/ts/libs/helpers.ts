export class Helpers
{
	// $ 20 - USD 20 - VND 20 - 20 VND
	// để goi phương thức ko cần khởi tao đối tượng
	public static toCurrency(value:number,currencyUnit: string,position:string = "left") : string
	{
		if(position == "left")
		{
			return currencyUnit +" "+  value ;
		}
		else if (position == "right") {
			return value +" "+ currencyUnit;
		}
	}
}