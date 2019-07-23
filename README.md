# aagaard design studio.

A portfolio website built using [Gatsby](https://www.gatsbyjs.org/) for a Copenhagen–based, one-man army design studio, and more importantly, a good friend.

## Setup

Install the dependencies and start the app (which runs `Gatsby develop`).

```sh
$ npm install
$ npm start
```

## Build

Create a production build of the site and output the built static files into the public directory.

```sh
$ npm run build
```

To view the production site locally, run:

```sh
$ npm run serve
```

You can now preview the site at `http://localhost:9000`.

## Deploy

The site is hosted with Netlify. Any push to the `master` branch will trigger a **production** deploy. For testing new features, the preferred workflow is to first create a new branch off of master, and when ready, create a pull request. Once that pull is create, Netlify will create a deploy preview of the site using the code from that branch.
