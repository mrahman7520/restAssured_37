package test_definations;


	import static io.restassured.RestAssured.given;
	import static org.junit.Assert.assertEquals;

	import java.util.Random;

	import org.json.JSONObject;

	import base.Base;
	import io.cucumber.java.en.Given;
	import io.cucumber.java.en.Then;
	import io.cucumber.java.en.When;
	import io.restassured.response.Response;

	public class ProductControllerFunctionality extends Base {
		
		int random_id;
		String username;
		String eMail;
	@Given("I generate all test Controller random value")
	public void i_generate_all_test_Controller_random_value() {
		Random random = new Random();
//	    String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
//	    StringBuilder usernameBuilder = new StringBuilder();
//	    StringBuilder emailBuilder = new StringBuilder();
//	    for (int i = 0; i < 8; i++) {
//	        int index = random.nextInt(characters.length());
//	        usernameBuilder.append(characters.charAt(index));
//	    }
//	    for (int i = 0; i < 10; i++) {
//	        int index = random.nextInt(characters.length());
//	        emailBuilder.append(characters.charAt(index));
//	    }
//	    username = usernameBuilder.toString();
//	    eMail = emailBuilder.toString();
	    random_id = random.nextInt(10000); 
	} 

	@When("I add new product Controller")
	public void i_add_new_product_Controller() {
		JSONObject requestBody = new JSONObject();		
		requestBody.put("active", true);
		requestBody.put("category", new JSONObject()
												.put("categoryName", "Dog Food")
												.put("id", 50));		
		requestBody.put("dateCreated", "2022-03-17T02:14:48.709Z");
		requestBody.put("description", "Beef");
		requestBody.put("id", random_id);
		requestBody.put("imageUrl", "C:\\Users\\Microtecj NA\\Pictures\\istockphoto-1269647099-612x612.jpg");
		requestBody.put("lastUpdated", "2023-03-17T02:14:48.709Z");
		requestBody.put("name", "Beef Buffolo322");
		requestBody.put("sku", "DF-00911");
		requestBody.put("unitPrice", 10.00);
		requestBody.put("unitsInStock", 800);
		 Response response = given()
			.contentType("application/json")
			.body(requestBody.toString())
			.when()
			.post("http://skyschooling.com:8081/api/v01/product");
			JSONObject resBody = new JSONObject(response.body().asString());
			random_id = resBody.getInt("id");
			System.out.println("resBody####"+ random_id);
			
				response.prettyPrint();	
	}

	@Then("I verify  product Controller")
	public void i_verify_product_Controller () {
		Response response = given()
				.when()
				.get("http://skyschooling.com:8081/api/v01/product/"+random_id);
//				.then()
//				.statusCode(200)
//				.log()
//				.all();
			JSONObject resBody = new JSONObject(response.body().asString());
			response.prettyPrint();
			System.out.println("Unit price############"+resBody.get("unitPrice"));
			//assertEquals(resBody.getDouble("unitPrice"), 10.00);
			assertEquals(response.statusCode(),200);
			
	  
	}

	@Then("I update product {string} and {string} and {string} and {double} Controller")
	public void i_update_product_Controller(String name,String sku, String unitsInStock,double unitPrice ) {
		JSONObject requestBody = new JSONObject( );
		requestBody.put("active", true);
		requestBody.put("category", new JSONObject()
												.put("categoryName", "Dog Food")
												.put("id", 50));		
		requestBody.put("dateCreated", "2022-03-17T02:14:48.709Z");
		requestBody.put("description", "Beef");
		requestBody.put("id", random_id);
		requestBody.put("imageUrl", "C:\\Users\\Microtecj NA\\Pictures\\istockphoto-1269647099-612x612.jpg");
		requestBody.put("lastUpdated", "2023-03-17T02:14:48.709Z");
		requestBody.put("name", name);
		requestBody.put("sku", sku);
		requestBody.put("unitPrice", unitPrice);
		requestBody.put("unitsInStock", unitsInStock);
		 Response response = given()
					.contentType("application/json")
					.body(requestBody.toString())
					.when()
					.put("http://skyschooling.com:8081/api/v01/product/"+random_id);
					JSONObject resBody = new JSONObject(response.body().asString());
					random_id = resBody.getInt("id");
					System.out.println("resBody####"+ random_id);
					response.prettyPrint();
	}

	@Then("I delete product Controller")
	public void i_delete_product_Controller() {
		given()
		.when()
		.delete("http://skyschooling.com:8081/api/v01/product/"+random_id)
		.then()
		.statusCode(204)
		.log()
		.all();
	}

	@Then("I verify deleted product in Controller")
	public void i_verify_deleted_product_in_Controller() {
		given()
		.when()
		.delete("http://skyschooling.com:8081/api/v01/product/"+random_id)
		.then()
		.statusCode(404)
		.log()
		.all();
	}

	}



