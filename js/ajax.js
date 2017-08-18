/**
 * Created by lyj on 2017/2/23.
 */
function ajax(ajson) {
	var metod = ajson.metod || 'get';
	var url = ajson.url;
	var data = ajson.data || '';
	var aysn = ajson.aysn || 'true';
	var fn = ajson.fn;
	var xhr = new XMLHttpRequest;
	xhr.open(metod, url, aysn);
	xhr.setRequestHeader('content-type', 'application/json');
	xhr.send(data);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == 4) {
			if(xhr.status == 200) {
				fn && fn(xhr.responseText);
			} else {
				console("网络异常")
			}
		}
	}
}