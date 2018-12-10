var daynow = 1;
var daycounter = 1;
var daybest = 1;

var environment = 50;
var energy = 50;
var economy = 50;
var society = 50;

var now = "";

var end = false;

function Choice() {
    this.text = "";
    this.environment = "";
    this.energy = "";
    this.economy = "";
    this.society = "";    
}

function Story() {
    this.text = "";
    this.pics = "";
    this.opt1 = new Choice();
    this.opt2 = new Choice();
    this.opt3 = new Choice();
    this.opt4 = new Choice();
}

var now = new Story();

function Start() {
    daynow = 1;

    environment = 50;
    energy = 50;
    economy = 50;
    society = 50;

    end = false;

    FillStory(now);
    Draw();
}

function Draw() {
    document.getElementById("daynow").innerHTML = daynow;
    document.getElementById("daycounter").innerHTML = daycounter;
    document.getElementById("daybest").innerHTML = daybest;

    var canvas = document.getElementById("status");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle="#000000";
    ctx.fillRect(0,0,300,20);
    ctx.fillStyle="#FFFFFF";
    ctx.fillRect(2,2,72.5,16);
    ctx.fillRect(76.5,2,72.5,16);
    ctx.fillRect(151,2,72.5,16);
    ctx.fillRect(225.5,2,72.5,16);
    ctx.fillStyle="#43F34F";
    ctx.fillRect(2,2,72.5 * (environment / 100) ,16);
    ctx.fillStyle="#FFE047";
    ctx.fillRect(76.5,2,72.5 * (energy / 100),16);
    ctx.fillStyle="#FF4B47";
    ctx.fillRect(151,2,72.5 * (economy / 100),16);
    ctx.fillStyle="#7C55EE";
    ctx.fillRect(225.5,2,72.5 * (society / 100),16);
    ctx.fillStyle = "#000000";
    ctx.font = "bold 12px Arial";
    ctx.textAlign = "center";
    ctx.fillText("Környezet", 38.25 , 14); 
    ctx.fillText("Energia", 112.75 , 14); 
    ctx.fillText("Gazdaság", 187.25 , 14); 
    ctx.fillText("Társadalom", 261.75 , 14);

    document.getElementById("story").innerHTML = GetName() + now.text;

    document.getElementById("pics").src = now.pics;

    document.getElementById("opt1").innerHTML = now.opt1.text;
    document.getElementById("opt2").innerHTML = now.opt2.text;
    document.getElementById("opt3").innerHTML = now.opt3.text;
    document.getElementById("opt4").innerHTML = now.opt4.text;
    
    if (now.opt1.text.length > 0) {
        document.getElementById("opt1").className = "opt";
    } else {
        document.getElementById("opt1").className = "opthidden";
    }

    if (now.opt2.text.length > 0) {
        document.getElementById("opt2").className = "opt";
    } else {
        document.getElementById("opt2").className = "opthidden";
    }

    if (now.opt3.text.length > 0) {
        document.getElementById("opt3").className = "opt";
    } else {
        document.getElementById("opt3").className = "opthidden";
    }

    if (now.opt4.text.length > 0) {
        document.getElementById("opt4").className = "opt";
    } else {
        document.getElementById("opt4").className = "opthidden";
    }

    if (now.pics.length > 0) {
        document.getElementById("pics").className = "pics";
    } else {
        document.getElementById("pics").className = "picshidden";
    }

}

function Next(opt) {
    switch (opt) {
        case "opt1":
            environment = HowMany(now.opt1.environment, environment);
            energy = HowMany(now.opt1.energy, energy);
            economy = HowMany(now.opt1.economy, economy);
            society = HowMany(now.opt1.society, society);
        break;
        case "opt2":
            environment = HowMany(now.opt2.environment, environment);
            energy = HowMany(now.opt2.energy, energy);
            economy = HowMany(now.opt2.economy, economy);
            society = HowMany(now.opt2.society, society);
        break;
        case "opt3":
            environment = HowMany(now.opt3.environment, environment);
            energy = HowMany(now.opt3.energy, energy);
            economy = HowMany(now.opt3.economy, economy);
            society = HowMany(now.opt3.society, society);
        break;
        case "opt4":
            environment = HowMany(now.opt4.environment, environment);
            energy = HowMany(now.opt4.energy, energy);
            economy = HowMany(now.opt4.economy, economy);
            society = HowMany(now.opt4.society, society);
        break;
    }

    if (environment < 0) { 
        environment = 0;
    }
    if (environment > 100) { 
        environment = 100;
    }
    if (energy < 0) { 
        energy = 0;
    }
    if (energy > 100) { 
        energy = 100;
    }
    if (economy < 0) { 
        economy = 0;
    }
    if (economy > 100) { 
        economy = 100;
    }
    if (society < 0) { 
        society = 0;
    }
    if (society > 100) { 
        society = 100;
    }

    if ((environment > 0) && (environment < 100) && (energy > 0) && (energy < 100) && (economy > 0) && (economy < 100) && (society > 0) && (society < 100)) {
        daynow++;
        daycounter++;
        if (daynow > daybest) {
            daybest = daynow;
        }
        FillStory(now);
        Draw();
    } else {
        if (end) {
            Start();
        } else {
            if (society >=100) {
                now.text = "A szélsőséges gondolkodás egyre erősebbé válik és az embereket magával ragadják a heves indulatok. Tömegek özönlenek az utcákra, hogy tiltakozzanak azonban már ők maguk sem tudják mi vagy ki ellen. A zűrzavar és káosz betölti a világot: teljes az anarchia…";
                now.pics = "img/endhsoc.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (society <= 0) {
                now.text = "A bizalmatlanság sohasem látott méreteket öltött. Az emberek nemhogy egymásban, de még saját magukban is képtelenek megbízni. Senki sem találkozik senkivel, teljes az elszigetelődés. Egy új világ kezdődik: az izoláció kora, mindenki mindenkitől és mindentől elzárva szeretne élni egyedül. Távol egymástól és mélyen a földalatti bunkerekben…";
                now.pics = "img/endlsoc.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (economy >= 100) {
                now.text = "Venni! Vásárolni! Minél többet! Hiába a sok felszólítás és a törvények a kötelező vásárlásokról. A gazdaság irányíthatatlanná vált. A termelés a túlfogyasztás ellenére soha nem látott mértéket öltött majd összeomlott. A feleslegesen vásárolt és az el nem adott termékek áradásként öntötték el a világot, mindent betemetve…";
                now.pics = "img/endheco.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (economy <= 0) {
                now.text = "A fogyasztói társadalom mára teljesen megszűnt: nem lehet semmit sem venni. A gazdaság összeomlott. A legkitartóbb emberek élnék már csak a Földön, akik egész nap az egykori jólétet sejtető hulladékhalmokat járják, hogy végre hasznosítsák azt, amiről nemrég még azt gondolták, hogy egyszerű szemét…";
                now.pics = "img/endleco.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (energy >= 100) {
                now.text = "Az előállított energia mennyisége egyre csak növekedett. A szolgáltatók már nem kértek pénzt, hanem ők fizettek az embereknek, hogy használjanak belőle többet. A kormányzat törvénybe foglalta, hogy mindenki pazarolja az energiát azonban a katasztrófa elkerülhetetlenné vált! A világot hatalmas robbanások tépték szét így felszabadítva a fel nem használt energiát…";
                now.pics = "img/endhene.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (energy <= 0) {
                now.text = "Az energia ára óriási mértékben emelkedett, de még így is többet használtunk fel belőle. Az állam betiltotta az emberi erő kiváltására alkalmas eszközök használatát spórolás céljával. De hiába, nem maradt elegendő energia a civilizáció fenntartására, a mindennapi élethez szükséges körülmények megteremtésére. Elhagyatott városok omladozó falai emlékeztetnek már csak minket egykori világunkra…";
                now.pics = "img/endlene.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (environment >= 100) {
                now.text = "Az emberiség rádöbbent arra, hogy parazitaként élte fel a Föld készleteit ezért végső megoldásként mindenki a természethez fordult és a nemzetek megszüntették a civilizáció ma ismert formáját. Idővel a természet visszavetette az emberek által kisajátított területeket és ma már nem lehet megmondani azt sem, hogy egyáltalán hány ember él a Földön…";
                now.pics = "img/endhenv.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            if (environment <= 0) {
                now.text = "A Föld erőforrásait kizsákmányolta az emberiség és már nem maradt egyetlen egy talpalatnyi terület sem, ami alkalmas lenne az életre. Kopár élettelen sivár bolygóvá vált mindannyiunk otthona, ami így többé lakhatatlan számunkra…";
                now.pics = "img/endlenv.jpg";
                now.opt1.text = "Új játék indítása!";
                now.opt1.environment = "";
                now.opt1.energy = "";
                now.opt1.economy = "";
                now.opt1.society = "";
                now.opt2 = new Choice();
                now.opt3 = new Choice();
                now.opt4 = new Choice();
            }
            end = true;
            Draw();
        }
    }
}

function HowMany(str, numb) {
    switch (str) {
        case "0":
            return 50;
            break; 
        case "+":
            return numb + 3;
            break;
        case "++":
            return numb + 9;
            break;
        case "+++":
            return numb + 27;
            break;
        case "++++":
            return numb + 40;
            break;
        case "+++++":
            return numb + 100;
            break;    
        case "-":
            return numb - 3;
            break;
        case "--":
            return numb - 9;
            break;
        case "---":
            return numb - 27;
            break;
        case "----":
            return numb - 40;
            break;
        case "-----":
            return numb - 100;
            break;
    }
    return numb;
}

function GetName() {
    if ((environment >= economy) && (environment >= society) && (environment >= energy)) {
        return "Zöld Vezető!</br>";
    } 
    if ((energy >= environment) && (energy >= society) && (energy >= economy)) {
        return "Energikus Vezető!</br>";
    }
    if ((economy >= environment) && (economy >= energy) && (economy >= society)) {
        return "Gazdag Vezető!</br>";
    }
    if ((society >= energy) && (society >= environment) && (society >= economy)) {
        return "Kedves Vezető!</br>"
    }
    return "Kiegyensúlyozott Vezető!</br>";  
}

function FillStory(story) {
    now = new Story();
    switch(Math.floor(Math.random() * (48 - 1 + 1) ) + 1) {
    case 1:
        now.text = "Támogasd kampányunkat, ami takarékosabb szemlélet felé tereli az embereket, hogy kevesebb energiát használjanak fel!";
        now.pics = "img/actactivist.jpg";
        now.opt1.text = "Igen, támogatom!";
        now.opt1.energy = "+";
        now.opt2.text = "Nem támogatom!";
        now.opt2.energy = "--";
        break;
    case 2:
        now.text = "Az egyik régióban energiahiány alakult ki. Lehetőségünk van segíteni rajtunk, mit tegyünk?";
        now.pics = "img/actbusiness.jpg";
        now.opt1.text = "Osszuk meg energiakészleteinket! ";
        now.opt1.energy = "-";
        now.opt2.text = "Nem segítünk nekik! ";
        now.opt2.energy = "+";
        break;
    case 3:
        now.text = "Egy újonnan épített szélerőmű tesztelési időszaka lejárt. Nem találtunk hibát szóval csatlakoztassuk a hálózatra?";
        now.pics = "img/actelectric.jpg";
        now.opt1.text = "Igen.";
        now.opt1.energy = "++";
        now.opt2.text = "Nem.";
        now.opt2.energy = "-";
        break;
    case 4:
        now.text = "A bányászok panaszkodnak a világítás milyenségére. Használjunk erősebb fényű izzókat a bányajáratokban?";
        now.pics = "img/actminer.jpg";
        now.opt1.text = "Igen!";
        now.opt1.energy = "-";
        now.opt2.text = "Nem!";
        now.opt2.energy = "+";
        break;
    case 5:
        now.text = "Egy nagyszabású kutatási projekthez rengeteg áramra lenne szükségünk. Engedélyezze, hogy nagyteljesítményű gépeket használhassunk!";
        now.pics = "img/actscientist.jpg";
        now.opt1.text = "Engedélyezem!";
        now.opt1.energy = "---";
        now.opt2.text = "Szó sem lehet róla, takarékoskodjanak az energiával!";
        now.opt2.energy = "-";
        break;
    case 6:
        now.text = "Az egyik védelmi bunker raktárjában találtunk több száz hordó üzemanyagot. Mihez kezdjünk vele?";
        now.pics = "img/actsoldier.jpg";
        now.opt1.text = "Használja a katonaság!";
        now.opt1.energy = "-";
        now.opt2.text = "Az embereknek szükségük van rá, vigyék az üzemanyagtöltő állomásokra!";
        now.opt2.energy = "+++";
        break;
    case 7:
        now.text = "Rajongóim követik életem minden pillanatát, milyen példát mutassak nekik takarékosság terén?";
        now.pics = "img/actstar.jpg";
        now.opt1.text = "Az energiával spórolni kell!";
        now.opt1.energy = "++";
        now.opt2.text = "Rengeteg energiánk van, bátran mutassuk meg milyen gazdagok vagyunk!";
        now.opt2.energy = "-";
        break;
    case 8:
        now.text = "Tanulóim saját projektet kezdenek, aminek célja, hogy rávegyék az embereket az energiával való takarékosságra.";
        now.pics = "img/actteacher.jpg";
        now.opt1.text = "Ellátogatok hozzájuk, hogy személyesen köszönjem meg nekik!";
        now.opt1.energy = "++";
        now.opt2.text = "Nem látom értelmét, inkább a tananyaggal foglalkozzanak!";
        now.opt2.energy = "-";
        break;
    case 9:
        now.text = "Földünk tele van csodás értékekkel, amit meg kell védeni. Egyetért ezzel?";
        now.pics = "img/actactivist.jpg";
        now.opt1.text = "Igen, az embereknek nagyobb figyelmet kell fordítania a környezet védelmére!";
        now.opt1.environment = "+";
        now.opt2.text = "Igen, de azért még is csak azért vannak ezek a kincsek, hogy az emberek kényelmét szolgálják!";
        now.opt2.environment = "-";
        break;
    case 10:
        now.text = "Az irodákból lassan elfogy az összes fénymásolópapír, milyen fajtát vegyünk?";
        now.pics = "img/actbusiness.jpg";
        now.opt1.text = "Újrahasznosított papírból készültet, nem baj, ha kicsit szürkés hiszen védenünk kell a környezetet!";
        now.opt1.environment = "+";
        now.opt2.text = "Hófehér ragyogó papírra kell nyomtatnunk, ahogy eddig is tettük!";
        now.opt2.environment = "-";
        break;
    case 11:
        now.text = "A különböző elektromos energiát szolgáltató cégek szeretnének pozitív kiváltságokat kapni. Milyen szempont szerint kedvezzünk nekik?";
        now.pics = "img/actelectric.jpg";
        now.opt1.text = "Támogassuk azokat, akik környezetbarát megoldásokat használnak.";
        now.opt1.environment = "+";
        now.opt2.text = "Támogassuk azokat, akikre nem hatnak a környezetvédő vészmadarak károgásai!";
        now.opt2.environment = "--";
        break;
    case 12:
        now.text = "A bányászat során rengeteg olyan anyag keletkezik, amire semmi szükségünk sincs. Mihez kezdjük vele?";
        now.pics = "img/actminer.jpg";
        now.opt1.text = "Alapos mérnöki munkát igényel, annak megtervezése, hol lehetne tárolni!";
        now.opt1.environment = "+";
        now.opt2.text = "Nem számít mennyire káros, egyszerűen építsetek belőle hatalmas halmokat a bányák közelébe.";
        now.opt2.environment = "---";
        break;
    case 13:
        now.text = "Az ember környezetátalakító tevékenysége egyre fokozódik derül ki egy új kutatásból.";
        now.pics = "img/actscientist.jpg";
        now.opt1.text = "Több ilyen kutatásra van szükségünk, hogy megvédjük a Földet.";
        now.opt1.environment = "++";
        now.opt2.text = "Semmi szükség ezekre a kutatásokra!";
        now.opt2.environment = "-";
        break;
    case 14:
        now.text = "A következő hadgyakorlat helyszíne egyben egy veszélyeztetett állat egyetlen természetes élőhelye. Engedélyt kérek a gyakorlat megtartására!";
        now.pics = "img/actsoldier.jpg";
        now.opt1.text = "Engedélyt megadom!";
        now.opt1.environment = "--";
        now.opt2.text = "Nem engedélyezem! Keressenek másik helyszínt!";
        now.opt2.environment = "+";
        break;
    case 15:
        now.text = "Rajongóim számára szeretnék kedveskedni ajándékokkal, van ötleted mi legyen az?";
        now.pics = "img/actstar.jpg";
        now.opt1.text = "A nevükben fogadj örökbe veszélyeztett állatokat vagy tisztíts meg szennyezett területeket!";
        now.opt1.environment = "++";
        now.opt2.text = "Műanyagból készült aranyos és vicces állatok tuti siker lesz!";
        now.opt2.environment = "-";
        break;
    case 16:
        now.text = "A környezetvédelem mennyire hangsúlyos szerepben kerüljön a tantervekbe?";
        now.pics = "img/actteacher.jpg";
        now.opt1.text = "A lehető legfontosabb helyet kapja meg!";
        now.opt1.environment = "+++";
        now.opt2.text = "Nem fontos, az sem baj, ha idő sem jut a tanítására.";
        now.opt2.environment = "-";
        break;
    case 17:
        now.text = "A zöld jeles napokra kérem rendeljen el munkaszünetet!";
        now.pics = "img/actactivist.jpg";
        now.opt1.text = "Szó sem lehet róla ez túl nagy gazdasági kiesés!";
        now.opt1.economy = "+";
        now.opt2.text = "Rendben van, elrendelem!";
        now.opt2.economy = "--";
        break;
    case 18:
        now.text = "A szomszédos régióban növekszik a szegénység.";
        now.pics = "img/actbusiness.jpg";
        now.opt1.text = "Küldjünk anyagi támogatást feltétel nélkül!";
        now.opt1.economy = "--";
        now.opt2.text = "Kínáljunk kedvezményes hiteleket úgy, hogy nyerjünk rajta egy keveset!";
        now.opt2.economy = "+";
        break;
    case 19:
        now.text = "Elégedett a munkások teljesítményével? ";
        now.pics = "img/actelectric.jpg";
        now.opt1.text = "Igen, fizetésemelést is adok!";
        now.opt1.economy = "-";
        now.opt2.text = "Nem, csökkentem a bérüket!";
        now.opt2.economy = "+";
        break;
    case 20:
        now.text = "Elégedett a bányászok munkájával?";
        now.pics = "img/actminer.jpg";
        now.opt1.text = "Igen, fizetésemelést is adok!";
        now.opt1.economy = "-";
        now.opt2.text = "Nem, csökkentem a bérüket!";
        now.opt2.economy = "+";
        break;
    case 21:
        now.text = "Rengeteg szabadalom született, amivel hatékonyabbá lehetne tenni a termelést, nagyobb bevételt elérve.";
        now.pics = "img/actscientist.jpg";
        now.opt1.text = "Örülök neki azonnal használjuk is fel mindet!";
        now.opt1.economy = "+++";
        now.opt2.text = "Nincs baj az eddigi technológiákkal, semmi szükség rájuk!";
        now.opt2.economy = "-";
        break;
    case 22:
        now.text = "Egyre több önkéntes segíti a hadsereg munkáját!";
        now.pics = "img/actsoldier.jpg";
        now.opt1.text = "Mindig örülök, ha kevesebb pénzből több munkát végeznek az emberek!";
        now.opt1.economy = "++";
        now.opt2.text = "Tisztelem elhivatottságokat, de meg kell téríteni a költségeiket!";
        now.opt2.economy = "-";
        break;
    case 23:
        now.text = "Támogatást szeretnék kérni a következő turnémhoz!";
        now.pics = "img/actstar.jpg";
        now.opt1.text = "Finanszírozom a költségeidet!";
        now.opt1.economy = "-";
        now.opt2.text = "Nem áll túl jól a költségvetés, nem tudok támogatást adni!";
        now.opt2.economy = "+";
        break;
    case 24:
        now.text = "Tanítsunk pénzügyi ismeretet a gyerekeknek?";
        now.pics = "img/actteacher.jpg";
        now.opt1.text = "Igen, hiszen ez nagyon fontos az életben!";
        now.opt1.economy = "+";
        now.opt2.text = "Semmi szükség rá, így is le vannak terhelve a diákok!";
        now.opt2.economy = "--";
        break;
    case 25:
        now.text = "Mutassa meg az embereknek, hogy mennyire fontosnak tartja a véleményüket!";
        now.pics = "img/actactivist.jpg";
        now.opt1.text = "Hazugság lenne, nem érdekel a véleményük!";
        now.opt1.society = "-";
        now.opt2.text = "Köszönöm a tanácsot, elfogadom!";
        now.opt2.society = "+";
        break;
    case 26:
        now.text = "Elkészültek az éves pénzügyi jelentések, szeretné, hogy bárki számára elérhetőek legyenek?";
        now.pics = "img/actbusiness.jpg";
        now.opt1.text = "Nem, semmi szükség rá, hogy mindenki elolvassa!";
        now.opt1.society = "--";
        now.opt2.text = "Igen, nincs mit titkolnom az emberek előtt!";
        now.opt2.society = "+";
        break;
    case 27:
        now.text = "Nemsokára felépül az új erőmű, hogyan fogja kiválasztani a leendő igazgatót?";
        now.pics = "img/actelectric.jpg";
        now.opt1.text = "Személyesen fogok dönteni róla.";
        now.opt1.society = "-";
        now.opt2.text = "Egy bizottság fog szakmai alapon döntést hozni.";
        now.opt2.society = "+";
        break;
    case 28:
        now.text = "Az előző bányamérnök hamarosan nyugdíjba megy, újat kell választani.";
        now.pics = "img/actminer.jpg";
        now.opt1.text = "Kizárólag szakmai alapon történhet a kiválasztás.";
        now.opt1.society = "+";
        now.opt2.text = "Személyesen fogok dönteni az új vezető személyéről.";
        now.opt2.society = "-";
        break;
    case 29:
        now.text = "Szükségesnek látja, hogy a legújabb kutatási eredmények mindenki számára elérhetőek legyenek?";
        now.pics = "img/actscientist.jpg";
        now.opt1.text = "Igen, fontos az átláthatóság!";
        now.opt1.society = "+";
        now.opt2.text = "Nem, semmi szükség sincs rá!";
        now.opt2.society = "-";
        break;
    case 30:
        now.text = "Tartsunk felvonulást a következő nemzeti ünnepnapon?";
        now.pics = "img/actsoldier.jpg";
        now.opt1.text = "Igen.";
        now.opt1.society = "-";
        now.opt2.text = "Nem.";
        now.opt2.society = "+";
        break;
    case 31:
        now.text = "Remélem nem késtem, ekkora beszéltünk meg találkozót? Miben segíthetek?";
        now.pics = "img/actstar.jpg";
        now.opt1.text = "Szeretném, ha a következő fellépésére eltenne pár jegyet nekem és barátaimnak.";
        now.opt1.society = "-";
        now.opt2.text = "Szeretném, ha a következő fellépése előtt ajándékjegyeket sorsolna ki.";
        now.opt2.society = "+";
        break;
    case 32:
        now.text = "A szülők mostanában dühösek, amiért túl sok a házi feladat.";
        now.pics = "img/actteacher.jpg";
        now.opt1.text = "Adjon akkor kevesebb feladatot!";
        now.opt1.society = "+";
        now.opt2.text = "Majd én beszélek velük, inkább tanuljanak együtt a gyerekeikkel!";
        now.opt2.society = "-";
        break;
    case 33:
        now.text = "Mit szólna hozzá, ha támogatná azokat a sofőröket, akik elektromos meghajtású autót vezetnek?";
        now.pics = "img/actactivist.jpg";
        now.opt1.text = "Kiváló ötlet, ingyen adok nekik energiát!";
        now.opt1.energy = "-";
        now.opt1.environment = "++";
        now.opt2.text = "Nem igazán tetszik az ötlet, nem kivételezek senkivel.";
        now.opt2.energy = "+";
        now.opt2.environment = "--";
        break;
    case 34:
        now.text = "Közeledik a tél és nagyon hideg időjárást jeleznek a szakemberek. Az erdők egy részében engedélyezni kéne, hogy több fát vághassanak ki.";
        now.pics = "img/actbusiness.jpg";
        now.opt1.text = "Köszönöm, hogy figyelmeztetett! Azonnal engedélyezem!";
        now.opt1.energy = "+";
        now.opt1.environment = "--";
        now.opt2.text = "Nem tehetem, szó sem lehet róla!";
        now.opt2.energy = "--";
        now.opt2.environment = "+";
        break;
    case 35:
        now.text = "Több áramot kell előállítanunk ha fedezni akarjuk a lakosság igényét!";
        now.pics = "img/actelectric.jpg";
        now.opt1.text = "Növeljük fejlesztéssel a meglévő szénerőművek teljesítményét.";
        now.opt1.energy = "+";
        now.opt1.environment = "--";
        now.opt2.text = "Telepítsünk több szélturbinát és vegyük rá a fogyasztókat a takarékosságra.";
        now.opt2.energy = "-";
        now.opt2.environment = "++";
        break;
    case 36:
        now.text = "Felfedeztünk egy nagyobb kőolajmezőt, azonban egy természetvédelmi területen kellene kitermelni.";
        now.pics = "img/actminer.jpg";
        now.opt1.text = "Ne foglalkozz a védett területtel, az energia sokkal fontosabb!";
        now.opt1.energy = "++";
        now.opt1.environment = "--";
        now.opt2.text = "Micsoda átkozott balszerencse, így nem tudjuk kitermelni.";
        now.opt2.energy = "-";
        now.opt2.environment = "+";
        break;
    case 37:
        now.text = "Egy komoly kutatás kapcsán zavarnám meg: szükségünk van nagyobb mennyiségű energiára, hogy fúziós erőmű kutatásunkat folytathassuk, ha sikerrel járunk óriási áttörést érünk el!";
        now.pics = "img/actscientist.jpg";
        now.opt1.text = "Használják, amit csak szeretnének!";
        now.opt1.energy = "---";
        now.opt1.environment = "++";
        now.opt2.text = "Szó sem lehet róla!";
        now.opt2.energy = "+";
        now.opt2.environment = "-";
        break;
    case 38:
        now.text = "A katonák panaszkodnak, hogy túlságosan hideg van az őrbódékban.";
        now.pics = "img/actsoldier.jpg";
        now.opt1.text = "Vágják ki a környékbeli fákat és fűtsenek azokkal.";
        now.opt1.energy = "+";
        now.opt1.environment = "--";
        now.opt2.text = "Csatlakozzanak rá a városi gázvezetékekre és oldják meg a fűtést!";
        now.opt2.energy = "-";
        now.opt2.environment = "+";
        break;
    case 39:
        now.text = "A következő turnénkon milyen üzenetet közvetítsünk?";
        now.pics = "img/actstar.jpg";
        now.opt1.text = "Mondják el mindenkinek milyen sikeresek vagyunk és éljenek a mának!";
        now.opt1.energy = "-";
        now.opt1.environment = "-";
        now.opt2.text = "Motiválják az embereket az energiafogyasztás mérséklésére.";
        now.opt2.energy = "++";
        now.opt2.environment = "++";
        break;
    case 40:
        now.text = "Elkészült a legújabb tanterv, áttekinti?";
        now.pics = "img/actteacher.jpg";
        now.opt1.text = "Túl nagy szerepet kap benne az energia és a környezet kérdése.";
        now.opt1.energy = "-";
        now.opt1.environment = "-";
        now.opt2.text = "Nem kap elég figyelmet az energia és környezet jelentősége!";
        now.opt2.energy = "++";
        now.opt2.environment = "--";
        break;
    case 41:
        now.text = "Az ipar fogyasztja a legtöbb energiát érdemes lenne korlátozni.";
        now.pics = "img/actactivist.jpg";
        now.opt1.text = "Egyetértek, korlátozni fogom az ipari energiafelhasználást!";
        now.opt1.energy = "+";
        now.opt1.economy = "--";
        now.opt2.text = "Szó sem lehet róla. Az ipar a gazdaság mozgatója!";
        now.opt2.energy = "-";
        now.opt2.economy = "+";
        break;
    case 42:
        now.text = "Az energiapiaci jelenlétünk erős. Milyen tranzakciót bonyolítsunk?";
        now.pics = "img/actbusiness.jpg";
        now.opt1.text = "Vásároljunk energiát.";
        now.opt1.energy = "++";
        now.opt1.economy = "-";
        now.opt2.text = "Adjuk el energiát.";
        now.opt2.energy = "--";
        now.opt2.economy = "+";
        break;
    case 43:
        now.text = "Az erőművek karbantartási időszaka közeledik.";
        now.pics = "img/actelectric.jpg";
        now.opt1.text = "Alaposan nézzék át és gondosan javítsák ki a hibákat kerül, amibe kerül!";
        now.opt1.energy = "+";
        now.opt1.economy = "-";
        now.opt2.text = "Csak a legszükségesebb dolgokat javítsák, spóroljanak a forrásokkal!";
        now.opt2.energy = "-";
        now.opt2.economy = "++";
        break;
    case 44:
        now.text = "A bányászok nagyobb fizetést szeretnének!";
        now.pics = "img/actminer.jpg";
        now.opt1.text = "Rendben, emelem a bérüket!";
        now.opt1.energy = "+";
        now.opt1.economy = "-";
        now.opt2.text = "Nem fogok több pénzt adni nekik!";
        now.opt2.energy = "--";
        now.opt2.economy = "+";
        break;
    case 45:
        now.text = "Van egy lehetséges új kutatási irány a Nap fényének elektromos árammá alakításában. Nagyon költséges fejlesztés, de hatékonyan termelne áramot.";
        now.pics = "img/actscientist.jpg";
        now.opt1.text = "Bízom Önben, vágjon bele!";
        now.opt1.energy = "++";
        now.opt1.economy = "---";
        now.opt2.text = "Nincs most erre forrásunk!";
        now.opt2.energy = "-";
        now.opt2.economy = "+";
        break;
    case 46:
        now.text = "A hadsereg üzemanyagkészletei eléggé szegényesek, kérem gondoskodjon az utánpótlásról!";
        now.pics = "img/actsoldier.jpg";
        now.opt1.text = "Vásároljanak üzemanyagot! ";
        now.opt1.energy = "+";
        now.opt1.economy = "-";
        now.opt2.text = "Ez nem a legmegfelelőbb pillanat, semmi forrás sincs rá!";
        now.opt2.energy = "+";
        now.opt2.economy = "--";
        break;
    case 47:
        now.text = "Segítsen, hogy új energiatakarékos izzókat tudjunk venni a színpadi reflektorokhoz!";
        now.pics = "img/actstar.jpg";
        now.opt1.text = "Rendben, vegyétek meg!";
        now.opt1.energy = "++";
        now.opt1.economy = "-";
        now.opt2.text = "Szó sem lehet róla!";
        now.opt2.energy = "-";
        now.opt2.economy = "++";
        break;
    case 48:
        now.text = "A tanulók kiváló ötletekkel álnak elő az energiaszektor megreformáláshoz, szerintem gazdaságilag is megtérülő projektekről van szó.";
        now.pics = "img/actteacher.jpg";
        now.opt1.text = "Mindenben támogatom, hogy ezek az ötletek megvalósulhassanak!";
        now.opt1.energy = "++";
        now.opt1.economy = "++";
        now.opt2.text = "Kétlem, hogy értene hozzá, hogy ezt megítélje, inkább csak tanítson tovább!";
        now.opt2.energy = "--";
        now.opt2.economy = "-";
        break;
    case 0:
        now.text = "";
        now.pics = "";
        now.opt1.text = "";
        now.opt1.energy = "";
        now.opt1.economy = "";
        now.opt2.text = "";
        now.opt2.energy = "";
        now.opt2.economy = "";
        break;
    }
}