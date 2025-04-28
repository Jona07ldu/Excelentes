export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'lentes-graduados' | 'gafas-de-sol' | 'lentes-de-contacto';
  onOffer: boolean;
  arModel: string;
}

export const products: Product[] = [
  { id:1, name:'Lentes Graduados Clásicos', price:120, image:'/images/lentes1.jpg', category:'lentes-graduados', onOffer:true, arModel:'/models/frame1.glb' },
  { id:2, name:'Gafas de Sol Aviador', price:80, image:'/images/gafas1.jpg', category:'gafas-de-sol', onOffer:false, arModel:'/models/frame2.glb' },
  { id:3, name:'Lentes de Contacto Diarios', price:25, image:'/images/contacto1.jpg', category:'lentes-de-contacto', onOffer:true, arModel:'' }
];
