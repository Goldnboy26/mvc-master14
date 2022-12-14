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



- Add a .env file to the root of the project to specify the location of the important files

```text
DB_NAME='tech_blog_db'
DB_USER='root'
DB_PW=''

