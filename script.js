const root = document.documentElement;
const linehour = document.getElementById('line_hour');
const lineminute = document.getElementById('line_minute');
const linesecond = document.getElementById('line_second');

let gradesecond = 0;
let grademinute = 0;
let gradehour = 0;

setInterval(() => {
	gradesecond = gradesecond + 6;
	moverlinea(linesecond, gradesecond);

	if (gradesecond == 360) {
		grademinute = grademinute + 6;
		gradesecond = 0;
		moverlinea(lineminute, grademinute);
		if (grademinute == 360) {
			gradehour = gradehour + 6;
			grademinute = 0;
			moverlinea(linehour, gradehour);
		}
	}
}, 1);

const moverlinea = (linea, grades) => {
	let rotate = `rotate(${grades}deg)`;
	linea.style.setProperty('transform', rotate);
};

const setHour = () => {
	const horaactual = new Date();
	const hora = horaactual.getHours();
	const minuto = horaactual.getMinutes();
	const segundo = horaactual.getSeconds();
	console.log('hora:' + hora + ',minuto:' + minuto + ',segundos:' + segundo);
	gradehour = hora * 6 * 5;
	grademinute = minuto * 6;
	gradesecond = segundo * 6;
	moverlinea(linehour, gradehour);
	moverlinea(lineminute, grademinute);
	moverlinea(linesecond, gradesecond);
};
setHour();
