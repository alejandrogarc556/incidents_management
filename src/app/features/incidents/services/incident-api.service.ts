import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IncidentApiResponse } from '../models/incident-api.model';

@Injectable({
    providedIn: 'root',
})
export class IncidentApiService {
    private readonly http = inject(HttpClient);

    private readonly API_URL = 'https://jsonplaceholder.typicode.com/posts';

    getAll(): Observable<IncidentApiResponse[]> {
        return this.http.get<IncidentApiResponse[]>(this.API_URL);
    }

    getById(id: number) {
        return this.http.get<IncidentApiResponse>(`${this.API_URL}/${id}`);
    }

    create(incident: Partial<IncidentApiResponse>) {
        return this.http.post(this.API_URL, incident);
    }

    update(id: number, incident: Partial<IncidentApiResponse>) {
        return this.http.put(`${this.API_URL}/${id}`, incident);
    }

    delete(id: number) {
        return this.http.delete(`${this.API_URL}/${id}`);
    }
}
