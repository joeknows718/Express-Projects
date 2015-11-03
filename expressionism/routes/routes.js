var blogEngine = require('../blog');

exports.index = function(req, res){
	res.render('index', {title: "My Blog", entries : blogEngine.getBlogEntries()});
}

exports.article = function(req, res){
	var entry = blogEngine.getBlogEntry(req.params.id);
	res.render('article', {title : entry.title, blog:entry});
}