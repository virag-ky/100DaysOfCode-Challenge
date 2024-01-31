new Splide( '.splide', {
  perPage: 2,
  rewind : true,
  breakpoints: {
    750: {
    perPage: 1,
    },
  }
} ).mount();