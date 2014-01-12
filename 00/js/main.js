
function InitDefault(){
	
	// open links externally
	SetExternalLinks();
	
	// preload images
	$("body").queryLoader2({
        barColor: "#e9e9e9",
        backgroundColor: "#f5f5f5",
        percentage: false,
        barHeight: 1,
        completeAnimation: "fade"
    });
	
	// DEV ONLY: set reference grid
	//if( $('.canvas').length ) $(this).griddit({vertical: 18});
	
	}
	
	