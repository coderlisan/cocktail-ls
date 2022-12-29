import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SingleCocktail from './Pages/SingleCocktail'
import Error from './Pages/Error'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='about' element={<About />} />
				<Route path='cocktail/:id' element={<SingleCocktail />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</BrowserRouter>
	)
}
export default App
