import { Component } from '@angular/core';
import { Servicio1Service } from '../servicios/servicio1.service';

@Component({
    selector: 'app-departamentos',
    templateUrl: './departamentos.component.html',
    styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent {

    // Guarda todos los registros de departamentos
    departamentos: any[];

    // Guarda el departamento específico que se va a editar
    departamento: any;

    id: number;
    descripcion: string;
    codigoiso: string;
    codigonacional: string;
    indicativo: string;
    indicadorsistema: boolean;
    accion: string;

    readonly: boolean;
    valido: boolean;

    mensaje: string;

    constructor(private servicio1: Servicio1Service) {
        this.limpiarFormulario();

        this.departamento = {};

        this.departamentos = [];
    }

    listarDepartamentos() {
        this.servicio1.obtenerDepartamentos().subscribe(
            dato => this.departamentos = dato.data,
            err => alert(err),
            () => this.limpiarFormulario()
        );
    }

    editarDepartamento(id: number) {
        this.servicio1.obtenerDepartamento(id).subscribe(
            dato => this.departamento = dato.data[0],
            err => alert(err),
            () => this.llenarFomulario()
        );
    }

    llenarFomulario() {
        this.id = this.departamento.id;
        this.descripcion = this.departamento.descripcion;
        this.codigoiso = this.departamento.codigoiso;
        this.codigonacional = this.departamento.codigonacional;
        this.indicativo = this.departamento.indicativo;
        this.indicadorsistema = (this.departamento.indicadorsistema === '1');
        this.accion = 'u';

        // Si el registro es del sistema los campos no se pueden editar
        this.readonly = this.indicadorsistema;
    }

    guardarDepartamento() {
        if (this.indicadorsistema) {
            alert('No se puede grabar porque es un registro del sistema y no se puede modificar');
            return;
        }

        if (!this.validarDepartamento()) {
            return;
        }

        this.departamento.id = this.id;
        this.departamento.descripcion = this.descripcion;
        this.departamento.codigoiso = this.codigoiso;
        this.departamento.codigonacional = this.codigonacional;
        this.departamento.indicativo = this.indicativo;
        this.departamento.indicadorsistema = (this.indicadorsistema) ? '1' : '0';
        this.departamento.accion = this.accion;

        this.servicio1.guardarDepartamento(this.departamento).subscribe(
            dato => dato,
            err => alert(err),
            () => { alert('Guardado con éxito.'); this.listarDepartamentos(); }
        );
    }

    borrarDepartamento(id: number, indicadorsistema: string) {
        if (indicadorsistema === '1' || id === 0) {
            alert('No se puede borrar porque es un registro del sistema');
            return;
        }

        this.servicio1.borrarDepartamento(id).subscribe(
            dato => dato,
            err => alert(err),
            () => { alert('Borrado con éxito.'); this.listarDepartamentos(); }
        );
    }

    limpiarFormulario() {
        this.id = 0;
        this.descripcion = '';
        this.codigoiso = '';
        this.codigonacional = '';
        this.indicativo = '';
        this.indicadorsistema = false;

        this.accion = 'i';

        this.readonly = false;

        this.mensaje = '';
        this.valido = true;
    }

    validarDepartamento() {

        this.mensaje = '';
        this.valido = true;

        if (this.descripcion === '' || this.codigoiso === '' || this.codigonacional === '' || this.indicativo === '') {
            this.valido = false;
            this.mensaje = 'Faltan campos por escribir.';
        }

        return this.valido;
    }
}
