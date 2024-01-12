import React from 'react'

const FooterComponent = ({link}) => {
  return (
    <div className='flex flex-col gap-4 text-richblack-400'>
      {
        link.links.map((tag , index) => {
            return(
                <div key={index}>
                    <p>{tag.title}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default FooterComponent
