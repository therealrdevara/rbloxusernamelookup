// Web Scrapping using Node js and Cherio Request
// npm install cherio
// npm install request

// Imports 
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
const app = express()
const port = 8000
const cherio = require('cherio');
const request = require('request');
const fs = require('fs');
function firstRequest(username){
var url2p1 = "https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=" 
var url2p2 = "&size=150x150&format=Png&isCircular=false"
var url2 = "0"
var userid = 0
var url1 = "https://api.roblox.com/users/get-by-username?username="

request('https://api.roblox.com/users/get-by-username?username=jimmygood', (err, resp, html)=>{

    if(!err && resp.statusCode == 200){
        console.log("Request was success ");
        
        // Define Cherio or $ Object 
        const $ = cherio.load(html);
        var string1 = $.text()
        console.log(string1)
        var string2 = string1.split(',')
        if(string2.length != 2){
        var string3 = string2[0].split(':')
        userid = string3[1]
        console.log("USERID")
        console.log(userid)
        var url2p3 = url2p1.concat('', userid)
        url2 = url2p3.concat('', url2p2)
        console.log("url2")
        console.log(url2)
        return secondReq(url2)
        }
        else{
            return "-1"
        }
    }else{
        console.log("Request Failed ");
    }

});
}
function secondReq(url2){
request(url2, (err, resp, html) => {

    if(!err && resp.statusCode == 200){
        console.log(url2)
        console.log("Request was success ");
        const $2 = cherio.load(html);
        var string12 = $2.text()
        console.log(string12)
        var string22 = string12.split(',')
        // Define Cherio or $ Object 
        var string32 = string22[2].split(':')
        const userPFP1 = string32[2]
        var userPFP = userPFP1.substring(2, userPFP1.length - 4)
        console.log(userPFP)
        return userPFP

    }else{
        console.log("Request Failed ");
    }

});

}

