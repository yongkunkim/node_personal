const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    res.send("홈페이지");
})
//과일 
const fruits = [
    {
        fruitName: "apple",
        myName: "김용근",
        fruitStatus: "FOR_SALE",
        createDate: "2023-11-03",
    },
    {
        fruitName: "banana",
        myName: "김용근",
        fruitStatus: "FOR_SALE",
        createDate: "2023-11-02",
    },
    {
        fruitName: "mango",
        myName: "김용근",
        fruitStatus: "FOR_SALE",
        createDate: "2023-11-01",
    },
    {
        fruitName: "melon",
        myName: "김용근",
        fruitStatus: "FOR_SALE",
        createDate: "2023-11-04",
    },
];

router.get("/fruits",(req,res) => {
    res.status(200).json({"fruits" : fruits});
});

router.get("/fruits/:fruitName", (req,res) => {

    const {fruitName} = req.params;
    const [result] = fruits.filter((fruit) => {
        return fruitName === fruit.fruitName;
    })
    res.status(200).json({ product : result});
})





module.exports = router;
