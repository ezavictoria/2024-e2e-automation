Feature: Log In on the DemoBlaze platform

    Scenario: User Log In
        Given the user accesses the DemoBlaze homepage
        And clicks on the log in link
        When fills in the log in form fields
        And clicks on the log in button
        Then the log in must be successful