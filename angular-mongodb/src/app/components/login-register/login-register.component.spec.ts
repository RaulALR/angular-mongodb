import { NO_ERRORS_SCHEMA } from "@angular/core";
import { LoginRegisterComponent } from "./login-register.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("LoginRegisterComponent", () => {

  let fixture: ComponentFixture<LoginRegisterComponent>;
  let component: LoginRegisterComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [LoginRegisterComponent]
    });

    fixture = TestBed.createComponent(LoginRegisterComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
