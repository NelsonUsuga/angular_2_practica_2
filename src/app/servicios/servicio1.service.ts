import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class Servicio1Service {

    constructor(private http: Http) { }

    obtenerDepartamentos() {
        let
        urlDepartamentos = 'http://192.168.0.51:3050/krgo/backend/public/operacionbd/departamentos',
        parametro = '{"encabezado":{"oid":17}}';

        return this.http.post(urlDepartamentos, parametro).map(res => res.json());
    }

    obtenerDepartamento(id: number) {
        let
        urlDepartamentos = 'http://192.168.0.51:3050/krgo/backend/public/operacionbd/departamentos',
        parametro = '{"encabezado":{"oid":17}, "filtros":{"id":' + id + '}}';

        return this.http.post(urlDepartamentos, parametro).map(res => res.json());
    }

    obtenerPaises() {
        let
        urlDepartamentos = 'http://192.168.0.51:3050/krgo/backend/public/operacionbd/paises',
        parametro = '{"encabezado":{"oid":14}}';

        return this.http.post(urlDepartamentos, parametro).map(res => res.json());
    }

    guardarDepartamento(datos) {
        let
        urlDepartamentos = 'http://192.168.0.51:3050/krgo/backend/public/operacionbd/guardardepartamento',
        parametro = `{
            "encabezado": {
                "oid": 17
            },
            "data": [
                {
                "id": ` + datos.id + `,
                "codigonacional": "` + datos.codigonacional + `",
                "descripcion": "` + datos.descripcion + `",
                "indicativo": "` + datos.indicativo + `",
                "idsyspais": ` + datos.idsyspais + `,
                "indicadorsistema": "` + datos.indicadorsistema + `",
                "codigoiso": "` + datos.codigoiso + `",
                "accion": "` + datos.accion + `"
                }
            ]
        }`;

        return this.http.post(urlDepartamentos, parametro).map(res => res.json());
    }

    borrarDepartamento(id: number) {
        let
        urlDepartamentos = 'http://192.168.0.51:3050/krgo/backend/public/operacionbd/borrardepartamento',
        parametro = '{"encabezado": {"oid": 17}, "data": [{"id":' + id + ', "accion":"d"}]}';

        return this.http.post(urlDepartamentos, parametro).map(res => res.json());
    }
}
