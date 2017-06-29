console.log('The bot is starting')

var Twit = require('twit');

var config = require('./config');
var quotes = ['Going to set a bot that tweets quotes from Wilfred every 1 hour. ', 
			  'Trust thyself only, and another shall not betray thee. - Thomas Fuller', 
			  'Happiness can exist only in acceptance. - George Orwell', 
			  'Fear has its uses but cowardice has none. - Mahatma Ghandi',
			  'Happiness can exist only in acceptance. - George Orwell',
			  'Seek respect mainly from thyself, for it comes first from within. - Steven H. Coogler',
			  'Conscience is the dog that cant bite, but never stops barking. - Proverb',
			  'In general, pride is at the bottom of all great mistakes. - Steven H. Coogler',
			  'Anger as soon as fed is dead -- tis starving makes it fat." - Emily Dickinson',
			  'Make no judgements where you have no compassion. - Anne McCaffrey',
			  'Isolation is a self-defeating dream. - Carlos Salinas de Gortari',
			  'Doubt must be no more than vigilance, otherwise it can become dangerous. - George C. ',
			  'Love is a willingness to sacrifice. - Michael Novak']

console.log(config);
var T = new Twit(config);
var counter = 0;	

tweetIt(counter);

setInterval(tweetIt, 1000*60*60);
counter++;

function tweetIt(){

	var tweet={

		status: quotes[counter] + '#terminaltweet #Wilfred'

	}

	
	T.post('statuses/update', tweet, tweeted);
	function tweeted(err, data, response){
		if(err){
			console.log("Something went wrong");
		}
		else{
			console.log("It worked!");
		}
	}
}

