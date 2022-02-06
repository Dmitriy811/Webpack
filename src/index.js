import './sass/main.sass'

const obj1 = {
	language: 'javascript',
	framework: 'react'
}

const obj2 = {
	name: 'Dima',
	...obj1
}

console.log(obj2)