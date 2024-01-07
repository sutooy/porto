import { Inter, Noticia_Text, Playfair_Display, Vidaloka } from "next/font/google";


export const inter = Inter({
     subsets: ['latin'],
    display: 'swap',
  }) 
  
  export const vidaloka = Vidaloka({
    weight:"400",
    subsets: ['latin'],
    display: 'swap',
  })

  export const playfair = Playfair_Display({
    // weight:"00",
    subsets: ['latin'],
    display: 'swap',
  })

  export const noticia = Noticia_Text({
    weight:["400", "700"],
    subsets: ['latin'],
    display: 'swap',
  })

  