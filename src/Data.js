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
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    id: 2,
    name: 'Isatou Jatta',
    email: 'isatou.jatta@example.com',
    location: 'Gambia',
    active: false,
    photo: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Fatoumata Bah',
    email: 'fatoumata.bah@example.com',
    location: 'Guinea',
    active: true,
    photo:'https://plus.unsplash.com/premium_photo-1683140438174-5bea5f9bc33c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Mohamed Conteh',
    email: 'mohamed.conteh@example.com',
    location: 'Sierra Leone',
    active: true,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'Aminata Cisse',
    email: 'aminata.cisse@example.com',
    location: 'Mali',
    active: false,
    photo:'https://images.unsplash.com/photo-1578320339911-5e7974b2720a?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: 'Kofi Mensah',
    email: 'kofi.mensah@example.com',
    location: 'Ghana',
    active: true,
    photo: 'https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    name: 'Binta Sillah',
    email: 'binta.sillah@example.com',
    location: 'Gambia',
    active: false,
    photo: 'https://plus.unsplash.com/premium_photo-1700932723489-dcbfd3e5db1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    name: 'Emmanuel Akpan',
    email: 'emmanuel.akpan@example.com',
    location: 'Nigeria',
    active: true,
    photo: 'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    name: 'Salimata Traore',
    email: 'salimata.traore@example.com',
    location: 'Burkina Faso',
    active: true,
    photo: 'https://plus.unsplash.com/premium_photo-1718737640748-32411ed4b9a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
    photo: 'https://images.unsplash.com/photo-1531384698654-7f6e477ca221?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 12,
    name: 'Modou Cham',
    email: 'modou.cham@example.com',
    location: 'Gambia',
    active: false,
    photo: 'https://plus.unsplash.com/premium_photo-1715876234324-9ad07da8ad16?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'
  },
  {
    id: 13,
    name: 'Khadija Sow',
    email: 'khadija.sow@example.com',
    location: 'Niger',
    active: true,
    photo: 'https://images.unsplash.com/photo-1529245019870-59b249281fd3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 14,
    name: 'Musa Koroma',
    email: 'musa.koroma@example.com',
    location: 'Sierra Leone',
    active: true,
    photo: 'https://images.unsplash.com/photo-1531901599143-df5010ab9438?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 15,
    name: 'Hawa Manneh',
    email: 'hawa.manneh@example.com',
    location: 'Gambia',
    active: false,
    photo: 'https://plus.unsplash.com/premium_photo-1715876268694-abf2d2d24b57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'
  },
  {
    id: 16,
    name: 'Cheikh Diop',
    email: 'cheikh.diop@example.com',
    location: 'Senegal',
    active: true,
    photo: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHx8'
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
    photo: 'https://images.unsplash.com/photo-1518882570151-157128e78fa1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8'
  },
  {
    id: 19,
    name: 'Saidu Bangura',
    email: 'saidu.bangura@example.com',
    location: 'Sierra Leone',
    active: false,
    photo: 'https://images.unsplash.com/photo-1565884280295-98eb83e41c65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIyfHx8ZW58MHx8fHx8'
  },
  {
    id: 20,
    name: 'Marie Johnson',
    email: 'marie.johnson@example.com',
    location: 'Liberia',
    active: true,
    photo: 'https://images.unsplash.com/photo-1576568684258-5501fa2a0eb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGliZXJpYW4lMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D'
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
  photo: 'https://media.istockphoto.com/id/2155644202/photo/portrait-of-black-muslim-woman-very-happy-smiling-and-looking-at-camera.webp?a=1&b=1&s=612x612&w=0&k=20&c=fTEs1sL8d9IT0QwMxYrHlb_MAb3klhHoYaf31z1Rp6c=',
},
{
  id: 23,
  name: 'Alieu Njie',
  email: 'alieu.njie@example.com',
  location: 'Brikama, Gambia',
  active: true,
  photo:'https://plus.unsplash.com/premium_photo-1724835760740-bb8e0e965050?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJsYWNrJTIwbWVufGVufDB8fDB8fHww'
},
{
  id: 24,
  name: 'Awa Sanyang',
  email: 'awa.sanyang@example.com',
  location: 'Bakau, Gambia',
  active: false,
  photo: 'https://media.istockphoto.com/id/1819215949/photo/muslim-black-woman-portrait-at-home-in-livingroom.webp?a=1&b=1&s=612x612&w=0&k=20&c=9R_AB7ahN6K77YUj0NwoWavErCqKLc5oAM9yZ5itQio=',
},
{
  id: 25,
  name: 'Modou Bah',
  email: 'modou.bah@example.com',
  location: 'Farafenni, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1510271239234-acaa528210e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJsYWNrJTIwbWVufGVufDB8fDB8fHww',
},
{
  id: 26,
  name: 'Isatou Camara',
  email: 'isatou.camara@example.com',
  location: 'Soma, Gambia',
  active: true,
  photo: 'https://media.istockphoto.com/id/1311205981/photo/portrait-of-beautiful-black-african-muslim-woman-smiling-outdoors.webp?a=1&b=1&s=612x612&w=0&k=20&c=VdswWKf-Rm2qoSLYPK9X9Gcet0RW4lfs21zPMIGvpSQ=',
},
{
  id: 27,
  name: 'Lamin Touray',
  email: 'lamin.touray@example.com',
  location: 'Sukuta, Gambia',
  active: false,
  photo: 'https://images.unsplash.com/photo-1718048170732-0ef8a77fce9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmxhY2slMjBoaWphYmklMjAlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D'
},
{
  id: 28,
  name: 'Mariama Jammeh',
  email: 'mariama.jammeh@example.com',
  location: 'Barra, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1532636330734-1911664950db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBoaWphYmklMjAlMjB3b21hbnxlbnwwfHwwfHx8MA%3D%3D',
},
{
  id: 29,
  name: 'Ousman Drammeh',
  email: 'ousman.drammeh@example.com',
  location: 'Kanifing, Gambia',
  active: false,
  photo: 'https://images.unsplash.com/photo-1529111290557-82f6d5c6cf85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww'
},
{
  id: 30,
  name: 'Adama Saidy',
  email: 'adama.saidy@example.com',
  location: 'Basse, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1509325404979-0e774facceda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww'
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
  photo:'https://images.unsplash.com/photo-1508204586726-60e8c459e52d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
},
{
  id: 33,
  name: 'Alieu Njie',
  email: 'alieu.njie@example.com',
  location: 'Brikama, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1552321649-f66d87409da2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJsYWNrJTIwbWFufGVufDB8fDB8fHww'
},
{
  id: 34,
  name: 'Awa Sanyang',
  email: 'awa.sanyang@example.com',
  location: 'Bakau, Gambia',
  active: false,
  photo: 'https://plus.unsplash.com/premium_photo-1661585987573-c5873c7e258e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fHw%3D',
},
{
  id: 35,
  name: 'Modou Bah',
  email: 'modou.bah@example.com',
  location: 'Farafenni, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1576695444267-40cdd214f06e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D',
},
{
  id: 36,
  name: 'Isatou Camara',
  email: 'isatou.camara@example.com',
  location: 'Soma, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
},
{
  id: 37,
  name: 'Lamin Touray',
  email: 'lamin.touray@example.com',
  location: 'Sukuta, Gambia',
  active: false,
  photo: 'https://images.unsplash.com/photo-1563721572772-fbf713fff374?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8'
},

{
  id: 38,
  name: 'Mariama Jammeh',
  email: 'mariama.jammeh@example.com',
  location: 'Barra, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1571442463800-1337d7af9d2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJsYWNrJTIwd29tYW58ZW58MHx8MHx8fDA%3D',
},

{
  id: 39,
  name: 'Ousman Drammeh',
  email: 'ousman.drammeh@example.com',
  location: 'Kanifing, Gambia',
  active: false,
  photo: 'https://images.unsplash.com/photo-1583424201621-2f15102362e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8'
},

{
  id: 40,
  name: 'Adama Saidy',
  email: 'adama.saidy@example.com',
  location: 'Basse, Gambia',
  active: true,
  photo: 'https://images.unsplash.com/photo-1515943492249-2d5d5d944085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8'    
},
]
const initialCustomers = [
  {
    id: 1,
    name: 'Abdoulaye Diallo',
    email: 'abdoulaye.diallo@example.com',
    location: 'Senegal',
    active: true,
    photo: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
  {
    id: 2,
    name: 'Isatou Jatta',
    email: 'isatou.jatta@example.com',
    location: 'Gambia',
    active: false,
    photo: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 3,
    name: 'Fatoumata Bah',
    email: 'fatoumata.bah@example.com',
    location: 'Guinea',
    active: true,
    photo:'https://plus.unsplash.com/premium_photo-1683140438174-5bea5f9bc33c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 4,
    name: 'Mohamed Conteh',
    email: 'mohamed.conteh@example.com',
    location: 'Sierra Leone',
    active: true,
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'Aminata Cisse',
    email: 'aminata.cisse@example.com',
    location: 'Mali',
    active: false,
    photo:'https://images.unsplash.com/photo-1578320339911-5e7974b2720a?q=80&w=1378&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 6,
    name: 'Kofi Mensah',
    email: 'kofi.mensah@example.com',
    location: 'Ghana',
    active: true,
    photo: 'https://images.unsplash.com/photo-1533636721434-0e2d61030955?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 7,
    name: 'Binta Sillah',
    email: 'binta.sillah@example.com',
    location: 'Gambia',
    active: false,
    photo: 'https://plus.unsplash.com/premium_photo-1700932723489-dcbfd3e5db1f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 8,
    name: 'Emmanuel Akpan',
    email: 'emmanuel.akpan@example.com',
    location: 'Nigeria',
    active: true,
    photo:'https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 9,
    name: 'Salimata Traore',
    email: 'salimata.traore@example.com',
    location: 'Burkina Faso',
    active: true,
    photo: 'https://plus.unsplash.com/premium_photo-1718737640748-32411ed4b9a6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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


function filterCustomers(customers, query){
  query = query.toLowerCase();

  return customers.filter(customer => customer.name.split(' ')
  .some( word => word.toLowerCase().startsWith(query)));
}
 


export{initialCustomers, totalCustomers, filterCustomers};

   