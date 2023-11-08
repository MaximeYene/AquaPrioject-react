import { useState } from 'react'
import Banner from './Banner'
import logo from '../assets/logo-removebg-preview-removebg-preview (1).png'
import Cart from './Cart'
import Footer from './Footer'
import ShoppingList from './ShoppingList'
import '../styles/Layout.css'
import { Button } from '@mui/material'
import '../App.css'
import ScrollToTopButton from './ScrollButton'

function App() {


	const [cart, updateCart] = useState([])
	const [isCartOpen,setIsCartOpen]=useState(false)

	function toggleCart(){
		setIsCartOpen(!isCartOpen)
	}

	return (
		<div className='container' >
			<Banner>
				<img src={logo} alt='La maison jungle' className='lmj-logo' />
				<h1 className='lmj-title'><span className='lmj-title-water'>Water</span><span>Drop</span></h1>
			</Banner>
			<Button onClick={toggleCart}>{isCartOpen?'Fermer le panier':'Ouvrir le panier'}</Button>
			<div className='lmj-layout-inner'>
				{isCartOpen && <Cart cart={cart} updateCart={updateCart} />}
				<ShoppingList cart={cart} updateCart={updateCart} />
			</div>
			<ScrollToTopButton/>
			<Footer />
		</div>
	)
}

export default App