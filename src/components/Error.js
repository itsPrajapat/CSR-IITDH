import React from 'react'
import '../assets/css/error.css'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you’re looking for doesn’t exist.</p>
			<Link to="/">Go To Homepage</Link>
		</div>
	</div>

  )
}
