$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/ProductControllerFunctionality.feature");
formatter.feature({
  "name": "Product Controller CRUD Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Controller CRUD Tests",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I generate all test Controller random value",
  "keyword": "Given "
});
formatter.step({
  "name": "I add new product Controller",
  "keyword": "When "
});
formatter.step({
  "name": "I verify  product Controller \u003cid\u003e and \u003cunitPrice\u003e",
  "keyword": "Then "
});
formatter.step({
  "name": "I update product\"\u003cname\u003e\" and \"\u003csku\u003e\" and \"\u003cunitsInStock\u003e\"  Controller",
  "keyword": "And "
});
formatter.step({
  "name": "I delete product Controller",
  "keyword": "And "
});
formatter.step({
  "name": "I verify deleted product in Controller",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "id",
        "unitPrice",
        "name",
        "sku",
        "unitsInStock"
      ]
    },
    {
      "cells": [
        "1",
        "10.0",
        "Shabna",
        "DF-111",
        "100"
      ]
    },
    {
      "cells": [
        "2",
        "20.0",
        "Sharif",
        "DF-222",
        "200"
      ]
    },
    {
      "cells": [
        "3",
        "30.0",
        "Soura",
        "DF-333",
        "300"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Controller CRUD Tests",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I generate all test Controller random value",
  "keyword": "Given "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_generate_all_test_Controller_random_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new product Controller",
  "keyword": "When "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_add_new_product_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify  product Controller 1 and 10.0",
  "keyword": "Then "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_verify_product_Controller_id_and_unit_price(int,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update product\"Shabna\" and \"DF-111\" and \"100\"  Controller",
  "keyword": "And "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_update_product_Controller(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete product Controller",
  "keyword": "And "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_delete_product_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify deleted product in Controller",
  "keyword": "Then "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_verify_deleted_product_in_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Controller CRUD Tests",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I generate all test Controller random value",
  "keyword": "Given "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_generate_all_test_Controller_random_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new product Controller",
  "keyword": "When "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_add_new_product_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify  product Controller 2 and 20.0",
  "keyword": "Then "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_verify_product_Controller_id_and_unit_price(int,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update product\"Sharif\" and \"DF-222\" and \"200\"  Controller",
  "keyword": "And "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_update_product_Controller(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete product Controller",
  "keyword": "And "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_delete_product_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify deleted product in Controller",
  "keyword": "Then "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_verify_deleted_product_in_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Controller CRUD Tests",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I generate all test Controller random value",
  "keyword": "Given "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_generate_all_test_Controller_random_value()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add new product Controller",
  "keyword": "When "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_add_new_product_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify  product Controller 3 and 30.0",
  "keyword": "Then "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_verify_product_Controller_id_and_unit_price(int,double)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I update product\"Soura\" and \"DF-333\" and \"300\"  Controller",
  "keyword": "And "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_update_product_Controller(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I delete product Controller",
  "keyword": "And "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_delete_product_Controller()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I verify deleted product in Controller",
  "keyword": "Then "
});
formatter.match({
  "location": "test_definations.ProductControllerFunctionality.i_verify_deleted_product_in_Controller()"
});
formatter.result({
  "status": "passed"
});
});