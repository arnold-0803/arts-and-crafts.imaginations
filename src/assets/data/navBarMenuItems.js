export const menuItems = [
  {
    id: 0,
    title: "Arts & Crafts",
    // url: "/arts-&-crafts",
    subMenuItems:[
      {
        subTitle: "Paint Arts",
        open: "fa-chevron-up",
        close: "fa-chevron-down",
        // url: "/arts-&-crafts/paints",
        subSubMenuItems:[
          {
            subSubTitle: "Acrylic Paint arts",
            url: "/arts-&-crafts/paints/acrylic-arts"
          },
          {
            subSubTitle: "Oil Paint atrs",
            url: "/arts-&-crafts/paints/oil-paint-arts"
          }
        ]
      },
      {
        subTitle: "Decoratives",
        open: "fa-chevron-up",
        close: "fa-chevron-down",
        // url: "/arts-&-crafts/decoratives",
        subSubMenuItems:[
          {
            subSubTitle: "Vases",
            url: "/arts-&-crafts/decoratives/vases"
          },
          {
            subSubTitle: "Aquariums",
            url: "/arts-&-crafts/decoratives/aquariums"
          }
        ]
      }
    ]
  },
  {
    id: 1,
    title: "Jewellery",
    // url: "/jewellery",
    subMenuItems:[
      {
        subTitle: "Necklaces",
        url: "/jewellery/necklacess",
        activeClass: "active-btn"
      },
      {
        subTitle: "Bangles",
        url: "/jewellery/bangles",
        activeClass: "active-btn"
      },
      {
        subTitle: "Bracelates",
        url: "/jewellery/bracelets",
        activeClass: "active-btn"
      },
      {
        subTitle: "Earings",
        url: "/jewellery/earings",
        activeClass: "active-btn"
      },
    ]
  },
  {
    id: 2,
    title:"About",
    // url: "/about",
    subMenuItems:[
      {
        subTitle: "Meet Our Team",
        url: "/about/our-team",
        activeClass: "active-btn"
      },
      {
        subTitle: "FAQ",
        url: "/about/faq",
        activeClass: "active-btn"
      }
    ]
  },
  {
    id: 3,
    title:"Contact",
    url: "/contact"
  },
  {
    id: 4,
    title:"News",
    url: "/news"
  }
];



export const reachoutInfo = [
  {
    id: 0,
    icon: "fa-solid fa-phone",
    info: "+254700000000"
  },
  {
    id: 1,
    icon: "fa-solid fa-envelope",
    info: "info@imaginations.org"
  },
  {
    id: 2,
    icon: "fa-solid fa-location-dot",
    info: "Maasai-Market, Nairobi"
  },
];



export const navIcons = [
  {
    id: 0,
    icon: "fa-solid fa-user",
    url: "/login/register",
    customClass: "login-register"
  },
  {
    id: 1,
    icon: "fa-solid fa-heart",
    url: "/wishlist",
    count: "0"
  },
  {
    id: 2,
    icon: "fa-solid fa-shopping-bag",
    url: "/shopping-bag",
    count: "0"
  }
];



export const socialMedia = [
  {
    id: 0,
    icon: "fa-brands fa-facebook",
    link: "https://www.facebook.com"
  },
  {
    id: 1,
    icon: "fa-brands fa-x-twitter",
    link: "https://www.twitter.com"
  },
  {
    id: 2,
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com"
  },
  {
    id: 3,
    icon: "fa-brands fa-linkedin",
    link: "https://www.linkedin.com"
  },
  {
    id: 4,
    icon: "fa-brands fa-youtube",
    link: "https://www.youtube.com"
  }
];