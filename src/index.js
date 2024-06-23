import express from "express";
import usersRouter from "./routes/users.routes.js";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
// app.get("/", (req, res) => {
//     res.send("Bridget")
// })
app.listen(3000, () => {
    console.log("server running on port 3000")
})