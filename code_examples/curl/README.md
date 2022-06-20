# Using curl with Graphbase

This file describes the curl commands to manage a blog using **curl**.
See the parent **README.MD** file for information about
configuring your environment and some GraphQL queries and mutations.

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