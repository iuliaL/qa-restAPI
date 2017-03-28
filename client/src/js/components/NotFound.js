import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return(
		<article>
			<h1>Page not found.</h1>
			<Link to="/list" className="btn">Go Home</Link>
		</article>
	);
}

export default NotFound;


