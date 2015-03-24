var words = function(input){
	input = input.replace(/\b[\s]+\b/g, " ");
	var wordsSplit = input.split(' ');
	var wordCount = {};
	wordsSplit.forEach(function(word){
		var count  = wordCount[word] | 0;
		wordCount[word] = ++count;
	});

	return wordCount;
};

module.exports = words;