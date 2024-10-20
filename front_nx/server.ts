

/*export async function fetchImages(pageParam: number, search: string) {
  //const perPage = 45;
  const url = `https://api.unsplash.com/search/photos?page= 1&per_page=45&query='cats'&client_id=qpYqEL6ROzTsSaOdLciCzbHTW0xf2dp_e1YkiSyVrVk`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }
}
*/






/*import express from 'express';

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors())
app.get('/data',(req,res)=>{
  resizeBy.json({message: 'Hello , this is your data'})
}
);
app.listen(PORT , ())  => {
  console.log(`Server is runing on http://localhost: ${PORT}`)
}
*/


/*
const apikey = process.env.NEXT_PUBLIC_IMAGE_API;

if (!apikey) {
  throw new Error("API key is missing or not defined in .env.local");
}

export async function fetchImages(pageParam: number, search: string) {
  const url = `https://api.unsplash.com/search/photos?page=${pageParam || 1}&per_page=45&query=${search || 'cats'}&client_id=${apikey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch images:", error);
  }
}


















import express, { Request, Response } from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Route pour récupérer les photos depuis l'API Unsplash
app.get('/api/photos', async (req: Request, res: Response) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_IMAGE_API}`);
    const data = await response.json();
    res.json(data); // Renvoie les photos au frontend
  } catch (error) {
    console.error('Error fetching photos:', error);
    res.status(500).send('Error fetching photos');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});





*/


























/*
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, search } = req.query;
  const apikey = process.env.NEXT_PUBLIC_IMAGE_API;
  const perPage = 45;
  const url = `https://api.unsplash.com/search/photos?page=${page || 1}&per_page=${perPage}&query=${search || 'batman'}&client_id=${apikey}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const data = await response.json();
    res.status(200).json(data);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' });
  }
}
*/



















