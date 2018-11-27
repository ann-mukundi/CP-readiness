var btn = document.getElementById('btn');

btn.addEventListener("click", function validation() {

	var searchWord = document.getElementById('keyword').value;
	if (searchWord.length === 0 || searchWord == " "){
		alert("Please type what you want to search for.");
		return;
	}
	if (searchWord.length >= 1){
		alert(searchWord);
		return;
	}
});
