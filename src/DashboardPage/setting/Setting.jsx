import React from 'react'
import SettingImageUpload from './SettingImageUpload'




const Setting = () => {
  return (
    <div>
      <h1 className='font-bold text-4xl font-inter'>Edit Profile</h1>

      {/* update-profile-photo */}
      <SettingImageUpload/>
    </div>
  )
}

export default Setting
