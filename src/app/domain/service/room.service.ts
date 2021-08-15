import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../entity/Room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) { }

  listarTodos(): Observable<Room[]> {
    const url = `${this.baseUrl}/rooms`;
    return this.http.get<Room[]>(url);
  }

  buscarPorId(id: String): Observable<Room> {
    const url = `${this.baseUrl}/rooms/${id}`;
    return this.http.get<Room>(url);
  }

  excluir(id: String): Observable<void> {
    const url = `${this.baseUrl}/rooms/${id}`;
    return this.http.delete<void>(url);
  }

  salvar(room: Room): Observable<Room> {
    const url = `${this.baseUrl}/rooms`;
    return this.http.post<Room>(url, room);
  }

  atualizar(room: Room): Observable<Room> {
    const url = `${this.baseUrl}/rooms`;
    return this.http.put<Room>(url, room);
  }

  mensagem(str: String) {
    this._snack.open(`${str}`, 'Ok', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 3000
    })
  }

}
