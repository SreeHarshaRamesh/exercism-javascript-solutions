//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {
//
// YOUR CODE GOES HERE
//
//console.log("\xfcML\xe4\xdcTS");
var statingSomething = /\.$/;
var askQuestion = /\?$/;
var yell = /^([0-9A-Z!@#,\$%\^\&*\)\(+=._-\s]|[\xdc]|[\xfc]|[\xc4]|[\xe4])+!$/;
var yellAll = /^([A-Z])+([A-Z]|(\s)){1,}$/;
var sayingNothing = /^(\s)*$/;
var allCaps = /^[A-Z]+([A-Z]|(\s)){1,}\?$/;

if(askQuestion.test(input) && !allCaps.test(input)){
	return 'Sure.';
}

else if(yell.test(input) || yellAll.test(input) || allCaps.test(input)){
	return 'Whoa, chill out!';

}
else if(sayingNothing.test(input)){
	return 'Fine. Be that way!';

}
else{
	return 'Whatever.';//'\xdcML\xc4\xdcTS!''\xfcML\xe4\xdcTS';
}

};

module.exports = Bob;
