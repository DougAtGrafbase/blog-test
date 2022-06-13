# Using curl

This file describes the curl commands to manage a blog.
Before any command works, you must set the following environment variables:

* API_KEY, which is your API key
* ENDPOINT, which is your project's endpoint

How you set an environment variable depends upon your operating system.
On Linux, macOS, or Unix:

```sh
export API_KEY=YOUR-API-KEY
export ENDPOINT=YOUR-ENDPOINT
```

On Microsoft Windows:

```sh
set API_KEY=YOUR-API-KEY
set ENDPOINT=YOUR-ENDPOINT
```

You can get the API keys for your project's branch by selecting the
**API Keys** tab of the project branch's **Settings** section of the dashboard.
  
You can get the endpoint for a project branch by selecting the 
**Branches** tab in the project's dashboard.

One of the features of **curl** is being able to have the command read data from a file.
We use that feature here, so that different operations use a similar model,
where *FILENAME* contains the GraphQL query or mutation.
On Linux, macOS, or Unix:

```sh
curl -X POST -H "content-type: application/json" -H "authorization: Bearer ${API_KEY}" -d @FILENAME ${ENDPOINT}
```

On Microsoft Windows:

```sh
curl -X POST -H "content-type: application/json" -H "authorization: Bearer %API_KEY%" -d @FILENAME %ENDPOINT%
```

## Creating a user

The following mutation creates a user.
You must replace *USER-EMAIL* with the email address of the user
and *USER-NAME* with the name of the user.
Save the mutation and use that as the name of the file for the **curl** command.
It returns the ID of the new user.

```graphql
{"query":"mutation { userCreate(input: {email: \"USER-EMAIL\", name: \"USER-NAME\"}) { user { id } } }"}
```

## Listing the users

The following query lists the IDs of the first 10 users.

```graphql
{"query":"{ userCollection(first: 10) { edges { node { id } } } }"}
```

## Creating a post

The following mutation creates a post.
You must replace *USER-ID* with the ID of a user,
*TITLE* with the title of the post,
and *CONTENT* with the contents of the post.
It returns the ID of the new post.

```sh
{"query":"mutation { postCreate(input: { title: \"TITLE\", content: \"CONTENT\", user: {link: \"USER-ID\"} }) { post { id } } }"}
```

## Listing the posts

The following query lists the IDs of first 10 posts.

```sh
{"query":"{ postCollection(first: 10) { edges { node { id } } } }"}
```

## Creating a comment from a user on a post

The following mutation creates a comment from a user about a post.
You must replace *USER-ID* with the ID of a user
*POST-ID* with the ID of a post,
and *CONTENT* with the contents of the comment.
It returns the ID of the new comment.

```sh
{"query":"mutation { commentCreate(input: { post: {link: \"POST-ID\"}, content: \"CONTENT\", user: {link: \"USER-ID\"} }) { comment { id } } }"}
```

## Listing the comments

The following query lists the IDs of the first 10 comments.

```sh
{"query":"{ commentCollection(first: 10) { edges { node { id } } } }"}
```