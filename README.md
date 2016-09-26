# Eu Vreau  

## Ce este "Eu Vreau" ?
- o platformă open source ...


## Cum pot să contribui și eu ?


## Instrucțiuni pentru rularea locală a proiectului

- NodeJS, instalare pentru [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows), [OSX](https://coolestguidesontheplanet.com/installing-node-js-on-osx-10-10-yosemite/), [Linux](https://nodejs.org/en/download/package-manager/)
- [Ionic Framework](http://ionicframework.com/getting-started/)
- `git clone https://github.com/eloquentix/eu-vreau.git`
- `cd eu-vreau`
- `npm install grunt-cli gulp bower -g` - un set de interfețe linie de comandă, ar trebui să fie toate instalate deja, asta este o masură de siguranță
- `npm run setup` - instalează toate dependințele pentru cele 2 proiecte 
- `npm run serve-web` - rulează local aplicația web 
- `npm run serve-mobile` - rulează local aplicația de mobile, trebuie sa aveti toti pașii făcuți din instalarea Ionic 

## Detalii aplicație web
 
 Aplicația web are un sistem de automatizare bazată pe [GulpJS](http://gulpjs.com/), [Webpack](https://webpack.github.io/) - un sistem de împachetare / minifiere / servire module, dezvoltarea Javascript se face în standardul [ECMAScript 6](http://es6-features.org/) iar pentru stilizare se folosește [Stylus](http://stylus-lang.com/).
  
 Webpack împacheteaza aplicația într-un mod eficient, servind stiluri și scripturi specifice doar unde este nevoie. Locația de interes se află în `./desktop/client`.
 
 TBD - Chestii specifice despre cum se lucreaza cu build-systemul de mai sus.
 
 
## Detalii aplicație mobile

 Aplicația de mobile fiind bazată pe Ionic Framework are directorul în `./mobile/www`, unde dezvoltarea Javascript se face în standardul ECMAScript 5, referința de module este augmentată de [Browserify](http://browserify.org/) iar stilizarea se face cu [sass](http://sass-lang.com/).
 
 TBD - Chestii specifice despre cum se lucreaza cu build-systemul de mai sus.
 
 
## Metoda de contributii la proiect

### Colaborator

Pentru a deveni colaborator **EuVreau**, vă rugăm sa ne trimiteți un mail la [monica@eloquentix.com](monica@eloquentix.com).
Ca și colaborator, politica adăugării de îmbunătățiri / repararea de probleme se face pe o ramură git separată, cu crearea ulterioară a unui pull-request(??? cerere de tragere, pffff)

### Vizitator

Orice utilizator GitHub poate contribui la proiectul **EuVreau**, singura modalitate fiind crearea unei bifurcații a repository-ului `https://github.com/eloquentix/eu-vreau.git` și ulterior crearea unui pull-request 


TBD TBD
