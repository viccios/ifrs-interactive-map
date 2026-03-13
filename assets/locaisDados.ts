export type Local = {
  id?: string
  type: string
  description: string
  imageUrl: string[]
  position: [number, number]
}

export const locais: Local[] = [
  {
    id: 'bloco1_banheiro',
    type: 'banheiro',
    description: 'Banheiro do corredor do ensino',
    imageUrl: ['imagens/Bloco1_Banheiro_Esquerda.jpg'],
    position: [-30.14144921356257, -51.130797828931925],
  },
  {
    id: 'bloco2_banheiro',
    type: 'banheiro',
    description: 'agenero',
    imageUrl: ['imagens/Bloco2_Banheiro.jpg'],
    position: [-30.141434136530837, -51.130365993267205],
  },
  {
    id: 'biblioteca_banheiro',
    type: 'banheiro',
    description: 'perto da biblioteca',
    imageUrl: ['imagens/Bloco1_Banheiro.jpg'],
    position: [-30.141707842286756, -51.13044511843559],
  },
  {
    id: 'bloco2_banheiro2',
    type: 'banheiro',
    description: 'masculino',
    imageUrl: [],
    position: [-30.141685806681963, -51.130140687703005],
  },
  {
    id: 'bloco2_banheiro3',
    type: 'banheiro',
    description: 'feminino',
    imageUrl: [],
    position: [-30.141550113638743, -51.1300333993391],
  },
  {
    id: 'bloco3_banheiro',
    type: 'banheiro',
    description: 'Banheiro do bloco 3',
    imageUrl: ['imagens/Bloco3_Banheiro.jpg'],
    position: [-30.14126828902699, -51.13023322391849],
  },
  {
    id: 'bloco4_banheiro',
    type: 'banheiro',
    description: 'Banheiro do bloco 4',
    imageUrl: ['imagens/Bloco4_Banheiro.jpg', 'imagens/Bloco4_Banheiro(1).jpg'],
    position: [-30.141074606620165, -51.13007765580158],
  },
  {
    id:  'bloco5_banheiro',
    type: 'banheiro',
    description: 'Banheiro do bloco 5',
    imageUrl: ['imagens/Bloco5_Banheiro.jpg', 'imagens/Bloco5_Banheiro(1).jpg'],
    position: [-30.140860047829424, -51.12990733552388],
  },
  {
    id: 'agricologia_banheiro',
    type: 'banheiro',
    description: 'Banheiro da agricologia',
    imageUrl: [
      'imagens/Agricologia_Banheiro.jpg',
      'imagens/Agricologia_Banheiro(1).jpg',
      'imagens/Agricologia_Banheiro(2).jpg',
      'imagens/Agricologia_Banheiro(3).jpg',
    ],
    position: [-30.140621516266794, -51.1307370362456],
  },
  {
    id: 'bloco1_biblioteca',
    type: 'biblioteca',
    description: "Biblioteca",
    imageUrl: [],
    position: [-30.141820164020242, -51.13031450449085]
  },
  {
    id: 'pertoDoLago',
    type: 'referencia',
    description: "aquele local perto do lago com as plantações",
    imageUrl: [],
    position: [-30.140973530309022, -51.1319426053998]
  },
  {
    id: 'Ginasio',
    type: 'ginasio',
    description: "é o ginásio",
    imageUrl: [],
    position: [-30.14089568180945, -51.13167979056607]
  },
  {
    id: 'QuadraVolei',
    type: 'ginasio',
    description: "Quadra de volei de areia",
    imageUrl: [],
    position: [-30.140857512405805, -51.13082029839561]
  },
  {
    id: 'Estufa',
    type: 'flor',
    description: "é a estufa",
    imageUrl: [],
    position: [-30.140497443543325, -51.13068044958903]
  },
  {
    id: 'bioConstrução',
    type: 'referencia',
    description: "é aquele telhadinho na frente da churrasqueira",
    imageUrl: [],
    position: [-30.140561026260926, -51.13084901269282]
  }
]
