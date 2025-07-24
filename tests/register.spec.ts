import { test } from '@playwright/test';
import { registerUsers } from '../test-data/register-data';
import { createAndSubmitRegistrationForm } from '../service/registration-service';

test('Register with valid data', async ({ page }) => {
    const registerForm = await createAndSubmitRegistrationForm(page, registerUsers.validUser);
    await registerForm.verifySuccessMessage();
    await registerForm.verifyRegistrationResponse(registerUsers.validUser);
});

test('Register without Email', async ({ page }) => {
    const registerForm = await createAndSubmitRegistrationForm(page, registerUsers.noEmail);
    await registerForm.verifyEmailMissingErrorMessage();
});

test('Register without Password', async ({ page }) => {
    const registerForm = await createAndSubmitRegistrationForm(page, registerUsers.noPassword);
    await registerForm.verifyPasswordMissingErrorMessage();
});