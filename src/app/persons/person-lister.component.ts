import { Component } from '@angular/core'

@Component({
    selector: 'person-lister',
    template: `
        <div>List of person</div>
        <div class='row'>
            <div class='col-md-5' *ngFor="let p of persons">
                <person-viewer [data]="p"  (personClickEmitter)="handleChildClickEvent($event)" ></person-viewer>
            </div>
        </div>
    `,
    
})

export class PersonListerComponent {
    persons = [{
        name: "Ishtiaque Shahrier",
        age: 36
    },
    {
        name: "Tanvir Shahrier",
        age: 18
    },
    {
        name: "Ishtiaque Shaan",
        age: 66
    },
    {
        name: "Minhaz Shahrier",
        age: 28
    },
    {
        name: "Janantul Ferdous kheya",
        age: 21
    }]
    handleChildClickEvent(data) {
        alert(data);
    }
}