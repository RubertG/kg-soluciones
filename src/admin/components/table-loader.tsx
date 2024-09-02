import { Spinner } from '@/core'
import React from 'react'

export const TableLoader = () => {
  return (
    <div className='w-full h-40 grid place-content-center'>
      <Spinner className="m-auto" />
    </div>
  )
}
