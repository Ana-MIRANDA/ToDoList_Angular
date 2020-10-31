import { Component, OnInit } from '@angular/core';
import {Task} from './../task';

import { TaskServiceService } from '../task-service.service';
import { FormsModule} from '@angular/forms'; // p s usar formularios


@Component({
  selector: 'app-things-to-do',
  templateUrl: './things-to-do.component.html',
  styleUrls: ['./things-to-do.component.css']
})
export class ThingsToDoComponent implements OnInit  {
  //retirei a OnInit na declarcao e dentro da classe pk estava dar erro
  //__________________________________

  public newTask; 
  public myTasks;

  constructor(private taskService:TaskServiceService) {} 

//___1. OnInit_________
    ngOnInit(): void { //esta funçao é chamada quando se carrega este component e pede ao servce os dados, a lista de tasks
      this.myTasks= this.taskService.getTasks();
    }

//2.______chamar a funçao add() de task-service - para acrescentar tasks a lista - q esta em service
    add(a){
    this.taskService.add(a);//chamar a funçao add de servico TaskService
    }

/* se eu quisesse eusar a funçao rayer:
//3.____funçao de riscar quando checkbox clicada
    rayer(b){
      this.taskService.rayer(b); //aqui tem argumento b mas no service é tOuF
    } */

 
}//fecha a classe


