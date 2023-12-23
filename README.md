

<a name="readme-top"></a>

<br />
<div align="center">
  <a href="#">
    <img src="docs/images/social-media.jpeg" alt="Logo" width="500" 
  </a>
<br/>
  <h2 align="center">Social Media API</h2>

</div>
<br/>
<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#how-to-install">How to Install</a>
    </li>
     <li><a href="#an-instance-of-env-file">An Instance Of .env File</a></li>
     <li><a href="#how-it-works">How It Works</a></li>
    <li><a href="#how-to-start">How to Start</a></li>
    <li><a href="#how-to-develop">How to Develop</a></li>
    <li><a href="#endpoints">Endpoints</a>
    <ol>
    <li><a href="#core">Core</a></li>
    <li><a href="#image-crud">Image Crud</a></li>
    </ol>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#technologies-used">Technologies Used</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project constitutes the backend infrastructure for a social media application. Users have the capability to follow each other, like posts, and exchange messages. They can share content in the form of text, video, or images. MySQL is employed as the underlying database.

The project is designed adhering to the principle of dependency injection, making it highly adaptable for a seamless transition to a different database if needed. Server emails are dispatched to users utilizing the RabbitMQ technology.

Upon user registration, the email sending process is enqueued, ensuring efficient handling through a queue mechanism. To enhance performance in delivering frequently accessed data such as follower information, like counts, and shared posts, the project employs the Redis caching method.

Data is cached using Redis to improve response times, and cached data is retrieved directly from the cache during user requests, optimizing the overall system performance.

### Built With

- [![Nodejs][node.js]][nodejs-url]

<!-- GETTING STARTED -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How to Install

- Clone the repository

```
git clone git@github.com:ahmetcanturan/social-media.git
```

- Install the dependencies

```
npm install
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## An Instance Of .env File

```
PORT=3000
SQL_HOST=
SQL_USER=
SQL_PASS=
SQL_POOL=
SQL_PORT=
SQL_TIMEZONE=
SQL_DATABASE=
SECRET_KEY=
EXPIRESIN=
RABBIT_USER=
RABBIT_PASS=
MAIL_USER=
MAIL_PASS=

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## How It Works



## How to Start

- Run the project

```
npm run start
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## How to Develop

- Create a new branch

```
git checkout -b new-feature
```

- Make changes to the code.
- Test your changes

```
npm run start
```

- Commit your changes

```
git commit -m "new-feature"
```

- Push your changes to the remote branch

```
git push origin new-feature
```

- Create a pull request on GitHub.
<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Endpoints

### User

#### Get All

`GET /api/image/` <br/>

When a request is made to this endpoint, it returns all the registered rendering processes in the database as a response.


<details>
  
<summary>
Show / Close
</summary >

    curl -X GET http://localhost:3030/api/image/ -H "Authorization: Bearer YOUR_BEARER_TOKEN"


</details>

<br/>

#### Get By Id

`GET /api/image/:id` <br/>

When a request is made to this endpoint with an ID, it finds and provides the corresponding record in the database.

```bash
id : REQUIRED
```

<details>
  
<summary>
Show / Close
</summary >

    curl -X GET http://localhost:3030/api/image/<OBJECT_ID> -H "Authorization: Bearer YOUR_BEARER_TOKEN"


</details>

<br/>

#### Delete By Id

`DELETE /api/image/:id` <br/>

When a request with an ID is sent to this endpoint, it locates the relevant record in both the database  and deletes the data.

```bash
id : REQUIRED
```

<details>
  
<summary>
Show / Close
</summary >

    curl -X DELETE http://localhost:3030/api/image/<OBJECT_ID> -H "Authorization: Bearer YOUR_BEARER_TOKEN"


</details>

<br/>

<p align="right">(<a href="#">back to top</a>)</p>

<!-- CONTACT -->

## Contact

- Ahmet Can Turan - ahmetcanturan.dev@gmail.com


<!-- ACKNOWLEDGMENTS -->
<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies Used

- [Node V18.16.0](https://nodejs.org/en)
- [Npm V9.5.1](https://www.npmjs.com/)
- [Express V4.18.2](https://www.npmjs.com/package/express)
- [JWT V9.0.2](https://jwt.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/trt-digital/trt-world-cms-missing-article-tracer/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: docs/images/screenshot.png
[node.js]: https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white
[nodejs-url]: https://nodejs.org/en
