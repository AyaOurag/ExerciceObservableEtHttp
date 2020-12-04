import { Injectable } from '@angular/core';
import { Subject , Observable } from 'rxjs';
import { Personne } from '../model/personne';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CvService {
  selectPersonneSubject = new Subject<Personne>();
  personnes: Personne[] = [];
  constructor(private http: HttpClient) {
    this.personnes = [
      new Personne(1, 'ourag', 'aya', 'etudiante', 'as.jpg', 123456, 22),
      new Personne(2, 'ourag', 'aya', 'etudiante2', '', 123456, 22),
      new Personne(2, 'ourag', 'aya', 'etudiante', '           ', 123456, 22),
    ];
  }
  getFakePersonnes(): Personne[]{
    return this.personnes;
  }
  getPersonnes(): Observable<Personne[]>{
    return this.http.get<Personne[]>('https://immense-citadel-91115.herokuapp.com/api/personnes');
  }

  selectPersonne(personne: Personne) {
    this.selectPersonneSubject.next(personne);
  }
}
