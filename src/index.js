
import { cube, square } from './math.js';
import { n as m } from "./print.js";
import './style.scss';

function component() {
	var element = document.createElement('pre');
	class Point {
		constructor(x = 0, y = 0, div) {
			this.x = x;
			this.y = y;
			this.div = div;
			

			this.div.onclick = ()=>{
				this.cli();
				console.log(this);
			}
				
			
		}

		cli() {
			alert(55)
		}

	}
	var point = new Point(0, 0, element);

	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + square(5)
	].join('\n\n');
	return element;
}
document.body.appendChild(component());
fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(json => {
		console.log(json)
		let arr = [];
		for(let i = 0; i < json.length; i++) {
			let {
				id,
				name,
				email
			} = json[i];
			arr.push({
				id,
				name,
				email
			});
		}
		console.log(arr);
	})
	.catch(error => console.error('Something went wrong when fetching this data: ', error))