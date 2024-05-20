import {TestBed} from '@angular/core/testing';
import { UserService } from "./user.service";
import { User } from '../interfaces/user.interface';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('User service ', ()=>{
    let service: UserService;
    let httpTestControl: HttpTestingController;


    beforeEach(()=>{
        TestBed.configureTestingModule({
            imports:[HttpClientTestingModule],
            providers: [UserService]
        })
        service = TestBed.inject(UserService);
        httpTestControl = TestBed.inject(HttpTestingController)
    })

    afterEach(()=>{
        httpTestControl.verify();
    })

    it('should return expected users (HttpClient called once)', () => {
        const expectedUsers: User[] = [
          { id: '1', name: 'Marcos', email: 'marcos@gmailc.om', password: '1234'  },
          { id: '2', name: 'Henrique', email: 'henrique@gmail.com', password: '1234' }
        ];
    
        service.getAll().subscribe(users => {
          expect(users).toEqual(expectedUsers);
        });
    
        const req = httpTestControl.expectOne('/api/usuarios');
        expect(req.request.method).toEqual('GET');
        req.flush(expectedUsers); // Emula a resposta HTTP com os dados esperados
      });
    
      it('should handle an empty response', () => {
        service.getAll().subscribe(users => {
          expect(users.length).toEqual(0);
        });
    
        const req = httpTestControl.expectOne('/api/usuarios');
        expect(req.request.method).toEqual('GET');
        req.flush([]); // Emula uma resposta HTTP vazia
      });
})