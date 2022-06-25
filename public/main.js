// storage_1
const selected = document.getElementById('selected_cell');

function selectBtn(e) {
	if (e.value === '1') {
		selected.innerHTML = "S1";
	} else if (e.value === '2') {
		selected.innerHTML = "S2";
	} else if (e.value === '3') {
		selected.innerHTML = "M1";
	} else if (e.value === '4') {
		selected.innerHTML = "L1";
	}
}

function nextButton1() {
	if (selected.innerHTML) {
		document.location.href = 'storage_2';
	} else {
		alert('택배함을 선택해주세요.');
	}
}

// storage_2, find_1
const checkbox = document.querySelector('.checkbox');

function check() {
	if (checkbox.checked) {
		checkbox.checked = false;
	} else {
		checkbox.checked = true;
	}
}

function nextButton2(URI) {
	const phone = document.getElementById('phone').value;
	const password = document.getElementById('password').value;
	if (checkbox.checked && /^[0-9]{9,11}/.test(phone) && /^[0-9]{4}/.test(password)) {
		document.location.href = URI;
	} else {
		alert('올바르지 않은 형식입니다.');
	}
}