import { Breadcrumbs, Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import ReportTable from './ReportTable'


const Report = () => {
  return (
    <>
    <Breadcrumbs aria-label="breadcrumb" sx={{
      margin: "22px 0px",fontSize: "22px"
    }}>
                <Link underline="hover" color="info" href="/">
                  Reports
                </Link>
            </Breadcrumbs>
            <ReportTable/>
    </>
  )
}

export default Report
