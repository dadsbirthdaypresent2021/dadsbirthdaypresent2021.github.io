window.onload = function(e) { 
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	todayString = mm + '/' + dd + '/' + yyyy;
	document.getElementById('date').innerHTML = todayString;
	var reasons = ["Watching Marvel stuff with us and chatting about comics", "Finding and setting up gadgets to help me breathe better", "Helping us carry stuff, especially the heavy stuff",
	 "Pushing us to be better", "Motivation us to work harder AND smarter", "Telling us about old actors and actresses", "Helping us love the beautiful game",
	  "Taking into account that I couldn't head the ball in training", "Getting us Spurs gear", "Being super patient with me when I'm being annoying",
	   "Finally getting me to read the glory glory book", "Teaching us that we're never too old to enjoy life", "Dealing with Louise for us on our trips to England", 
	   "Teaching us how to best look out for ourselves while also helping others", "Taking us to Spurs signings", "Helping me both discover and overcome my Gumby-ness",
	    "British citizenship!", "Showing us a example of a good marriage with Mom", "Giving us British citizenship (even if that is less valuable now)",
	     "Teaching us Jewish guy stuff", "Teaching us how to manage risk", "Showing us the value of hard work", "Teaching us how to handle money better", 
	     "Broadening our horizons on how politics/culture/society work around the world", "Our talks on walks", 
	     "Giving us your dress socks, especially when we’re about to leave for something and I can’t find mine", "Giving us a love of and knowledge of Brits", "Naming Jess", 
	     "Coaching our soccer team", "Reading up and trying to understand the weird technical stuff I do", "Getting a car with heated seats so I'm not too cold on the morning commute",
	      "Working super hard every day, even on weekends, so we never have to want for anything", "Giving me a love of The Beatles", "Washing the cars and spraying us with water on hot days", 
	      "Teaching us pieces of history come alive from your memory", "Knowing when we need hugs the most", 
	      "Teaching me to look people in the eye when I shake their hand, even though it made no sense to me at the time", 
	      "Remembering pieces of your life that Mom has forgotten, but which make excellent stories", "Teaching us how to shave", "Bringing me on a trip to England",
	       "Giving us a perspective on fine dining and wine", "Sharing Gnarls Barkley and Genesis with us", "Giving me the winning boxing bet in Vegas and making a good story", 
	       "Give facts about history we wouldn’t know", "Watching DC stuff with us", "Instilling a healthy love of daddy cheese", "Always looking for ways to improve my mental health", 
	       "Working hard for", "Taking us to see Spurs play in person", "Setting up surround sound", "Waking me up for spurs games just in time for me to both watch and get enough sleep", 
	       "Teaching us how to drive", "Bringing us up as Spurs supporters", "Teaching us to play soccer", "Geeking out over gadgets together", 
	       "Enjoying fruit tarts and pie far more than most people", "Teaching us how to drive", "Playing soccer with us in the yard", "Finding good movies and tv shows to watch!", 
	       "Teaching us the wonderful secrets of the eggy bagel at a young age", "Enjoying nuts and nutty chocolate together", 
	       "Teaching me about the random things around a car or under the hood I’d never know", "Supporting us through college", "Watching classic movies with us", "Wanting the best for us", 
	       "Investing in our futures", "Driving me places since I'm not a good enough driver, even when it's out of your way", "Fixing stuff around the house", 
	       "Making it easier for me to watch Doctor Who even though you were scared of the music as a kid", "Filming excellent home videos of us as kids", 
	       "Teaching us to use consumer reports and other tools to make smart purchases", "Shoveling snow early morning with or without us", "Helping us with legal things", 
	       "Teaching us how to wash a car", "Enjoying cheese together", "Using the snowblower", "Filming us playing soccer in high school", 
	       "Having a wonderful British accent, even though we can't hear it most of the time", "Getting all the streaming services and Chromecast so we could watch everything with ease", 
	       "Watching Star Wars with us", "Teaching us how to properly wear a suit", "Teaching us how to tie a tie", "Helping me step out of my comfort zone", 
	       "Knowing all sorts of amazing trivia that no one else remembers", "Setting up the ring system so we're both safe and know the power is back on",
	        "Having a wonderful, endearing sense of humor", "Showing us to appreciate what we have", "Keeping us up to date with current events", "Taking rides in Señor Dos", 
	        "The joy on your face when you won the Spurs Odyssey contest", "Encouraging us to be healthy even when we don't want to", "Your sense of humor", "Teaching us life skills", 
	        "Teaching me about boxing history", "Giving us a British perspective on life instead of just an American one", "Caring about our futures", 
	        "Never giving up on me, even when things were really bad", "Chatting on our early morning and nighttime commutes", "Keeping tabs on the orthotics for me", 
	        "Taking us on wonderful trips", "Always looking for things for us to improve our lives", "Teaching us to look at things with a critical eye", 
	        "Especially helping us read through boring contracts for work and study clash", "Refilling my humidifier when I forget", "The way you say raspberries",
	        "Working hard and putting up with a job you don’t always like to make our lives better", "Driving us places, especially in a rush", "Going over legalese with us",
                "Helping us write contracts", "Helping the family get out of parking tickets", "Finding the best deals", "Finding the best products on wirecutter/consumer reports",
                "Notifying us of deals like the orthotics and Coway air cleaner", "Thinking about ways to improve our health", "Giving us the hard truth when we need it"]		
	    const birthday = new Date('01/17/2021');
	    const diffTime = Math.abs(birthday - today);
	    var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	    if (diffDays > 366) {
	    	diffDays = diffDays - (Math.floor(diffDays / 366) * 366)
	    }
	    var image = document.createElement("IMG")
	    image.setAttribute('src', './soccer-images/img' + Math.ceil(diffDays / 4.9) + '.jpeg');
	    image.classList.add('image');
	    document.getElementById('soccer-image').appendChild(image);
	    document.getElementById('love-reason').innerHTML = reasons[diffDays - 1];
}
