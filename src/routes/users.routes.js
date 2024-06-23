import {Router} from 'express';
import pool from '../db.config.js';

const router = Router();

router.get("/", async (req, res)=> {
    try {
        const result = await pool.query("SELECT * FROM products");
        res.status(200).json( {success: true, data: result.rows});
    } catch (err) {
        res.status(500).json({success: false,message:err.message})
    }
})

router.get("/:id", async (req, res)=> {
    const id = req.params.id;
    try {
        const result = await pool.query("SELECT * FROM products WHERE id=$1", [id]);
        if (result.rowCount === 0){
            res.status(404).json({success: false, message: "product not found"})
        } else {
            res.status(200).json({success: true, data: result.rows[0]})
        }
    } catch (err) {
       res.status(500).json({success: false,message: err.message}); 
    }
})

const validateProductInformation = (req, res, next) =>{
    const productthumbnail = req.body.productthumbnail;
       const producttitle = req.body.producttitle;
       const productdescription = req.body.productdescription;
       const productcost = req.body.productcost;
       const onoffer = req.body.onoffer;
       if (!productthumbnail) return res.status(400).json({success: false, message: "Thumbnail required"});
       if (!producttitle) return res.status(400).json({success: false, message: "Title required"});
       if (!productdescription) return res.status(400).json({success: false, message: "description required"});
       if (!productcost) return res.status(400).json({success: false, message: "cost required"});
       if (!onoffer) return res.status(400).json({success: false, message: "product status required"});
       next();
}

router.post("/", validateProductInformation, async (req, res)=> {
    try {
       const productthumbnail = req.body.productthumbnail;
       const producttitle = req.body.producttitle;
       const productdescription = req.body.productdescription;
       const productcost = req.body.productcost;
       const onoffer = req.body.onoffer;
       if (!productthumbnail) return res.status(400).json({success: false, message: "Thumbnail required"});
       if (!producttitle) return res.status(400).json({success: false, message: "Title required"});
       if (!productdescription) return res.status(400).json({success: false, message: "description required"});
       if (!productcost) return res.status(400).json({success: false, message: "cost required"});
       if (!onoffer) return res.status(400).json({success: false, message: "product status required"});
       


       const insert = await pool.query("INSERT INTO products (productThumbnail, productTitle, productDescription, productCost, onOffer) VALUES($1, $2, $3, $4, $5)",[productthumbnail, producttitle, productdescription, productcost, onoffer],);

       if(insert.rowCount === 1){
        res.status(201).json({success: true, message: "User created successfully"});
       }

    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
})  

router.patch("/:id", (req, res)=> {
    res.send("updating a user")
})

router.delete("/:id", (req, res)=> {
    res.send("deleting a user")
})

export default router;