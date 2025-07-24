# ‘Spot the Bugs’ Test Automation

This test automation framework is developed using **Playwright with TypeScript** to test ‘Spot the Bugs’ page found in https://qa-practice.netlify.app/bugs-form.  
It follows the **Page Object Model (POM)** design pattern for modularity, reusability, and maintainability of test scripts.

The framework is capable of:
- UI automation testing
- Environment-based configuration
- DTO support for structured test data
- Tag-based test filtering (using Playwright Test's `grep`)


# How to setup

1. Clone this repository
2. Navigate to the project folder
3. Install Node.js and npm
4. Run "npm ci" from the terminal


# How to Run the Tests

1. Run the command "npx playwright test --headed" from the terminal
or
Run the command "npx playwright test tests/register.spec.ts --headed" from the terminal

# How to view the reports

1. Once after run the tests, you can view the html report popping out in the browser. You can view the test results.
2. You will get a message like this "Serving HTML report at http://localhost:9323. Press Ctrl+C to quit." in the terminal.
3. You can quit using Ctrl + C to go back to the CLI.
