import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-[#b49260] to-[#8fbc8f] backdrop-blur-md p-4 shadow-lg">
              <h2 className="text-2xl bg rounded-md w-24 ml-64 mt-0">
            IMAGES
          </h2>
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex space-x-4 items-center">
          {/* Texte 'IMAGE' avec dégradé */}                                                                                            
  

          {/* Liens de navigation */}
          <div className="flex space-x-4 ml-28 mr-2">
            <a href="#home" className="text-white hover:text-gray-900">Accueil</a>
            <a href="#gallery" className="text-white hover:text-gray-900">Galerie</a>
            <a href="#about" className="text-white hover:text-gray-900">À propos</a>                                                                                                                                                         
            <a href="#contact" className="text-white hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div> <style jsx>{`
        nav {
          background: linear-gradient(to right, #b49260, #8fbc8f);
          backdrop-filter: blur(10px);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </nav>
  );
};

export default NavBar;
