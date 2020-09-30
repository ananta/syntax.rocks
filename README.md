<p align="center">
  <a href="https://www.syntax.rocks">
    <img alt="Syntax.Rocks" src="https://syntax.rocks/static/logo-cd52c4428f72d2e7c152ca2b1ea85082.png" width="60" />
  </a>
</p>
<h1 align="center">
  Syntax.Rocks
</h1>

_Syntax.Rocks is a place where developers could collaborate with one another to horn their skills in their domain. From basics of coding with different languages to deep concepts in programming, [Syntax.Rocks] tries to deliver an easy experience to developers learning these concepts to get better at their craft._<br>

## Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need to have a working [Nodejs](https://nodejs.org/en/download/) runtime environment & [Gatsby CLI](https://www.gatsbyjs.org/docs/quick-start/).

### Installing

A step by step series of examples that tell you how to get a development env running

Clone this repo

```
git clone https://github.com/ananta/syntax.rocks
cd syntax.rocks
```

Load project dependencies using npm or yarn

```
npm install
```

Start the developement environment

```
npm start
```

The start script triggers

```
 gatsby develop
```

## Contributing

The main purpose of this repository is to create a bank of tutorials and blogposts which could be useful to other developers in their day to day life. Developers can contribute to the project by either writing a blog-post / updating the site features / debugging the issues.

Having useful article contributions will help other developers to share their experience/knowledge.

### Fork the repo

You need to fork the repo of [syntax.rocks](https://github.com/ananta/syntax.rocks)

### Pull your forked repo to your local machine

### Create a new branch and change it to newly created branch(using kebab-case)

Below command will create a new local branch `article-post-title-in-kebab-case` and switch it.

```
git checkout -b article-post-title-in-kebab-case
```

### Creating a blog post

To create a blog post in [Syntax.rocsk](https://syntax.rocks),

- Create a directory in `/content/blog` with url friendly name written in `kebab-case`.

  1. Add `index.md` file inside the directory.
  2. Add `images` folder if you want to add images in your markdown file.

- Write article in `index.md`

  1.  Each article should contain a frontmatter with the configuration, followed by body of the article. An example can be found [here](https://github.com/ananta/syntax.rocks/tree/master/content/blog/hello-world):

           ```markdown
           ---
            title: "Title For the project"
            tags: ["node.js, react, dev-ops"]
             <!-- more tags can be added from -->
             <!-- https://github.com/ananta/syntax.rocks/blob/master/config.js with label array -->
            published: true
            date: "2020-05-03"
          ---

          Article body in markdown
          .......................
          .......................

          ```

### Create a pull request
