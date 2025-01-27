import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanoComponent } from './romano.component';

describe('RomanoComponent', () => {
  let component: RomanoComponent;
  let fixture: ComponentFixture<RomanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RomanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RomanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
