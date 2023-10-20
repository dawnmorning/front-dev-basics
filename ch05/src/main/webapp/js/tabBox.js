var tabBox = {
	liSelected: null,
	_init: function() {
		var elDiv = document.getElementsByClassName('tab-box')[0]
		var elUl = elDiv.childNodes[1]
		var elList = elUl.getElementsByTagName('li')
		
		Array.prototype.forEach.call(elList, function(li){
			console.log(li)
		})
	},
	init: function() {
		window.onload = this._init
	},
	onTabClicked: function(li) {
		console.log(this)
	}
}