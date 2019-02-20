import { Component } from '@angular/core'

@Component({
    selector: 'person-lister',
    template: `
        <div>List of person</div>
        <person-viewer [data]="persons" #pv (personClickEmitter)="handleChildClickEvent($event)" ></person-viewer>
    `,
    
})

export class PersonListerComponent {
    persons = {
        name: "Ishtiaque Shahrier",
        age: 36
    }
    handleChildClickEvent(data) {
        alert(data);
    }
}