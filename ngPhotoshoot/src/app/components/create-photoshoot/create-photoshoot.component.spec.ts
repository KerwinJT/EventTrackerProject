import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhotoshootComponent } from './create-photoshoot.component';

describe('CreatePhotoshootComponent', () => {
  let component: CreatePhotoshootComponent;
  let fixture: ComponentFixture<CreatePhotoshootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePhotoshootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePhotoshootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
