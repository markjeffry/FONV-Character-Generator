const courier = {
    name: null,
    gender: null,
    S: 1,
    P: 1,
    E: 1,
    C: 1,
    I: 1,
    A: 1,
    L: 1,
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

const gender_array = [
    'Male',
    'Female'
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

const special_array = [
    'S',
    'P',
    'E',
    'C',
    'I',
    'A',
    'L'
]

//Function assigns special stats to the character
//Minimum of 1 and Maximum of 10 for any stat
const assign_special = char_obj => {
    let SPECIAL = 33;
    let stat;
    while (SPECIAL > 0) {
        stat = special_array[Math.floor(Math.random()*special_array.length)];
        switch (stat) {
            case 'S':
                if (char_obj.S > 9) {continue;}
                char_obj.S++;
                break;

            case 'P':
                if (char_obj.P > 9) {continue;}
                char_obj.P++;
                break;

            case 'E':
                if (char_obj.E > 9) {continue;}
                char_obj.E++;
                break;

            case 'C':
                if (char_obj.C > 9) {continue;}
                char_obj.C++;
                break;

            case 'I':
                if (char_obj.I > 9) {continue;}
                char_obj.I++;
                break;

            case 'A':
                if (char_obj.A > 9) {continue;}
                char_obj.A++;
                break;

            case 'L':
                if (char_obj.L > 9) {continue;}
                char_obj.L++;
                break;
        }
        SPECIAL--;
    }
}

const tag_skills = char_obj => {
    const skill1 = skill_array[Math.floor(Math.random()*skill_array.length)];
    let skill2;
    let skill3;
    
    do {
        skill2 = skill_array[Math.floor(Math.random()*skill_array.length)];
    } while (skill1 === skill2);
    
    do {
        skill3 = skill_array[Math.floor(Math.random()*skill_array.length)];
    } while (skill2 === skill3);

    char_obj.TS1 = skill1;
    char_obj.TS2 = skill2;
    char_obj.TS3 = skill3;
}

courier.name = name_array[Math.floor(Math.random()*name_array.length)];
courier.gender = gender_array[Math.floor(Math.random()*gender_array.length)];
assign_special(courier);
tag_skills(courier);

console.log(courier);

