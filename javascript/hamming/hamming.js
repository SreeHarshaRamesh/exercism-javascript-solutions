//v//ar hamming={};
var compute = function(dna1,dna2){
	if (dna2.length!==dna1.length){
		throw new Error('DNA strands must be of equal length.');
	}
	else{
	var count=0;
	for(var i = 0;i<dna1.length;i++){
		count += (dna1.charAt(i)===dna2.charAt(i) ? 0 : 1);
	}
	return count;
}
};

module.exports={compute:compute};