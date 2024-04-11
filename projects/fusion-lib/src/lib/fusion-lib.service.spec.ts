import { TestBed } from '@angular/core/testing';

import { FusionLibService } from './fusion-lib.service';

describe('FusionLibService', () => {
    let service: FusionLibService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(FusionLibService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
