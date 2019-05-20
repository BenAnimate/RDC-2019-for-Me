const http=require('http');
const request=require('request');
const PORT=process.env.PORT||5000;
var headers={Cookie:'_t='+process.env.t};
var t='Count me in; I\'ve made a Heroku application just to ensure I secure a spot.'

function xxx(){
	request.get({url:'https://devforum.roblox.com/c/roblox-developer-conference/l/latest.json',headers:headers},(e,r,b)=>{
		var topics=JSON.parse(b).topic_list.topics;
		request.get({url:'https://devforum.roblox.com/user_actions.json?username=visualplugin',headers:headers},(e,r,b)=>{
			var actions=JSON.parse(b).user_actions.map(t=>{return t.excerpt});
			console.log(actions);
		});
	});
}

const server=http.createServer((req,res)=>{
	res.statusCode=200;
	res.setHeader('Content-Type','text/plain');
	res.end('The server should be checking.');
});
server.listen(PORT,()=>{
	console.log(`Server running on ${PORT}.`);
});

xxx();
setInterval(()=>{
	request.get('https://devforum-autom8er.herokuapp.com/');
  xxx();
},69000);
