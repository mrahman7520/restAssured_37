Feature: Product Controller CRUD Functionality
Scenario Outline: Controller CRUD Tests
Given I generate all test Controller random value 
When  I add new product Controller
Then I verify  product Controller 
And I update product "<name>" and "<sku>" and "<unitsInStock>" and <unitPrice> Controller 
And I delete product Controller
Then I verify deleted product in Controller



  Examples:
      |name  |sku   |unitsInStock|unitPrice |
      |Shabna|DF-111|100					|10.00		|				
      |Sharif|DF-222|200					|20.00		|
      |Soura |DF-333|300					|30.00		|
    
    
    
    
    
    
  