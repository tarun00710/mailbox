import React from 'react'
import { EmailListType } from '../../types'
import EmailCard from '../EmailCard/EmailCard'

const EmailList = ({list}:{list : EmailListType}) => {
  console.log("emaillist",list)
  return (
    <div className='email_list'>{
      list?.map((email)=>{
        return (
          <EmailCard key={email.id} emailData={email}/>
        )
      })
    }</div>
  )
}

export default EmailList