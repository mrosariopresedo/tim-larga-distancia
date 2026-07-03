// ============================================================
//  tailwind.config.js — Configuración de Tailwind para TIM · Larga Distancia
//  Se carga en el <head> DESPUÉS del CDN:
//    <script src="https://cdn.tailwindcss.com"></script>
//    <script src="js/tailwind.config.js"></script>
//  Define el bordó de marca "tim", el acento "terra" (color propio de la
//  línea Larga Distancia), la tipografía Inter y un ancho de contenedor.
// ============================================================
tailwind.config = {
  theme: {
    extend: {
      colors: {
        tim: {
          DEFAULT: '#722F37',  // bordó de marca TIM
          dark:    '#5A2229',
          light:   '#F5EAEB',
          text:    '#333333',
          muted:   '#666666',
          subtle:  '#707070',
          border:  '#DDDDDD',
          bgalt:   '#F7F7F7',
        },
        // Color identificatorio de la línea Larga Distancia (acento, además del bordó de marca)
        terra: {
          DEFAULT: '#C2410C',
          dark:    '#9A3412',
          light:   '#FBEBE2',
        },
      },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
    },
  },
};
