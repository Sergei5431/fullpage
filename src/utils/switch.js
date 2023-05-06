const button = document.querySelector('.wrapper-switch__button')
const number = document.querySelector('.wrapper-content__number')
const topic = document.querySelector('.wrapper-content__topic')
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non felis non at tristique. Est ante magna diam magna pharetra. Turpis sagittis consectetur est, integer sed. Sagittis malesuada tellus diam sapien platea.<br/>'
const allText = document.querySelector('.wrapper-content__text')
const placeText = document.querySelector('.wrapper-content__texts')
let count = 1

function switchTopic() {
	if (count > 1) {
		topic.textContent = 'Lorem ipsum!'
	}
}

function switchScroll() {
	placeText.classList.remove('wrapper-content__texts--hidden')
	if (count >= 3) {
		placeText.classList.add('wrapper-content__texts--hidden')
	}
}

function toggle() {

	if (count === 6) {
		const noActive = document.querySelector(`[data-value='${count}']`)
		noActive.classList.remove('wrapper-switch__line--active')
		count = 1
		noActive.classList.remove('wrapper-switch__line--active')
		const active = document.querySelector(`[data-value='${count}']`)
		active.classList.add('wrapper-switch__line--active')
		number.textContent = '0' + count
		let texts = text
		allText.innerHTML = `
		${texts} 
		`

	} else {
		const noActive = document.querySelector(`[data-value='${count}']`)
		noActive.classList.remove('wrapper-switch__line--active')
		count++
		const active = document.querySelector(`[data-value='${count}']`)
		active.classList.add('wrapper-switch__line--active')
		number.textContent = '0' + count
		let texts = text
		for (let i = 1; i < count; i++) {
			texts = texts + text
		}
		allText.innerHTML = `
		${texts} 
		`
		console.log(allText)

	}
	switchTopic()
	switchScroll()
}

button.addEventListener('click', toggle)