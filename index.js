$ (document).ready ( () => {
	$(".up1").hide();
	$(".up2").hide();
	$(".up3").hide();
	$(".up4").hide();
	$(".para1").hide();
	$(".para2").hide();
	$(".para3").hide();
	$(".para4").hide();

	$(".dw1").click( () => {
		$(".up1").show();
		$(".dw1").hide();
		$(".para1").show();
	})
	$(".up1").click( () => {
		$(".up1").hide();
		$(".dw1").show();
		$(".para1").hide();
	})

	$(".dw2").click( () => {
		$(".up2").show();
		$(".dw2").hide();
		$(".para2").show();
	})
	$(".up2").click( () => {
		$(".up2").hide();
		$(".dw2").show();
		$(".para2").hide();
	})

	$(".dw3").click( () => {
		$(".up3").show();
		$(".dw3").hide();
		$(".para3").show();
	})
	$(".up3").click( () => {
		$(".up3").hide();
		$(".dw3").show();
		$(".para3").hide();
	})

	$(".dw4").click( () => {
		$(".up4").show();
		$(".dw4").hide();
		$(".para4").show();
	})
	$(".up4").click( () => {
		$(".up4").hide();
		$(".dw4").show();
		$(".para4").hide();
	})

})