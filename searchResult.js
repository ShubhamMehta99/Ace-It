

var url = 0

if(window.location.href == "https://www.textsheet.com/"){
  document.getElementById("1").value = url;
}


if(window.location.href.indexOf("https://www.google.com/search?source=hp&ei=") > -1){

  //alert(window.location.href);
//alert("Search Results");
  var buttonElems = document.getElementsByClassName('r');
  var length = document.getElementsByClassName('r').length;
//  buttonElems[2].click();
  //alert(length);

  //for (var i = 0; i < length; i++) {
   url = buttonElems[0].children[0].href;

  //alert(url);
  //}

  window.location.href = "https://www.textsheet.com";
  //var data = document.getElementById("1");

  //data.value = url;

}

//export function thing(msg){
  //  alert(msg);
//}
//textFunc = function(type){
//  this.type = type;
  //this.url2 = url;
  //document.getElementById("1").value = url;
//}
//function textFunc(firstName, lastName) {
	//this.firstName = firstName,
	//this.lastName = lastName,
  //this.url2 = url,
	//this.fullName = function() {
	//	return this.firstName + " " + this.lastName;
	//}
//}
