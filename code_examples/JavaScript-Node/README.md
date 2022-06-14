# Using JavaScript to query

## Getting started

If you are familiar with setting up and configuring a Node/JavaScript project,
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

4. Since our code uses the **fetch** library,
   install it:

   ```sh
   npm install node-fetch
   ```

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



node GetTaskLists.mjs
