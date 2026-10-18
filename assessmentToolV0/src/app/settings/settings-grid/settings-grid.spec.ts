import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SettingsGrid } from './settings-grid';

describe('SettingsGrid', () => {
  let component: SettingsGrid;
  let fixture: ComponentFixture<SettingsGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(SettingsGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
