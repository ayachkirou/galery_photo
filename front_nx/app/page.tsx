
"use client";


import NavBar from '@/components/NavBar';
import { useEffect, useState } from "react";


interface Photo {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
}


export default function Home() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=qpYqEL6ROzTsSaOdLciCzbHTW0xf2dp_e1YkiSyVrVk`
        );
        const data = await response.json();
        setPhotos(data);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);


  return (
    <>
      {/* Barre de navigation */}
      <div>
      <NavBar />
      </div>
      
      {/* Affichage des images */}
      <div
        className="grid grid-cols-3 gap-6"
      >
        {photos.map((photo) => (
          <div key={photo.id} className="overflow-hidden rounded-lg shadow-lg bg-slate-100 transform hover:scale-105 transition-transform duration-300">
            <img
              src={photo.urls.regular}
              alt={photo.alt_description}
             className="w-full h-64 object-cover rounded-t-lg"
             loading="lazy"
            />
             <div className="p-4 bg-gradient-to-t from-gray-100 to-transparent">
            <p className="text-center text-gray-900 font-medium text-lg tracking-wide">
              {photo.alt_description || "Aucune description disponible"}
            </p>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}  