import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BibliotecaLibrosComponent } from './biblioteca-libros.component';

describe('BibliotecaLibrosComponent', () => {
  let component: BibliotecaLibrosComponent;
  let fixture: ComponentFixture<BibliotecaLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BibliotecaLibrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BibliotecaLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
