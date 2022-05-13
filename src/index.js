import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// import express from "express";
// const app = express();
// import { Users } from "./users.js";
// import cors from "cors";

// app.use(cors());

// app.get("/", (req, res) => {
//   const { q } = req.query;

//   const keys = ["first_name", "last_name", "email"];

//   const search = (data) => {
//     return data.filter((item) =>
//       keys.some((key) => item[key].toLowerCase().includes(q))
//     );
//   };

//   q ? res.json(search(Users).slice(0, 10)) : res.json(Users.slice(0, 10));
// });

// app.listen(5000, () => console.log("API is working!"))

reportWebVitals();
