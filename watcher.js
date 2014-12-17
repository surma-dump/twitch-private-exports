(function() {
	window.setInterval(function() {
		var s = document.querySelector("select#privacy_settings");
		if(s) {
			s.selectedIndex = 1;
		}
	}, 1000);
})();
