# BaSP - MegaRocket App

Mega Rocket App is a software project that offers a platform to administer and manage a gym. It provides essential functionalities to manage members, register trainers, schedule classes.

### WEEK 13
## INTRODUCTION

This week, the Devs team worked on implementing Redux in the project. To improve the efficiency, readabilitily and maintainability of the code.

We restructured the application's state management system. Previously, each component handled and modified its own state, which, from a technical standpoint, we believe hindered code readability and maintainability. Because there is a clear separation between state management and component logic.

Currently, with the implementation of Redux in our application, we have achieved more efficient code because all the information is consolidated in a global state called store and can only be modified through the use of reducers. Thanks to this, we have achieved cleaner code by avoiding "prop drilling," Redux eliminates the need for passing data through multiple nested child components. This reduces the complexity of passing data between components and improves overall code cleanliness.

### Benefits of Redux implementation
- Improved Code Efficiency
<br>
- Enhanced Code Readability
<br>
- Better Code Maintainability

## Initial Setup

### Install dependencies

    npm install

### Setup environment file

create a file at root called `.env` and add this:

    REACT_APP_API_URL=http://localhost:4000/api

### Run App

    npm start

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.\
You will also see any lint errors in the console.

### Check Lint errors

    npm run lint

### Fix Lint errors

    npm run lint:fix

<br>




## Members

### Develevoper team

|                                          Photo                                           |        Name         |               Mail               |                          Github                          |
| :--------------------------------------------------------------------------------------: | :-----------------: | :------------------------------: | :------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/127541829?v=4" height="50" width="50"> |  Yhanahi Rosenthal  |       yhanahi16@gmail.com        | [@YhanahiRosenthal](https://github.com/YhanahiRosenthal) |
| <img src="https://avatars.githubusercontent.com/u/102418096?v=4" height="50" width="50"> |    Mauro Jimenez    |      maurojim123@gmail.com       |      [@MauroJimenez](https://github.com/maurojjzz)       |
| <img src="https://avatars.githubusercontent.com/u/91099276?v=4" height="50" width="50">  |  Cristian Lotorto   |    cristianlotorto@gmail.com     |  [@CristianLotorto](https://github.com/CristianLotorto)  |
| <img src="https://avatars.githubusercontent.com/u/49520632?v=4" height="50" width="50">  |    Ivan Jukonis     |      jukoivan024@gmail.com       |      [@IvanJukonis](https://github.com/IvanJukonis)      |
| <img src="https://avatars.githubusercontent.com/u/93749172?v=4" height="50" width="50">  |      Gino Boca      |        gnoboca@gmail.com         |        [@GinoBoca](https://github.com/Ginoboca1)         |
| <img src="https://avatars.githubusercontent.com/u/127460882?v=4" height="50" width="50"> |   Mateo Carciente   |    mateocarciente1@gmail.com     |      [@MateoCarciente](https://github.com/MaateoC)       |
| <img src="https://avatars.githubusercontent.com/u/70213263?v=4" height="50" width="50">  | Franco Gaston Lelli |   francogastonlelli@gmail.com    |   [@FrancoGastonLelli](https://github.com/FrancoLelli)   |
| <img src="https://avatars.githubusercontent.com/u/127543742?v=4" height="50" width="50"> |  Emanuel Lamberti   |      elemanu9222@gmail.com       | [@Emanuel Lamberti](https://github.com/Emanuel-Lamberti) |
| <img src="https://avatars.githubusercontent.com/u/123522303?v=4" height="50" width="50"> | Florencia Di Mónaco |      flordimonaco@gmail.com      |  [@FlorenciaDiMónaco](https://github.com/flordimonaco)   |
| <img src="https://avatars.githubusercontent.com/u/86127600?v=4" height="50" width="50">  |  Ticiano Licarzze   |      ticilicarzze@gmail.com      |   [@TicianoLicarzze](https://github.com/ticilicarzze)    |
| <img src="https://avatars.githubusercontent.com/u/55507203?v=4" height="50" width="50">  |   Nicolas Cagnina   | nicolas.cagnina@radiumrocket.com |    [@NicolasCagnina](https://github.com/NicoCagnina)     |
| <img src="https://avatars.githubusercontent.com/u/72134180?v=4" height="50" width="50">  |    Carla Baleani    |  carla.baleani@radiumrocket.com  |       [@CarlaBaleani](https://github.com/cbaleani)       |

### QA team

|                                          Photo                                           |        Name        |           Mail           |                        Github                        |
| :--------------------------------------------------------------------------------------: | :----------------: | :----------------------: | :--------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/127681628?v=4" height="50" width="50"> |    Glenda Viera    |    glevide@gmail.com     |     [@Glenda Viera](https://github.com/GleViDe)      |
| <img src="https://avatars.githubusercontent.com/u/127527880?v=4" height="50" width="50"> | Alejandra Paggiola |  alefpaggiola@gmail.com  | [@AlejandraPaggiola](https://github.com/AlePaggiola) |
| <img src="https://avatars.githubusercontent.com/u/127547287?v=4" height="50" width="50"> |   Barbara Millan   | barbii.millan@gmail.com  |   [@BarbaraMillan](https://github.com/Barbimillan)   |
| <img src="https://avatars.githubusercontent.com/u/127552931?v=4" height="50" width="50"> |    Martin Lupo     | lupomartin2003@gmail.com |     [@MartinLupo](https://github.com/lupomartin)     |

<br>

### License & Copyright

© Radium Rocket "Become a Software Professional 2023"