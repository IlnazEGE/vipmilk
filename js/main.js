
$(document).ready(function () {
	//FORMS
	function forms() {
		//CHECK
		$.each($('.check'), function (index, val) {
			if ($(this).find('input').prop('checked') == true) {
				$(this).addClass('active');
			}
		});
		$('body').off('click', '.check', function (event) { });
		$('body').on('click', '.check', function (event) {
			if (!$(this).hasClass('disable')) {
				var target = $(event.target);
				if (!target.is("a")) {
					$(this).toggleClass('active');
					if ($(this).hasClass('active')) {
						$(this).find('input').prop('checked', true);
					} else {
						$(this).find('input').prop('checked', false);
					}
				}
			}
		});
	}
	forms()

	let iconMenu = document.querySelector(".menu-header__icon");
	let body = document.querySelector("body");
	let menuBody = document.querySelector(".menu-header__body");
	if (iconMenu) {
		iconMenu.addEventListener("click", function () {
			iconMenu.classList.toggle("active");
			body.classList.toggle("lock");
			menuBody.classList.toggle("active");
		});
	}


	let userPerson = document.querySelector(".user-person-header__name");
	let userMenu = document.querySelector(".user-person-header__menu");

	userPerson.addEventListener('click', () => {
		userMenu.classList.toggle('active');
		userPerson.classList.toggle('active');
	})



	const header = document.querySelector('.header');

	function headerBorder() {
		if (window.scrollY > 0) {
			header.style.boxShadow = "0px 10px 30px rgba(0, 0, 0, 0.05), 0px 1px 2px rgba(0, 0, 0, 0.14)";
		} else {
			header.style.boxShadow = "none";
		}
	}

	headerBorder();
	window.addEventListener('scroll', () => {
		headerBorder();
	})

});