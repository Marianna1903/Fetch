/*var inp = document.getElementsByClassName("inp")[0];
var btn = document.getElementsByClassName("btn")[0];
var p = document.getElementsByClassName("p_text")[0];

fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
	return response.json();
}).then(function(data){
	btn.addEventListener("click", function(){
		if(inp.value==""){
			alert("Empty input!");
		}else{
			let user = data.filter(user=>user.name===inp.value);
			inp.value="";
			if(user.length>0){
				p.innerHTML = user[0].email;
			}else{
				alert("Can't find that user!");
			}

		}
	})		
})
*/


///////////////////////////2//////////////////////
/*var inp = document.getElementById("inp");
var btn = document.getElementById("btn");
var div = document.getElementById("div");

	btn.addEventListener("click", function(){
		if(inp.value==""){
			alert("Input is empty!");
		}else{
			fetch(`http://api.tvmaze.com/search/shows?q=${inp.value}`)
			.then(function(res){ return res.json()})
			.then(function(data){
				for(var i=0;i<data.length;i++){
					if(inp.value==data[i].show.name){
						var img = document.createElement("img");
						var h2 = document.createElement("h2");
						var p = document.createElement("p");
						img.setAttribute("src",data[i].show.image.medium);
						img.setAttribute("width","300px");
						h2.innerHTML = data[i].show.name;
						p.innerHTML = data[i].show.genres;
						div.appendChild(img);
						div.appendChild(h2);
						div.appendChild(p);
					}
				}
			})
		}
	})*/


///////////////////////////4/////////////
/*
let div = document.getElementById("divv");
fetch("https://corona-api.com/countries/am").then(function(res){
	return res.json();
}).then(function(data){
	div.innerHTML = data.data.today.confirmed;
})*/


////////////3/////////////////////////////
/*let btn = document.getElementById("btn");
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

			btn.addEventListener("click", function(){
				fetch("http://api.openweathermap.org/data/2.5/weather?lat=40.177612&lon=44.512585&APPID=f8ecd14f4515b8ee0fcb3bcdef8f9efe").then(function(result){
				return result.json();
				}).then(function(data){
					alert(Math.floor(data.main.temp-273.15)+"C")
				})
			})

		}
	})
})*/
///////////////////////////////////////////////////////////////////////
