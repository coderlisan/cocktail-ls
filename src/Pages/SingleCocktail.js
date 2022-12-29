import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loading from '../Components/Loading'

export default function SingleCocktail() {
	const { id } = useParams()
	const [loading, setLoading] = useState(false)
	const [cocktail, setCocktail] = useState(null)

	useEffect(() => {
		setLoading(true)
		async function getcocktail() {
			try {
				const rsp = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
				const data = await rsp.json()

				if (data.drinks) {
					const { strDrink: name, strDrinkThumb: image, strAlcoholic: info,
						strCategory: category, strGlass: glass, strInstructions: instructions,
						strIngredient1, strIngredient2, strIngredient3, strIngredient4 } = data.drinks[0]

					const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4]
					const newCocktail = { name, image, info, category, glass, instructions, ingredients }
					setCocktail(newCocktail)
				}
				else { setCocktail(null) }
			}
			catch (error) { console.log(error) }
			setLoading(false)
		}
		getcocktail()
	}, [id])

	if (loading) { return <Loading /> }

	if (!cocktail) { return <h2 className='section-tilte'>no cocktail to display</h2> }
	else {
		const { name, image, info, category, glass, instructions, ingredients } = cocktail
		return (
			<section className='section cocktail-section'>
				<Link to='/' className='btn btn-primary'>Back home</Link>
				<h2 className='section-title'>{name}</h2>
				<div className='drink'>
					<img src={image} alt={name}></img>
					<div className='drink-info'>
						<p><span className='drink-data'>name : </span> {name}</p>
						<p><span className='drink-data'>category : </span> {category}</p>
						<p><span className='drink-data'>info : </span> {info}</p>
						<p><span className='drink-data'>glass : </span> {glass}</p>
						<p><span className='drink-data'>instructions : </span> {instructions}</p>
						<p>
							<span className='drink-data'>ingredients : </span>
							{ingredients.map((item, i) => (item ? <span key={i}> {item} </span> : null))}
						</p>
					</div>
				</div>
			</section>
		)
	}
}