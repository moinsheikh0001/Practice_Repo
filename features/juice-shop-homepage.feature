Feature: OWASP Juice Shop homepage

  Scenario: Open the Juice Shop application
    Given the application URL is "https://preview.owasp-juice.shop/"
    When I open the OWASP Juice Shop application
    Then the page title should contain "OWASP Juice Shop"
    And the application URL should be "https://preview.owasp-juice.shop/"
