import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideZonelessChangeDetection } from '@angular/core';
import { IncidentApiService } from './incident-api.service';

describe('IncidentApiService', () => {
    let service: IncidentApiService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [provideHttpClient(), provideZonelessChangeDetection()],
        });
        service = TestBed.inject(IncidentApiService);
    });

    it('should create', () => {
        expect(service).toBeTruthy();
    });
});
