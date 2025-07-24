import { Page } from "@playwright/test";
import { RegisterFormDTO } from "../models/register-form-dto";
import { HomePage } from "../pages/home-page";
import { RegisterForm } from "../pages/register-form";

export async function createAndSubmitRegistrationForm(page: Page, userData: RegisterFormDTO): Promise<RegisterForm> {
    const homePage = new HomePage(page);
    const registerForm = new RegisterForm(page);

    await homePage.navigateToHomePage();
    await homePage.navigateToRegistrationPage();
    await registerForm.isRegistrationFormLoaded();
    if (userData) {
        await registerForm.fillRegistrationForm(userData);
    }

    // Terms and Conditions is disabled, raised a defect; once it's resolved, this step will be enabled
    // await registerForm.checkTerms();
    await registerForm.submit();

    return registerForm; // To verify the Registration Response
}