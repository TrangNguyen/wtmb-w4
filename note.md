API, http server
DNS: store information of location where the server address is.
IP address: a number, a physical address defining a single computer on the internet
URL, path containing information for server to understand the resource, information, query requested.

###_Localhost_: 
- your personal computer, with IP 127.0.0.1
- communication between server and web browser happens through a port (http).
- OS doesnt allow easy access to port < 1000. That's why port 3000 is often used for localhost.
- Using `axios` libary to send HTTP requests to our api.
```
axios.post('/person', {name: 'ABC', age: 23}); // to add people

axios.delete('/person/' + id); // delete a person
```

- `express` gives NodeJS an easy web server.
- route is st that show a way to a path, navigation. If a route is not defined, the server returns nothing.
- model represents entity in db
- service serves the instances of the model out of the fs.
- html defines what a web page is (hypertext markup language) and how it looks like to a certain extend.
- view layer to dynamically inject to the page. It's a perspective into the application.
- layout.pug is the underlying layout of every web page of this application.
- `block content` is where the content of subpage/view to be injected into.