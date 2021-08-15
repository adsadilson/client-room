import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Room } from 'src/app/domain/entity/Room';
import { RoomService } from 'src/app/domain/service/room.service';
import { AlertaComponent } from 'src/app/shared/components/alerta/alerta.component';
import { Alerta } from 'src/app/shared/interface/alerta';

@Component({
  selector: 'apss-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements AfterViewInit {

  rooms: Room[] = [];

  room: Room = {
    id: '',
    name: '',
    date: '',
    startHour: '',
    endHour: '',
    active: '',
  }

  displayedColumns: string[] = ['id', 'nome', 'data', 'inicio', 'fim', 'status', 'acao'];

  dataSource = new MatTableDataSource<Room>(this.rooms);

  constructor(public dialog: MatDialog, private roomServe: RoomService, 
    private route: ActivatedRoute, private router: Router) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.room.id = this.route.snapshot.paramMap.get("id")!;
    this.listarTodos();
  }

  nevegarParaRoomCreate() {
    this.router.navigate(["rooms/create"])
  }

  listarTodos(): void {
    this.roomServe.listarTodos().subscribe((resposta) => {
      this.rooms = resposta;
      console.log(resposta);
    })
  }

  buscarPorId(): void {
    this.roomServe.buscarPorId(this.room.id!).subscribe((resposta) => {
      this.room = resposta;
    })
  }

  excluir(row: Room): void {
    const config = {
      data: {
        titulo: 'Exclusão', mensagem: "Tem certeza que deseja excluir o registro? ",
        descricao: row.id + " - " + row.name,
        possuirBtnFechar: true
      } as Alerta
    };

    const dialogRef = this.dialog.open(AlertaComponent, config);
    dialogRef.afterClosed().subscribe((opcao: boolean) => {
      if (opcao) {
        this.roomServe.excluir(row.id!).subscribe(() => {
          this.listarTodos();
          this.roomServe.mensagem('Registro excluido com sucesso!');
        });

      }
    })
  }

}


