import '../styles/Categories.css'
import { Button } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Categories({ setActiveCategory, categories, activeCategory }) {
	return (
		<div className='lmj-categories'>
			<FormControl sx={{ minWidth: 150 }}>
				<InputLabel>Categories</InputLabel>
				<Select
					value={activeCategory}
					onChange={(e) => setActiveCategory(e.target.value)}
					className='lmj-categories-select'
				>
					<MenuItem>Nos Produits</MenuItem>
					<MenuItem>Poissons</MenuItem>
				</Select>
			</FormControl>
			<Button variant='contained' onClick={() => setActiveCategory('')}>Réinitialiser</Button>
		</div>
	)
}

export default Categories