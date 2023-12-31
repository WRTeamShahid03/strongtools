// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Button, Card, CardHeader, Grid,  MenuItem } from '@mui/material'
import CustomTextField from 'src/@core/components/mui/text-field'
import { Box } from '@mui/system'
import IconButton from '@mui/material/IconButton'

import Icon from 'src/@core/components/icon'

const createData = (type, country, info, price, seller) => {
    return { type, country, info, price, seller }
}

const rows = [
    // createData('Edate(UNPAID)', "USA", "Gender = Man , AGE = 35 , City = Canoga Park , State = California Country = United States", "6.00", "BishopX"),
    // createData('EliteSingles(Unpaid)', "Global", "EliteSingles Unpaid - Age: 48, Gender:MALE - Seeking:FEMALE, Location:Bridgeport/OH/43912", "4.00", "crown27"),
]

const  PendingBTC = props => {
    return (

        <Card>

            <CardHeader title="Bitcoin Unconfirmed Deposits" sx={{ fontSize: '20px', fontWeight: '600' }}/>

            
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>ADDRESS</TableCell>
                            <TableCell align='left'>TX HASH</TableCell>
                            <TableCell align='left'>AMOUNT</TableCell>
                            <TableCell align='left'>DATE</TableCell>
                            <TableCell align='left'>STATUS</TableCell>
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
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default PendingBTC
