import type {Tweet} from '../types/Tweet';

export const initialTweets: Tweet[] = [
  {
    id: "1",
    authorName: "Ada Lovelace",
    authorHandle: "ada",
    content:"La machine analytique ne se limite pas au calcul numérique : elle peut manipuler des symboles et suivre une suite d'opérations définies à l'avance.",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Ada_Lovelace_portrait.jpg/500px-Ada_Lovelace_portrait.jpg",
      alt: "Portrait d'Ada Lovelace"
    },
    createdAt: "2026-07-01T09:12:00.000Z"
  },

  {
    id: "2",
    authorName: "Grace Hopper",
    authorHandle: "gracehopper",
    content:"Les ordinateurs doivent être pensés comme des outils au service des personnes. Rendre la programmation plus accessible permet à davantage de personnes de participer à l'évolution de l'informatique.",
    image: {
      url: "https://upload.wikimedia.org/wikipedia/commons/5/55/Grace_Hopper.jpg",
      alt: "Portrait de Grace Hopper"
    },
    createdAt: "2026-07-02T10:30:00.000Z"
  },

  {
    id: "3",
    authorName: "Alan Turing",
    authorHandle: "aturing",
    content:"Plutôt que de demander si une machine peut réellement penser, on peut étudier son comportement et se demander si celui-ci peut être distingué de celui d'un être humain.",
    createdAt: "2026-07-03T14:20:00.000Z"
  },

  {
    id: "4",
    authorName: "Margaret Hamilton",
    authorHandle: "mhamilton",
    content:"Dans les logiciels embarqués, chaque détail compte. La fiabilité doit être pensée dès la conception, car le programme peut devenir une partie essentielle d'un système complexe.",
    createdAt: "2026-07-04T08:45:00.000Z"
  },

  {
    id: "5",
    authorName: "Dennis Ritchie",
    authorHandle: "dmr",
    content:"Le langage C s'est développé dans un contexte où la simplicité, l'efficacité et la possibilité de travailler près du matériel étaient particulièrement importantes.",
    createdAt: "2026-07-05T16:10:00.000Z"
  },

  {
    id: "6",
    authorName: "Katherine Johnson",
    authorHandle: "kjohnson",
    content:"Les mathématiques permettent de transformer un problème complexe en étapes calculables. La précision des calculs joue un rôle essentiel lorsqu'il faut déterminer une trajectoire.",
    createdAt: "2026-07-06T11:05:00.000Z"
  },

  {
    id: "7",
    authorName: "Barbara Liskov",
    authorHandle: "bliskov",
    content:"La conception d'un programme ne consiste pas seulement à écrire du code : il faut aussi organiser les abstractions et les interfaces afin que les composants puissent être utilisés et combinés efficacement.",
    createdAt: "2026-07-07T13:40:00.000Z"
  },

  {
    id: "8",
    authorName: "Donald Knuth",
    authorHandle: "donknuth",
    content:"La programmation structurée invite à réfléchir à la structure d'un programme et à la manière dont les différentes instructions contrôlent son déroulement.",
    createdAt: "2026-07-08T09:55:00.000Z"
  },

  {
    id: "9",
    authorName: "Radia Perlman",
    authorHandle: "radia",
    content:"Les réseaux doivent être conçus pour fonctionner malgré la complexité et les changements. Une bonne architecture permet aux différents éléments de communiquer sans que chacun ait besoin de tout connaître des autres.",
    createdAt: "2026-07-09T15:25:00.000Z"
  },

  {
    id: "10",
    authorName: "Tim Berners-Lee",
    authorHandle: "timbl",
    content:"Le Web peut aller au-delà de simples documents reliés entre eux : l'objectif du Web sémantique est de permettre aux informations d'être mieux comprises et exploitées par les machines.",
    createdAt: "2026-07-10T18:00:00.000Z"
  }
];