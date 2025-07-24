export function getRegistrationDetails(response: string, value: string) {
    // Extract the user detail from the response string based on the provided value   
    const userDetail = response
        .split('\n')
        .find(line => line.startsWith(`${value}:`))
        ?.replace(`${value}:`, '')
        .trim();
    
    return userDetail;
}