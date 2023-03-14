import Item from '../models/NewsItemModel.js';

// TODO: replace items with data from back-end (not part of this user story)
const dummyItems = [
  new Item(1, "07-02-2023", 'Startnummers Grote Moeslandse Optocht', '<extra afbeeldingen laten zien?>', require('../../assets/examples/example_image_1.png')),
  new Item(2, "30-01-2023",  'Sleuteloverdracht', 'Na enkele ongebruikelijke jaren, barst het carnavalsfeest op 17 februari weer op de vertrouwde manier los. Eén ding is wel veranderd in die tijd van afwezigheid en dat is dat we niet meer als Landerd en Uden door het leven gaan, maar dat we sinds 1 januari 2022 met zes dorpen de gemeente Maashorst vormen. \n \nDaar hoort natuurlijk een andere invulling van de Sleuteloverdracht (oud gemeente Uden) en Erewijn (oud gemeente Landerd) bij. Wij willen de start van carnaval 2023 graag met jullie vieren in de Knoerissenstal op de Markt in Uden. Op 17 februari bent u van harte uitgenodigd om de start van het carnaval in de gemeente Maashorst met ons te vieren. Vanaf 16:00 zal de tent geopend zijn en zullen diverse kapellen van zich laten horen. Vanaf 17:00 zullen de hoogheden van de zes kernen, die samen de gemeente Maashorst vormen, de strijd met elkaar en de burgemeester aangaan om de sleutel van ieders eigen dorp te bemachtigen.', require('../../assets/examples/example_image_2.png')),
  new Item(3, "26-01-2023", 'Verslag Pronkzitting 2023', 'Op 14, 20 en 21 januari vond de Moeslande Pronkzitting plaats, en deze bestond dit jaar alweer 44 jaar en stond dan ook in het teken van een feestje, met als thema ‘Let’s celebrate’. En dat was te merken, er werd groots uitgepakt, met vooruitblikken naar de toekomst, maar ook teruggekeken naar de geschiedenis van de Moeslandse Pronkzitting.', require('../../assets/examples/example_image_3.png')),
  new Item(4, "16-01-2023", 'Bezorging Moesblad \'23', 'Drukproef Moesblad 2023 gereed, rond 28 januari huis-aan-huis bezorgd. \n\nOok dit jaar verschijnt er weer een prachtige carnavalskrant in het Moesland. De drukproef werd op donderdag 12 januari aangeboden aan Prins Djarek en Prinses Senne. De krant wordt op 27, 28 en 29 januari weer huis-aan-huis verspreid, ook in de buitengebieden.\n\nDe krant staat vol met vele fraaie foto’s en lezenswaardige stukjes, zoals de proclamatie van Prins Djarek d’n Urste. Plus vele grappige ingezonden artikelen van onze Moeslandse carnavalsclubs. Bijzonder onderdeel van de krant is het Jeugdmoesblad waarin jeugdprins Mats en jeugdprinses Isabelle en hun hele gevolg zich aan u voorstellen.', require('../../assets/examples/example_image_4.png')),
  new Item(5, "07-12-2022", 'Digitale kaartverkoop Pronkzitting', 'Digitale kaartverkoop Moeslandse Pronkzitting op woensdag 21 december.\n\nHet is dit jaar maar liefst de 44e editie van de Moeslandse Pronkzittingen “Bekek ’t mar”!!! Al die jaren schitteren er artiesten, groot en klein, op het Schaijkse podium, voor het fantastische publiek. Een succesvolle formule moet je natuurlijk niet aanpassen en deze formule kan nog jarenlang mee! Wij zijn er natuurlijk groot voorstander van om te vieren wat je vieren kunt. Vandaar dat wij dit dan ook met beide handen aanpakken, en dit jaar het thema “Let’s celebrate!” hebben gekozen!\n\nIn 2022 hebben we de “alles is anders”-Pronkzitting gehad in de feesttent! Later dan normaal en op een andere plek, maar ook dat was weer een waar feest. Het was fantastisch om dit met verschillende partijen en vele vrijwilligers in ons Moesland neer te zetten. Na afloop van het goedgevulde programma, hebben we op het podium afscheid genomen van Jeroen van Zuijlen als voorzitter van de Commissie Pronkzitting, onze streep. Hij heeft zich jarenlang met hart en ziel ingezet voor de Pronkzitting en gelukkig hoeven we hem niet te missen, want we blijven hem op het podium zien bij de Hofkapel.', require('../../assets/examples/example_image_5.png')),
  new Item(6, "07-12-2022", 'Ontwerp jij het logo voor het 66-jarig bestaan?', 'Ben JIJ de ontwerper van het nieuwe logo voor het 66-jarig jubileumjaar van Stichting Carnaval de Moeslanden?\n\nOp 11-11 2023 zal de aftrap gegeven gaan worden voor het 66e carnavalsjaar van Stichting Carnaval de Moeslanden. Er wordt al hard gewerkt om dat jaar een feestjaar te maken. Maar wat is een feestjaar zonder eigen logo?\n\nDaarom dagen we jou uit om een passend logo te maken. Hoe dit logo eruit zal dat bepaal jij, je mag al je creativiteit gebruiken.Er is eigenlijk maar 1 ding belangrijk het logo moet bruikbaar zijn voor pr-doeleinden. Oftewel het logo moet herkenbaar zijn en blijven bij gebruik op Instagram, Facebook, etc. etc.', require('../../assets/examples/example_image_6.png')),
];

export default class NewsItemController {
  static getAllItems() {
    return dummyItems;
  }
}