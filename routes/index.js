import express from 'express';

const indexRouter = express.Router();


// All Authors Route
indexRouter.get('/', (req, res) => {
    res.render('index');
});


export { indexRouter };