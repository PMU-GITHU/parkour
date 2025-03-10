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
        Description:
            "Saad is a sports teacher and certified parkour coach.  Since 2019, parkour has been his passion, teaching him to balance risk and control for self-improvement. He is now a National pro parkour athlete.",
        Picture: "/AthletesPic/Es-saidi-Saad.jpg",
        MoveTrick: null,
    },
    {
        ID: 2,
        Name: "Abderrahmane Lafraigui",
        Age: "17 y.o",
        Description:
            "This Marrakech native has been dedicated to parkour since 2020. For Abderrahmane, parkour is more than a sport; it's a way of life that has shaped his perspective and helped him grow, both physically and mentally.",
        Picture: "/AthletesPic/DSC06860.jpg",
        MoveTrick: null,
    },
    {
        ID: 3,
        Name: "Adnane Assou",
        Age: "26 y.o",
        Description:
            "Adnane is a devoted parkour enthusiast with seven years of experience. He sees parkour as a transformative way of life, building strength, energy, and fearlessness. His goal is to constantly master new movements and push his limits.",
        Picture: "/AthletesPic/DSC08537.jpg",
        MoveTrick: null,
    },
    {
        ID: 4,
        Name: "Hamza Boulghassoul",
        Age: "23 y.o",
        Description:
            "Drawn to daring feats since childhood, Hamza found his passion in parkour in 2013, training consistently since 2017. He was inspired by action movies and sought a similar thrill, which he discovered through parkour's challenging moves.",
        Picture: "/AthletesPic/DSC07046.jpg",
        MoveTrick: null,
    },
    {
        ID: 6,
        Name: "Zouhair souhaimi",
        Age: "25 y.o",
        Description:
            "Zouhair started parkour at 14 and was a promising traceur in Marrakech. After a shoulder injury, he thought he would never train again, but new friends inspired him to return to the sport.",
        Picture: "/AthletesPic/DSC06811.jpg",
        MoveTrick: null,
    },
    {
        ID: 7,
        hasStunts: true,
        Name: "Othman Noukrati",
        Age: "27 y.o",
        Description:
            "Othman has been exploring movement since he was 10 years old, beginning with climbing trees. Discovering the parkour community in 2014, he became a student of movement, embracing both parkour and free running.",
        Picture: "/AthletesPic/DSC08370.jpg",
        MoveTrick: null,
    },

    {
        ID: 9,
        Name: "youssef morhi",
        Age: "18 y.o",
        Description:
            "Youssef started parkour in 2023 as a way to relieve stress and find enjoyment. His goal is to reach a professional level and compete internationally.",
        Picture: "/AthletesPic/DSC08365.jpg",
        MoveTrick: null,
    },
    {
        ID: 10,
        Name: "Yahya Lahiani",
        Age: "16 y.o",
        Description:
            "Yahya began his parkour journey in 2016. He aspires to master the sport and capture cinematic-quality movements. Parkour gives him a sense of peace and progress.",
        Picture: "/AthletesPic/DSC06835.jpg",
        MoveTrick: null,
    },
    {
        ID: 11,
        Name: "Abderrahmane Ezzouine",
        Age: "15 y.o",
        Description:
            "Abderrahmane started parkour at age 11. He loves it for the freedom it represents and its ability to overcome obstacles. His goal is to build a strong mind in a strong body.",
        Picture: "/AthletesPic/DSC07052.jpg",
        MoveTrick: null,
    },
    {
        ID: 12,
        Name: "Azeddine",
        Age: "28 y.o",
        Description:
            "Azeddine is an adventure enthusiast who has been passionate about parkour since childhood. He values the fun, excitement, community, and camaraderie the sport provides.",
        Picture: "/AthletesPic/DSC07082.jpg",
        MoveTrick: null,
    },
    {
        ID: 13,
        Name: "Adam Mars",
        Age: "15 y.o",
        Description:
            "Adam, a student from Marrakesh, has been practicing parkour since 2021. He considers it a lifestyle and mindset, embracing the risks for the love of the sport.",
        Picture: "/AthletesPic/DSC06814.jpg",
        MoveTrick: null,
    },
    {
        ID: 14,
        Name: "hind ourta",
        Age: "22 y.o",
        Description:
            "Hind started parkour in 2021 and is one of the few women practicing the sport in Morocco. Despite the challenges, it is her outlet, and she is determined to continue to improve.",
        Picture: "/AthletesPic/DSC06837.jpg",
        MoveTrick: null,
    },
    {
        ID: 15,
        Name: "Taha Kasfi",
        Age: "25 y.o",
        Description:
            "Taha owns a business and works as a lifeguard. He initially started parkour in 2010, then switched to skateboarding, and returned to parkour in 2024 for the adrenaline rush he loves.",
        Picture: "/AthletesPic/DSC06832.jpg",
        MoveTrick: null,
    },
    {
        ID: 16,
        Name: "Aiden soumman",
        Age: "23 y.o",
        Description:
            "Aiden started parkour in 2021 and considers parkour/freerunning his life. He feels he cannot live without it, despite its dangers, and wishes the best for everyone in the sport.",
        Picture: "/AthletesPic/DSC07042.jpg",
        MoveTrick: null,
    },
    {
        ID: 17,
        Name: "Eyup Bomlik",
        Age: "15 y.o",
        Description:
            "Coming from Marrakech, Eyup considers parkour his favorite sport. He appreciates the people he meets through it, who are crazy, well-mannered, and hospitable.",
        Picture: "/AthletesPic/DSC07069.jpg",
        MoveTrick: null,
    },
    {
        ID: 18,
        Name: "Abderrahmane Bouhrim",
        Age: "21 y.o",
        Description:
            "Abderrahmane, from Marrakech, has been a parkour and freerunning athlete since 2015. He is also a cinematographer/photographer and business student. He enjoys the people he meets through parkour.",
        Picture: "/AthletesPic/DSC06852.jpg",
        MoveTrick: null,
    },
    {
        ID: 19,
        hasStunts: true,
        Name: "Mohamed Mouraoui",
        Age: "28 y.o",
        Description:
            "Mohamed started parkour at an early age and became a parkour and gymnastics coach. He transitioned to action movies as a stuntman and action choreographer. He helps create a supportive environment for parkour practice.",
        Picture: "/AthletesPic/DSC08756.jpg",
        MoveTrick: null,
    },
    {
        ID: 20,
        Name: "AZIZ ZOUGARI",
        Age: "16 y.o",
        Description:
            "Aziz started practicing parkour in 2022. To him, parkour is a way of life and a mindset for overcoming obstacles smoothly.",
        Picture: "/AthletesPic/DSC06829.jpg",
        MoveTrick: null,
    },
    {
        ID: 21,
        Name: "Abdel Moghit",
        Age: "18 y.o",
        Description:
            "Abdel Moghit started parkour in 2023 and loves the adrenaline rush it provides. Parkour is a lifestyle that improves his skills and brings him happiness.",
        Picture: "/AthletesPic/DSC08366.jpg",
        MoveTrick: null,
    },
    {
        ID: 22,
        Name: "abdelhakim nasyb",
        Age: "22 y.o",
        Description:
            "Abdelhakim transformed from knowing nothing about parkour to becoming a professional athlete. He dreams of coaching and changing the perception of parkour in Morocco.",
        Picture: "/AthletesPic/DSC06823.jpg",
        MoveTrick: null,
    },

    {
        ID: 24,
        Name: "Arradi Abderrahim",
        Age: "29 y.o",
        Description:
            "This journey has helped me see the world in a different way and has inspired creativity in my lifestyle.\nMy goal is to explore the world through parkour and keep my body moving, no matter where I go.\nit’s about discovering new perspectives and staying connected to the world around me. Through parkour, I find freedom, creativity, and inspiration every day.",
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
        Description: null,
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
        "ID": 30,
        "Name": "Ahmed Elfarissi",
        "Age": "23 y.o",
        "Description": "I am Ahmed Elfarissi from Morocco, living in Marrakech. I’m 23 years old and hold a professional license in Topographic Surveying. My hobbies include playing chess and mixing music as a DJ. I have a deep passion for sports, especially parkour, which I began practicing in 2017",
        "Picture": "/AthletesPic/FGF.jpg",
        "Move/Trick": null,
    },
    {
        "ID": 31,
        "Name": "Jalal El Amirri",
        "Age": "29 y.o",
        "Description": "My name is Jalal El Amirri, and I’m from Marrakech.\nParkour has always been more than just a sport to me—it was my escape,\nmy safe space, and the purest way to express my love for movement.\nIt kept me away from harmful habits and gave me a purpose,\npushing me to constantly improve.\nThrough parkour, I had the incredible oppo",
        "Picture": "/AthletesPic/rgry.webp",
        "Move/Trick": null,
    },
    {
        ID: 32,
        Name: "Akram ",
        Age: "19 y.o",
        Description: "My name is Akram I have 19 years old and I’m a pro freeruner athlete from Marrakesh city I started practicing parkour professionally in 2021, knowing that I had been practicing it before in 2019, and I currently aspire to reach a better level in this sport.",
        Picture: "/AthletesPic/akram.jpg",
        MoveTrick: null,
    }
];


const Coaches = [
    { ID: 19, hasStunts: true, Name: 'Mohamed Mouraoui', Age: '28 y.o', Description: "I started parkour at an early age. after years of practice I became a coach of parkour and gymnastic with clubs at the regional level. then I started to make my movement on the action movies where I became a stunt man on the movies as a creator action fighting. our community creating suitable environment for practicing parkour and exchanging information and skills among all the players of this group, especially the new generation.", Picture: "/AthletesPic/DSC08756.jpg" },
    { ID: 8, hasStunts: true, Name: 'Wassim Boulouk', Age: '30 y.o', Description: "With over a decade of experience in parkour and movement arts, I'm passionate about sharing my knowledge and helping others develop their skills. My approach focuses on building confidence, improving technique, and fostering a supportive community. I believe parkour is not just a physical discipline but a way to overcome challenges both on and off the training ground.", Picture: "/AthletesPic/DSC06869.jpg" },
    { ID: 1, Name: 'Es-saidi Saad', Age: '23 y.o', Description: "I’m a sports teacher with a master’s degree in Sport management at ENCG.\nI started parkour since 2019, now I’m a National pro parkour athlete with a parkour coaching certification.\nParkour, changed the way I see my lifestyle and made me realise that no matter what are your circumstances in your life you should keep your mind and your body balanced between taking risk and controlling it, so you can develop a better version of yourself.", Picture: "/AthletesPic/Es-saidi-Saad.jpg", MoveTrick: null },
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
    { ID: 2, imdbLink: "https://www.imdb.com/name/nm15792122/?ref_=nv_sr_srsg_0_tt_0_nm_1_in_0_q_aziz%2520bouman", youtube: null, instagram: null, Name: 'Azize Boumane', Age: '34 y.o', Description: null, Picture: "/AthletesPic/DSC08753.jpg", MoveTrick: null },
    { ID: 3, imdbLink: "https://www.imdb.com/name/nm12156942/?ref_=nv_sr_srsg_0_tt_0_nm_8_in_0_q_wassim%2520boulou", youtube: null, instagram: null, Name: 'Wassim Boulouk', Age: '30 y.o', Description: "Alongside coaching, I have gained extensive experience in the world of cinema as a stunt performer, bringing dynamic action sequences to life. I have had the opportunity to work on major productions such as Alad’2, The Spy on Netflix, and The Octet on Shahid. These experiences have allowed me to merge my athletic background with the art of storytelling, showcasing high-level parkour and stunt work on screen while collaborating with international filmmakers and industry professionals.", Picture: "/AthletesPic/DSC06869.jpg" },
     {
        ID: 5, imdbLink: "https://www.imdb.com/name/nm10374339/?ref_=nv_sr_srsg_0_tt_0_nm_1_in_0_q_Rida%2520Aitoufqir", youtube: null, instagram: null, Name: 'Rida Aitoufqir', Age: "34 y.o", Description: `Rida Aitoufqir, born in 1991,I’m parkour athlete and professional stunt performer in film industry with a science economics and management degrees,I do parkour parkour since 2005 and I started performing stunts in movies since 2013 Featured and performed stunts in renowned TV series and films including prison break 2017, desert warrior, , the wheel of time II , homeland , Godzilla x Kong: The New Empire (2024), Mosul (2019) and Gladiator II (2024) and others ..
        I've worked in more than 45 projects that are filmed in Morocco and outside Morocco and I've been nominated for outstanding stunt performance in Gladiator II in 2025.
        I'm specialist in parkour, martial arts, high falls, swords fights, stunt driving and more .`, Picture: "/AthletesPic/gb.jpg", MoveTrick: null
    },
     { ID: 7, imdbLink: null, youtube: "https://youtube.com/shorts/o-vQThwpc5U?si=j31z6vVEJ6TukRfw", instagram: null, Name: 'Othman Noukrati', Age: '27 y.o', Description: "I started my journey of exploring the world of movement in 10. I was climbing trees and doing the art of displacement. After that, I learned that the parkour community was rather large. Then I started exploring more with Companionship and free running as well in 2014. Until now, I am still a student of movement.", Picture: "/AthletesPic/DSC08370.jpg" },
    { ID: 8, imdbLink: null, youtube: null, instagram: "https://www.instagram.com/arradiii/", Name: 'Arradi Abderrahim', Age: '29 y.o', Description: "This journey has helped me see the world in a different way and has inspired creativity in my lifestyle.\nMy goal is to explore the world through parkour and keep my body moving, no matter where I go.\nit’s about discovering new perspectives and staying connected to the world around me. Through parkour, I find freedom, creativity, and inspiration every day.", Picture: "/AthletesPic/DSC06848.jpg", MoveTrick: null },
]


// Finally, convert the map back to an array.
const People: Person[] = Array.from(peopleMap.values());

export { stunts };
export default People;