# Using curl

This file describes the curl commands to manage a blog.
In each case you must modify the source file to:

* Replace *API-KEY* with your API key.

  You can get the API keys for your project's branch by selecting the
  **API Keys** tab of the project branch's **Settings** section of the dashboard.
  
* Replace *PROJECT-ENDPOINT* with the endpoint to your project branch.
  
  You can get the endpoint for a project branch by selecting the 
  **Branches** tab in the project's dashboard.

## Creating a user

The following command creates a user.
It returns the ID of the new user.

```node
node CreateUser.mjs
```

## Listing the users

The following command lists the users.

```node
node ListUsers.mjs
```

## Creating a post

The following command creates a post.
It returns the ID of the new post.
You must replace *USER-ID* with the ID of the user you just created 
in **CreateUser.mjs**.

```node
node CreatePost.mjs
```

## Listing the posts

The following command lists the posts.

```node
node ListPosts.mjs
```

## Creating a comment from a user on a post

The following command creates a comment from a user about a post.
It returns the ID of the new comment.
You must replace *USER-ID* with the ID of a user
and *POST-ID* with the ID of a post
in **CreateComment.mjs**.

```node
node CreateComment.mjs
```

## Listing the comments

The following command lists the comments.

```node
node ListComments.mjs
```