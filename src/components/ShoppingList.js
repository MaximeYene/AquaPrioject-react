import { useState } from 'react'
import { productList } from '../datas/ProductList'
import PlantItem from './PlantItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'
import { Button } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

function ShoppingList({ cart, updateCart }) {
	const [activeCategory, setActiveCategory] = useState('')
	const categories = productList.reduce(
		(acc, elem) =>
			acc.includes(elem.category) ? acc : acc.concat(elem.category),
		[]
	)

	function addToCart(name, price) {
		const currentProductAdded = cart.find((product) => product.name === name)
		if (currentProductAdded) {
			const cartFilteredCurrentProduct = cart.filter(
				(product) => product.name !== name
			)
			updateCart([
				...cartFilteredCurrentProduct,
				{ name, price, amount: currentProductAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<Categories
				categories={categories}
				setActiveCategory={setActiveCategory}
				activeCategory={activeCategory}
			/>

			<ul className='lmj-plant-list'>
				{productList.map(({ id, cover, name, water, light, price, category }) =>
					!activeCategory || activeCategory === category ? (
						<div key={id} className='lmj-plant-list-part'>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
								price={price}
							/>
							<Button variant='outlined' endIcon={<AddShoppingCart/>} onClick={() => addToCart(name, price) }>Ajouter</Button>
						</div>
					) : null
				)}
			</ul>
		</div>
	)
}

export default ShoppingList