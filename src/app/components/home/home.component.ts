import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public infoCliente: Cliente | undefined;
    public loader: boolean = false;
    public nombreUsuario: string | undefined;
    public positionUser: string | undefined;

    constructor(private _cliente: ClientesService) { }

    ngOnInit(): void {
        this.loader = true;
        this.positionUser = "Gerente de Relación";
        this.getCliente();
    }

    public getCliente() {
        this._cliente.getInfoClient().subscribe(data => {

            this.infoCliente = data;
            this.nombreUsuario = this.infoCliente.response.gerenteRelacion || "Usuario";
            setTimeout(() => {
                this.loader = false;
            }, 500);
        })
    }
    
    public activateCard(action: string, $event: any, id: string, classElement: string) {
        let parent: HTMLElement = $event.target.parentElement;
        let element: HTMLElement | null;
        let listElements: HTMLCollection = document.getElementsByClassName(classElement)
        if (!parent.id) {
            element = parent.parentElement;
            if (!element?.classList.contains(action)) {
                for (let i = 0; i < listElements.length; i++) {
                    listElements[i].classList.remove(action);
                }
                element?.classList.add(action);
            } else {
                $event.preventDefault();
            }
        } else {
            if (parent.id === id) {
                if (!parent?.classList.contains(action)) {
                    for (let i = 0; i < listElements.length; i++) {
                        listElements[i].classList.remove(action);
                    }
                    parent.classList.add(action);
                } else {
                    $event.preventDefault();
                }
            }
        }
    }

}
