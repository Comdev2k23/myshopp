import React from 'react'


    const products = [
        {
          id: 1,
          name: 'Kojic',
          description: 'Shop Kojie San Skin Brightening Soap - Original Kojic Acid',
          price: 50.00,
          src: 'https://m.media-amazon.com/images/I/71VNjBg34JL._SL1500_.jpg'
      
        },
        {
          id: 2,
          name: 'Silka Papaya Soap',
          description: 'Whitening Herbal Soap Enriched with Vitamin E 135g',
          price: 49.00,
          src: 'https://api.watsons.com.ph/medias/Whitening-Herbal-Soap-Enriched-with-Vitamin-E-135g-10088247.jpg?context=bWFzdGVyfHd0Y3BoL2ltYWdlc3w2Mzg2ODN8aW1hZ2UvanBlZ3xhR1F4TDJnNU55ODVNRGsyT1RjM05qRXlPRE13TDFkb2FYUmxibWx1WnlCSVpYSmlZV3dnVTI5aGNDQkZibkpwWTJobFpDQjNhWFJvSUZacGRHRnRhVzRnUlNBeE16Vm5MVEV3TURnNE1qUTNMbXB3Wnd8NWFhYzZlZjI5ODg4ODZiODFhZTdhZGNiOTQwNDQ0ZWQ0MmM3NjA1MTNlODVkNTJhYzIxYjY0ZDVmM2M3Yjg0ZQ'
        },
        {
          id: 3,
          name: 'Dove',
          description: 'Dove Beauty Bar Soap White 135G',
          price: 88.00,
          src: 'data:image/jpeg;base64,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'
        },
        {
          id: 4,
          name: 'Bioderm',
          description: 'Bioderm Soap White 135g',
          price: 38.00,
          src: 'https://store.iloilosupermart.com/wp-content/uploads/2020/05/40-4.jpg'
        },
        {
          id: 5,
          name: 'Safeguard',
          description: 'Safeguard Bar Soap Floral Pink with Aloe 130g',
          price: 46.00,
          src: 'https://cdn.shopify.com/s/files/1/0147/9445/7136/products/image_871754fa-9262-4363-94c0-ef3a0d06c212.jpg?v=1649876668'
        },
        {
          id: 6,
          name: 'Palmolive',
          description: 'Palmolive Naturals Intensive Moisture Triple Sachet Shampoo',
          price: 8.00,
          src: 'https://d2t3trus7wwxyy.cloudfront.net/catalog/product/p/a/palmolive-naturals-intensive-moisture-triple-sachet-shampoo-15ml_1.jpg'
      
        },
        {
          id: 7,
          name: 'Sunsilk',
          description: 'Sunsilk Shampoo Smooth & Manageable 13ML',
          price: 6.75,
          src: 'https://www.allday.com.ph/media/catalog/product/s/u/sunsilk-shampoo-smooth-manageable-13ml_1.jpg'
        },
        {
          id: 8,
          name: 'Colgate',
          description: 'Colgate Fresh GRF with Amino Acid Toothpaste 159 g - 2s',
          price: 8.00,
          src: 'https://southstardrug.com.ph/cdn/shop/products/60072_8850006320518_COLGATETPFRESHGRF50ML_74GTUBE_01_1200x630.jpg?v=1683806814'
        }
      ]


export default products