var data = '["boat", "spring", "overflow", "breathing", "device", "breathing device", "air", "passage", "air passage", "dive", "fireboat", "geyser", "scuba", "diver", "scuba diver", "snorkel"]'
var jsonData = JSON.parse(data);
var key = 'boat';
function getKey () {
	var i = 0;
	for (i = 0; i < jsonData.length; i++) {
		if (key == data[i])
		{
			document.write("KEY OBJECT FOUND: " + data[i]);
		}
	}
}
window.onload=getKey