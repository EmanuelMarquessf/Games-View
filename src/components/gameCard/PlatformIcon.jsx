import React from 'react'

function PlatformIcon({platform}) {
  return (
    <img
    className="w-4 h-3"
      src={`./Plataforms/${platform.platform.slug}.svg`}
      alt={platform.name}
      title={platform.name}
    />
  )
}

export default PlatformIcon