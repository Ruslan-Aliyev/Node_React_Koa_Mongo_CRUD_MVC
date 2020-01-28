# Node.js React.js Koa.js MongoDB Stack - MVC

## Setup

1. Install node and mongo
2. In directories: create 'C:/data/db'
3. Start mongo database server: In 'C:/data/' directory, give this command: `mongod --dbpath .` in the command line. Keep this terminal open.

## Database

```
$mongo
>use tripadvisor
>db.createCollection("destination")
>db.createCollection("rating")

>db.destination.insert({"destination" : "Istanbul", "country" : "Turkey"})
>db.destination.insert({"destination" : "Derinkuyu", "country" : "Turkey"})

>db.rating.insert({"destination" : "Derinkuyu", "rating" : "Underground"})
>db.rating.insert({"destination" : "Istanbul", "rating" : "Architectural"})
```

## Results

1. `git clone https://github.com/atabegruslan/node-react-koa-mongo-mvc.git`
2. `cd node-react-koa-mongo-mvc` and `npm install`
3. Transpile: `npm run start`
4. Serve : `node --harmony routes.js`

![](https://raw.githubusercontent.com/Ruslan-Aliyev/MVC-CRUD_Node-React-Koa-Mongo/master/Illustrations/KoaReact01.PNG)

---

# Relevant Tutorials

- https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/
