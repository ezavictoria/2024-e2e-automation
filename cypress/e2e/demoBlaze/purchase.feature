Feature: Purchase on the DemoBlaze platform

    Background: Access the Homepage
        Given the user accesses the DemoBlaze homepage

    Scenario: Smartphone purchase
        Given the user add a smartphone at the cart
        When fills purchase form and confirm
        Then the purchase must be successful
