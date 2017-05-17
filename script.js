
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
	let picFlag = false;
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
			picFlag = true;
		} else {
			picFlag = false;
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
	

// смена слайда - не закончено, отрабатывается переход только на 2 слайд
		let dispFlag;
		let goToSecond = function () {
		firstSlide.style.display = 'none';
		secondSlide.style.display = 'block';
		console.log('secondSlide');
		};
		
		let goToFirst = function () {
		firstSlide.style.display = 'block';
		secondSlide.style.display = 'none';
		console.log('firstSlide');
		};

	let leftarrow = document.getElementById('leftarrow');
	let rightarrow = document.getElementById('rightarrow');
	let firstSlide = document.getElementById('firstSlide');
	let secondSlide = document.getElementById('secondSlide');
	let range2 = document.getElementById('range2');

	let changeSlide = function () {
		let inputs = document.getElementsByName('inputRadio');		
		let checkedInput = document.querySelector('input[name="inputRadio"]:checked');
		let inputId = checkedInput.id;
		console.log(inputId);
		console.log(range);
		console.log(picFlag);
		
		//передача значения ползунка в новый слайд
		range2.setAttribute('value', range.value);
		
		//маркер над ползунком
		let marker2 = document.getElementById('marker2');
		let position2 = 11.5 + (range.value -1.0) * 3.7;
		marker2.style.left = position2 + '%';
		
		//передача чекбоксов
		let inputDay = document.getElementById('radio1-2');
		let inputWeek = document.getElementById('radio2-2');
		let inputMonth = document.getElementById('radio3-2');
		switch(inputId) {
			case 'radio1':
				inputDay.setAttribute('checked', true);
				break;
			case 'radio2':
				inputWeek.setAttribute('checked', true);
				break;
			case 'radio3':
				inputMonth.setAttribute('checked', true);
				break;
		};
				
		
		goToSecond();
		
		
		
	};
	leftarrow.addEventListener('click', changeSlide);
	leftarrow.addEventListener('touchstart', changeSlide);
	rightarrow.addEventListener('click', changeSlide);
	rightarrow.addEventListener('touchstart', changeSlide);
	