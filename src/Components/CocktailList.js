import React from 'react'
import Loading from './Loading'
import { useGlobalContext } from '../Context'
import Cocktail from './Cocktail'

export default function CocktailList() {
  const { cocktails, loading } = useGlobalContext()

  if (loading) (<Loading />)
  else if (cocktails.legnth < 1) (<h2 className='section-title'>no cocktail</h2>)

  else {
    return (
      <section className='section'>
        <h2 className='section-title'>Cocktails</h2>
        <div className='cocktails-center'>
          {cocktails.map((item) => (<Cocktail key={item.id} {...item} />))}
        </div>
      </section>
    )
  }
}
