import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireDetailsDialogComponent } from './partenaire-details-dialog.component';

describe('PartenaireDetailsDialogComponent', () => {
  let component: PartenaireDetailsDialogComponent;
  let fixture: ComponentFixture<PartenaireDetailsDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartenaireDetailsDialogComponent]
    });
    fixture = TestBed.createComponent(PartenaireDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
