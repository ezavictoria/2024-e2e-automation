Feature: Sing Up on the DemoBlaze platform

    Scenario: User creation
        Given the user accesses the DemoBlaze homepage
        And clicks on the sing up link
        When fills in the sing up form fields
        And clicks on the sing up button
        Then the sign up must be successful