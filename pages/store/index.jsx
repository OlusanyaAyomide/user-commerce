import React,{Fragment, useContext} from 'react'
import Header from '@/components/stores/Header'
import Allcontext from '@/store/Allcontext'
import OverLay from '@/components/utils/onOverLay'


export default function Index() {
  const {onOverLay} = useContext(Allcontext)
  return (
      <Fragment>
        <Header/>
        {onOverLay && <OverLay/>}
      </Fragment>
  )
}
