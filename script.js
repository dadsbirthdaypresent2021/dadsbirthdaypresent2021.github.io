window.onload = function(e) { 
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	todayString = mm + '/' + dd + '/' + yyyy;
	document.getElementById('date').innerHTML = todayString;
	var reasons = [
		]
	    const birthday = new Date('01/17/2021');
	    const diffTime = Math.abs(birthday - today);
	    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	    if (diffDays > 366) {
	    	diffDays = diffDays - (Math.floor(diffDays / 366) * 366)
	    }
	    var image = document.createElement("IMG")
	    image.setAttribute('src', './soccer-images/img' + diffDays + '.jpeg');
	    image.classList.add('image');
	    document.getElementById('soccer-image').appendChild(image);
	    document.getElementById('love-reason').innerHTML = reasons[diffDays - 1];
}