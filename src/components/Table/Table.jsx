import { Center, Heading, Spinner, Tbody, Thead, Tr, Table, Th, Td, Image, Button, Icon} from '@chakra-ui/react';
import {ArrowUpDownIcon} from '@chakra-ui/icons'
import axios from 'axios';
import React, { useState, useEffect, useMemo} from 'react';
import { useTable, useSortBy } from 'react-table';

const url = 'https://fakestoreapi.com/products';

const tableColumn = [
    {
        Header:"Not Yet Changed",
        columns:[
            {
                Header:"ID",
                accessor:"id"
            },
            {
                Header:"Title",
                accessor:"title"
            },
            {
                Header:"Category",
                accessor:"category"
            },
        ]
    },
    {
        Header:"Changed",
        columns:[
            {
                Header:"Product Image",
                accessor:"image",
                Cell:({row})=> <Image src={row.values.image} h={100}/>
            },
            {
                Header:"Price",
                accessor:"price",
                Cell:({row})=> `$ ${row.values.price}`
        
            },
            {
                Header:"Action",
                accessor:"action",
                Cell:({row})=><Button onClick={()=>alert(`$ ${row.values.price}`)} size='sm'>Show Price</Button>
            },
        ]
    },
]
const App = () => {
	const [products, setProducts] = useState([]);
    const columns = useMemo(() =>tableColumn, []);
    const data = useMemo(() => products, [products])
    const {
        getTableProps,
        getTableBodyProps,
        rows,
        prepareRow,
        headerGroups,
     } = useTable({
        columns,
        data
    }, useSortBy);

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const { data } = await axios.get(url);
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProduct();
	}, []);

	console.log(products);

	if (products.length === 0) {
		return;
		<Center>
			<Spinner />
		</Center>;
	}

	return (
        <>
        <Heading>
            <Table {...getTableProps()} fontSize={15} variant='striped' colorScheme='orange'>
                <Thead>
                    {headerGroups.map((headerGroups)=>(
                        <Tr {...headerGroups.getHeaderGroupProps()}>
                        {headerGroups.headers.map((column)=>(
                            <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                {column.render('Header')}
                                {column.isSorted ? (column.isSortedDesc ? ' 🔽': ' 🔼'): ''}
                            </Th>
                        ))}
                    </Tr>
                    ))}
                </Thead>
                <Tbody {...getTableBodyProps()}>
                    {rows.map((row, i)=>{
                        prepareRow(row);
                        return(
                            <Tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                                return(
                                    <Td {...cell.getCellProps()}>
                                    {cell.render("Cell")}
                                </Td>
                                )
                            })}
                        </Tr>
                        )    
                    })}
                </Tbody>    
            </Table>
        </Heading>
        </>
	);
};

export default App;
