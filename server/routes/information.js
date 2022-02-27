/*
*Name: Maiara Almeida
*Student id: 301145511
*/

let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let passport = require('passport');

let informationController = require('../controllers/information');

function requireAuth(req,res,next){
    if(!req.isAuthenticated){
        return res.redirect('/login');
    }
    next();
}

//GET Route for the information page: read Operation
router.get('/', informationController.displayInformationList);

//GET Route for add page: Create Operation
router.get('/add', requireAuth, informationController.displayAddPage);

//POST Route for add page: Create Operation
router.post('/add', requireAuth, informationController.processAddPage);

//GET Route for edit page: Update Operation
router.get('/edit/:id', requireAuth, informationController.displayEditPage);
router.post('/edit/:id', requireAuth, informationController.processEditPage);

//GET Route for delete: Delete Operation
router.get('/delete/:id', requireAuth, informationController.processDelete);

module.exports = router;
