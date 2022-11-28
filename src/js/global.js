const SERVER_API_URL = "http://0.0.0.0:8080/api/";
const CLIENT_ORIGIN_URL = window.location.origin;
const CLIENT_ROUTES = [{
    loginPage: `${CLIENT_ORIGIN_URL}/auth/login.html`,
    signupPage: `${CLIENT_ORIGIN_URL}/auth/signup.html`,
    profilePage: `${CLIENT_ORIGIN_URL}/auth/profile.html`
}]