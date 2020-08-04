var Visible = function (target, index) {

	var targetBottom = window.pageYOffset + target.getBoundingClientRect().bottom;
	var windowBottom = window.pageYOffset + document.documentElement.clientHeight;

  if (windowBottom - targetBottom > 30) { 
		target.classList.add("text" + (index + 1));
  } 
};

// If element is invisible from start
window.addEventListener('scroll', function() {
  Array.from(document.querySelectorAll('#tribute-info > p')).map(Visible);
});

// If element is visible from start
Array.from(document.querySelectorAll('#tribute-info > p')).map(Visible);