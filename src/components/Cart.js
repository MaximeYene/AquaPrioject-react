import { useState, useEffect } from 'react'
import '../styles/Cart.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import SendIcon from '@mui/icons-material/Send'
import queryString from 'query-string'



function Cart({ cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	useEffect(() => {
		document.title = `LMJ: ${total}Fcfa d'achats`
	}, [total])

	const envoyerWhatsapp=()=>{
		const intro='Bonjour. Jaimerais valider ma commande pour achat de:\n '
		const listeAchats=[];
		for(let i=0; i<cart.length; i++){
			const {name, price, amount}=cart[i];
			listeAchats.push(`${name} ${price}Fcfa x ${amount}`);
		}
		const queryParams=queryString.stringify({ValidationDeCommande:`\n${intro} ${listeAchats.join('\n')}`});
		const url=`https://wa.me/+237699077977?text=${queryParams}`;
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
					<div>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}Fcfa x {amount}
							</div>
						))}
					</div>
					<h3>Total :{total}Fcfa</h3>
					<div className='button-part'>
					<Button variant='contained' sx={{color: '#fff'}} endIcon={<SendIcon />} onClick={envoyerWhatsapp} >Valider panier</Button>
					<Button variant='contained' sx={{color:'#fff'}} endIcon={<DeleteIcon />} onClick={() => updateCart([])}>Vider panier</Button>
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