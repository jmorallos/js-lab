// Cache API > used to store network request and responses
// making web applications work more efficiently and even function offline
// part of the Servie Worker API
// critical for creating Progressive Web Apps that can work under unreliable or slow network connection

// network request -> request made by a web browser or application to a server
// eg browser sends a network request to the web server to get the files such HTML images or videos

// service worker -> special type of JavaScript file that runs in the background of a web application
// separate from the main browser thread, it acts as a middleman between page and the network
// allowing developers to intercept network request, cache resources, and handle thinds like push notifications or background synce
// PWA -> is a type of web applications that uses modern web technologies to providde native app-like experience on the web

// The Cache API -> is a storage mechanism that stores Request and Response objects
// When a request is made to server, the application can store the response and later retrieve it from cache
// instead of making new network request
// this reduces load times, saves bandwith, and improves the overall user experience

// the browser provides a storage known as CacheStorage, where developer can save key-value pairs of network request
// and their corresponding responses

// Cache-Control -> developers can specify how long a cached resource should remain stored
// can build offline-first web applications

