
		// перемещение таблетки
		var pill = document.getElementById('pillFirstSlide');
		pill.onmousedown = function(e) {
		function getCoords(elem) { 
		var box = elem.getBoundingClientRect();
			return {
    		top: box.top + pageYOffset,
    		left: box.left + pageXOffset
  			};
		}
	  var coords = getCoords(pill);
	  var shiftX = e.pageX - coords.left;
	  var shiftY = e.pageY - coords.top;
	  moveAt(e);

	  function moveAt(e) {
		pill.style.left = e.pageX - shiftX + 'px';
		pill.style.top = e.pageY - shiftY + 'px';
	  }

	  document.onmousemove = function(e) {
		moveAt(e);
	  };

	  pill.onmouseup = function() {
		document.onmousemove = null;
		pill.onmouseup = null;
		pictureCoords();
	  };
		
	}

	pill.ondragstart = function() {
	  return false;
	
	};
	
	//скрытие картинки
	let picture = document.getElementById('patientSad');
	let pictureCoords = function () {
		
		let pictureLeft = picture.getBoundingClientRect().left;
		let pictureRight = picture.getBoundingClientRect().right;
		let pictureTop = picture.getBoundingClientRect().top;
		let pictureBottom = picture.getBoundingClientRect().bottom;
		let pillLeft = pill.getBoundingClientRect().left;
		let pillRight = pill.getBoundingClientRect().right;
		let pillTop = pill.getBoundingClientRect().top;
		let pillBottom = pill.getBoundingClientRect().bottom;
		if (pillLeft > pictureLeft && pillRight < pictureRight && pillBottom < pictureBottom && pillTop > pictureTop) {
			pillInvis();
			pictureChange();
		};
	};

// скрытие таблетки
		let pillInvis = function () {
		pill.style.display = 'none';
		}
		
// смена картинки
		let pictureChange = function() {
		let sad = document.getElementById('sadDiv');
		let happy = document.getElementById('happyDiv');
		sad.style.display = 'none';
		happy.style.display = 'block';
		}
// анимация исчезновения
	
	
	let transOpasity = function (elem, timeout, split) {
		let interval = timeout / split;
		let splitOp = 1.0 / split;
		elem.style.opacity = '1.0';
		let opacity = 1.0;
		let time = 0;
		let opacityChenge = function () {
			
			console.log(opacity);
		}
		let i=0;
		if (i<10) {
			setInterval(opacityChenge,2000);
			i = i + 1;
		}
		}
	
// перемещение маркера
	
	let range = document.getElementById('range');
	let marker = document.getElementById('marker');
	let markPosition = function () {
		let rangeValue = document.getElementById('range').value;
		let position = 11.5 + (rangeValue -1.0) * 3.7;
		marker.style.left = position + '%';
	}
	range.addEventListener('click', markPosition);
	range.addEventListener('mousemove', markPosition);
	range.addEventListener('touchstart', markPosition);
	range.addEventListener('touchmove', markPosition);
	range.addEventListener('touchend', markPosition);
	

// смена слайда
	let leftarrow = document.getElementById('leftarrow');
	let rightarrow = document.getElementById('rightarrow');
	let changeSlide = function () {
		alert('hello');
	};
	leftarrow.addEventListener('click', changeSlide);
	leftarrow.addEventListener('touchstart', changeSlide);
	rightarrow.addEventListener('click', changeSlide);
	rightarrow.addEventListener('touchstart', changeSlide);
	