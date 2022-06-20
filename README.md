# A simple blog manager

This repo contains the source code for a Grafbase project that manages a blog.

The project is on hold until we get auth working and I can work
the code into a framework (NodeJS?).

The schema in *grafbase/schema.graphql* defines
types defined for a user, a post, and a comment,
all based on the Grafbase template at
[https://github.com/grafbase/grafbase/blob/main/templates/blog/grafbase/schema.graphql](https://github.com/grafbase/grafbase/blob/main/templates/blog/grafbase/schema.graphql).

## Code Examples

Initially there six code examples:

* Create a user
* List the users
* Create a post
* List the posts
* Create a comment from a user on a post
* List the comments

The same code examples are written in three programming languages in *code-examples*:

* curl, with the code shown in *code-examples/curl/README.md*
* JavaScript, with the code in *code-examples/javascript/Create[user | post | comment].mjs* 
  and *code-examples/List[users | posts | comments].mjs*
* Go(lang), with the code in *code-examples/golang/create-[user | post | comment]/main.go* 
  and *code-examples/list-[users | posts | comments]/main.go*

See the *README.md* files in the relavent sub-directories for further information on these code examples.
