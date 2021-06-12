let range = document.getElementById('range');
let right = document.querySelector('.right');

range.oninput = (() => {
	let val = range.value;
	right.innerHTML = val;
})

let colorInputs = document.querySelector('.color-inputs');
let inputHeading = document.getElementById('input-heading');
let color1 = document.getElementById('color1');
let color2 = document.getElementById('color2');
let color3 = document.getElementById('color3');
let color4 = document.getElementById('color4');
let color5 = document.getElementById('color5');
let color6 = document.getElementById('color6');

color1.style = 'display: none;'
color2.style = 'display: none;'
color3.style = 'display: none;';
color4.style = 'display: none;';
color5.style = 'display: none;';
color6.style = 'display: none;';

let degreeValue = document.querySelector('.degree-value');
degreeValue.style = 'display: none;';

let outputCode = document.getElementById('outputCode');

function fillCode(code) {
	outputCode.style = 'display: block;';
	let codeTag = document.getElementById('code');
	codeTag.innerHTML = code;
}

let output = document.getElementById('output');

let setBtn = document.getElementById('set');
/*
setBtn.addEventListener('click', () => {
	output.style = `background-image: linear-gradient(${range.value}deg, ${color1.value}, ${color2.value});`
})*/

setBtn.style = 'display: none;';


let gradient;
let select = document.getElementById('total-colors')
select.addEventListener('change', () => {
	if (select.value == 'choose') {
		color1.style = 'display: none;'
		color2.style = 'display: none;'
		color3.style = 'display: none;';
		color4.style = 'display: none;';
		color5.style = 'display: none;';
		color6.style = 'display: none;';
		inputHeading.style = 'visibility: hidden;';
		degreeValue.style = 'display: none;';
		setBtn.style = 'display: none;';

	}

	else if (select.value == '2') {
		color1.style = 'display: block;'
		color2.style = 'display: block;'
		color3.style = 'display: none;';
		color4.style = 'display: none;';
		color5.style = 'display: none;';
		color6.style = 'display: none;';
		inputHeading.style = 'visibility: visible;';
		degreeValue.style = 'display: block;';
		setBtn.style = 'display: block;';

		setBtn.addEventListener('click', () => {
			gradient = `background-image: linear-gradient(${range.value}deg, ${color1.value}, ${color2.value});`
			output.style = gradient;

			fillCode(gradient);
		})
	}
	else if (select.value == '3') {
		color1.style = 'display: block;'
		color2.style = 'display: block;'
		color3.style = 'display: block;';
		color4.style = 'display: none;';
		color5.style = 'display: none;';
		color6.style = 'display: none;';
		inputHeading.style = 'visibility: visible;';

		setBtn.addEventListener('click', () => {
			gradient = `background-image: linear-gradient(${range.value}deg, ${color1.value}, ${color2.value}, ${color3.value});`
			output.style = gradient;

			fillCode(gradient);
		})
	}
	else if (select.value == '4') {
		color1.style = 'display: block;'
		color2.style = 'display: block;'
		color3.style = 'display: block;';
		color4.style = 'display: block;';
		color5.style = 'display: none;';
		color6.style = 'display: none;';
		inputHeading.style = 'visibility: visible;';

		setBtn.addEventListener('click', () => {
			gradient = `background-image: linear-gradient(${range.value}deg, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value});`
			output.style = gradient;

			fillCode(gradient);
		})
	}
	else if (select.value == '5') {
		color1.style = 'display: block;'
		color2.style = 'display: block;'
		color3.style = 'display: block;';
		color4.style = 'display: block;';
		color5.style = 'display: block;';
		color6.style = 'display: none;';
		inputHeading.style = 'visibility: visible;';

		setBtn.addEventListener('click', () => {
			gradient = `background-image: linear-gradient(${range.value}deg, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value}, ${color5.value});`
			output.style = gradient;

			fillCode(gradient);
		})
	}
	else {
		color1.style = 'display: block;'
		color2.style = 'display: block;'
		color3.style = 'display: block;';
		color4.style = 'display: block;';
		color5.style = 'display: block;';
		color6.style = 'display: block;';
		inputHeading.style = 'visibility: visible;';

		setBtn.addEventListener('click', () => {
			gradient = `background-image: linear-gradient(${range.value}deg, ${color1.value}, ${color2.value}, ${color3.value}, ${color4.value}, ${color5.value}, ${color6.value});`
			output.style = gradient;

			fillCode(gradient);
		})
	}
})

// Simple example, see optional options for more configuration.
const pickr = Pickr.create({
	el: '.color-picker',
	theme: 'nano', // or 'monolith', or 'nano'

	components: {
		// Main components
		preview: true,
		opacity: true,
		hue: true,

		// Input / output Options
		interaction: {
			hex: true,
			rgba: true,
			input: true
		}
	}
});