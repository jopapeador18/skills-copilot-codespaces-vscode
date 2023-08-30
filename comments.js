// Create web server
var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');

// Get comments
router.get('/', function(req, res) {
    var commentsPath = path.join(__dirname, '../data/comments.json');
    var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));
    res.json(comments);
});

// Add comment
router.post('/', function(req, res) {
    var commentsPath = path.join(__dirname, '../data/comments.json');
    var comments = JSON.parse(fs.readFileSync(commentsPath, 'utf8'));
    var newComment = {
        id: Date.now(),
