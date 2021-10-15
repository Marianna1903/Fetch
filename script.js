/*var inp = document.getElementsByClassName("inp")[0];
var btn = document.getElementsByClassName("btn")[0];
var p = document.getElementsByClassName("p_text")[0];


fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
	return response.json();
}).then(function(data){
	btn.addEventListener("click", function(){
		if(inp.value==""){
			alert("Input is empty!");
		}else{
			for(var i=0;i<data.length;i++){
				// console.log(data[i].name)
				if(inp.value==data[i].name){
					p.innerHTML = inp.value;
					break;
				}else{
					p.innerHTML = 'cant find';
			}
			
		}
	}
	})
})*/




/*var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var div = document.getElementById("div");

fetch("http://api.tvmaze.com/search/shows?q=Titanik").then(function(res){
	return res.json();
}).then(function(data){
	btn.addEventListener("click", function(){
		if(inp.value==""){
			alert("Input is empty!");
		}else{
			for(var i=0;i<data.length;i++){
				if(inp.value==data[i].show.name){
					var img = document.createElement("img");
					var h2 = document.createElement("h2");
					var p = document.createElement("p");
					img.setAttribute("src",data[i].show.image.medium);
					img.setAttribute("width","300px");
					div.appendChild(img);
					div.appendChild(h2);
					div.appendChild(p);
					h2.innerHTML = data[i].show.name;
					p.innerHTML = data[i].show.genres;
				}
			}
		}
	})
})*/





/*
let div = document.getElementById("divv");
fetch("https://corona-api.com/countries/am").then(function(res){
	return res.json();
}).then(function(data){
	div.innerHTML = data.data.today.confirmed;
})*/



let btn = document.getElementById("btn");
fetch("https://jsonplaceholder.typicode.com/users").then(function(result){
	return result.json();
}).then(function(data){
	btn.addEventListener("click",function(){
		var div = document.createElement("DIV");
		
			document.body.appendChild(div);
		for(var i=0;i<data.length;i++){
			var id = data[i].id;
			var name = data[i].name;
			var email = data[i].email;
			var city = data[i].address.city;
			var street = data[i].address.street;
			var lat = data[i].address.geo.lat;
			var lng = data[i].address.geo.lng;

			

			var p = document.createElement("P");
			var btn = document.createElement("BUTTON");
			btn.innerHTML = "Click";
			div.appendChild(p);

			p.innerHTML = id+","+name+","+email+","+city+","+street+","+lat+","+lng;
			p.appendChild(btn);

		}
	})
})