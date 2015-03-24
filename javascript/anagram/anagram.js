var anagram = function(subject){
	this.subject=subject;
	this.matches=function(){
		var compareList=[];
		var matchList=[];
		if(typeof arguments[0]==='object'){
			compareList=arguments[0];
		}
		else{
			for(var key in arguments)
			compareList.push(arguments[key]);
		}
		for(var i = 0; i < compareList.length;i++){
			if (isAnagram(this.subject,compareList[i])){
				matchList.push(compareList[i]);
			}
		}
		return matchList;
	};
	return this;
};

function isAnagram(subject,compare){
	if(subject.toLowerCase()===compare.toLowerCase())
		return false;
	var subject1=subject.toLowerCase().split('').sort().join('');
	//console.log(subject1);
	var compare1=compare.toLowerCase().split('').sort().join('');
	//console.log(compare1);
	return subject1===compare1;
}

module.exports=anagram;
