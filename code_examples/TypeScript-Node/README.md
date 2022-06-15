# Using TypeScript to query

## Getting started

If you are familiar with setting up and configuring a Node/TypeScript project,
you can skip this section.

To jump start your copy of this project:

1. Make sure you have **node** and **npm** installed:

   ```sh
   node -v
   npm -v
   ```

   To install **node** and **npm**, see the [node](https://nodejs.org/en/download/) download page.

2. Create a local directory for the project and navigate into it.
   We use **BlogTest** as a sub-directory of the current directory.

   ```sh
   mkdir BlogTest
   cd BlogTest
   ```

3. Initialize the **BlogTest** project:

   ```sh
   npm init -y
   ```

4. Install TypeScript and the Node types and confirm the TypeScript installation:

   ```sh
   npm install typescript --global
   npm install @types/node --global
   tsc --version
   ```

5. Create a **tsconfig.json** to configure the compiler options for a project:

   ```sh
   touch tsconfig.json
   ```

6. Add the following content to **tsconfig.json**:

   ```json
   {
     "compilerOptions": {
       "module": "commonjs",
       "esModuleInterop": true,
       "target": "es6",
       "moduleResolution": "node",
       "sourceMap": true,
       "outDir": "dist"
     },
     "lib": ["es2015"]
   }
   ```

   * **module** specifies the module code generation method. **Node** uses **commonjs**.
   * **target** specifies the output language level.
   * **moduleResolution** helps the compiler figure out to what an import refers. 
     The value node mimics the Node module resolution mechanism.
   * **outDir** specifies the directory the compiler outputs .js files after transpilation.

## Configuring your environment

This file describes the JavaScript/Node commands to manage a blog.
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

## Creating the Source Code

Let's create our main program in **src/index.ts**.
It takes one argument, 
the name of the JSON file containing the query or mutation.

1. Create the file:
   ```sh
   mkdir src
   cd src
   touch index.ts
   ```

2. Add the following code to **index.ts**:

   ```typescript
   ???
   ```

## Queries and Mutations

The command line to run the main program, in **src/index.ts**,
is the following,
where *FILENAME.json* is the name of the JSON file
containing the query or mutation:

```sh
node src/index.mjs -d FILENAME.json
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