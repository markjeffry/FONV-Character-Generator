const courier = {
    name: null,
    gender: null,
    S: null,
    P: null,
    E: null,
    I: null,
    A: null,
    L: null,
    TS1: null,
    TS2: null,
    TS3: null,
    Trait1: null,
    Trait2: null
};

const name_array = [
    'Longshot',
    'Sly',
    'Nightowl',
    'Ash',
    'Needle',
    'Spirit',
    'Fluke',
    'Whisper',
    'Dragonfly',
    'Cinders'
];

const skill_array = [
    'Barter',
    'Energy Weapons',
    'Explosives',
    'Guns',
    'Lockpick',
    'Medicine',
    'Melee Weapons',
    'Repair',
    'Science',
    'Sneak',
    'Speech',
    'Survival',
    'Unarmed'
]

const trait_array = [
    'Built to Destroy',
    'Claustrophobia',
    'Early Bird',
    'Fast Shot',
    'Four Eyes',
    'Good Natured',
    'Heavy Handed',
    'Hoarder',
    'Hot Blooded',
    'Kamikaze',
    "Logan's Loophole",
    'Loose Cannon',
    'Skilled',
    'Small Frame',
    'Trigger Discipline',
    'Wild Wasteland'
]

courier.name = name_array[Math.floor(Math.random()*name_array.length)];

console.log(courier.name);

