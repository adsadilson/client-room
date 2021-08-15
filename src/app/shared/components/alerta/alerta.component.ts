import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alerta } from '../../interface/alerta';

@Component({
  selector: 'apss-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css']
})
export class AlertaComponent implements OnInit {

  alerta = {
  titulo : 'Sucesso!',
  descricao : 'Registro salvo com sucesso!',
  mensagem: 'Registro salvo com sucesso!',
  btnSucesso : 'Ok',
  btnCancelar : 'Cancelar',
  btnCor : 'primary',
  possuirBtnFechar : false
  } as Alerta;

  constructor(public dialogRef: MatDialogRef<AlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alerta) { }

  ngOnInit(): void {
    if (this.data) {
      this.alerta.titulo = this.data.titulo || this.alerta.titulo;
      this.alerta.mensagem = this.data.mensagem || this.alerta.mensagem;
      this.alerta.descricao = this.data.descricao || this.alerta.descricao
      this.alerta.btnSucesso = this.data.btnSucesso || this.alerta.btnSucesso;
      this.alerta.btnCancelar = this.data.btnCancelar || this.alerta.btnCancelar;
      this.alerta.btnCor = this.data.btnCor || this.alerta.btnCor;
      this.alerta.possuirBtnFechar = this.data.possuirBtnFechar || this.alerta.possuirBtnFechar;
    }
  }
}
