module.exports = {
  mode: 'jit',
  purge: [
 './public/**/*.{html,js}'
],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'mulish': ['Mulish', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'zeyada': ['Zeyada', 'sans-serif'],
      },
      colors: {
        brand: {
          'black': '#232D32',
          'red': '#FF0066',
          'blue-bg': '#F3F4FF',
          'blue-bg-darker': '#F0F1FF',
          'light-blue': '#B6D1E0',
          'dark-blue': '#4662B7',
          'darker-blue': '#3C419E',
          'darkest-blue': '#40447A',
        }
      },
      maxWidth: {
        '1376': '1376px',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
       },
       backgroundImage: theme => ({
        'gray-gradient': "linear-gradisent(185.8deg, #F0F1FF 4.69%, rgba(255, 255, 255, 0) 156.17%);",
      }),
      customForms: theme => ({
        default: {
          select: {
            icon: '<svg fill="#fff" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>',
          },
        },
      })
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
  ],
}
