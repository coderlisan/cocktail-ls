import React, { useState, useContext, useEffect } from 'react'

export const AppContext = React.createContext()
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [searchItem, setSearchItem] = useState('')
  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    const fetchDate = async () => {
      setLoading(true)
      try {
        const res = await fetch(`${url}${searchItem}`)
        const data = await res.json()
        const { drinks } = data

        if (drinks) {
          const newCocktails = drinks.map(item => {
            const { idDrink, strDrink, strDrinkThumb, strGlass } = item
            return { id: idDrink, nam: strDrink, img: strDrinkThumb, gls: strGlass }
          })
          setCocktails(newCocktails)
          setLoading(false)
        }
        else { setCocktails([]) }
      }
      catch (error) { console.log(error); setLoading(false) }
    }
    fetchDate()
  }, [searchItem])

  return (
    <AppContext.Provider value={{ loading, cocktails, searchItem, setSearchItem }}>
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => useContext(AppContext)