/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      outline: {
        '0': '0',
      },
      colors: {
        'bitter-lemon': {
          '50': '#fefee7',
          '100': '#fafdca',
          '200': '#f4fa9c',
          '300': '#e7f462',
          '400': '#d6e833',
          '500': '#cce316',
          '600': '#91a50b',
          '700': '#6c7d0e',
          '800': '#566311',
          '900': '#485413',
          '950': '#262e05',
      },
      'thunderbird': {
        '50': '#fff0f0',
        '100': '#ffdddd',
        '200': '#ffc1c1',
        '300': '#ff9595',
        '400': '#ff5959',
        '500': '#ff2626',
        '600': '#fc0606',
        '700': '#d60000',
        '800': '#af0505',
        '900': '#900c0c',
        '950': '#500000',
    },
    'mariner': {
      '50': '#edf9ff',
      '100': '#d6f0ff',
      '200': '#b6e7ff',
      '300': '#83daff',
      '400': '#49c3ff',
      '500': '#1fa2ff',
      '600': '#0783ff',
      '700': '#0164e4',
      '800': '#0855c5',
      '900': '#0e4a9a',
      '950': '#0e2e5d',
  },
  'martini': {
    '50': '#f8f8f8',
    '100': '#f1efef',
    '200': '#e6e2e2',
    '300': '#d4cdcd',
    '400': '#b3a8a8',
    '500': '#a09393',
    '600': '#887a7a',
    '700': '#706565',
    '800': '#5f5555',
    '900': '#524a4a',
    '950': '#2a2525',
},
'guardsman-red': {
  '50': '#ffefef',
  '100': '#ffdcdc',
  '200': '#ffbfbf',
  '300': '#ff9292',
  '400': '#ff5454',
  '500': '#ff1f1f',
  '600': '#ff0000',
  '700': '#db0000',
  '800': '#c20000',
  '900': '#940808',
  '950': '#520000',
},
      },
    },
  },
  plugins: [],
}