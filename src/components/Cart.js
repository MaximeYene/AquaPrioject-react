import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'


function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`
	}, [total])

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Mon panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<Button><a target='blank' variant='contained' endIcon={<SendIcon/>} href='https://wa.me/00237699077977?text=Bienvenue%20dans%20notre%20plateforme%20de%20vente.%20Nous%20sommes%20a%20vous%20dans%20quelques%20instants'>Valider mon panier</a></Button>
					<Button variant='contained' startIcon={<DeleteIcon/>} onClick={() => updateCart([])}>Vider le panier</Button>
					
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart