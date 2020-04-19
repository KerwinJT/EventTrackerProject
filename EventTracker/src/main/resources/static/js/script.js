window.addEventListener('load', evt =>{
	console.log('Window loaded');
	init();
});

function init(){
	console.log('In init function');
	document.search.submit.addEventListener('click', function(e){
		e.preventDefault();
		let pid = document.search.id.value;
		console.log('line 12: ' + pid);
		if(pid > 0){
			console.log('Greater than 0');
			
			displayId(pid);
		}
		console.log('You clicked "Search ID"')
	});
	document.keyword.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Comments by Keyword');
		let keyword = document.keyword.keyword.value;
		if(typeof keyword !== 'undefined'){
			displayComments(keyword);
		}
		
	});
	document.lens.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Lenses by Keyword');

		let keyword = document.lens.keyword.value;
		if(typeof keyword !== 'undefined'){
			displayLenses(keyword);
		}
		
	});
	document.locations.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Locations by Keyword');
		let keyword = document.locations.keyword.value;
		if(typeof keyword !== 'undefined'){
			displayLocations(keyword);
		}
		
	});
	document.name.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Locations by Keyword');
		let keyword = document.name.keyword.value;
		if(typeof keyword !== 'undefined'){
			displayName(keyword);
		}
		
	});

	document.create.create.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Create New Event');
		createPhotoshoot();
		
	});
	
}

function displayId(pid){
	
	console.log('Inside displayId function' + pid);
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/photoshoots/' + pid);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status < 400){
			var data = JSON.parse(xhr.responseText);
			console.log(data);
			displayData(data);

		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.log(xhr.status + ": " + xhr.responseText);
			displayNotFound();
		}
	}
	xhr.send(null);
}

function displayComments(keyword){
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/photoshoots/search/comments/' + keyword);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status < 400){
			var data = JSON.parse(xhr.responseText);
			data.forEach(element => {
				displayData(element);
			});
			

		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.log(xhr.status + ": " + xhr.responseText);
			displayNotFound();
		}
	}
	xhr.send(null);
}

function displayLenses(keyword){
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/photoshoots/search/lenses/' + keyword);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status < 400){
			var data = JSON.parse(xhr.responseText);
			data.forEach(element => {
				displayData(element);
			});
			

		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.log(xhr.status + ": " + xhr.responseText);
			displayNotFound();
		}
	}
	xhr.send(null);
}
function displayLocations(keyword){
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/photoshoots/search/location/' + keyword);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status < 400){
			var data = JSON.parse(xhr.responseText);
			data.forEach(element => {
				displayData(element);
			});
			

		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.log(xhr.status + ": " + xhr.responseText);
			displayNotFound();
		}
	}
	xhr.send(null);
}

function displayName(keyword){
	
	
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/photoshoots/search/name/' + keyword);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 && xhr.status < 400){
			var data = JSON.parse(xhr.responseText);
			data.forEach(element => {
				displayData(element);
			});
			

		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.log(xhr.status + ": " + xhr.responseText);
			displayNotFound();
		}
	}
	xhr.send(null);
}

function displayData(data){
	let dataDiv = document.getElementById('searchResults');
	dataDiv.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = 'Search Results';
	dataDiv.appendChild(h1);
	
	let h2 = document.createElement('h2');
	h2.textContent = data.name;
	dataDiv.appendChild(h2);

	let location = data.location;
	let date = data.date;
	let latitude = data.latitude;
	let longitude = data.longitude;
	let shotsTaken = data.shotsTaken;
	let commentLocation = data.commentLocation;
	let commentPerformance = data.commentPerformance;
	let lensesUsed = data.lensesUsed;


	let dataArray = [location, date, latitude, longitude, shotsTaken, commentLocation, commentPerformance, lensesUsed];

	let ul = document.createElement('ul');
	dataArray.forEach(element =>{
		console.log(element);
		
		let li = document.createElement('li');
		li.textContent = (element);
		ul.appendChild(li);
	});
	dataDiv.appendChild(ul);

	
}

function displayNotFound(){
	let dataDiv = document.getElementById('searchResults');
	dataDiv.textContent = '';
	let h1 = document.createElement('h1');
	h1.textContent = 'No photoshoots found';
	dataDiv.appendChild(h1);
}

function createPhotoshoot(){

	// var x = document.createElement("INPUT");
	// x.setAttribute("type", "text");

	let dataDiv = document.getElementById('searchResults');
	dataDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = 'Create new Photoshoot';
	dataDiv.appendChild(h2);
	let form = document.createElement('form');
	dataDiv.appendChild(form);
	let nameAr = ['Name', 'name'];
	let locationAr = ['Location', 'location'];
	let dateAr = ['Date YYYY-MM-DD', 'date'];
	let latitudeAr = ['Latitude', 'latitude'];
	let shotsTakenAr = ['Shots Taken', 'shotsTaken'];
	let commentLocationAr = ['Comments for Location', 'commentsLocation'];
	let commentPerformanceAr = ['Comments for Performance', 'commentsPerformance'];
	let lensesUsedAr = ['Lenses Used', 'lensesUsed'];
	let formAr = [nameAr, locationAr, dateAr, latitudeAr, shotsTakenAr, commentLocationAr, commentPerformanceAr,lensesUsedAr];
	
	formAr.forEach(input => {
		let input1 = document.createElement('input');
		let br = document.createElement('br');
		input1.setAttribute('type', 'text');
		input1.setAttribute('name', input[1]);
		input1.setAttribute('placeholder', input[0]);
		form.appendChild(input1);
		form.appendChild(br);
	});
	let create = document.createElement('button');
	create.setAttribute('name', 'createPhotoshoot');
	create.innerHTML ='Save new Photoshoot';
	create.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked create');
		//Function - Save new photoshoot
		
	});
	form.appendChild(create);
	
}