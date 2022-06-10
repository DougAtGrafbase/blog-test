# Using curl

This file describes the curl commands to manage a blog.
In each case you must modify the source file to:

* Replace *API-KEY* with your API key.

  You can get the API keys for your project's branch by selecting the
  **API Keys** tab of the project branch's **Settings** section of the dashboard.
  
* Replace *PROJECT-ENDPOINT* with the endpoint to your project branch.
  
  You can get the endpoint for a project branch by selecting the 
  **Branches** tab in the project's dashboard.

One of the features of **curl** is being able to have the command read data from a file.
We use that feature here, so that different operations use a similar model,
where *FILENAME* contains the GraphQL query or mutation:

```sh
curl -X POST -H "content-type: application/json" -H "authorization: Bearer API-KEY" -d @FILENAME "PROJECT-ENDPOINT"
```

## Creating a user

The following mutation creates a user
(note the slightly difference to a GraphQL mutation).
You must replace *USER-EMAIL* with the email address of the user
and *USER-NAME* with the name of the user.
Save the mutation and use that as the name of the file for the **curl** command.
It returns the ID of the new user.

```graphql
{"mutation":"{ userCreate(input: {email: "USER-EMAIL", name: "USER-NAME"}) { user { id } } }"}
```

## Listing the users

The following command lists the users.

```sh
curl -X POST -H "content-type: application/json" -H "authorization: Bearer API-KEY" -d '{"query":"{ userCollection(first: 1) { edges { node { id } } } }"}' "PROJECT-ENDPOINT"
```

## Creating a post

The following command creates a post.
It returns the ID of the new post.
You must replace *USER-ID* with the ID of the user you just created 
in **CreateUser.mjs**.

```sh
curl 
```

## Listing the posts

The following command lists the posts.

```sh
curl 
```

## Creating a comment from a user on a post

The following command creates a comment from a user about a post.
It returns the ID of the new comment.
You must replace *USER-ID* with the ID of a user
and *POST-ID* with the ID of a post
in **CreateComment.mjs**.

```sh
curl 
```

## Listing the comments

The following command lists the comments.

```sh
curl 
```