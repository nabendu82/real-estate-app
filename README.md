# Real Estate App
This Real Estate app have been created using MERN stack. We have also used Prisma in it for better creating of database queries.

## Initial Setup
First clone or download this github repository. It contains a **client** and **server** folder. This project have been created using **yarn**. So, install it globally, if you don't have it.

`npm i -g yarn`

After that open the  **client** and **server** folders, in terminal. And run the **yarn** command.

## Server setup
Create an **.env** file in the root directory of server and give the variables as below. You need to use your own MongoDB Url.
```
PORT = 8000
DATABASE_URL= "mongodb+srv://YOUR_USER:YOUR_PASSWORD@cluster0.mongodb.net/realestatedb?retryWrites=true&w=majority&appName=Cluster0"
```
Run the below command to run the **server**.
`yarn run start`

## Client setup
In the **client** folder there is a **utils** folder inside the **src** folder. Open the file **api.js** inside it. Since, this code is deployed, we need to change it back the server route as below.

```
export  const  api = axios.create({
  baseURL:  "http://localhost:8000/api",
});
```

After that run the command `yarn run dev` to start the client. From a browser open http://localhost:5173/ to check the app.

## Deployed App
The app is been deployed through vercel. You can check it out [here](https://real-estate-app-client-indol.vercel.app/).
