// ==========================================
// MEDICINSKA BAZA PODATAKA - ŽIVČANI SUSTAV
// ==========================================
const medicinskiPodaci = {
    "opcenito": {
        title: "Živčani sustav",
        latin: "Systema nervosum",
        description: "Složena mreža koja upravlja i koordinira svim funkcijama tijela, prenoseći signale između različitih dijelova tijela. Sastoji se od središnjeg (SŽS) i perifernog (PŽS) živčanog sustava.",
        details: [
            { name: "Središnji živčani sustav", latin: "Systema nervosum centrale", desc: "Sastoji se od mozga i kralježnične moždine." },
            { name: "Periferni živčani sustav", latin: "Systema nervosum periphericum", desc: "Sastoji se od moždanih i moždinskih živaca te ganglija." }
        ]
    },
    // Specifični živci s modela
    "brain": {
        title: "Mozak",
        latin: "Encephalon / Cerebrum",
        description: "Glavni kontrolni centar živčanog sustava smješten u lubanjskoj šupljini. Odgovoran je za kogniciju, pamćenje, emocije, motoriku i procesuiranje senzornih informacija.",
        origin: "Razvija se iz neuralne cijevi",
        functions: ["Obrada senzornih informacija", "Svjesna motorička kontrola", "Kognicija, učenje i pamćenje", "Održavanje homeostaze"],
        kategorija: "glava" // <-- DODANO
    },
    "spinal-cord": {
        title: "Kralježnična moždina",
        latin: "Medulla spinalis",
        description: "Cjevasti snop živčanog tkiva koji se proteže kroz vertebralni kanal. Predstavlja glavni put za prijenos informacija između mozga i ostatka tijela.",
        origin: "Od foramen magnum (zatiljni otvor) do razine L1/L2 kralješka",
        functions: ["Prijenos motornih signala prema mišićima", "Prijenos senzornih signala prema mozgu", "Središte za spinalne reflekse"],
        kategorija: "trup" // <-- DODANO
    },
    "cranial": {
        title: "Moždani živci",
        latin: "Nervi craniales (I - XII)",
        description: "Dvanaest pari živaca koji izlaze izravno iz mozga i moždanog debla. Inerviraju pretežno strukture glave i vrata (osim vagusa).",
        origin: "Mozak i moždano deblo",
        functions: ["Senzorna inervacija lica", "Motorika mišića lica i očiju", "Prijenos osjetila (vid, sluh, njuh, okus)"],
        kategorija: "glava" // <-- DODANO
    },
    "vagus": {
        title: "Lutajući živac (X. moždani živac)",
        latin: "Nervus vagus",
        description: "Najduži i najkompleksniji moždani živac. Glavna je komponenta parasimpatičkog živčanog sustava. Naziva se 'lutajući' jer se proteže od glave sve do abdomena.",
        origin: "Produžena moždina (Medulla oblongata)",
        functions: ["Parasimpatička kontrola rada srca i pluća", "Motorika i senzorika probavnog trakta", "Inervacija mišića ždrijela i grkljana (gutanje, govor)"],
        kategorija: "trup" // <-- DODANO
    },
    "brachial-plexus": {
        title: "Ramenski splet",
        latin: "Plexus brachialis",
        description: "Kompleksna mreža živaca koja inervira kožu i muskulaturu ramena, prsa i cijelog gornjeg ekstremiteta.",
        origin: "Prednje grane spinalnih živaca od C5 do T1",
        functions: ["Motorička i senzorna inervacija ruke", "Sadrži ključne živce poput n. medianusa, n. ulnarisa i n. radialisa"],
        kategorija: "ruke" // <-- DODANO
    },
    "median-nerve": {
        title: "Središnji živac",
        latin: "Nervus medianus",
        description: "Jedan od glavnih živaca ruke. Poznat je po tome što prolazi kroz karpalni kanal u zapešću, gdje može biti pritisnut (Sindrom karpalnog kanala).",
        origin: "Medijalni i lateralni snop ramenskog spleta (C5-T1)",
        functions: ["Motorička inervacija većine fleksora podlaktice", "Opozicija palca", "Osjet (senzorika) palmarne strane palca, kažiprsta, srednjaka i pola prstenjaka"],
        kategorija: "ruke" // <-- DODANO
    },
    "sciatic-nerve": {
        title: "Bedreni živac",
        latin: "Nervus ischiadicus",
        description: "Najduži i najdeblji pojedinačni živac u ljudskom tijelu. Proteže se od donjeg dijela leđa, kroz stražnjicu, niz stražnji dio noge.",
        origin: "Križni splet (Plexus sacralis) L4-S3",
        functions: ["Motorička inervacija stražnje lože natkoljenice", "Daje grane (n. tibialis i n. peroneus) koje inerviraju cijelu potkoljenicu i stopalo"],
        kategorija: "noge" // <-- DODANO
    },
    "tibial-nerve": {
        title: "Goljenični živac",
        latin: "Nervus tibialis",
        description: "Veća, medijalna završna grana bedrenog živca. Prolazi stražnjom stranom potkoljenice i ulazi u stopalo iza medijalnog maleolusa.",
        origin: "Završna grana bedrenog živca (odvaja se u poplitealnoj jami)",
        functions: ["Inervacija stražnjih mišića potkoljenice (plantarna fleksija)", "Senzorna inervacija tabana (plantarna površina)"],
        kategorija: "noge" // <-- DODANO
    }
};

// ==========================================
// LOGIKA APLIKACIJE
// ==========================================

const infoSection = document.querySelector('.info-section');
const anatomyMenu = document.getElementById('anatomyMenu');
const allNerves = document.querySelectorAll('.nerve');

// 1. Funkcija za prikazivanje detalja u desnom panelu
function prikaziDetalje(partId) {
    const data = medicinskiPodaci[partId];
    if (!data) return;

    // Generiranje osnovnog HTML-a
    let html = `
        <h3><i class="fas fa-microscope"></i> Anatomski profil</h3>
        <div class="part-info">
            <div class="part-name">
                <h4>${data.title}</h4>
                <div class="latin-name">${data.latin}</div>
            </div>
            <p class="part-description">${data.description}</p>
        </div>
    `;

    // Ako je to specifičan živac s funkcijama i polazištem
    if (data.functions) {
        html += `
        <div class="anatomy-details">
            <div class="detail-category">
                <h5><i class="fas fa-map-marker-alt"></i> Polazište (Origo)</h5>
                <p style="padding-left: 20px; color: #555;">${data.origin}</p>
            </div>
            <div class="detail-category" style="margin-top: 15px;">
                <h5><i class="fas fa-bolt"></i> Fiziološke funkcije</h5>
                <ul class="detail-list" style="padding-left: 20px;">
        `;
        data.functions.forEach(func => {
            html += `<li style="padding: 5px 0; color: #333;"><i class="fas fa-check-circle" style="color: #ff5722; margin-right: 8px;"></i> ${func}</li>`;
        });
        html += `</ul></div></div>`;
    } 
    // Ako je općeniti prikaz (pritiskom na gumb izbornika)
    else if (data.details) {
        html += `<div class="anatomy-details"><div class="detail-category">
                 <h5><i class="fas fa-network-wired"></i> Podjela sustava</h5><ul class="detail-list">`;
        data.details.forEach(item => {
            html += `
                <li style="padding: 10px 0; border-bottom: 1px solid #eee; display:block;">
                    <div style="font-weight: bold; color: #1a237e;">${item.name} <span style="color: #777; font-style: italic; font-weight: normal; margin-left: 10px;">${item.latin}</span></div>
                    <div style="color: #555; font-size: 0.9rem; margin-top: 5px;">${item.desc}</div>
                </li>`;
        });
        html += `</ul></div></div>`;
    }

    // Ubacivanje HTML-a s laganom fade-in animacijom
    infoSection.style.opacity = 0;
    setTimeout(() => {
        infoSection.innerHTML = html;
        infoSection.style.opacity = 1;
        infoSection.style.transition = "opacity 0.3s ease";
    }, 150);
}

// 2. Funkcija za označavanje živca na modelu
function oznaciZivac(partId) {
    // Ukloni selekciju sa svih
    allNerves.forEach(n => n.classList.remove('selected'));
    // Dodaj selekciju na kliknuti (pronađi sve elemente s tim data-part atributom, npr. lijeva i desna noga)
    document.querySelectorAll(`.nerve[data-part="${partId}"]`).forEach(n => n.classList.add('selected'));
}

// ========================================================
// 3. GENERIRANJE DONJEG IZBORNIKA (KARTICA) S FILTRIRANJEM
// ========================================================
function generirajIzbornik(filterKategorija = "sve") {
    let menuHtml = '';
    
    Object.keys(medicinskiPodaci).forEach(key => {
        if (key !== "opcenito") {
            const item = medicinskiPodaci[key];
            
            // Ako filter nije "sve" i ne podudara se s kategorijom živca, preskoči ga
            if (filterKategorija !== "sve" && item.kategorija !== filterKategorija) {
                return; 
            }

            menuHtml += `
                <div class="menu-item" data-id="${key}">
                    <h5>${item.title}</h5>
                    <div class="menu-latin">${item.latin}</div>
                    <p style="margin-top: 10px; font-size: 0.85rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${item.description}</p>
                </div>
            `;
        }
    });
    anatomyMenu.innerHTML = menuHtml;

    // Ponovno dodavanje klika na dinamički generirane kartice
    document.querySelectorAll('.menu-item').forEach(card => {
        card.addEventListener('click', function() {
            const partId = this.getAttribute('data-id');
            prikaziDetalje(partId);
            oznaciZivac(partId);
            
            // Vizualno označi kliknutu karticu
            document.querySelectorAll('.menu-item').forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
            
            // Skrolaj gore na model i info sekciju
            document.querySelector('.model-section').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

// NOVA FUNKCIJA: Osluškivanje klikova na gumbe za regije (glava, ruke...)
function inicijalizirajFiltere() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // 1. Makni 'active' klasu sa svih gumba i dodaj na ovaj koji je kliknut
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // 2. Uzmi kategoriju iz HTML atributa data-filter
            const odabranaKategorija = this.getAttribute('data-filter');
            
            // 3. Ponovno pokreni generiranje kartica s odabranim filterom
            generirajIzbornik(odabranaKategorija);
        });
    });
}

// ==========================================
// EVENT LISTENERS (Inicijalizacija)
// ==========================================

// Klik na same živce na 3D modelu
allNerves.forEach(nerve => {
    nerve.addEventListener('click', function() {
        const partId = this.getAttribute('data-part');
        prikaziDetalje(partId);
        oznaciZivac(partId);
        
        // Oznaci odgovarajuću karticu dolje ako postoji u trenutnom filteru
        document.querySelectorAll('.menu-item').forEach(c => c.classList.remove('selected'));
        const matchingCard = document.querySelector(`.menu-item[data-id="${partId}"]`);
        if (matchingCard) matchingCard.classList.add('selected');
    });
});

// Gumb "Živčani sustav" (Glavni prikaz)
const btnNervousView = document.getElementById('btnNervousView');
btnNervousView.addEventListener('click', function() {
    document.querySelectorAll('.model-btn').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    
    // Poništi selekcije na modelu i prikaži općenite podatke
    allNerves.forEach(n => n.classList.remove('selected'));
    document.querySelectorAll('.menu-item').forEach(c => c.classList.remove('selected'));
    prikaziDetalje('opcenito');
});

// Inicijalizacija pri prvom učitavanju aplikacije
document.addEventListener('DOMContentLoaded', () => {
    generirajIzbornik();     // Prikazuje sve kartice na startu
    inicijalizirajFiltere(); // Pokreće osluškivanje gumba za regije
    prikaziDetalje('opcenito'); // Prikazuje generalni info o sustavu na startu
});