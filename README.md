[![Build Status](https://travis-ci.com/annaboyatyuk/14-relationship-modeling.svg?branch=master)](https://travis-ci.com/annaboyatyuk/14-relationship-modeling)


![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 14: Mongo/Express 2 Resource API
===


## Links
* PR https://github.com/annaboyatyuk/14-relationship-modeling/pull/2 
* Heroku https://lab14relationshipmodeling401.herokuapp.com/
* Travis https://travis-ci.com/annaboyatyuk/14-relationship-modeling/builds


## Configure
test the GET POST PUT DELETE requests in postman.
/api/v1/coffee
/api/v1/parks


## Requirements

#### Feature Tasks
  * continue working on the `express` and `mongoDB` REST API that you started yesterday
  * include an additional resource that contains a "relationship" to the single resource that has already been created
  * create `GET`, `POST`, `PUT`, and `DELETE` routes for your newly added resource
  * test your application to ensure that it meets the standard criteria of a working **full CRUD** REST API
  * use `populate` in the `get()` route logic your  `/api/new-resource-name/:id` route to populate the associated property used to house related resources **(ex: `List.findById(req.params.id).populate('notes')`)**