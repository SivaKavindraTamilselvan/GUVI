const resume = {
    "personal details": {
        "name": "siva kavindra",
        "email": "sivakavindra@gmail.com",
        "phone-number": "9442378188",
        "city": "erode",
        "DOB": "28-08-2004",
        "gender": "female",
        "language known": [
            "english",
            "tamil",
            "hindi"
        ],
        "hobbies": [
            "reading papers",
            "swimming",
            "listening to music"
        ],
        "permanent address": "83 A/1 ,Ganga Nagar, Vinayagar Kovil street 1, Moolapalyam, erode-638002",
        "Father's name": "TamilSelvan",
        "Mother's name": "Selvi"
    },
    "career objective": "Looking for a position at an organisation where my knowledge and skills can be used in full stack development",
    "educational qualification": {
        "SSLC": "The B.V.B, Erode",
        "HSC": "Shri Chaitanya School",
        "College": "Kongu Engineering College(BE-CSD)"
    },
    "SKILL SET": {
        "HARD SKILLS": {
            "programming language": [
                "C",
                "Java",
                "Javascript",
                "Python"
            ],
            "Front-End language": [
                "HTML",
                "CSS",
                "React.Js"
            ],
            "Backend language": [
                "Node.Js"
            ],
            "Version-control": "Git",
            "Other": "Problem solving and DSA"
        },
        "SOFT SKILLS": [
            "Time management",
            "Smart Work",
            "Critical Thinking",
            "Leadership"
        ]
    },
    "AREA OF INTEREST":[
        "Full stack development",
        "Cyber security",
        "Machine learning"
    ],
    "PROJECT PRESENTED":{
        "Dark pattern Hacakathon":"Finding the dark pattern in an E-commerce website",
        "SIH":"Postal full stack project",
        "College":"BOOK-LIBRARY full stack project"
    },
    "PAPER PRESENTATION":{
        "SCINTIUM":"Optical fiber",
        "ANNA - UNIVERISTY":"quantum crytography"
    },
    "MEMBERSHIP IN COLLEGE":{
        "CDCC":"Joint secratory",
        "CSI":"Executive member"
    }
};

console.log("...........................");

Object.keys(resume).forEach((key) => {
    const value = resume[key];

    if (typeof value === 'object') {
        console.log();
        console.log(key);
        console.log("------------------");

        if (!Array.isArray(value)) {
            Object.keys(value).forEach((subkey) => {
                const subvalue = value[subkey];

                if (typeof subvalue === 'object' && !Array.isArray(subvalue)) {
                    console.log(subkey);
                    Object.keys(subvalue).forEach((key1) => {
                        console.log(`${key1}: ${subvalue[key1]}`);
                    });
                } else {
                    console.log(`${subkey}: ${subvalue}`);
                }
            });
        } else {
            value.forEach((item) => {
                console.log(item);
            });
        }
    } else {
        console.log();
        console.log(key);
        console.log("------------------");
        console.log(`${value}`);
    }

    console.log("...........................");
});
