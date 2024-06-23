import {Router} from 'express';

const router = Router();

router.get("/", (req, res)=> {
    res.send("getting all users")
})

router.get("/:id", (req, res)=> {
    res.send("getting a single user")
})

router.post("/", (req, res)=> {
    res.send("creating a user")
})  

router.patch("/:id", (req, res)=> {
    res.send("updating a user")
})

router.delete("/:id", (req, res)=> {
    res.send("deleting a user")
})

export default router;