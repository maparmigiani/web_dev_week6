/*
*Name: Maiara Almeida
*Student id: 301145511
*/

let express = require('express');
let mongoose = require('mongoose');
let router = express.Router();

let Information = require('../models/informations');

module.exports.displayInformationList = (req, res, next) => {
    Information.find((err, informationList)=> {
        if(err){
            return console.error(err);
        }else{
            //console.log(informationList);
            res.render('information/list',{title: 'Business Contacts List View',InformationList : informationList});
        }
    });
  }

module.exports.displayAddPage =  (req, res, next) => {
    res.render('information/add',{title: 'Add Information'})
  }

module.exports.processAddPage = (req, res, next) => {
    let newInformation = Information({
        "name": req.body.name,
        "number" : req.body.number,
        "email" : req.body.email
    })

Information.create(newInformation, (err,Information)=>{
    if(err){
        console.log(err);
        res.end(err);
     }else{
          res.redirect('/information-list')
        }

    })
}

module.exports.displayEditPage =  (req, res, next) => {
    let id = req.params.id;
    Information.findById(id,(err,informationToEdit)=>{
        if(err){
            console.log(err);
            res.end(err);
         }else{
            res.render('information/edit',{title: 'Edit Information', information:informationToEdit})
            }
        
        });
      }

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;
    let updateInformation = Information({
        "_id": id,
        "name": req.body.name,
        "number" : req.body.number,
        "email" : req.body.email
    })

Information.updateOne({_id:id},updateInformation, (err)=>{
    if(err){
        console.log(err);
        res.end(err);
     }else{
          res.redirect('/information-list')
        }

    })
}
module.exports.processDelete = (req, res, next) => {
    let id = req.params.id;
    Information.remove({_id:id},(err)=>{
        if(err){
            console.log(err);
            res.end(err);
         }else{
            res.redirect('/information-list')
            }
        
        });
      }