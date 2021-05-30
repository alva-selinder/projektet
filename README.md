# Projektet

## Planering

Planen jag gjorde fick från början anpassas efter den tid jag hade, framför allt då jag fick mindre tid på mig att arbeta med projektet än vad som var tanken på grund av kirurgi. 

Jag har inte helt följt min originalplanering då jag bland annat vid flera tillfällen har skjutit upp mitt arbete, och jag har behövt anpassa min planering efter detta.

## Tillgänglighet

Färgschemat som användes på sidan har kontrollerats med WebAIMs [Contrast Checker](https://webaim.org/resources/contrastchecker/) för att kontrollera att kontrasten mellan textfärgen och bakgrunden är stor nog att texten ska vara lättläst. Faktarutan hade en kontrast på 11.33:1, headern hade kontrasten 8.61:1 och både footern och navbaren hade kontrasten 13.08:1, vilket innebär att alla dessa element kontrastmässigt godkänns enligt WCAG (Web Content Accesibility Guide) på nivån AA, men även den mer krävande AAA-nivån.

Bildtexten som hänvisade till bildkällorna hade dock inte en tydlig nog kontrast för att vara tillgänglig, då denna inte upnådde WCAG nivå AA.

Alla bilder har alternativ text som beskriver vad bilden visar. På det viset kan folk som använder skärmläsare veta vad som visas på sidan. 

## Validering och hastighet

Alla HTML-dokument har granskats och validerats via [Validator.nu](https://validator.nu) för att se till att dokumenten bland annat följer korrekt syntax och att ingenting har fallit bort. CSS-dokumentet som användes validerades av W3C:s egna [CSS-valideringstjänst](https://jigsaw.w3.org/css-validator/validator) som inte hittade några fel.

Sidan har även testats på olika enheter och sökmotorer, antigen via [BrowserStack](https://browserstack.com) eller manuellt genom att öppna sidan på olika enheter och i olika webbläsare.

Bilderna som användes på sidan är inte större än den största möjliga visningsstorleken och är då mindre krävande att ladda när sidan öppnas. Samtidigt finns det inte många bilder på de flesta sidorna så det blir inte alltför stor fördröjning.

## Upphovsrätt och lagar

Många utav bilderna använda på hemsidan är tagna av olika fotografer. De har laddat upp sina bilder på hemsidor som [Unsplash](https://unsplash.com) och [Pixabay](https://pixabay.com/sv/) och har använt sig av Creative Commons-licenser eller sidornas egna licenser som tillåter användning av dessa bilder.

[Creative Commons-licenser](https://creativecommons.org) används av fotografer som vill tillåta andra att använda sig av deras bilder. Många kräver endast att användaren anger vem som är fotografen, som till exempel de bilder som använts på hemsidan.

## Integritet och etik

När ett foto på en person läggs upp på internet kan i stort sett vem som helst se den bilden. Ofta kan personens ansikte och generella utseende märkas av, men det är också möjligt att detaljer på personens kläder eller i bildens bakgrund kan ge ledtrådar om var personen befinner sig eller om hen tillhör någon specifik organisation. Om detta sedan läggs ut på internet finns det en risk att någon använder dessa detaljer för att ta reda på mer information om personen på bilden. Detta kan fotografen och den fotograferade personen inte göra så mycket åt, men risken kan försöka undvikas genom att dölja identifierande information i fotot.

Ska ett foto som innehåller en eller flera personer läggas upp bör man få tillåtelse av alla som är med på fotot. Alla har en rätt till sitt eget privatliv och läggs ens ansikte ut på internet kan vem som helst se det. Dessutom är det möjligt att någon som fotograferats har skyddad identitet, och foton av dem kan vara en allvarlig risk för dem.

## Webbhotell

Webbhotell låter användaren publicera sina hemsidor utan att uprätthålla en egen webbserver. Det finns både betalda och kostnadsfria webbhotell, men betalda webbhotell har generellt både fler funktioner och bättre användarsupport. 

När man väljer webbhotell får man jämföra vilka olika tjänster som erbjuds och välja vilket som passar en bäst. Annonserar webbhotellet mycket om en viss funktion, till exempel att man kan skapa sin hemsida utan att behöva skriva egna HTML-dokument, komemr dessa funktioner ofta vara de mest välutvecklade och ha mest support från det webbhotellet. Då får man tänka på vad man själv vill prioritera.

Dessutom måste man se till att man litar på det webbhotell man använder sig av. Större webbhotell brukar ofta ha recensioner eller bedömningar, antingen på sin egen sida eller som folk har publicerat individuellt. Om ett webbhotell aktivt försöker gömma användarrecensioner är det troligtvis för att de har något att dölja som de inte vill att användarna ska få reda på, till exempel att de sparar allt som användaren gör på sidan.

## Domskript

Främst användes domskript för mindre funktioner som endast bidragit med mindre funktioner. De som användes var kod för en navbar som håller sig vid toppen av sidan när användaren scrollar, en knapp som låter användaren ta sig till toppen av sidan automatiskt, och en faktagenerator.

Både [navbar-skriptet](https://www.w3schools.com/howto/howto_js_navbar_sticky.asp) och [top-knappen](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp) hämtades från [w3schools](https://www.w3schools.com/) och domskriptet för faktageneratorn är återanvänd kod från citatgeneratorn vi gjorde när vi först fick skapa egna domskript.

Använder man sig av domskript som man inte skapat själv kan man inte alltid veta vad koden innehåller. Många domskript kan ha hundratals rader komprimerad kod och man kan sällan läsa igenom allt för att veta vad koden innehåller. Därför finns en betydlig risk att domskriptet innehåller kod man inte vill ha. Till exempel kan ett domskript innehålla en keylogger eller ett virus som drabbar användaren gömt i koden. Därför är det bäst att endast använda domskript från källor man litar på, gärna källor med användarrecensioner och bedömningar av andra som använt domskripten.

## Teckenkodning

Webbplatsens HTML-filer använde teckenkodningen UTF-8. Detta bland annat för att tecken som åäö ska visas korrekt på sidan. Utan UTF-8 skulle dessa inte synas. Det hade varit möjligt att till exempel visa ett å med "\&aring;" men det är lättare att använda sig av UTF-8.