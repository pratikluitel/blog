<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Made using GatsbyJS
</h1>

## 🚀 How to build and edit in your own system

1.  **Make sure you have nodejs, npm, yarn and gatsby installed**

    For installation, consult: 

    (node) https://nodejs.org/en/

    (npm) https://www.npmjs.com/

    (yarn) https://yarnpkg.com/

    (gatsby) https://www.gatsbyjs.org/

1.  **clone the repo**

    ```shell
    git clone https://github.com/pratikluitel/site-meta
    ```

1.  **Install dependencies**
    
    look at `package.json` for the list, install using
    `yarn [dependency name]`

1.  **run the local server**

    ```shell
    gatsby develop
    ```

    The site is now running at `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying data. 

    Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## Directory config

The photos should be put in `src/images/img`. Use two directories. `img/personal` for personal photos and `img/blog` for blog post pictures.
The personal picture `personal/profile.jpg` will appear on the about section.

## Blogging

The blog posts are all markdown files, inside src/. You can place them in any directory inside src, and the url will change accordingly. Use the following frontMeta in posts:

[Markdown front matter how to](https://assemble.io/docs/YAML-front-matter.html)


---

title: YourTitle

featuredImage: [image directory from the current directory]

caption: caption for the featured image

alt: alt for featured image (displayed if the image doesn't load)

category: 

date: 

---

## Some Customization
Some customization can be done on the `gatsby-config.js` file, by modifying the `siteMetadata` parameters - `title`, `author`, `description` and `contact`. A quick look inside `gatsby-config.js` will clear things up, I think.

You can also write out your very own about section on `src/pages/about_content.md`. Make sure to add this frontMeta:

---

title: About

featuredImage: ../images/img/personal/profile.jpg

date: 1998-08-08

---

There's already some content in there, you can edit it. (doesn't have to be html by the way, I was just lazy to change it)

Keep in mind that the title frontMeta remains 'About' or nasty stuff will happen

##### P.S. you can also add a nice photo to the jumbotron (big blue space in the header of the home page. name the file jumbotron.webp and put it in the personal photos directory. Don't add questions. I'll fix this thing soon)
#
#
#
## 🧐 More colour pallets and dark theme to be added soon!


# Gatsby learning resources (cr. the GatsbyJS team)

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.