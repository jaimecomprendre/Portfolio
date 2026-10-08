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
    { title: 'Student party', description: ['Design and operation of this scenography with 20 lyres and 4 K20.'],
      media: [vid('ZirdagH')] },
    { title: 'TOSS 2022', description: ['Design and operation of a large-scale production for 3,000+ attendees.', 'Rental of 30 Magicdot-R.'],
      media: [
        { type: 'image', src: 'https://i.imgur.com/hCxENDE.jpg', alt: 'TOSS 2022 – 1' },
        { type: 'image', src: 'https://i.imgur.com/KrVwT9m.jpg', alt: 'TOSS 2022 – 2' },
        img('DqpGXUy', 'TOSS 2022 – 3')] },
    { title: 'NDT 2022', description: ['Design and operation of a grill scenography for a various-artists night, ranging from electro to reggae.', 'Rental of 2 Ayrton Ghibli-S and 10 Ayrton NandoBeam S-6.'],
      media: [img('D8YA2tv', 'NDT 2022 – 1'), img('J27QlSW', 'NDT 2022 – 2'), vid('ZFftTqh'), vid('1cFb1cN')] },
    { title: 'Quadrabang 2022', description: ['Design and operation of a large-scale production for 3,000+ attendees.', 'Rental of 35 Robe Robin Pointe.'],
      media: [img('o4I5eSP', 'Quadrabang 2022 – 1'), img('MIffIxc', 'Quadrabang 2022 – 2')] },
    { title: 'Student party', description: ['Minimalist stage with 2 IVL Squares by Minuit Une.'],
      media: [img('QfjIola', 'Minimalist stage with two IVL Squares')] },
    { title: 'Student party', description: ['Party in a Parisian club. Added our 2 IVL Squares to the club scenography and operated the whole system.'],
      media: [{ type: 'image', src: 'https://lh3.googleusercontent.com/d/1bZgP3Q3IZtsZ1Jd2AwyH5qa9wzMp6lil', alt: 'Club party with IVL Squares' }] },
    { title: 'Student party', description: ['Design and operation of this scenography with 20 lyres and 4 K20.'],
      media: [img('W8vIYCE', 'Scenography with 20 lyres and 4 K20')] },
    { title: 'Student party', description: ['Light design with 2 IVLs.'], media: [vid('efmP5zU')] },
  ],
  parallaxe: [
    { title: 'Chateau perché 2026', description: ['Short description of your role and the setup (equipment, venue, audience size).'],
      media: [img('9iDJWhQ', 'NDT 2022 – 1')] },
    { title: 'P2z cité fertile', description: ['Template with several photos and videos: it becomes a slideshow automatically.'],
       media: [vid('tGd46WH', 'NDT 2022 – 1')] },
    { title: 'Hors-sol Warehouse', description: ['Template with a single photo.'],
       media: [vid('oN3224S', 'NDT 2022 – 1')] },
    { title: 'Pont-neuf reccords', description: ['Template with a single photo.'],
      media: [vid('oN3224S', 'NDT 2022 – 1')] },
    { title: 'Cohort', description: ['Installation and control of Astreas Titans over the course of multiple events.'],
      media: [img('fwT4vI0', 'NDT 2022 – 1')] },
  ],
  'concept-k': [
    { title: 'Rock-en-Seine 2026', description: ['Network and Light administration on the RocOn Stage. Installation of the lighting setup. Operating during the festival'],
      media: [img('qqFHvra', 'NDT 2022 – 1')] },
    { title: 'Solidays 2026', description: ['Network and Light administration on the Boombox Stage. Installation of the lighting setup.'],
      media: [img('PRPYNnh', 'NDT 2022 – 1')]  },
    { title: 'Impact Halloween 2025', description: ['Operating.'],
      media: [vid('oN3224S', 'NDT 2022 – 1')] },
    { title: 'Dystopia mulhouse 2026', description: ['Operating.'],
      media: [img('LCOsGfi', 'NDT 2022 – 1')] },
    { title: 'Dystopia Rennes 2025', description: ['Light operating.'],
      media: [vid('cmdMf1B', 'NDT 2022 – 1')] },
    { title: 'CAN FOOTBAL CUP', description: ['Integration of Pharos Showcontrol in order to control Permanent shows on the CAN stadiums over time.'],
      media: [vid('oN3224S', 'NDT 2022 – 1')] },
    { title: 'G7', description: ['Photo direction for the event G7 finances at PAris Bercy.'],
      media: [vid('oN3224S', 'NDT 2022 – 1')] },
    { title: 'IMA', description: ['Photo direction for an event at Institut du monde arabe Paris.'],
      media: [vid('oN3224S', 'NDT 2022 – 1')] }
  ],
  apelbaum: [
    { title: 'The Last Supper', description: ['Installation of paintings in our studio for a dinner. Design of sound-interactive light shaders.'],
      media: [{ type: 'video', src: 'https://i.imgur.com/DYKrfgs.mp4' }, vid('J66QScc')] },
    { title: 'Hush Maison', description: ['Installation of lights for a party. Design of sound-interactive light shaders.'],
      media: [vid('RH7Oskz'), vid('POJ1irN')] },
    { title: 'Lunchbox Candy', description: ['Installation of paintings at Aeden for Lunchbox Candy. Design of sound-interactive light shaders.'],
      media: [vid('sVRQJ04'), vid('iUJuRHg')] },
    { title: 'Re:mise', description: ['Installation of paintings at Re:mise for a party. Design of sound-interactive light shaders.'],
      media: [vid('O1VIntm')] },
    { title: 'Studio Apelbaum', description: ['Installation of paintings in our studio for a performance. Design of sound-interactive light shaders.'],
      media: [vid('EYmQuJj')] }
  ]
};