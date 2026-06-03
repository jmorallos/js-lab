// cookies -> small pieces of datat that a server sends to a user's browser
// stored on the user's deveice and sent back to the server with subsequent requests
// essential in helping web applications maintain state and remember user information
// e.g preferences, session data or tracking information
// stored as name-value pairs

// different types of cookies
// Session Cookies -> only last for the duration of the user's sesseion on the website
// when user closes the tab or browser, session cookie is deleted

// Persistent Cookies -> have an expiration date and remain stored on the user's device until that date is reached

// Secure Cookies -> only sent over HTTPS, ensuring that they cannot be intercepted by an attacker

// HttpOnly Cookies -> cannot be accessed or modified by JavaScript running in the browser
// -> making them more sercure against cross-site scripting (XSS) attacks
// XSS -> attacks happen when an attacker injects malicious scripts into a webpage that is viewed by others
// potentially stealing cookies, session data, or performing other malicious actions without the user's knowledge or consent

// 