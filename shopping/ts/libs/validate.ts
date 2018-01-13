export class Validate
{
	// sẽ trả về true nếu như thỏa mãn điều kiện là số và khác NaN
	public static isNumber(value: any):boolean
	{
		return !isNaN(parseFloat(value)) && isFinite(value) ;
	}
}