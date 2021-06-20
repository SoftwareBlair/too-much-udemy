import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerListItemComponent } from './server-list-item.component';

describe('ServerListItemComponent', () => {
  let component: ServerListItemComponent;
  let fixture: ComponentFixture<ServerListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
