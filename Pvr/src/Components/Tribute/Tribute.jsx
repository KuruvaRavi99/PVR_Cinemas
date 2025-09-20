import React from 'react'
import './Tribute.css'
import CircularGallery from '../CircularGallery/CircularGallery'

const Tribute = () => {
  return (
    <section className="movie-section">
      <div style={{ height: "600px", position: "relative" }}>
        <CircularGallery
          bend={3}
          textColor="#ffffff"
          borderRadius={0.05}
          scrollEase={0.02}
        />
      </div>
    </section>
  )
}

export default Tribute
