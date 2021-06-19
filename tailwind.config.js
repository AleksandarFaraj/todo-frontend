module.exports = {
    mode: "jit",
    purge: ["./public/**/*.html", "./src/**/*.{j,t}sx"],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        scale: {
        },
      },
    },
    variants: {
      extend: {},

    },
    plugins: [],  
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true
    },
  };