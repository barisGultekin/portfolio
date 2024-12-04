const projectsData = [
  {
    id: 7,
    slug: 'chair-configurator',
    title: '3D Chair Configurator',
    description: 'An interactive 3D chair configurator built with three.js and react.js',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/Chair/chairCover.webp`,
    tags: ['Frontend', 'Threejs', 'GSAP'],
    featured: true
  },
  {
    id: 1,
    slug: 'ardeo',
    title: 'Ardeo',
    description: 'A versatile sales and data analytics software designed for retail sales.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/Ardeo/ardeoCover.webp`,
    tags: ['Frontend', 'UI/UX', 'Branding'],
    featured: true
  },
  {
    id: 2,
    slug: 'wire',
    title: 'WIRE',
    description: 'A web application that allows people to organize and participate in local sport events.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/WIRE/wireCover.webp`,
    tags: ['Frontend', 'UI/UX', 'Branding'],
    featured: true
  },
  {
    id: 3,
    slug: 'brevvit',
    title: 'brevvit',
    description: 'An application designed to interact with smart kitchen devices.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/brevvit/brevvitCover.webp`,
    tags: ['UI/UX'],
    featured: true
  },
  {
    id: 4,
    slug: 'arflip',
    title: 'AR Flip',
    description: 'A mountable car accessory providing a head-up display with gesture controls.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/ARFlip/arflipCover.webp`,
    tags: ['UI/UX','3D Design', 'Embedded'],
    featured: false
  },
  {
    id: 5,
    slug: 'iztechsailing',
    title: 'IZTECH Sailing',
    description: 'This is the first sample project description.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/Sailing/sailingCover.webp`,
    tags: ['Graphic Design', 'Branding'],
    featured: false
  },
  {
    id: 6,
    slug: 'envsoc',
    title: 'ENVSOC',
    description: 'This is the first sample project description.',
    imageUrl: `${process.env.PUBLIC_URL}/assets/projectAssets/EnvSoc/envsocCover.webp`,
    tags: ['Graphic Design', 'Branding'],
    featured: false
  },
];

export default projectsData;
