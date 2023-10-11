import React from 'react'
import Card from '@mui/material/Card';
import Notification from './Notification';
import Breadcrum from 'src/pages/components/Breadcrum';

const Index = () => {
  return (
    <>

      <Breadcrum title="Notification" />

      <Card >
        <Notification />

      </Card>
    </>
  )
}

export default Index
