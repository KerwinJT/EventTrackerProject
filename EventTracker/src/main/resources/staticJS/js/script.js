window.addEventListener('load', evt =>{
	console.log('Window loaded');
	init();
});
var shotCount = 0;

function init(){
	console.log('In init function');
	document.search.submit.addEventListener('click', function(e){
		e.preventDefault();
		let pid = document.search.id.value;
		console.log('line 12: ' + pid);
		if(pid > 0){
			console.log('Greater than 0');
			let dataDiv = document.getElementById('searchResults');
			dataDiv.textContent = ''; 
			shotCount = 0;
			displayId(pid);
		}
		console.log('You clicked "Search ID"')
	});
	document.keyword.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Comments by Keyword');
		let keyword = document.keyword.keyword.value;
		if(typeof keyword !== 'undefined'){
			let dataDiv = document.getElementById('searchResults');
			dataDiv.textContent = ''; 
			shotCount = 0;
			displayComments(keyword);
		}
		
	});
	document.lens.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Lenses by Keyword');

		let keyword = document.lens.keyword.value;
		if(typeof keyword !== 'undefined'){
			let dataDiv = document.getElementById('searchResults');
			dataDiv.textContent = ''; 
			shotCount = 0;
			displayLenses(keyword);
		}
		
	});
	document.locations.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Locations by Keyword');
		let keyword = document.locations.keyword.value;
		if(typeof keyword !== 'undefined'){
			let dataDiv = document.getElementById('searchResults');
			dataDiv.textContent = ''; shotCount = 0;
			displayLocations(keyword);
		}
		
	});
	document.name.submit.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked Locations by Keyword');
		let keyword = document.name.keyword.value;
		if(typeof keyword !== 'undefined'){
			let dataDiv = document.getElementById('searchResults');
			dataDiv.textContent = ''; 
			shotCount = 0;
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
			let dataDiv = document.getElementById('searchResults');
			let h1c = document.createElement('h1');
			let h2 = document.createElement('h2');
			h1c.textContent = "Search Results";
			dataDiv.appendChild(h1c);
			dataDiv.appendChild(h2);
			data.forEach(element => {
				if(element.shotsTaken > 0){
					shotCount += element.shotsTaken
				}
				displayData(element);
			});

			h2.textContent = "Total shots in the results: " + shotCount;
			
			

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
			let dataDiv = document.getElementById('searchResults');
			let h1c = document.createElement('h1');
			let h2 = document.createElement('h2');
			h1c.textContent = "Search Results";
			dataDiv.appendChild(h1c);
			dataDiv.appendChild(h2);
			data.forEach(element => {
				if(element.shotsTaken > 0){
					shotCount += element.shotsTaken
				}
				displayData(element);
			});

			h2.textContent = "Total shots in the results: " + shotCount;
			
			

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
			let dataDiv = document.getElementById('searchResults');
			let h1c = document.createElement('h1');
			let h2 = document.createElement('h2');
			h1c.textContent = "Search Results";
			dataDiv.appendChild(h1c);
			dataDiv.appendChild(h2);
			data.forEach(element => {
				if(element.shotsTaken > 0){
					shotCount += element.shotsTaken
				}
				displayData(element);
			});

			h2.textContent = "Total shots in the results: " + shotCount;
			
			

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
			let dataDiv = document.getElementById('searchResults');
			let h1c = document.createElement('h1');
			let h2 = document.createElement('h2');
			h1c.textContent = "Search Results";
			dataDiv.appendChild(h1c);
			dataDiv.appendChild(h2);
			data.forEach(element => {
				if(element.shotsTaken > 0){
					shotCount += element.shotsTaken
				}
				displayData(element);
			});

			h2.textContent = "Total shots in the results: " + shotCount;
			
			

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
	// let h1 = document.createElement('h1');
	// h1.textContent = 'Search Results';
	// dataDiv.appendChild(h1);
	
	
	let h2 = document.createElement('h2');
	h2.textContent = data.name;
	dataDiv.appendChild(h2);
	let name = data.name;
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
	//Adding Button To Update
	let updatePhotoshoot = document.createElement('button');
	updatePhotoshoot.setAttribute('name', 'updatePhoto');
	updatePhotoshoot.innerHTML = 'Update Photoshoot: ' + data.id;
	updatePhotoshoot.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked updatePhotoshoot');
		updateById(data.id, name, location, date, latitude, longitude, shotsTaken, commentLocation, commentPerformance, lensesUsed);
		
	});
	dataDiv.appendChild(updatePhotoshoot);
	//Adding Button To Delete
	let deletePhotoshoot = document.createElement('button');
	deletePhotoshoot.setAttribute('name', 'deletePhoto');
	deletePhotoshoot.innerHTML ='Delete Photoshoot: ' + data.id;
	deletePhotoshoot.addEventListener('click', function(e){
		e.preventDefault();
		console.log('Clicked to delete photoshoot: ' + data.id);
		deleteById(data.id);
		
	});
	dataDiv.appendChild(deletePhotoshoot);
	
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
	let longitudeAr = ['Longitude', 'longitude']
	let shotsTakenAr = ['Shots Taken', 'shotsTaken'];
	let commentLocationAr = ['Comments for Location', 'commentsLocation'];
	let commentPerformanceAr = ['Comments for Performance', 'commentsPerformance'];
	let lensesUsedAr = ['Lenses Used', 'lensesUsed'];
	let formAr = [nameAr, locationAr, dateAr, latitudeAr, longitudeAr
		, shotsTakenAr, commentLocationAr, commentPerformanceAr,lensesUsedAr];
	
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
		let dataDiv = document.getElementById('searchResults');
		dataDiv.textContent = '';
		console.log('Clicked create');
		let name = form.name.value;
		let location = form.location.value;
		let date = form.date.value;
		let latitude = form.latitude.value;
		let longitude = form.longitude.value;
		let shotsTaken = form.shotsTaken.value;
		let commentLocation = form.commentsLocation.value;
		let commentPerformance = form.commentsPerformance.value;
		let lensesUsed = form.lensesUsed.value;
		savePhotoshoot(name, location, date, latitude, longitude, shotsTaken, commentLocation, commentPerformance, lensesUsed);
		//Function - Save new photoshoot
		
	});
	form.appendChild(create);
	
}
function savePhotoshoot(name, location, date, latitude, longitude, shotsTaken, commentLocation, commentPerformance, lensesUsed){
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/photoshoots');
	xhr.setRequestHeader('Content-type', 'application/json');
	let dataDiv = document.getElementById('searchResults');
	dataDiv.textContent = '';

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status < 400){
			
			var data = JSON.parse(xhr.responseText);
			displayData(data);
		} else {
			console.log('POST request failed');
			console.error(xhr.status + ': ' + xhr.responseText);
		}
	};


	let photoshoot = {
		name: name,
		location: location,
		date: date,
		latitude: latitude,
		longitude: longitude,
		shotsTaken: shotsTaken,
		commentLocation: commentLocation,
		commentPerformance: commentPerformance,
		lensesUsed: lensesUsed
	};
	let photoshootJSON = JSON.stringify(photoshoot);
	xhr.send(photoshootJSON);

}

function deleteById(pid){
	console.log('Inside deleteById function: ' + pid);
	
	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/photoshoots/' + pid);
	xhr.onreadystatechange = function(){
		if(xhr.readyState === 4 ){
			if(xhr.status < 400){	
				let data = xhr.responseText;
				console.log('Inside if statement: ' + data);
				let dataDiv = document.getElementById('searchResults');
				dataDiv.textContent = '';
				let h2c = document.createElement('h2');
				h2c.textContent = 'Deleted Photoshoot with ID: ' + pid;
				
				dataDiv.appendChild(h2c);
			}
		}
		if(xhr.readyState === 4 && xhr.status >= 400){
			console.log(xhr.status + ": " + xhr.responseText);
			displayNotFound();
		}
	}
	xhr.send(null);
}

function updateById(pid, name, location, date, latitude, longitude, shotsTaken, commentLocation, commentPerformance, lensesUsed){
	let dataDiv = document.getElementById('searchResults');
	dataDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = 'Update Photoshoot ' + pid + ": " + name ;
	dataDiv.appendChild(h2);
	let form = document.createElement('form');
	dataDiv.appendChild(form);
	let nameAr = ['Name', 'name', name];
	let locationAr = ['Location', 'location', location];
	let dateAr = ['Date YYYY-MM-DD', 'date', date];
	let latitudeAr = ['Latitude', 'latitude', latitude];
	let longitudeAr = ['Longitude', 'longitude', longitude]
	let shotsTakenAr = ['Shots Taken', 'shotsTaken', shotsTaken];
	let commentLocationAr = ['Comments for Location', 'commentsLocation', commentLocation];
	let commentPerformanceAr = ['Comments for Performance', 'commentsPerformance', commentPerformance];
	let lensesUsedAr = ['Lenses Used', 'lensesUsed', lensesUsed];
	let formAr = [nameAr, locationAr, dateAr, latitudeAr, longitudeAr
		, shotsTakenAr, commentLocationAr, commentPerformanceAr,lensesUsedAr];
	
	formAr.forEach(input => {
		let input1 = document.createElement('input');
		let br = document.createElement('br');
		input1.setAttribute('type', 'text');
		input1.setAttribute('name', input[1]);
		input1.setAttribute('value', input[2]);
		input1.setAttribute('placeholder', input[0]);
		form.appendChild(input1);
		form.appendChild(br);
	});
	form.name.setAttribute('required', 'required');
	form.location.setAttribute('required', 'required');
	form.date.setAttribute('required', 'required');
	//Button to submit changes to photoshoot
	let saveUpdate = document.createElement('button');
	saveUpdate.setAttribute('name', 'updatePhotoshoot');
	saveUpdate.innerHTML = "Save Updates";
	saveUpdate.addEventListener('click', function(e){
		e.preventDefault();
		dataDiv.textContent = '';
		let updates = {
			name: form.name.value,
			location: form.location.value,
			date: form.date.value,
			latitude: form.latitude.value,
			longititude: form.longitude,
			shotsTaken: form.shotsTaken.value,
			commentLocation: form.commentsLocation.value,
			commentPerformance: form.commentsPerformance.value,
			lensesUsed: form.lensesUsed.value
		}
		console.log(updates);
		
		submitUpdate(pid, updates);

	});
	dataDiv.appendChild(saveUpdate);

	//Button to cancel changes to photoshoot\
	let cancelUpdate = document.createElement('button');
	cancelUpdate.setAttribute('name', 'canceelUpdate');
	cancelUpdate.innerHTML = 'Cancel Updates';
	cancelUpdate.addEventListener('click', function(e){
		e.preventDefault();
		dataDiv.textContent = '';
		displayId(pid);

	});
	dataDiv.appendChild(cancelUpdate);
}
function submitUpdate(pid, updates){
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/photoshoots/' + pid);
	xhr.setRequestHeader('Content-type', 'application/json');
	let dataDiv = document.getElementById('searchResults');
	dataDiv.textContent = '';

	xhr.onreadystatechange = function() {
		if(xhr.readyState === 4 && xhr.status < 400){
			
			var data = JSON.parse(xhr.responseText);
			displayData(data);
		} else {
			console.log('POST request failed');
			console.error(xhr.status + ': ' + xhr.responseText);
		}
	};


	
	let photoshootJSON = JSON.stringify(updates);
	xhr.send(photoshootJSON);

}