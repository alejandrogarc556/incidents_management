import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncidentCardComponent } from './incident-card';
import { provideZonelessChangeDetection } from '@angular/core';
import { MOCK_INCIDENTS } from '../../mocks/mock-incidents';


describe('IncidentCard', () => {
  let component: IncidentCardComponent;
  let fixture: ComponentFixture<IncidentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncidentCardComponent],
      providers: [
        provideZonelessChangeDetection()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(IncidentCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('incident', MOCK_INCIDENTS[0]);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
