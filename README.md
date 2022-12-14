## MVC Tech Blog challenge 14
   
### Description

*A mysql database and CMS-style Blog built using Model View Controller (MVC) paradigm. Built using MySQL2, Express, Sequelize, Bulma, Handlebars and dotenv*

## Built With
- HTML
- CSS
- Bulma 
- JavaScript
- Node.js
  - Express.js
  - mysql
  - sequelize

### Live Application Deployment in Heroku 👇 
[MVC MASTER 14](https://mvc-master-heroku.herokuapp.com/)


### Application Screenshot
<img width="1440" alt="Screen Shot 2022-10-14 at 8 43 49 PM" src="https://user-images.githubusercontent.com/106297412/195967578-ea686b75-e01a-4a52-8432-065405c3af22.png">


<img width="1440" alt="Screen Shot 2022-10-14 at 8 44 13 PM" src="https://user-images.githubusercontent.com/106297412/195967586-11036bd1-555b-4429-a65b-64748cb686c6.png">

<img width="1440" alt="Screen Shot 2022-10-14 at 8 44 38 PM" src="https://user-images.githubusercontent.com/106297412/195967591-87e207c0-a22d-43b8-bc6a-cde2428b3607.png">

  
### User Story

```
AS A developer who writes about tech
I WANT a CMS-style blog site
SO THAT I can publish articles, blog posts, and my thoughts and opinions
```


### Installation Guidelines

Once all the packages have been installed, open terminal and run the following code in command line : 
```
mysql root -p
npm run seed
node server.js
```



- Add a .env file to the root of the project

```text
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW=''

