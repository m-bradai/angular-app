import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireAddDialogComponent } from './partenaire-add-dialog.component';

describe('PartenaireAddDialogComponent', () => {
  let component: PartenaireAddDialogComponent;
  let fixture: ComponentFixture<PartenaireAddDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PartenaireAddDialogComponent]
    });
    fixture = TestBed.createComponent(PartenaireAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
