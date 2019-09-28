import { NgStyle } from "@angular/common";
import { IDrawingRequest, ISession } from './drawing.request.model';
import { getComponentViewDefinitionFactory } from '@angular/core/src/view';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ContactService {

getDrawingRequests(): Observable<IDrawingRequest[]>
{
    return
}
getDrawingRequest(id: number): IDrawingRequest {
    return
}

 drawingRequests: IDrawingRequest[] = [{
    id: 1,
    name: 'Richard Bluff',
    date: new Date('05/27/2019'),
    time: '6am',
    price: 50,
    imageUrl: 'www.cool.com',
    location: {
        address: '1234 Elmbrook',
        city: 'New York',
        country: 'USA'
},
    sessions: [
        {
        id: 1,
        name: "Logo Service",
        duration: 5,
        level: '3',
        abstract: 'yes'
        }
    ]
}]
}
