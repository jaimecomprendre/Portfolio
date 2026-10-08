/* Add or edit projects here. Each project: title, description[], media[].
   media types:
     { type:'image',   src:'assets/photo.webp', alt:'...' }
     { type:'video',   src:'assets/clip.mp4', poster:'assets/clip.jpg' }   (poster optional)
     { type:'youtube', id:'VIDEO_ID' }
     { type:'placeholder', label:'Photo' }   (grey box for templates; replace with a real image/video)
   Several media items on one project = automatic slideshow. */
const imgur = (id, ext = 'jpg') => `https://imgur.com/${id}.${ext}`;
const img = (id, alt) => ({ type: 'image', src: imgur(id), alt });
const vid = (id) => ({ type: 'video', src: imgur(id, 'mp4') });

const PROJECTS = {
  sbcs: [
    { title: 'Student party', description: ['Scenography designed and operated with 20 moving heads and 4 Clay Paky K20.'],
      media: [vid('ZirdagH')] },
    { title: 'TOSS 2022', description: ['Lighting design and operation for a large-scale production with 3,000+ attendees.', 'Rental of 30 Magicdot-R.'],
      media: [
        { type: 'image', src: 'https://i.imgur.com/hCxENDE.jpg', alt: 'TOSS 2022 – 1' },
        { type: 'image', src: 'https://i.imgur.com/KrVwT9m.jpg', alt: 'TOSS 2022 – 2' },
        img('DqpGXUy', 'TOSS 2022 – 3')] },
    { title: 'NDT 2022', description: ['Lighting design and operation of a grid scenography for a multi-artist night, from electro to reggae.', 'Rental of 2 Ayrton Ghibli-S and 10 Ayrton NandoBeam S-6.'],
      media: [img('D8YA2tv', 'NDT 2022 – 1'), img('J27QlSW', 'NDT 2022 – 2'), vid('ZFftTqh'), vid('1cFb1cN')] },
    { title: 'Quadrabang 2022', description: ['Lighting design and operation for a large-scale production with 3,000+ attendees.', 'Rental of 35 Robe Robin Pointe.'],
      media: [img('o4I5eSP', 'Quadrabang 2022 – 1'), img('MIffIxc', 'Quadrabang 2022 – 2')] },
    { title: 'Student party', description: ['Minimalist stage built around 2 IVL Squares by Minuit Une.'],
      media: [img('QfjIola', 'Minimalist stage with two IVL Squares')] },
    { title: 'Student party', description: ['Party in a Parisian club: our 2 IVL Squares were integrated into the club\'s scenography, and I operated the whole system.'],
      media: [{ type: 'image', src: 'https://lh3.googleusercontent.com/d/1bZgP3Q3IZtsZ1Jd2AwyH5qa9wzMp6lil', alt: 'Club party with IVL Squares' }] },
    { title: 'Student party', description: ['Scenography designed and operated with 20 moving heads and 4 Clay Paky K20.'],
      media: [img('W8vIYCE', 'Scenography with 20 lyres and 4 K20')] },
    { title: 'Student party', description: ['Lighting design built around 2 IVL Squares.'], media: [vid('efmP5zU')] },
  ],
  parallaxe: [
    { title: 'Château Perché 2026', description: ['Design, Installation and operating of the lighting kit for theGrenier Grivois Stage at the Chateau Perché 2026 festival'],
      media: [img('INdM5kx', 'NDT 2022 – 1'), vid('b5t70jb', 'NDT 2022 – 1'), vid('451goRk', 'NDT 2022 – 1')] },
    { title: 'Hors-sol Warehouse', description: ['Design, Installation and operating of the lighting kit for the Hors-sol Warehouse event.'],
      media: [vid('8VDxcL6', 'NDT 2022 – 1')] },
    { title: 'P2z Cité Fertile', description: ['Design, Installation and operating of the lighting kit for the P2z Cité Fertile event.'],
       media: [vid('tGd46WH', 'NDT 2022 – 1')] },
    { title: 'Cohort', description: ['Installation and control of Astera Titans over the course of multiple events.'],
      media: [img('fwT4vI0', 'NDT 2022 – 1')] },
  ],
  'concept-k': [
    { title: 'Rock-en-Seine 2026', description: ['Network and lighting administration on the RocOn Stage: installation of the lighting setup and operation throughout the festival.'],
      media: [img('qqFHvra', 'NDT 2022 – 1')] },
    { title: 'Solidays 2026', description: ['Network and lighting administration on the Boombox Stage, including installation of the lighting setup.'],
      media: [img('PRPYNnh', 'NDT 2022 – 1')]  },
    { title: 'Impact Halloween 2025', description: ['Lighting operation on large scale light kit.'],
      media: [vid('oN3224S', 'NDT 2022 – 1')] },
    { title: 'Dystopia Mulhouse 2026', description: ['Lighting operation on large scale light kit.'],
      media: [img('LCOsGfi', 'NDT 2022 – 1')] },
    { title: 'Dystopia Rennes 2025', description: ['Lighting operation on large scale light kit.'],
      media: [vid('cmdMf1B', 'NDT 2022 – 1')] },
    { title: 'CAN Football Cup', description: ['Integration of Pharos show control to run permanent shows across the CAN stadiums over time, during the cup and after for permanent installation. Triggering Timecoded shows as for example:'],
      media: [vid('orMDu5r', 'NDT 2022 – 1')] },
    { title: 'G7', description: ['Lighting direction for the G7 Finance event at Paris Bercy.'],
      media: [img('d3LBVYS', 'NDT 2022 – 1'), img('QxJWlcr', 'NDT 2022 – 1')] },
    { title: 'IMA', description: ['Lighting direction for an event at the Institut du monde arabe, Paris.'],
      media: [img('zZnWlQl', 'NDT 2022 – 1')] }
  ],
  apelbaum: [
    { title: 'The Last Supper', description: ['Installation of paintings in our studio for a dinner, with sound-reactive light shaders I designed.'],
      media: [{ type: 'video', src: 'https://i.imgur.com/DYKrfgs.mp4' }, vid('J66QScc')] },
    { title: 'Hush Maison', description: ['Lighting installation for a party, with sound-reactive light shaders I designed.'],
      media: [vid('RH7Oskz'), vid('POJ1irN')] },
    { title: 'Lunchbox Candy', description: ['Installation of paintings at Aeden for Lunchbox Candy, with sound-reactive light shaders I designed.'],
      media: [vid('sVRQJ04'), vid('iUJuRHg')] },
    { title: 'Re:mise', description: ['Installation of paintings at Re:mise for a party, with sound-reactive light shaders I designed.'],
      media: [vid('O1VIntm')] },
    { title: 'Studio Apelbaum', description: ['Installation of paintings in our studio for a performance, with sound-reactive light shaders I designed.'],
      media: [vid('EYmQuJj')] }
  ]
};