package base;

import java.util.Random;

public class Base {
	
	public int generateRandomNumber(int n)
	{
		Random random = new Random();
		return random.nextInt(n);
	}
	
	

}
