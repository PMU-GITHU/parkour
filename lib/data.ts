export type Person = {
    ID: number;
    Name: string;
    Age: string;
    Description: string | null;
    Picture: string | null;
    Type: 'Athlete' | 'Coach';
};




const athletes = [
    { ID: 1, Name: 'Es-saidi Saad', Age: '23 y.o', Description: "I’m a sports teacher with a master’s degree in Sport management at ENCG.\nI started parkour since 2019, now I’m a National pro parkour athlete with a parkour coaching certification.\nParkour, changed the way I see my lifestyle and made me realise that no matter what are your circumstances in your life you should keep your mind and your body balanced between taking risk and controlling it, so you can develop a better version of yourself.", Picture: "/athletes/Es-saidi Saad.JPG", MoveTrick: null },
    { ID: 2, Name: 'Abderrahmane Lafraigui', Age: '17 y.o', Description: "I am a 17-year-old athlete from the vibrant city of Marrakech, known as the 'Red City.' I started practicing parkour in 2020, and it has become an essential part of my life. Parkour has not only helped me grow physically but has also shaped my mindset, allowing me to see life from a new perspective. This sport is a significant part of who I am, and it will always remain that way.", Picture: "/athletes/DSC06860.JPG", MoveTrick: null },
    { ID: 3, Name: 'Adnane Assou', Age: '26 y.o', Description: "I'm passionate about parkour. I've been practicing for seven years, dedicating myself to training hard and mastering new movements. Parkour isn't just a sport for me; it's a way of life that I approach with love and dedication. It has transformed me, making me stronger, more energetic, and fearless. Through parkour, I've learned to push my limits and embrace challenges with confidence.", Picture: "/athletes/DSC08537.JPG", MoveTrick: null },
    { ID: 4, Name: 'Hamza Boulghassoul', Age: '23 y.o', Description: "I started practicing parkour in 2013, but only sporadically until 2017, when I continued consistently.\nWhenever I watched action movies, I felt an intense excitement, so strong that I wanted to do something similar at that very moment.\nOver time, I discovered parkour, and I found what I've been looking for: I was always drawn to dangerous moves.", Picture: "/athletes/DSC07046.JPG", MoveTrick: null },
    { ID: 5, Name: 'Lehcen', Age: '19 y.o', Description: "I started this sport when I was 14 years old. My goal in this sport is to express my creativity and skills through it. For me, parkour is not just a sport, but rather an art.", Picture: null, MoveTrick: null },
    { ID: 6, Name: 'Zouhair souhaimi', Age: '25 y.o', Description: "I start parkour at 14 years old i was good one in Marrakech but i full in a problem I broke my shoulder in double front side and I told to myself I never trining parkour again but now when I meet new friends he give me motivation", Picture: "/athletes/DSC06811.JPG", MoveTrick: null },
    { ID: 7, Name: 'Othman Noukrati', Age: '27 y.o', Description: "I started my journey of exploring the world of movement in 10. I was climbing trees and doing the art of displacement. After that, I learned that the parkour community was rather large. Then I started exploring more with Companionship and free running as well in 2014. Until now, I am still a student of movement.", Picture: "/athletes/DSC08370.JPG", MoveTrick: null },
    { ID: 29, Name: 'Saad', Age: '19 y.o', Description: "I started practicing parkour when I was 10. Parkour has been a big part of my life, as it combines fun, creativity, and constant challenges. My main goals are to enjoy the sport, master new tricks, and eventually compete in competitions. For me, parkour isn’t just about movement—it’s about pushing limits and embracing freedom", Picture: null, MoveTrick: null },
    { ID: 9, Name: 'youssef morhi', Age: '18 y.o', Description: "I started parkour in 2023. Parkour mean for me my escape from stress and pressures of life, It is the only thing I enjoy and feel at home doing. My goal in this sport is to reach a professional level and participate in international championships.", Picture: "/athletes/DSC08365.JPG", MoveTrick: null },
    { ID: 10, Name: 'Yahya Lahiani', Age: '16 y.o', Description: "I started practicing parkour in 2016. My goal is to master this sport and one day capture a scene or look like a movie with a movie. Parkour means a lot to me. It is a sport in which you find peace and every time que j'apprends quelquechoose de nouveau, I feel that my progress is more important than others. dans ce sport", Picture: "/athletes/DSC06835.JPG", MoveTrick: null },
    { ID: 11, Name: 'Abderrahmane Ezzouine', Age: '15 y.o', Description: "I am a student. I started parkour at the age of eleven, and I love it very much because it represents freedom and overcoming all obstacles in this life, as I gain self-confidence and a strong personality. My goal is to build a strong mind in a strong body.", Picture: "/athletes/DSC07052.JPG", MoveTrick: null },
    { ID: 12, Name: 'Azeddine', Age: '28 y.o', Description: "I am an adventure enthusiast, and parkour has been my passion since childhood. I found in this sport everything I seek in terms of fun and excitement, which gives me psychological and emotional comfort. Parkour is not just a sport; it’s a community that includes friends of a special kind. I had to step away from parkour for a while due to personal circumstances, but I always felt like something was missing. When I returned, it was better than ever thanks to the organization and the number of participants. I love this feeling, and I send a special greeting to all the friends who share this passion with me!", Picture: "/athletes/DSC07082.JPG", MoveTrick: null },
    { ID: 13, Name: 'Adam Mars', Age: '15 y.o', Description: "I'm a student I was born in Marrakesh city I started practicing parkour since 2021. Parkour is not just a sports for me but a lifestyle and a mindset although the risks that may affect me my love and passion for it will never change", Picture: "/athletes/DSC06814.JPG", MoveTrick: null },
    { ID: 14, Name: 'hind ourta', Age: '22 y.o', Description: "I started parkour in 2021, I'm among the 6 or 7 girls who practice this sport in Morocco it’s considered a difficult and complex sport despite the difficulties I have to develop myself in this sport it is my only outlet and I will continue my way in it ncha2lllh.", Picture: "/athletes/DSC06837.JPG", MoveTrick: null },
    { ID: 15, Name: 'Taha Kasfi', Age: '25 y.o', Description: "I own a business + I work as a life guard in a hotel, I started parkour in 2010 then stopped in 2016 to start skateboarding then back to parkour again in 2024 because why not (always looking for that adrenaline rush that's the main reason I do this shit, and I love it).", Picture: "/athletes/DSC06832.JPG", MoveTrick: null },
    { ID: 16, Name: 'Aiden soumman', Age: '23 y.o', Description: "I started parkour in 2021 I’m one of the best athletes in Marrakech/Morocco\nParkour/ freerunning is my life I couldn’t breathe without it I love this sport even though it’s dangerous but I love it cause not so many people can train it I wish the best to everyone I want to see everyone in a good level unshalah good luck guys", Picture: "/athletes/DSC07042.JPG", MoveTrick: null },
    { ID: 17, Name: 'Eyup Bomlik', Age: '15 y.o', Description: "Coming from the Red City in Morocco, parkour player\nParkour has always been my favorite among all the sports I've played, It allows you to meet very crazy, well-mannered and hospitable people around the world.", Picture: "/athletes/DSC07069.JPG", MoveTrick: null },
    { ID: 18, Name: 'Abderrahmane Bouhrim', Age: '21 y.o', Description: "Coming from The red city in Morocco a parkour and freerunning athlete since 2015, A cinematographer/ photographer and bachelor student in business administration from Cyprus.\nParkour has always been the favourite among all sports I’ve practiced, lets u meet up with very crazy well mannered and hospitable people around the world.", Picture: "/athletes/DSC06852.JPG", MoveTrick: null },
    { ID: 19, Name: 'Mohamed Mouraoui', Age: '28 y.o', Description: "I started parkour at an early age. after years of practice I became a coach of parkour and gymnastic with clubs at the regional level. then I started to make my movement on the action movies where I became a stunt man on the movies as a creator action fighting. our community creating suitable environment for practicing parkour and exchanging information and skills among all the players of this group, especially the new generation.", Picture: "/athletes/DSC08756.JPG", MoveTrick: null },
    { ID: 20, Name: 'AZIZ ZOUGARI', Age: '16 y.o', Description: "I started practicing parkour in 2022. For me, parkour is not just about movements; it is a way of life and a mindset for overcoming obstacles in a smooth way.", Picture: "/athletes/DSC06829.JPG", MoveTrick: null },
    { ID: 21, Name: 'Abdel Moghit', Age: '18 y.o', Description: "I start parkour since 2023 and I love Experiences who involve adrenaline and one of it is parkour , parkour isn't just a sport it’s a life stayl and my gol from parkour is to improve my skills and to be happy couse parkour make me happy.", Picture: "/athletes/DSC08366.JPG", MoveTrick: null },
    { ID: 22, Name: 'abdelhakim nasyb', Age: '22 y.o', Description: "I start I don’t know nothing about parkour and now I’m professional athlete and my dream to be coach of parkour someday and training with kids and learning more about this sport parkour show many things in my life and he’s changing my life forever I feel not like others and I’m so happy at my life to have this sport and the last word I want change Moroccan mind people about parkour it’s not criminal it’s a new sport with ne", Picture: "/athletes/DSC06823.JPG", MoveTrick: null },
    { ID: 23, Name: 'Hamza Tahani', Age: '26 y.o', Description: "I started parkour in 2010, and from the very first time I tried it, I felt like I was in love with this sport. When I practice parkour, I feel freedom, peace, and energy. For me, parkour is not just a sport, it’s a part of my life and everything to me. It taught me how to face fear, be patient, and trust myself. This sport has changed the way I think and made me see life from a new perspective. I dream of reaching an international level and sharing this passion with others.", Picture: null, MoveTrick: null },
    { ID: 24, Name: 'Arradi Abderrahim', Age: '29 y.o', Description: "This journey has helped me see the world in a different way and has inspired creativity in my lifestyle.\nMy goal is to explore the world through parkour and keep my body moving, no matter where I go.\nit’s about discovering new perspectives and staying connected to the world around me. Through parkour, I find freedom, creativity, and inspiration every day.", Picture: "/athletes/DSC06848.JPG", MoveTrick: null },
    { ID: 25, Name: 'Abdelmaoula', Age: '20 y.o', Description: "I originally started discovering Parkour in early 2017 as I got fascinated with the sport through various athletes on YouTube that time, so I continued my journey to learn and emprove until I got hit with some discouraging from my parents. But in 2022 I met one of Marrakech pro athletes just for him to know I was doing it before and helped me regain the interst again and my goals now are to show people that if want to become what you want nobody will stop you, and to engage more with the community and help others to pursue their dreams of becoming pro.", Picture: null, MoveTrick: null },
    { ID: 26, Name: 'Hamza Rimi', Age: '23 y.o', Description: null, Picture: "/athletes/DSC06864.JPG", MoveTrick: null },
    { ID: 27, Name: 'Oussama Ait Elmkadem', Age: '25 y.o', Description: null, Picture: "/athletes/DSC07063.JPG", MoveTrick: null },
    { ID: 28, Name: 'Azize Boumane', Age: '34 y.o', Description: null, Picture: "/athletes/DSC08753.JPG", MoveTrick: null },
    { ID: 8, Name: 'Wassim Boulouk', Age: '30 y.o', Description: null, Picture: "/athletes/DSC06869.JPG", MoveTrick: null }
];


const Coaches = [
    { ID: 19, Name: 'Mohamed Mouraoui', Age: '28 y.o', Description: "I started parkour at an early age. after years of practice I became a coach of parkour and gymnastic with clubs at the regional level. then I started to make my movement on the action movies where I became a stunt man on the movies as a creator action fighting. our community creating suitable environment for practicing parkour and exchanging information and skills among all the players of this group, especially the new generation.", Picture: "/athletes/DSC08756.JPG" },
    { ID: 8, Name: 'Wassim Boulouk', Age: '30 y.o', Description: "With over a decade of experience in parkour and movement arts, I'm passionate about sharing my knowledge and helping others develop their skills. My approach focuses on building confidence, improving technique, and fostering a supportive community. I believe parkour is not just a physical discipline but a way to overcome challenges both on and off the training ground.", Picture: "/athletes/DSC06869.JPG" }
    , { ID: 29, Name: 'Saad', Age: '19 y.o', Description: "I started practicing parkour when I was 10. Parkour has been a big part of my life, as it combines fun, creativity, and constant challenges. My main goals are to enjoy the sport, master new tricks, and eventually compete in competitions. For me, parkour isn't just about movement—it's about pushing limits and embracing freedom", Picture: null },
];



const peopleMap = new Map<number, Person>();

// First, add all athletes
athletes.forEach((athlete) => {
    peopleMap.set(athlete.ID, {
        ID: athlete.ID,
        Name: athlete.Name,
        Age: athlete.Age,
        Description: athlete.Description,
        Picture: athlete.Picture,
        Type: 'Athlete'
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
        Type: 'Coach'
    });
});

// Finally, convert the map back to an array.
const People: Person[] = Array.from(peopleMap.values());

export default People;