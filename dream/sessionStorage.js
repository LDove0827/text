;(function() {
	if(sessionStorage.nData){
		return;
	}
	sessionStorage.nData = JSON.stringify([
		{
			dream:"2019",
			flag:false
		}
	])
})();
