import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionLibComponent } from './fusion-lib.component';

describe('FusionLibComponent', () => {
    let component: FusionLibComponent;
    let fixture: ComponentFixture<FusionLibComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [FusionLibComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(FusionLibComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
