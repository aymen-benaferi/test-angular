import { Component } from '@angular/core';
import { DogService } from '../dog.service';
import { Dog } from '../types';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent {
  dogs: Dog[] = []

  constructor(private dogService: DogService) {
  }
// récupérer la liste des chiens
  getDogs(): void {
    this.dogService.getDogs().subscribe(dogs => {
      this.dogs = dogs;
    });
  }

  updateDog(dog: Dog): void {
    this.dogService.updateDog(dog).subscribe(() => {
      // Logique supplémentaire après la mise à jour du chien
      // Par exemple, vous pouvez appeler à nouveau la méthode getDogs() pour rafraîchir la liste des chiens.
      this.getDogs();
    });
  }


  deleteDog(dog: Dog): void {
    this.dogService.deleteDog(dog.id).subscribe(() => {
      // Code pour supprimer un chien
      this.getDogs();
    });
  }



  ngOnInit(): void {
      this.getDogs();
    }

  }



