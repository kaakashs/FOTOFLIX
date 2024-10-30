import React from 'react';
import Photos from './Photos'; 

const Favourite = ({ favoritePhotos, handleRemoveFavorite }) => {
  return (
    <div>
      {/* Sticky Navbar */}
      <nav className="navbar">
        <div className="navbar__logo">Pixahive</div>
        <div className="navbar__links">
          <a href="/">Home</a>
        </div>
      </nav>

      <main>
        <section className="photos">
          <div className="photos-center">
            {favoritePhotos.map((image, index) => {
              return (
                <Photos
                  key={index}
                  {...image}
                  isFavorite={true} 
                  onFavoriteClick={() => handleRemoveFavorite(image)} 
                >
                  
                  <span>Added to Favorites</span>
                </Photos>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Favourite;
