import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Home } from './home';
import { TranslateModule } from '@ngx-translate/core';

describe('HomeComponent', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Home ],
      imports: [
        TranslateModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('PAGES.HOME.TITLE');
  }));
});
