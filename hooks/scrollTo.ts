export const scrollTo = (clickedLink: string, elementRef: number) => {
	switch (clickedLink) {
		case 'Home':
			window.scrollTo({ top: 0, behavior: 'smooth' })
		// closeMobileMenu()
		case 'Work':
			window.scrollTo({ top: elementRef, behavior: 'smooth' })
		case 'About':
			window.scrollTo({ top: elementRef, behavior: 'smooth' })
		case 'Contact':
			window.scrollTo({ top: elementRef, behavior: 'smooth' })
	}
}

// OLD CODE
/* // DOM references
const docBody = document.querySelector('body')
const mobileMenu = document.getElementById('mobile-menu-icon')
const mobileMenuLinks = document.getElementById('mobile-menu-links')
mobileMenuLinks.style.display = 'none'

let menuActive = false

// Close mobile menu helper func
const closeMobileMenu = () => {
	mobileMenuLinks.style.display = 'none'
}

// Automatically close mobile menu on click outside
docBody.addEventListener('click', e => {
	const clickedInside = mobileMenuLinks.contains(e.target)
	const clickedMobileIcon = mobileMenu.contains(e.target)

	if (mobileMenuLinks.style.display == 'none') {
		console.log('none')
		return null
	}
	if (
		mobileMenuLinks.style.display == 'flex' &&
		!clickedInside &&
		!clickedMobileIcon
	) {
		console.log('click outside')
		closeMobileMenu()
	}
})

// Open and close mobile menu
mobileMenu.addEventListener('click', () => {
	mobileMenuLinks.style.display =
		mobileMenuLinks.style.display == 'none' ? 'flex' : 'none'
})

// Click link to scroll to each section of page

//Check if user has scrolled at all
userHasScrolled = false
window.onscroll = function () {
	if (window.scrollY === 0) {
		userHasScrolled = false
	} else {
		userHasScrolled = true
	}
	console.log(userHasScrolled)
}
console.log(userHasScrolled)

// Scroll to Home (top)
function scrollHome() {
	window.scrollTo(0, 0)
	closeMobileMenu()
}

// Scroll to My Work
function scrollWork() {
	const workBody = document.getElementById('body-work')
	let headerOffset = 60
	let workBodyPosition = workBody.getBoundingClientRect().top
	let offsetPosition = workBodyPosition + window.pageYOffset - headerOffset

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	})
	closeMobileMenu()
}

//Scroll to About Me
function scrollAboutMe() {
	const aboutMeBody = document.getElementById('body-about-me')
	let headerOffset = 60
	let aboutMeBodyPosition = aboutMeBody.getBoundingClientRect().top
	let offsetPosition = aboutMeBodyPosition + window.pageYOffset - headerOffset

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	})
	closeMobileMenu()
}

// Scroll to Contact section
function scrollContact() {
	const contactBody = document.getElementById('body-contact')
	let headerOffset = 45
	let contactBodyPosition = contactBody.getBoundingClientRect().top
	let offsetPosition = contactBodyPosition + window.pageYOffset - headerOffset

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	})
	closeMobileMenu()
}
 */
