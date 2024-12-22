import ous from './assets/Ous.webp'
import menk from './assets/MenkInPaint.jpg'
import art from './assets/wallArt.jpeg'
import G from './assets/g.jpg'
import { useEffect } from 'react'



    
const totalCustomers = [
  {
    id: 1,
    name: 'Abdoulaye Diallo',
    email: 'abdoulaye.diallo@example.com',
    location: 'Senegal',
    active: true,
    photo: ous
  },
  {
    id: 2,
    name: 'Isatou Jatta',
    email: 'isatou.jatta@example.com',
    location: 'Gambia',
    active: false,
    photo: ous
  },
  {
    id: 3,
    name: 'Fatoumata Bah',
    email: 'fatoumata.bah@example.com',
    location: 'Guinea',
    active: true,
    photo: ous
  },
  {
    id: 4,
    name: 'Mohamed Conteh',
    email: 'mohamed.conteh@example.com',
    location: 'Sierra Leone',
    active: true,
    photo: ous
  },
  {
    id: 5,
    name: 'Aminata Cisse',
    email: 'aminata.cisse@example.com',
    location: 'Mali',
    active: false,
    photo: ous
  },
  {
    id: 6,
    name: 'Kofi Mensah',
    Email: 'kofi.mensah@example.com',
    location: 'Ghana',
    active: true,
    photo: ous
  },
  {
    id: 7,
    name: 'Binta Sillah',
    email: 'binta.sillah@example.com',
    location: 'Gambia',
    active: false,
    photo: ous
  },
  {
    id: 8,
    name: 'Emmanuel Akpan',
    email: 'emmanuel.akpan@example.com',
    location: 'Nigeria',
    active: true,
    photo: ous
  },
  {
    id: 9,
    name: 'Salimata Traore',
    email: 'salimata.traore@example.com',
    location: 'Burkina Faso',
    active: true,
    photo: ous
  },
  {
    id: 10,
    name: 'Adama Kamara',
    email: 'adama.kamara@example.com',
    location: 'Ivory Coast',
    active: false,
    photo: ous
  },
  {
    id: 11,
    name: 'Lamin Fofana',
    email: 'lamin.fofana@example.com',
    location: 'Guinea-Bissau',
    active: true,
    photo: art
  },
  {
    id: 12,
    name: 'Modou Cham',
    email: 'modou.cham@example.com',
    location: 'Gambia',
    active: false,
    photo: art
  },
  {
    id: 13,
    name: 'Khadija Sow',
    email: 'khadija.sow@example.com',
    location: 'Niger',
    active: true,
    photo: art
  },
  {
    id: 14,
    name: 'Musa Koroma',
    email: 'musa.koroma@example.com',
    location: 'Sierra Leone',
    active: true,
    photo: art
  },
  {
    id: 15,
    name: 'Hawa Manneh',
    email: 'hawa.manneh@example.com',
    location: 'Gambia',
    active: false,
    photo: art
  },
  {
    id: 16,
    name: 'Cheikh Diop',
    email: 'cheikh.diop@example.com',
    location: 'Senegal',
    active: true,
    photo: art
  },
  {
    id: 17,
    name: 'Fatimata Ndiaye',
    email: 'fatimata.ndiaye@example.com',
    location: 'Senegal',
    active: false,
    photo: art
  },
  {
    id: 18,
    name: 'Peter Addo',
    email: 'peter.addo@example.com',
    location: 'Ghana',
    active: true,
    photo: art
  },
  {
    id: 19,
    name: 'Saidu Bangura',
    email: 'saidu.bangura@example.com',
    location: 'Sierra Leone',
    active: false,
    photo: art
  },
  {
    id: 20,
    name: 'Marie Johnson',
    email: 'marie.johnson@example.com',
    location: 'Liberia',
    active: true,
    photo: art
  },
{
  id: 21,
  name: 'Ebrima Jallow',
  email: 'ebrima.jallow@example.com',
  location: 'Banjul, Gambia',
  active: true,
  photo:  menk

},
{
  id: 22,
  name: 'Fatou Ceesay',
  email: 'fatou.ceesay@example.com',
  location: 'Serekunda, Gambia',
  active: false,
  photo: menk,
},
{
  id: 23,
  name: 'Alieu Njie',
  email: 'alieu.njie@example.com',
  location: 'Brikama, Gambia',
  active: true,
  photo:menk
},
{
  id: 24,
  name: 'Awa Sanyang',
  email: 'awa.sanyang@example.com',
  location: 'Bakau, Gambia',
  active: false,
  photo: menk,
},
{
  id: 25,
  name: 'Modou Bah',
  email: 'modou.bah@example.com',
  location: 'Farafenni, Gambia',
  active: true,
  photo: menk,
},
{
  id: 26,
  name: 'Isatou Camara',
  email: 'isatou.camara@example.com',
  location: 'Soma, Gambia',
  active: true,
  photo: menk,
},
{
  id: 27,
  name: 'Lamin Touray',
  email: 'lamin.touray@example.com',
  location: 'Sukuta, Gambia',
  active: false,
  photo: menk
},
{
  id: 28,
  name: 'Mariama Jammeh',
  email: 'mariama.jammeh@example.com',
  location: 'Barra, Gambia',
  active: true,
  photo: menk,
},
{
  id: 29,
  name: 'Ousman Drammeh',
  email: 'ousman.drammeh@example.com',
  location: 'Kanifing, Gambia',
  active: false,
  photo: menk
},
{
  id: 30,
  name: 'Adama Saidy',
  email: 'adama.saidy@example.com',
  location: 'Basse, Gambia',
  active: true,
  photo: menk
},
{
  id: 31,
  name: 'Ebrima Jallow',
  email: 'ebrima.jallow@example.com',
  location: 'Banjul, Gambia',
  active: true,
  photo:  G

},
{
  id: 32,
  name: 'Fatou Ceesay',
  email: 'fatou.ceesay@example.com',
  location: 'Serekunda, Gambia',
  active: false,
  photo: G,
},
{
  id: 33,
  name: 'Alieu Njie',
  email: 'alieu.njie@example.com',
  location: 'Brikama, Gambia',
  active: true,
  photo: G
},
{
  id: 34,
  name: 'Awa Sanyang',
  email: 'awa.sanyang@example.com',
  location: 'Bakau, Gambia',
  active: false,
  photo: G,
},
{
  id: 35,
  name: 'Modou Bah',
  email: 'modou.bah@example.com',
  location: 'Farafenni, Gambia',
  active: true,
  photo: G,
},
{
  id: 36,
  name: 'Isatou Camara',
  email: 'isatou.camara@example.com',
  location: 'Soma, Gambia',
  active: true,
  photo: G,
},
{
  id: 37,
  name: 'Lamin Touray',
  email: 'lamin.touray@example.com',
  location: 'Sukuta, Gambia',
  active: false,
  photo: G
},

{
  id: 38,
  name: 'Mariama Jammeh',
  email: 'mariama.jammeh@example.com',
  location: 'Barra, Gambia',
  active: true,
  photo: G,
},

{
  id: 39,
  name: 'Ousman Drammeh',
  email: 'ousman.drammeh@example.com',
  location: 'Kanifing, Gambia',
  active: false,
  photo: G
},

{
  id: 40,
  name: 'Adama Saidy',
  email: 'adama.saidy@example.com',
  location: 'Basse, Gambia',
  active: true,
  photo: G    
},
]
const initialCustomers = [
  {
    id: 1,
    name: 'Abdoulaye Diallo',
    email: 'abdoulaye.diallo@example.com',
    location: 'Senegal',
    active: true,
    photo: ous
  },
  {
    id: 2,
    name: 'Isatou Jatta',
    email: 'isatou.jatta@example.com',
    location: 'Gambia',
    active: false,
    photo: ous
  },
  {
    id: 3,
    name: 'Fatoumata Bah',
    email: 'fatoumata.bah@example.com',
    location: 'Guinea',
    active: true,
    photo: ous
  },
  {
    id: 4,
    name: 'Mohamed Conteh',
    email: 'mohamed.conteh@example.com',
    location: 'Sierra Leone',
    active: true,
    photo: ous
  },
  {
    id: 5,
    name: 'Aminata Cisse',
    email: 'aminata.cisse@example.com',
    location: 'Mali',
    active: false,
    photo: ous
  },
  {
    id: 6,
    name: 'Kofi Mensah',
    Email: 'kofi.mensah@example.com',
    location: 'Ghana',
    active: true,
    photo: ous
  },
  {
    id: 7,
    name: 'Binta Sillah',
    email: 'binta.sillah@example.com',
    location: 'Gambia',
    active: false,
    photo: ous
  },
  {
    id: 8,
    name: 'Emmanuel Akpan',
    email: 'emmanuel.akpan@example.com',
    location: 'Nigeria',
    active: true,
    photo: ous
  },
  {
    id: 9,
    name: 'Salimata Traore',
    email: 'salimata.traore@example.com',
    location: 'Burkina Faso',
    active: true,
    photo: ous
  },
  {
    id: 10,
    name: 'Adama Kamara',
    email: 'adama.kamara@example.com',
    location: 'Ivory Coast',
    active: false,
    photo: ous
  },
        
  // Add the remaining customers similarly
];

 


export{initialCustomers, totalCustomers}

   