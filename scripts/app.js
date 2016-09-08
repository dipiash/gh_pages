$(function(){
	window.app = new function(){
		this.body = $('body');
		$('#lightSwitch').on('click',$.proxy(function(){
			this.body.toggleClass('dark');
		},this));
	}();
});