// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, Card, CardHeader, Grid,  MenuItem } from '@mui/material'

const createData = (type, country, info, price, seller) => {
    return { type, country, info, price, seller }
}

const rows = [
    createData('Edate(UNPAID)', "USA", "Gender = Man , AGE = 35 , City = Canoga Park , State = California Country = United States", "6.00", "BishopX"),
    createData('EliteSingles(Unpaid)', "Global", "EliteSingles Unpaid - Age: 48, Gender:MALE - Seeking:FEMALE, Location:Bridgeport/OH/43912", "4.00", "crown27"),
]

const DatingTable = props => {
    return (
        <>

        <Card>

            <CardHeader title="Dating | EliteSingles(PAID)" />
            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>TYPE</TableCell>
                            <TableCell align='left'>COUNTRY</TableCell>
                            <TableCell align='left'>INFORMATION</TableCell>
                            <TableCell align='left'>PRICE</TableCell>
                            <TableCell align='left'>SELLER</TableCell>
                            <TableCell align='left'>BUY</TableCell>
                            <TableCell align='left'>CART</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.info} sx={{ '&:last-of-type  td, &:last-of-type  th': { border: 0 } }}>


                                <TableCell component='th' scope='row'>
                                    {row.type}
                                </TableCell>
                                <TableCell align='left'>{row.country}</TableCell>
                                <TableCell align='left'>{row.info}</TableCell>
                                <TableCell align='left'>{row.price}</TableCell>
                                <TableCell align='left'>
                                <Button  size="small">{row.seller}</Button>
                                </TableCell>

                                <TableCell align='left'>
                                    <Button variant='contained' color='success' size="small">Buy</Button>
                                </TableCell>
                                <TableCell align='left'>
                                    <Button variant='contained' color='success' size="small">+</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
        </>
    )
}

export default DatingTable
