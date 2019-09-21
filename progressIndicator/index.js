window.onscroll = function() {
	progressIndicator();
};

function outerHeight(el) {
	var height = el.offsetHeight;
	var style = getComputedStyle(el);

	height += parseInt(style.marginTop) + parseInt(style.marginBottom);
	return height;
}

function progressIndicator() {
	var pageHeight = window.innerHeight;

	var contentContainer = document.querySelector('.content');

	var adjustedHeight = outerHeight(contentContainer) - pageHeight;

	var progress = (window.pageYOffset / adjustedHeight) * 100;

	document.getElementById('myBar').style.width = progress + '%';
}
