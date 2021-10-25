function staff(name, uuid, rank) {
    let staffTemplate = $("#staff-template").html()
        .replaceAll("{{ name }}", name)
        .replaceAll("{{ rank }}", rank)
		.replaceAll("{{ uuid }}", uuid)
    $("#staff").append(staffTemplate)
    
    console.log("\n\n\nADDED STAFF ITEMS\n\n\n")
}