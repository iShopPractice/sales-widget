import { useState } from 'react'

import style from './Image.module.css'
import Assets from './assets'

interface Props {
  src?: string
  alt?: string
  className?: string
}

const Image = ({ src, alt, className }: Props) => {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  return (
    <div className={`${style.image} ${className}`}>
      {(loading || error) && (
        <img
          loading="lazy"
          draggable={false}
          src={Assets.loader}
          className={`${style.loader} ${error ? style.error : ''} }`}
        />
      )}
      <img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true)
          setLoading(false)
        }}
        className={loading || error ? style.hidden : style.loaded}
      />
    </div>
  )
}

export default Image
