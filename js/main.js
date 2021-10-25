function copyIP() {
    var before = document.getElementById("ip").innerText;
	var ip = document.getElementById("ip");
	var range = document.createRange();
	range.selectNode(ip);
	window.getSelection().removeAllRanges();
	window.getSelection().addRange(range);
	document.execCommand("copy");
	window.getSelection().removeAllRanges();
	// Change Text
	ip.innerText = ip_copied;
	setTimeout(
	function() {
	  ip.innerText = before;
	},1000);
}

window.onload = function() {
  var template = document.getElementById('template').innerHTML;
  var compiled_template = Handlebars.compile(template);
  var rendered = compiled_template({
      server_name: server_name, 
      server_ip: server_ip
  });
  document.getElementById('target').innerHTML = rendered;
}

function staff(name, uuid, rank) {
  let staffTemplate = $("#staff-template").html()
    .replaceAll("{{ name }}", name)
    .replaceAll("{{ rank }}", rank)
	.replaceAll("{{ uuid }}", uuid)
  
  setTimeout(
    function() {
      $("#staff").append(staffTemplate)
    },500)
}
