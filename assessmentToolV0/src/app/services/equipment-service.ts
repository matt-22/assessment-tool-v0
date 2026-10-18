import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Equipment } from '../equipment/equipment';

@Service()
export class EquipmentService {
    private http = inject(HttpClient)

    private apiUrl = "http://localhost:8080/equipment"

    // GET request
    getEquipment(){
        return this.http.get<Equipment[]>(this.apiUrl, {mode: 'cors'})
    }
}
