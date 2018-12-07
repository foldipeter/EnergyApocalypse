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

    document.getElementById("story").innerHTML = now.text;

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
            return numb + 6;
            break;
        case "+++":
            return numb + 16;
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
            return numb - 6;
            break;
        case "---":
            return numb - 16;
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

function FillStory(story) {
    switch(Math.floor(Math.random() * (1 - 1 + 1) ) + 1) {
    case 1:
        now.text = "Ez az epizód szövege";
        now.pics = "";
        now.opt1.text = "Első lehetőség";
        now.opt1.environment="+++";
        break;
    }
}

