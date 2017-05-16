//Значение range
		let valueLog = function() {
		let rangeValue = document.getElementById('range').value;
		console.log(rangeValue);
	}


		let range = document.getElementById('range');
		range.addEventListener('click', valueLog);


		let f = function () {
			alert('yoohoo');
			pill.style.left = 30 + '%';

		}
		
		
		
		
		//перемещение таблетки
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
	let picture = document.getElementById('patientFirstSlide');
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
			transOpasity (pill, 2000, 20);
			pillInvis();
			
		};
	};

// скрытие таблетки
		let pillInvis = function () {
		pill.style.display = 'none';
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
	
			