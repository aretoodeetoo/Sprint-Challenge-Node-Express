- Mention two parts of Express that you learned about this week.
    I learned that Express is a minimalist framework. One part of Express that I learned about is middleware; a second part of Express I learned about this week was Routing, a main feature of express.

- Describe Middleware?
    Middleware are functions that provide extra functionality to an application. It extends the app’s features and is implemented as small functions that handle one aspect of our application. It provides modularity for code.

- Describe a Resource?
    Within a RESTful API, everything is a resource. Each resource is accessible via a unique URL, and can have multiple representations. Management of resources is done via HTTP methods.

- What can the API return to help clients know if a request was successful?
    Any 200-level status code, such as `200` for successful GETs or `201`for successful POSTs or PUTs. 

- How can we partition our application into sub-applications?
    We can use Express Routers to split an application into sub-applications to make it more modular. This also makes it easier to maintain and reason about. A Router behaves like a miniature Express application – it can have its own routing and middleware. However, it needs to exist inside an Express application.