import React from 'react'
import { Autocomplete, Button, Container, Stack, TextField } from '@mui/material'


import { DataGrid } from '@mui/x-data-grid';
import InventoryNavbar from '../Navbar/InventoryNavbar';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];
const columns = [
  { field: 'id', headerName: 'SNO', width: 70 },

  { field: 'productsname', headerName: 'Products name/unit', width: 150 },
  {field: 'Quantity',headerName: 'Blance Quantity',type: 'number',width: 130,},
  { field: 'productstype', headerName: 'Price', width: 130 },
  {field: 'total',headerName: 'total',type: 'number',width: 90,},

];

const rows = [
  { id: 1, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 2, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 3, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 4, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 5, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },
  { id: 6, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 7, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 8, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 9, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 10, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },
  { id: 11, productstype: 'Durg', productsname: 'Medicine1', unit: 1.4 },
  { id: 12, productstype: 'injection', productsname: 'Medicine2', unit: 1.5 },
  { id: 13, productstype: 'injection', productsname: 'Medicine3', unit: 3.5 },
  { id: 14, productstype: 'injection', productsname: 'Medicine4', unit: 2.5 },
  { id: 15, productstype: 'Durg', productsname: 'Medicine5', unit: 5.5 },

];
const Stockinventoty = () => {
  return (
    <div className=''>
        <InventoryNavbar/>
          <h1 className='text-center my-8 font-bold text-2xl'>Stock inventroy</h1>
        <Container>
        <Stack direction="row" spacing={2} justifyContent="center">
    {/* <TextField type="number" sx={{width:200}} id="outlined-basic" label="Doc Number" variant="outlined"  /> */}
    <TextField type="date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
    <TextField type="date" sx={{width:200}} id="outlined-basic" label="" variant="outlined"  />
    <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={top100Films}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Product Type" />}
          
        />
    </Stack>
 
    <div className='mt-3 ali'>

  <center>  <Button variant="contained" alignitems="center">Submit</Button></center> 
    </div>

        </Container>

       
 <div style={{ height: 800, width: '100%', marginTop:'10px', padding:'5px'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        // checkboxSelection
      />
    </div>
    <div className='flex justify-center'> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-2 ">Print </button></center> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-red-500 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative mx-2 ">Save </button></center> 
      <center> <button type="submit" className=" text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-10 mb-1 mt-1 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 relative ">Grand Total= </button></center> 
      </div>
    </div>
  )
}

export default Stockinventoty