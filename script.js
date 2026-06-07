// Detaljni podaci o anatomiji
const anatomyData = {
    "skull": {
        "title": "Lubanja",
        "latin": "Cranium",
        "description": "Lubanja (cranium) je koštani okvir glave koji štiti mozak i osjetilne organe. Sastoji se od 22 kosti koje su međusobno povezane šavovima (suturae). Lubanja se dijeli na neurocranium (koji štiti mozak) i viscerocranium (koštani okvir lica).",
        "details": {
            "bones": [
                {"name": "Čeona kost", "latin": "Os frontale"},
                {"name": "Tjemena kost", "latin": "Os parietale"},
                {"name": "Zatiljna kost", "latin": "Os occipitale"},
                {"name": "Sljepoočna kost", "latin": "Os temporale"},
                {"name": "Klinasta kost", "latin": "Os sphenoidale"},
                {"name": "Rešetkasta kost", "latin": "Os ethmoidale"},
                {"name": "Gornja čeljust", "latin": "Maxilla"},
                {"name": "Donja čeljust", "latin": "Mandibula"}
            ],
            "regions": [
                {"name": "Čeoni režanj", "latin": "Lobus frontalis"},
                {"name": "Tjemeni režanj", "latin": "Lobus parietalis"},
                {"name": "Zatiljni režanj", "latin": "Lobus occipitalis"},
                {"name": "Sljepoočni režanj", "latin": "Lobus temporalis"}
            ],
            "openings": [
                {"name": "Foramen magnum", "latin": "Za produženu moždinu"},
                {"name": "Optički kanal", "latin": "Canalis opticus"},
                {"name": "Unutarnji slušni kanal", "latin": "Meatus acusticus internus"}
            ]
        }
    },
    "jaw": {
        "title": "Donja čeljust",
        "latin": "Mandibula",
        "description": "Donja čeljust (mandibula) je najjača i jedina pokretna kost lica. Sastoji se od tijela (corpus mandibulae) i dvije grane (rami mandibulae). Na mandibuli se nalaze zubne alveole za donje zube i temporomandibularni zglob koji omogućava žvakanje i govor.",
        "details": {
            "parts": [
                {"name": "Tijelo mandibule", "latin": "Corpus mandibulae"},
                {"name": "Grana mandibule", "latin": "Ramus mandibulae"},
                {"name": "Kut mandibule", "latin": "Angulus mandibulae"},
                {"name": "Vrh mandibule", "latin": "Processus coronoideus"},
                {"name": "Zglobni nastavak", "latin": "Processus condylaris"}
            ],
            "muscles": [
                {"name": "Žvačni mišić", "latin": "Musculus masseter"},
                {"name": "Sljepoočni mišić", "latin": "Musculus temporalis"},
                {"name": "Unutarnji krilasti mišić", "latin": "Musculus pterygoideus medialis"},
                {"name": "Vanjski krilasti mišić", "latin": "Musculus pterygoideus lateralis"}
            ],
            "nerves": [
                {"name": "Donjočeljusni živac", "latin": "Nervus mandibularis"},
                {"name": "Živac za žvačne mišiće", "latin": "Nervus massetericus"}
            ]
        }
    },
    "spine": {
        "title": "Kralježnica",
        "latin": "Columna vertebralis",
        "description": "Kralježnica je osnovna potporna struktura tijela, sastavljena od 33-34 kralješka (vertebrae). Dijeli se na vratni (7), prsni (12), slabinski (5), krstačni (5 sraslih) i trtični dio (4-5 sraslih). Kralježnica štiti leđnu moždinu i omogućava pokretljivost trupa.",
        "details": {
            "regions": [
                {"name": "Vratni kralješci", "latin": "Vertebrae cervicales (C1-C7)"},
                {"name": "Prsni kralješci", "latin": "Vertebrae thoracicae (Th1-Th12)"},
                {"name": "Slabinski kralješci", "latin": "Vertebrae lumbales (L1-L5)"},
                {"name": "Krstačni kralješci", "latin": "Vertebrae sacrales (S1-S5)"},
                {"name": "Trtični kralješci", "latin": "Vertebrae coccygeae (Co1-Co4)"}
            ],
            "parts": [
                {"name": "Tijelo kralješka", "latin": "Corpus vertebrae"},
                {"name": "Luk kralješka", "latin": "Arcus vertebrae"},
                {"name": "Nastavak za mišiće", "latin": "Processus spinosus"},
                {"name": "Poprečni nastavak", "latin": "Processus transversus"},
                {"name": "Zglobni nastavci", "latin": "Processus articulares"}
            ],
            "discs": [
                {"name": "Međukralješni disk", "latin": "Discus intervertebralis"},
                {"name": "Želatinozna jezgra", "latin": "Nucleus pulposus"},
                {"name": "Vlaknasti prsten", "latin": "Anulus fibrosus"}
            ]
        }
    },
    "ribcage": {
        "title": "Prsni koš",
        "latin": "Thorax",
        "description": "Prsni koš čine prsna kost (sternum), rebra (costae) i prsni kralješci. Sastoji se od 12 pari rebara koja se dijele na prava rebra (1-7), lažna rebra (8-10) i slobodna rebra (11-12). Prsni koš štiti vitalne organe poput srca i pluća.",
        "details": {
            "bones": [
                {"name": "Prsna kost", "latin": "Sternum"},
                {"name": "Rebra (12 pari)", "latin": "Costae"},
                {"name": "Prsni kralješci", "latin": "Vertebrae thoracicae"}
            ],
            "rib_types": [
                {"name": "Prava rebra", "latin": "Costae verae (1-7)"},
                {"name": "Lažna rebra", "latin": "Costae spuriae (8-10)"},
                {"name": "Slobodna rebra", "latin": "Costae fluctuantes (11-12)"}
            ],
            "joints": [
                {"name": "Sternokostalni zglobovi", "latin": "Articulationes sternocostales"},
                {"name": "Kostovertebralni zglobovi", "latin": "Articulationes costovertebrales"}
            ]
        }
    },
    "pelvis": {
        "title": "Zdjelica",
        "latin": "Pelvis",
        "description": "Zdjelica je koštani prsten koji povezuje trup s donjim ekstremitetima. Sastoji se od dvije zdjelične kosti (os coxae), križne kosti (os sacrum) i trtične kosti (os coccygis). Ženska zdjelica je šira i plića od muške radi poroda.",
        "details": {
            "bones": [
                {"name": "Zdjelična kost", "latin": "Os coxae"},
                {"name": "Križna kost", "latin": "Os sacrum"},
                {"name": "Trtična kost", "latin": "Os coccygis"}
            ],
            "pelvic_bones": [
                {"name": "Sjedna kost", "latin": "Os ischii"},
                {"name": "Bojna kost", "latin": "Os pubis"},
                {"name": "Čeonokrižna kost", "latin": "Os ilium"}
            ],
            "landmarks": [
                {"name": "Zdjelični rub", "latin": "Margo pelvis"},
                {"name": "Veliki sjedni otvor", "latin": "Foramen ischiadicum majus"},
                {"name": "Mali sjedni otvor", "latin": "Foramen ischiadicum minus"}
            ]
        }
    },
    "clavicle": {
        "title": "Ključna kost",
        "latin": "Clavicula",
        "description": "Ključna kost je duga, S-oblikovana kost koja spaja prsnu kost s ramenom. To je jedina duga kost koja leži horizontalno. Ključna kost služi kao potpora za rame i omogućava širok raspon pokreta ruke.",
        "details": {
            "parts": [
                {"name": "Središnji dio", "latin": "Corpus claviculae"},
                {"name": "Prsni kraj", "latin": "Extremitas sternalis"},
                {"name": "Rameni kraj", "latin": "Extremitas acromialis"}
            ],
            "joints": [
                {"name": "Sternoklavikularni zglob", "latin": "Articulatio sternoclavicularis"},
                {"name": "Akromioklavikularni zglob", "latin": "Articulatio acromioclavicularis"}
            ],
            "muscles": [
                {"name": "Prsno-ključno-sisasti mišić", "latin": "Musculus sternocleidomastoideus"},
                {"name": "Trapezni mišić", "latin": "Musculus trapezius"},
                {"name": "Deltasti mišić", "latin": "Musculus deltoideus"}
            ]
        }
    },
    "humerus": {
        "title": "Nadlaktična kost",
        "latin": "Humerus",
        "description": "Nadlaktična kost je najduža kost gornjeg ekstremiteta. Proksimalni kraj tvori glavu koja se uklapa u lopaticu, a distalni kraj tvori zglob s podlaktičnim kosti. Na humerusu se hvataju brojni mišići ruke.",
        "details": {
            "parts": [
                {"name": "Glava humerusa", "latin": "Caput humeri"},
                {"name": "Vrat humerusa", "latin": "Collum humeri"},
                {"name": "Tijelo humerusa", "latin": "Corpus humeri"},
                {"name": "Medijalni epikondil", "latin": "Epicondylus medialis"},
                {"name": "Lateralni epikondil", "latin": "Epicondylus lateralis"}
            ],
            "joints": [
                {"name": "Ramenski zglob", "latin": "Articulatio humeri"},
                {"name": "Lakatni zglob", "latin": "Articulatio cubiti"}
            ],
            "muscles": [
                {"name": "Nadlaktični mišić", "latin": "Musculus biceps brachii"},
                {"name": "Nadlaktični troglavi mišić", "latin": "Musculus triceps brachii"},
                {"name": "Nadlaktični mišić", "latin": "Musculus brachialis"}
            ]
        }
    },
    "radius-ulna": {
        "title": "Podlaktične kosti",
        "latin": "Radius et Ulna",
        "description": "Podlaktice čine dvije kosti: palčana kost (radius) i lakatna kost (ulna). Radius je lateralnija i kraća kost, dok je ulna medijalnija i duža. Ove kosti omogućavaju rotaciju podlaktice (supinacija i pronacija).",
        "details": {
            "bones": [
                {"name": "Palčana kost", "latin": "Radius"},
                {"name": "Lakatna kost", "latin": "Ulna"}
            ],
            "parts": [
                {"name": "Glava palčane kosti", "latin": "Caput radii"},
                {"name": "Vrat palčane kosti", "latin": "Collum radii"},
                {"name": "Lakatni nastavak", "latin": "Olecranon"},
                {"name": "Vršni nastavak", "latin": "Processus coronoideus"}
            ],
            "movements": [
                {"name": "Supinacija", "latin": "Okretanje dlanom prema gore"},
                {"name": "Pronacija", "latin": "Okretanje dlanom prema dolje"}
            ]
        }
    },
    "hand": {
        "title": "Šaka",
        "latin": "Manus",
        "description": "Šaka se sastoji od zapešća (carpus), dlanja (metacarpus) i prstiju (digiti manus). Zapešće čini 8 kosti u dva reda, dlanje 5 kostiju, a prsti 14 kostiju. Šaka omogućava precizne pokrete i fine motorne sposobnosti.",
        "details": {
            "regions": [
                {"name": "Zapešće (8 kostiju)", "latin": "Carpus"},
                {"name": "Dlanje (5 kostiju)", "latin": "Metacarpus"},
                {"name": "Prsti (14 kostiju)", "latin": "Digiti manus"}
            ],
            "carpal_bones": [
                {"name": "Čunasta kost", "latin": "Os scaphoideum"},
                {"name": "Polumjesečasta kost", "latin": "Os lunatum"},
                {"name": "Trokutasta kost", "latin": "Os triquetrum"},
                {"name": "Grabeljasta kost", "latin": "Os pisiforme"},
                {"name": "Trapezna kost", "latin": "Os trapezium"},
                {"name": "Trapezasta kost", "latin": "Os trapezoideum"},
                {"name": "Glavičasta kost", "latin": "Os capitatum"},
                {"name": "Kukasta kost", "latin": "Os hamatum"}
            ]
        }
    },
    "femur": {
        "title": "Natkoljenična kost",
        "latin": "Femur",
        "description": "Natkoljenična kost (femur) je najduža, najjača i najteža kost u ljudskom tijelu. Proksimalni kraj tvori glavu koja se uklapa u zdjelicu, a distalni kraj tvori koljenski zglob. Femur nosi cijelu težinu gornjeg dijela tijela.",
        "details": {
            "parts": [
                {"name": "Glava femura", "latin": "Caput femoris"},
                {"name": "Vrat femura", "latin": "Collum femoris"},
                {"name": "Veliki trochanter", "latin": "Trochanter major"},
                {"name": "Mali trochanter", "latin": "Trochanter minor"},
                {"name": "Tijelo femura", "latin": "Corpus femoris"}
            ],
            "joints": [
                {"name": "Kukni zglob", "latin": "Articulatio coxae"},
                {"name": "Koljenski zglob", "latin": "Articulatio genus"}
            ],
            "muscles": [
                {"name": "Bedreni četveroglavi mišić", "latin": "Musculus quadriceps femoris"},
                {"name": "Zadnji bedreni mišić", "latin": "Musculus biceps femoris"},
                {"name": "Gluteus maximus", "latin": "Musculus gluteus maximus"}
            ]
        }
    },
    "tibia-fibula": {
        "title": "Potkoljenične kosti",
        "latin": "Tibia et Fibula",
        "description": "Potkoljenice čine dvije kosti: goljenična kost (tibia) i lisna kost (fibula). Tibia je medijalnija i nosi većinu težine, dok je fibula lateralnija i služi kao mišićna pričvrsna točka. Ove kosti tvori gležanjski zglob s stopalnom kosti.",
        "details": {
            "bones": [
                {"name": "Goljenična kost", "latin": "Tibia"},
                {"name": "Lisna kost", "latin": "Fibula"}
            ],
            "parts": [
                {"name": "Medijalni kondil", "latin": "Condylus medialis"},
                {"name": "Lateralni kondil", "latin": "Condylus lateralis"},
                {"name": "Prednji rub tibije", "latin": "Margo anterior tibiae"},
                {"name": "Medijalni gležanj", "latin": "Malleolus medialis"},
                {"name": "Lateralni gležanj", "latin": "Malleolus lateralis"}
            ],
            "muscles": [
                {"name": "Prednji goljenični mišić", "latin": "Musculus tibialis anterior"},
                {"name": "Potkoljeniční troglavi mišić", "latin": "Musculus triceps surae"},
                {"name": "Duga lisna mišić", "latin": "Musculus peroneus longus"}
            ]
        }
    },
    "foot": {
        "title": "Stopalo",
        "latin": "Pes",
        "description": "Stopalo se sastoji od zglavka (tarsus), sredstoplja (metatarsus) i nožnih prstiju (digiti pedis). Zglavak čini 7 kosti, sredstoplje 5 kostiju, a prsti 14 kostiju. Stopalo je prilagođeno nošenju težine, hodanju i održavanju ravnoteže.",
        "details": {
            "regions": [
                {"name": "Zglavak (7 kostiju)", "latin": "Tarsus"},
                {"name": "Sredstoplje (5 kostiju)", "latin": "Metatarsus"},
                {"name": "Nožni prsti (14 kostiju)", "latin": "Digiti pedis"}
            ],
            "tarsal_bones": [
                {"name": "Petna kost", "latin": "Calcaneus"},
                {"name": "Skokna kost", "latin": "Talus"},
                {"name": "Čunasta kost", "latin": "Os naviculare"},
                {"name": "Medijalna klinasta kost", "latin": "Os cuneiforme mediale"},
                {"name": "Intermedijalna klinasta kost", "latin": "Os cuneiforme intermedium"},
                {"name": "Lateralna klinasta kost", "latin": "Os cuneiforme laterale"},
                {"name": "Kockasta kost", "latin": "Os cuboideum"}
            ],
            "arches": [
                {"name": "Uzdužni svod", "latin": "Arcus longitudinalis"},
                {"name": "Poprečni svod", "latin": "Arcus transversus"}
            ]
        }
    }
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize bones
    const bones = document.querySelectorAll('.bone');
    const partTitle = document.getElementById('partTitle');
    const partLatin = document.getElementById('partLatin');
    const partDescription = document.getElementById('partDescription');
    const anatomyDetails = document.getElementById('anatomyDetails');
    const anatomyMenu = document.getElementById('anatomyMenu');
   
    // Create menu items from anatomy data
    for (const partId in anatomyData) {
        const part = anatomyData[partId];
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.dataset.part = partId;
        menuItem.innerHTML = `
            <h5>${part.title}</h5>
            <div class="menu-latin">${part.latin}</div>
            <p>${part.description.substring(0, 100)}...</p>
        `;
        anatomyMenu.appendChild(menuItem);
       
        // Add click event to menu item
        menuItem.addEventListener('click', function() {
            selectPart(partId);
        });
    }
   
    // Add click events to bones
    bones.forEach(bone => {
        bone.addEventListener('click', function() {
            const partId = this.dataset.part;
            selectPart(partId);
        });
    });
   
    // Function to select a body part
    function selectPart(partId) {
        // Update bone visual selection
        bones.forEach(bone => {
            bone.classList.remove('selected');
            if (bone.dataset.part === partId) {
                bone.classList.add('selected');
            }
        });
       
        // Update menu selection
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('selected');
            if (item.dataset.part === partId) {
                item.classList.add('selected');
            }
        });
       
        // Update part info
        if (anatomyData[partId]) {
            const part = anatomyData[partId];
            partTitle.textContent = part.title;
            partLatin.textContent = part.latin;
            partDescription.textContent = part.description;
           
            // Update detailed anatomy information
            anatomyDetails.innerHTML = '';
           
            // Add each category of details
            for (const category in part.details) {
                const categoryData = part.details[category];
                const categoryTitle = getCategoryTitle(category);
               
                const categoryElement = document.createElement('div');
                categoryElement.className = 'detail-category';
               
                const icon = getCategoryIcon(category);
                categoryElement.innerHTML = `
                    <h5>${icon} ${categoryTitle}</h5>
                    <ul class="detail-list">
                        ${categoryData.map(item => `
                            <li>
                                <span class="detail-name">${item.name}</span>
                                <span class="detail-latin">${item.latin}</span>
                            </li>
                        `).join('')}
                    </ul>
                `;
               
                anatomyDetails.appendChild(categoryElement);
            }
        }
    }
   
    // Helper function to get category title
    function getCategoryTitle(categoryKey) {
        const titles = {
            "bones": "Kosti",
            "regions": "Regije",
            "openings": "Otvori i kanali",
            "parts": "Dijelovi",
            "muscles": "Mišići",
            "nerves": "Živci",
            "discs": "Međukralješni diskovi",
            "rib_types": "Vrste rebara",
            "joints": "Zglobovi",
            "pelvic_bones": "Kosti zdjelice",
            "landmarks": "Orijentacijske točke",
            "movements": "Pokreti",
            "carpal_bones": "Kosti zapešća",
            "tarsal_bones": "Kosti zglavka",
            "arches": "Svodovi stopala"
        };
       
        return titles[categoryKey] || categoryKey;
    }
   
    // Helper function to get category icon
    function getCategoryIcon(categoryKey) {
        const icons = {
            "bones": "<i class='fas fa-bone'></i>",
            "regions": "<i class='fas fa-brain'></i>",
            "openings": "<i class='fas fa-eye'></i>",
            "parts": "<i class='fas fa-puzzle-piece'></i>",
            "muscles": "<i class='fas fa-dumbbell'></i>",
            "nerves": "<i class='fas fa-code-branch'></i>",
            "discs": "<i class='fas fa-circle'></i>",
            "rib_types": "<i class='fas fa-ribbon'></i>",
            "joints": "<i class='fas fa-link'></i>",
            "pelvic_bones": "<i class='fas fa-archway'></i>",
            "landmarks": "<i class='fas fa-map-marker-alt'></i>",
            "movements": "<i class='fas fa-running'></i>",
            "carpal_bones": "<i class='fas fa-hand-paper'></i>",
            "tarsal_bones": "<i class='fas fa-shoe-prints'></i>",
            "arches": "<i class='fas fa-archway'></i>"
        };
       
        return icons[categoryKey] || "<i class='fas fa-info-circle'></i>";
    }
   
    // Model control buttons
    const btnSkeletalView = document.getElementById('btnSkeletalView');
    const btnMuscularView = document.getElementById('btnMuscularView');
    const btnNervousView = document.getElementById('btnNervousView');
    const btnResetView = document.getElementById('btnResetView');
   
    btnSkeletalView.addEventListener('click', function() {
        setActiveButton(btnSkeletalView);
        // In a real app, this would switch to skeletal view
        alert('Prikaz kosturnog sustava je već aktiviran. U potpunoj aplikaciji bi se ovdje promijenio 3D model.');
    });
   
    btnMuscularView.addEventListener('click', function() {
        setActiveButton(btnMuscularView);
        alert('U potpunoj aplikaciji bi se ovdje prikazao 3D model mišićnog sustava s detaljima o svakom mišiću.');
    });
   
    btnNervousView.addEventListener('click', function() {
        setActiveButton(btnNervousView);
        alert('U potpunoj aplikaciji bi se ovdje prikazao 3D model živčanog sustava s živcima i ganglijama.');
    });
   
    btnResetView.addEventListener('click', function() {
        // Reset selection
        bones.forEach(bone => bone.classList.remove('selected'));
        document.querySelectorAll('.menu-item').forEach(item => item.classList.remove('selected'));
       
        // Reset to default view (skull)
        selectPart('skull');
       
        // Reset model view to skeletal
        setActiveButton(btnSkeletalView);
    });
   
    // Helper function to set active button
    function setActiveButton(activeBtn) {
        [btnSkeletalView, btnMuscularView, btnNervousView].forEach(btn => {
            btn.classList.remove('active');
        });
        activeBtn.classList.add('active');
    }
   
    // Auth button functionality (demo)
    document.querySelector('.btn-login').addEventListener('click', function() {
        alert('Funkcionalnost prijave će biti implementirana u potpunoj verziji aplikacije.');
    });
   
    document.querySelector('.btn-register').addEventListener('click', function() {
        alert('Funkcionalnost registracije će biti implementirana u potpunoj verziji aplikacije.');
    });
   
    // Select skull by default
    selectPart('skull');
}); 
