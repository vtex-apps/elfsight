import React, { FC } from 'react'

interface Props {
  appId?: string
}

const Elfsight: FC<Props> = ({ appId }) => {
  if (!appId) {
    return <></>
  }

  return <div className={`elfsight-app-${appId}`} />
}

export default Elfsight
