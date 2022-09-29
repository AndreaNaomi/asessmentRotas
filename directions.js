// Context
// This challenge is about building a basic API and implementing CRUD actions.



// Getting Started
// All your work should be done in the Your Solution section.
// The file already includes the basic Express server setup and all the packages that you need.

// Due to the testing environment set up, you should not change the provided setup, which is also indicated by the comments:

// /* Environment setup. Do not modify the above code. */


// There is no need to set up the MongoDB connection and mongoose -
// mongoose is preloaded and already available for you, there is no need to require it.

// Just use it as usual:

// mongoose.model() - to create the model
// new mongoose.Schema({}) - for creating the Schema.
// mongoose.Schema.Types.ObjectId - for setting an id reference field type


// To begin working you just need to start writing your code inside the Your Solution section, where indicated by the comment // MODEL.



// Task & Objectives
// All your work should be in the Your Solution file. All the tests are saved in the Sample Tests (Modifiable) file.

// Hint: You will work on a single file in all the iterations in this challenge. This implies that you don't have to export and import your models since you will be creating them in the same file where they will be used afterward.



// Task 1: Create the models Task, User
// ⠀
// The Task model should have the following properties:

// title - String
// details - String


// The User model should have the following property:

// email - String
// name - String
// tasks - Array of ObjectIds referencing the Task model documents


// Task 2: Create routes to perform CRUD operations on the User model
// ⠀
// Before you start working on the tasks, read through the below instructions.
// ⠀

// Requests
// You can always add a console.log(req.body) or console.log(req.params) to check the content of the request body or the route parameters. 
//The log will be visible in the Test Results on the right.


// Responses
// All your routes will have to return JSON response using res.json(). The document(s) from the database should be saved in a key named data.

// Example:

// SomeModel.find()
//   .then( (someDocuments) => res.json({ data: someDocuments }))
//   .catch((err) => console.log(err));


// Task 2.1: Create route POST /users


// This route will receive requests containing the body with the user information: email, name.

// You can access these values through req.body.

// The route should:

// Create a new user from the values received in the req.body, using the User model.
// Return a JSON response including the created user document.


// Task 2.2: Create route GET /users/:userId


// The route should:

// Retrieve a single user document by its _id, using the User model.
// Populate the tasks field, to swap the ObjectId references for the actual Task documents.
// Return a JSON response including the retrieved user document with the populated tasks.


// Task 3: Create routes to perform CRUD operations on the Task model
// Task 3.1: Create route POST /tasks


// This route will receive requests containing the body with the task information: title, details, userId.

// You can access these values through req.body.

// The route should:

// Create a new task from the values received in the req.body, using the Task model.
// Find and update the user document, to add the new task id to the user's tasks.
// Return a JSON response containing the created task document.


// Task 3.2: Create route GET /tasks/:taskId


// The route should:

// Retrieve a single task document by its _id, 
//using the Task model.
// Return a JSON response containing the retrieved task document.


// Task 3.3: Create route PUT /tasks/:taskId


// The route will receive the id of the task to be updated as the route parameter taskId.

// The request body will contain the task information to be updated: title, details.
// You can access these values through req.body.

// The route should:

// Update an existing task by its _id, using the Task model.
// Return a JSON response containing the updated task object.


// Task 3.4: Create route DELETE /tasks/:taskId


// The route will receive the id of the task to be deleted as the route parameter taskId.

// The route should:

// Delete an existing task by its _id, using the Task model.
// Find and update the user document containing the task reference id, and remove the task id from the user's tasks.
// Return a response including only the HTTP status code of 204.
// Here you should use the findOneAndRemove() mongoose method to delete an existing task by its _id. The reason for this, in case you are curious, is that the mongoose version in this environment doesn't support using other methods to remove the document from the collection.

// This route should return only an HTTP status, instead of using res.json() you should use res.sendStatus().

// To return the status code check this part in the Express documentation: http://expressjs.com/de/api.html#res.sendStatus





