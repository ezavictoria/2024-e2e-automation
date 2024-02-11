Feature: Contact the DemoBlaze platform

    Scenario: User contact
        Given the user accesses the DemoBlaze homepage
        And clicks on the contact link
        When fills in the contact form fields
        And clicks on the contact button
        Then the contact must be successful