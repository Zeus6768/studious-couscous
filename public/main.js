function selectBtn(e) {
	const selected = document.getElementById('selected_cell');
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

function check() {
	const checkbox = document.querySelector('.checkbox');
	if (checkbox.checked) {
		checkbox.checked = false;
	} else {
		checkbox.checked = true;
	}
}
