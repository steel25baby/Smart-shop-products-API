import express from "express";
import usersRouter from "./routes/users.routes.js";

const app = express();

app.use("/users", usersRouter);
// app.get("/", (req, res) => {
//     res.send("Bridget")
// })
app.listen(8080, () => {
    console.log("server running on port 8080")
})