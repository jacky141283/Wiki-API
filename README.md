

<h2 align="center">Wiki - REST API</h2>
<p align=center>RESTful API for user writing and updating articles.</p>
<p align=center>Deployed with Heroku and MongoDB Atlas .</p>


## 💡 Technologies

  <p align="left">
    <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/javascript/javascript-original.svg" alt="javascript" width="35" height="35"/>
    <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/nodejs/nodejs-original.svg" alt="nodejs" width="35" height="35">
    <img src="https://raw.githubusercontent.com/devicons/devicon/c5378d6c2510ffa0b3e4475af95618a8048d6cf1/icons/mongodb/mongodb-original-wordmark.svg" alt="mongo-db" width="35" height="35">
  </p>
<hr>

<h2>User Guide</h2>

<h4>Document Structure</h4>

```js
const articleObject = {
  title: "myArticle",
  content: "articleContent",
};
```

<h4>Target: all Articles</h4>

- Endpoint: `https://calm-sea-77850.herokuapp.com/articles`
- Methods: GET, POST, DELETE

<h4>Individual Article</h4>

- Endpoint: `https://calm-sea-77850.herokuapp.com/articles/{postTitle}`
- Methods: GET, PUT, PATCH, DELETE

<hr>

## 🤓 Deploy
Get all articles <https://calm-sea-77850.herokuapp.com/articles>

