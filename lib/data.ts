export type Person = {
    ID: number;
    Name: string;
    Age: string;
    Description: string | null;
    Picture: string | null;
    Type: 'Athlete' | 'Coach';
    hasStunts?: boolean;
};


const AthletesPic = [
    {
        ID: 1,
        Name: "Es-saidi Saad",
        Age: "23 y.o",
        Description: "I am a sports teacher and certified parkour coach. Since 2019, parkour has been my passion, teaching me to balance risk and control for self-improvement. I am now a National professional parkour athlete.",
        Picture: "/AthletesPic/Es-saidi-Saad.jpg",
        MoveTrick: null,
    },
    {
        ID: 2,
        Name: "Abderrahmane Lafraigui",
        Age: "17 y.o",
        Description: "I am a Marrakech native and have been dedicated to parkour since 2020. For me, parkour is more than a sport; it's a way of life that has shaped my perspective and helped me grow, both physically and mentally.",
        Picture: "/AthletesPic/DSC06860.jpg",
        MoveTrick: null,
    },
    {
        ID: 3,
        Name: "Adnane Assou",
        Age: "26 y.o",
        Description: "I am a devoted parkour enthusiast with seven years of experience. I see parkour as a transformative way of life, building strength, energy, and fearlessness. My goal is to constantly master new movements and push my limits.",
        Picture: "/AthletesPic/DSC08537.jpg",
        MoveTrick: null,
    },
    {
        ID: 4,
        Name: "Hamza Boulghassoul",
        Age: "23 y.o",
        Description: "Drawn to daring feats since childhood, I found my passion in parkour in 2013, training consistently since 2017. I was inspired by action movies and sought a similar thrill, which I discovered through parkour's challenging moves.",
        Picture: "/AthletesPic/DSC07046.jpg",
        MoveTrick: null,
    },
    {
        ID: 6,
        Name: "Zouhair souhaimi",
        Age: "25 y.o",
        Description: "I started parkour at 14 and was a promising traceur in Marrakech. After a shoulder injury, I thought I would never train again, but new friends inspired me to return to the sport.",
        Picture: "/AthletesPic/DSC06811.jpg",
        MoveTrick: null,
    },
    {
        ID: 7,
        hasStunts: true,
        Name: "Othman Noukrati",
        Age: "27 y.o",
        Description: "I have been exploring movement since I was 10 years old, beginning with climbing trees. Discovering the parkour community in 2014, I became a student of movement, embracing both parkour and free running.",
        Picture: "/AthletesPic/IMG_2591.JPG",
        MoveTrick: null,
    },
    {
        ID: 9,
        Name: "youssef morhi",
        Age: "18 y.o",
        Description: "I started parkour in 2023 as a way to relieve stress and find enjoyment. My goal is to reach a professional level and compete internationally.",
        Picture: "/AthletesPic/DSC08365.jpg",
        MoveTrick: null,
    },
    {
        ID: 10,
        Name: "Yahya Lahiani",
        Age: "16 y.o",
        Description: "I began my parkour journey in 2016. I aspire to master the sport and capture cinematic-quality movements. Parkour gives me a sense of peace and progress.",
        Picture: "/AthletesPic/DSC06835.jpg",
        MoveTrick: null,
    },
    {
        ID: 11,
        Name: "Abderrahmane Ezzouine",
        Age: "15 y.o",
        Description: "I started parkour at age 11. I love it for the freedom it represents and its ability to overcome obstacles. My goal is to build a strong mind in a strong body.",
        Picture: "/AthletesPic/DSC07052.jpg",
        MoveTrick: null,
    },
    {
        ID: 12,
        Name: "Azeddine",
        Age: "28 y.o",
        Description: "I am an adventure enthusiast who has been passionate about parkour since childhood. I value the fun, excitement, community, and camaraderie the sport provides.",
        Picture: "/AthletesPic/DSC07082.jpg",
        MoveTrick: null,
    },
    {
        ID: 13,
        Name: "Adam Mars",
        Age: "15 y.o",
        Description: "I am a student from Marrakesh and have been practicing parkour since 2021. I consider it a lifestyle and mindset, embracing the risks for the love of the sport.",
        Picture: "/AthletesPic/DSC06814.jpg",
        MoveTrick: null,
    },
    {
        ID: 14,
        Name: "hind ourta",
        Age: "22 y.o",
        Description: "I started parkour in 2021 and am one of the few women practicing the sport in Morocco. Despite the challenges, it is my outlet, and I am determined to continue improving.",
        Picture: "/AthletesPic/DSC06837.jpg",
        MoveTrick: null,
    },
    {
        ID: 15,
        Name: "Taha Kasfi",
        Age: "25 y.o",
        Description: "I own a business and work as a lifeguard. I initially started parkour in 2010, then switched to skateboarding, and returned to parkour in 2024 for the adrenaline rush I love.",
        Picture: "/AthletesPic/DSC06832.jpg",
        MoveTrick: null,
    },
    {
        ID: 16,
        Name: "Aiden soumman",
        Age: "23 y.o",
        Description: "I started parkour in 2021 and consider parkour/freerunning my life. I feel I cannot live without it, despite its dangers, and wish the best for everyone in the sport.",
        Picture: "/AthletesPic/DSC07042.jpg",
        MoveTrick: null,
    },
    {
        ID: 17,
        Name: "Ayoub Bouinbaden",
        Age: "21 y.o",
        Description: "Coming from Marrakech, I consider parkour my favorite sport. I appreciate the people I meet through it, who are crazy, well-mannered, and hospitable.",
        Picture: "/AthletesPic/DSC07069.jpg",
        MoveTrick: null,
    },
    {
        ID: 18,
        Name: "Abderrahmane Bouhrim",
        Age: "21 y.o",
        Description: "I am from Marrakech and have been a parkour and freerunning athlete since 2015. I am also a cinematographer/photographer and business student. I enjoy the people I meet through parkour.",
        Picture: "/AthletesPic/DSC06852.jpg",
        MoveTrick: null,
    },
    {
        ID: 19,
        hasStunts: true,
        Name: "Mohamed Mouraoui",
        Age: "28 y.o",
        Description: "I started parkour at an early age and became a parkour and gymnastics coach. I transitioned to action movies as a stuntman and action choreographer. I help create a supportive environment for parkour practice.",
        Picture: "/AthletesPic/DSC08756.jpg",
        MoveTrick: null,
    },
    {
        ID: 20,
        Name: "AZIZ ZOUGARI",
        Age: "16 y.o",
        Description: "I started practicing parkour in 2022. To me, parkour is a way of life and a mindset for overcoming obstacles smoothly.",
        Picture: "/AthletesPic/DSC06829.jpg",
        MoveTrick: null,
    },
    {
        ID: 21,
        Name: "Abdel Moghit",
        Age: "18 y.o",
        Description: "I started parkour in 2023 and love the adrenaline rush it provides. Parkour is a lifestyle that improves my skills and brings me happiness.",
        Picture: "/AthletesPic/DSC08366.jpg",
        MoveTrick: null,
    },
    {
        ID: 22,
        Name: "abdelhakim nasyb",
        Age: "22 y.o",
        Description: "I transformed from knowing nothing about parkour to becoming a professional athlete. I dream of coaching and changing the perception of parkour in Morocco.",
        Picture: "/AthletesPic/DSC06823.jpg",
        MoveTrick: null,
    },
    {
        ID: 24,
        Name: "Arradi Abderrahim",
        Age: "29 y.o",
        Description: "This journey has helped me see the world in a different way and has inspired creativity in my lifestyle. My goal is to explore the world through parkour and keep my body moving, no matter where I go. It’s about discovering new perspectives and staying connected to the world around me. Through parkour, I find freedom, creativity, and inspiration every day.",
        Picture: "/AthletesPic/DSC06848.jpg",
        MoveTrick: null,
    },
    {
        ID: 27,
        Name: "Oussama Ait Elmkadem",
        Age: "25 y.o",
        Description: null,
        Picture: "/AthletesPic/DSC07063.jpg",
        MoveTrick: null,
    },
    {
        ID: 28,
        hasStunts: true,
        Name: "Azize Boumane",
        Age: "34 y.o",
        Description: " I’ve been passionate about parkour since 2004, starting at a young age and dedicating myself to mastering the discipline. Over the years, I’ve grown into a coach for parkour and gymnastics, working with clubs at the regional level.",
        Picture: "/AthletesPic/DSC08753.jpg",
        MoveTrick: null,
    },
    {
        ID: 8,
        hasStunts: true,
        Name: "Wassim Boulouk",
        Age: "30 y.o",
        Description: null,
        Picture: "/AthletesPic/DSC06869.jpg",
        MoveTrick: null,
    },
    {
        ID: 30,
        Name: "Ahmed Elfarissi",
        Age: "23 y.o",
        Description: "I am Ahmed Elfarissi from Morocco, living in Marrakech. I am 23 years old and hold a professional license in Topographic Surveying. My hobbies include playing chess and mixing music as a DJ. I have a deep passion for sports, especially parkour, which I began practicing in 2017.",
        Picture: "/AthletesPic/FGF.jpg",
        MoveTrick: null,
    },
    {
        ID: 31,
        Name: "Jalal El Amirri",
        Age: "29 y.o",
        Description: "My name is Jalal El Amirri, and I am from Marrakech. Parkour has always been more than just a sport to me—it was my escape, my safe space, and the purest way to express my love for movement. It kept me away from harmful habits and gave me a purpose, pushing me to constantly improve. Through parkour, I had the incredible opportunity...",
        Picture: "/AthletesPic/rgry.webp",
        MoveTrick: null,
    },
    {
        ID: 32,
        Name: "Akram",
        Age: "19 y.o",
        Description: "My name is Akram. I am 19 years old and a professional freerunner athlete from Marrakesh city. I started practicing parkour professionally in 2021, having practiced it before in 2019, and I currently aspire to reach a better level in this sport.",
        Picture: "/AthletesPic/akram.jpg",
        MoveTrick: null,
    }
];
const Coaches = [
    {
        ID: 19,
        hasStunts: true,
        Name: 'Mohamed Mouraoui',
        Age: '28 y.o',
        Description: "I started parkour at an early age. After years of practice, I became a coach of parkour and gymnastics with clubs at the regional level. Then I started to make my movement in action movies where I became a stuntman and action choreographer. Our community creates a suitable environment for practicing parkour and exchanging information and skills among all the players of this group, especially the new generation.",
        Picture: "/AthletesPic/DSC08756.jpg",
    },
    {
        ID: 8,
        hasStunts: true,
        Name: 'Wassim Boulouk',
        Age: '30 y.o',
        Description: "With over a decade of experience in parkour and movement arts, I am passionate about sharing my knowledge and helping others develop their skills. My approach focuses on building confidence, improving technique, and fostering a supportive community. I believe parkour is not just a physical discipline but a way to overcome challenges both on and off the training ground.",
        Picture: "/AthletesPic/DSC06869.jpg",
    },
    {
        ID: 1,
        Name: 'Es-saidi Saad',
        Age: '23 y.o',
        Description: "I am a sports teacher with a master’s degree in Sport Management at ENCG. I started parkour in 2019 and am now a National professional parkour athlete with a parkour coaching certification. Parkour changed the way I see my lifestyle and made me realise that no matter what your circumstances in life are, you should keep your mind and body balanced between taking risks and controlling them, so you can develop a better version of yourself.",
        Picture: "/AthletesPic/Es-saidi-Saad.jpg",
        MoveTrick: null,
    }
];


const peopleMap = new Map<number, Person>();

// First, add all AthletesPic
AthletesPic.forEach((athlete) => {
    peopleMap.set(athlete.ID, {
        ID: athlete.ID,
        Name: athlete.Name,
        Age: athlete.Age,
        Description: athlete.Description,
        Picture: athlete.Picture,
        Type: 'Athlete',
        hasStunts: athlete.hasStunts
    });
});



// Then, add coaches. If the same ID exists, decide if you want to override or keep the original.
// In this example, we update the entry with the coach information.
Coaches.forEach((coach) => {
    peopleMap.set(coach.ID, {
        ID: coach.ID,
        Name: coach.Name,
        Age: coach.Age,
        Description: coach.Description,
        Picture: coach.Picture,
        Type: 'Coach',
        hasStunts: coach.hasStunts
    });
});


const stunts = [
    { ID: 1, imdbLink: "https://www.imdb.com/name/nm15792124/?ref_=nv_sr_srsg_0_tt_1_nm_7_in_0_q_mouraoui", youtube: null, instagram: null, Name: 'Mohamed Mouraoui', Age: '28 y.o', Description: "I started parkour at an early age. after years of practice I became a coach of parkour and gymnastic with clubs at the regional level. then I started to make my movement on the action movies where I became a stunt man on the movies as a creator action fighting. our community creating suitable environment for practicing parkour and exchanging information and skills among all the players of this group, especially the new generation.", Picture: "/AthletesPic/DSC08756.jpg" },
    {
        ID: 2, imdbLink: "https://www.imdb.com/name/nm15792122/?ref_=nv_sr_srsg_0_tt_0_nm_1_in_0_q_aziz%2520bouman", youtube: null, instagram: null, Name: 'Azize Boumane', Age: '34 y.o', Description: ` My journey also led me to the world of action films, where I’ve had the opportunity to work as a stunt performer and create dynamic action sequences. I’ve been fortunate to collaborate on major productions like" THE SPY" BGHDAD CENTRALE "DE  GAULLE "DUNE PART TWO"LE SALAIRE DE LA PEUR" ARAB SWORDS "... blending my athletic skills with the art of storytelling.  

Beyond my work in film, I’ve helped build a supportive community for parkour enthusiasts, fostering an environment where we can share knowledge and skills, especially with the younger generation. It’s been an incredible journey, and I’m excited to continue pushing the boundaries of what’s possible in both parkour and stunts.`, Picture: "/AthletesPic/DSC08753.jpg", MoveTrick: null
    },
    { ID: 3, imdbLink: "https://www.imdb.com/name/nm12156942/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_wassim%2520boulou", youtube: null, instagram: null, Name: 'Wassim Boulouk', Age: '30 y.o', Description: "Alongside coaching, I have gained extensive experience in the world of cinema as a stunt performer, bringing dynamic action sequences to life. I have had the opportunity to work on major productions such as Alad’2, The Spy on Netflix, and The Octet on Shahid. These experiences have allowed me to merge my athletic background with the art of storytelling, showcasing high-level parkour and stunt work on screen while collaborating with international filmmakers and industry professionals.", Picture: "/AthletesPic/DSC06869.jpg" },
    {
        ID: 5, imdbLink: "https://www.imdb.com/name/nm10374339/?ref_=nv_sr_srsg_0_tt_0_nm_1_in_0_q_Rida%2520Aitoufqir", youtube: null, instagram: null, Name: 'Rida Aitoufqir', Age: "34 y.o", Description: `Rida Aitoufqir, born in 1991,I’m parkour athlete and professional stunt performer in film industry with a science economics and management degrees,I do parkour parkour since 2005 and I started performing stunts in movies since 2013 Featured and performed stunts in renowned TV series and films including prison break 2017, desert warrior, , the wheel of time II , homeland , Godzilla x Kong: The New Empire (2024), Mosul (2019) and Gladiator II (2024) and others ..
        I've worked in more than 45 projects that are filmed in Morocco and outside Morocco and I've been nominated for outstanding stunt performance in Gladiator II in 2025.
        I'm specialist in parkour, martial arts, high falls, swords fights, stunt driving and more .`, Picture: "/AthletesPic/gb.jpg", MoveTrick: null
    },
    { ID: 7, imdbLink: null, youtube: "https://youtube.com/shorts/o-vQThwpc5U?si=j31z6vVEJ6TukRfw", instagram: null, Name: 'Othman Noukrati', Age: '27 y.o', Description: "I started my journey of exploring the world of movement in 10. I was climbing trees and doing the art of displacement. After that, I learned that the parkour community was rather large. Then I started exploring more with Companionship and free running as well in 2014. Until now, I am still a student of movement.", Picture: "/AthletesPic/IMG_2591.JPG" },
    { ID: 8, imdbLink: null, youtube: null, instagram: "https://www.instagram.com/arradiii/", Name: 'Arradi Abderrahim', Age: '29 y.o', Description: "This journey has helped me see the world in a different way and has inspired creativity in my lifestyle.\nMy goal is to explore the world through parkour and keep my body moving, no matter where I go.\nit’s about discovering new perspectives and staying connected to the world around me. Through parkour, I find freedom, creativity, and inspiration every day.", Picture: "/AthletesPic/DSC06848.jpg", MoveTrick: null },
]


// Finally, convert the map back to an array.
const People: Person[] = Array.from(peopleMap.values());

export { stunts };
export default People;