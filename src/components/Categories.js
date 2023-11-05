import '../styles/Categories.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import * as React from 'react';
import '../styles/Categories.css'

function Categories() {
	const [categories,setCategories] = React.useState('');

	const handleChange = (event) => {
	  setCategories(event.target.value);
	};
  
	return (
	  <Box>
		<FormControl sx={{width:150}} className='lmj-categories' >
		  <InputLabel id="demo-simple-select-label">categories</InputLabel>
		  <Select
			labelId="demo-simple-select-label"
			value={categories}
			id="demo-simple-select"
			label="categories"
			onChange={handleChange}
		  >
			<MenuItem>Aliments pour poissons et vitamines</MenuItem>
			<MenuItem>Poissons frais en vente et plantes</MenuItem>
		  </Select>
		</FormControl>
	  </Box>
	)
}

export default Categories