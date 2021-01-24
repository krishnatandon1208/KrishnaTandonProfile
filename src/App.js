import React from 'react';
import './App.css';
import Name from './section/Name';
import About from './section/About';
import Skills from './section/Skills';
import Contact from './section/Contact';

function App() {
	return (
		<React.Fragment>
			<section className="site-cover">
				<Name />
			</section>
			<section className="site-about">
				<About />
			</section>
			<section className="site-skills">
				<Skills />
			</section>
			<section className="site-contact">
				<Contact />
			</section>
		</React.Fragment>
	);
}

export default App;

//#000051
//#ffeb3b
