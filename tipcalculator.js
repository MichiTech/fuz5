
		function addit() {
			var bill = document.getElementById("bill");
			var tip_pct = document.getElementById("tip_percent");
			var tip = bill.value * ( tip_pct.value / 100 );
			// bill.value is actually a string and has to be made into an integer
			var bill_number = bill.value * 1;
			// now we need a total
			var total = bill_number + tip;
			 
			document.getElementById("result").innerHTML="Your total spending is $ " + total + ". Of that, $ " + bill.value + " is for food and $ " + tip + " is for the tip.";
		};
	