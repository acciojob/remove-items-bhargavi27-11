//your JS code here. If required.
const select = document.getElementById("colorselect");
const button = document.querySelector('input[type="button"]');

button.addEventListener("click",function(){
	const selectedIndex = select.selectedIndex;

	if(selectedIndex !== -1){
		select.remove(selectedIndex);
	}
});