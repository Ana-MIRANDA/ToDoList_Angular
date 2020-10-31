//e responsabilidade deste servico gerir as minhas tasks dai guardar aqui as funcoes e para o controlador da vista nao ter essa responsabilidade
import { Injectable } from '@angular/core';
import {TASK} from '././mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  public myTasks = TASK; // a lista onde vou guardar as tarefas novas

//____1. para acrescentar uma tarefa a lista_________________
  
  public add(inputValue) { 
    if (inputValue != '') { 
      this.myTasks.push({'id':0,'name': inputValue, 'checked':false}); 
      inputValue = ''; 
    } 
  } //console.log("ami : " + this.newTask)


/*___2. se quisesse usar uma funçao para riscar a tarefa quando checkbox clicada__________________
rayer(tOuF){
  tOuF.checked = !tOuF.checked; // tOufChecked começa a true e se for true passa a false (!tOuF e um presque if mas sem parenteses)
ou
  if (tOuF.checked != true ){
       tOuF.checked = true; 
  } else{
    tOuF.checked = false;
  }
}*/


//____3.o service tem acesso à lista e da ao component acesso a lista_________
getTasks(){
  return this.myTasks;
  }
 
  constructor() { }
}
