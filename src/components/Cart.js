import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import queryString from 'query-string'


function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}Fcfa d'achats`
	}, [total])

	const envoyerWhatsapp=()=>{
		const listeAchats=cart.join(', ');
		const queryParams=queryString.stringify({achats:listeAchats});
		const url=`https://wa.me/+237699077977?text=${encodeURIComponent(queryParams)}`;
		window.open(url, '_blank');
	}

	return isOpen ? (
		<div className='lmj-cart'>
			<Button
				variant='outlined'
				sx={{
					width: 'max-content',
					float: 'right'
				}}
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</Button>
			{cart.length > 0 ? (
				<div className='cart-list'>
					<h2>Mon panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}Fcfa x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}Fcfa</h3>
					<div className='button-part'>
					<Button variant='outlined' sx={{borderColor:'#fff'}} endIcon={<SendIcon />} onClick={envoyerWhatsapp} >Valider panier</Button>
					<Button variant='outlined' sx={{color:'#fff', borderColor:'#fff'}} endIcon={<DeleteIcon />} onClick={() => updateCart([])}>Vider panier</Button>
					</div>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<Button
				variant='outlined'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</Button>
		</div>
	)
}

export default Cart