//com o mock criamos uma simulacao de base de dados. Como nao a temos fazmemos de conta que temos com o mock 
//Task do interface task.ts obriga a respeitar a existanecia das propriedades que precisamos para usar a classe que se quer definida em task.ts

import {Task} from './task';


export const TASK :Task[] = [

    {id:1, name:"Appeler Medecin", checked: false },
    {id:2, name:"Chien", checked: false}
   
];

//para que esta lista seja usada, vamos a things.component.ts 