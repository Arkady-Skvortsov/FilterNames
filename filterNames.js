let filterInput = document.getElementById('filterInput');
        
        //Add event Listener
    	filterInput.addEventListener('keyup', filterNames);
        
        //function of Event Listener
    	function filterNames() {
    		//toLowerCase(), because man is not possible such values
    		let filterValue = document.getElementById('filterInput').value.toLowerCase();

    		let ul = document.getElementById('names');

    		let li = ul.querySelectorAll('li.collection-item');

    		li.forEach(function(y) {
    			let a = y.getElementsByTagName('a')[0];

                if(a.innerHTML.toLowerCase().indexOf(filterValue) > -1) {
                	y.style.display = "";
                } else {
                	y.style.display = "none";
                }
    		});
    	}