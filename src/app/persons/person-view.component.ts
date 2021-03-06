import { Component, Input,Output, EventEmitter } from '@angular/core'


@Component({
    selector: 'person-viewer',
    template: `
        name : {{data.name}} <br/>
        age: {{data.age}} <br/>
        <button (click)= "personClickHandler()" class='btn btn-primary' >Click me!</button>
        <hr/>
    `
})

export class PersonViewComponent {
    @Input() data:any
    @Output() personClickEmitter = new EventEmitter()

    personClickHandler(){
        this.personClickEmitter.emit('foo');
    }

}