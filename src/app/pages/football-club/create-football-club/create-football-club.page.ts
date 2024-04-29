import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DestroyService } from '@fms-module/common';
import {
    CreateFcFormComponent,
    FootballClubService,
} from '@fms-module/football-club';
import { CreateMemberModal, MemberGridComponent } from '@fms-module/member';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';
import { NotifierService } from 'src/app/module/common/service/notifier.service';

@Component({
    selector: 'create-fc-page',
    templateUrl: './create-football-club.page.html',
    styleUrls: ['./create-football-club.page.scss'],
    standalone: true,
    imports: [
        MemberGridComponent,
        CreateFcFormComponent,
        TranslateModule,
        NgFor,
    ],
    providers: [DestroyService],
})
export class CreateFootballClubPage implements OnInit {
    private readonly modalService: NgbModal = inject(NgbModal);
    private readonly formBuilder: FormBuilder = inject(FormBuilder);
    private readonly fcService: FootballClubService =
        inject(FootballClubService);
    private readonly destroyService: DestroyService = inject(DestroyService);
    private readonly router: Router = inject(Router);
    private readonly notifierService: NotifierService = inject(NotifierService);

    public createFcForm: FormGroup;
    public avatar: File;
    public members = [];

    public ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): void {
        this.createFcForm = this.formBuilder.group({
            fcName: [null, [Validators.required, Validators.maxLength(255)]],
            description: [null, [Validators.maxLength(2000)]],
        });
    }

    public openAddMemberModal(): void {
        this.modalService
            .open(CreateMemberModal, {
                size: 'lg',
                centered: true,
            })
            .closed.subscribe((res) => {
                if (!res) return;
                this.members = [res, ...this.members];
            });
    }

    public submitFormCreateFc(): void {
        if (this.createFcForm.invalid) {
            return;
        }
        const data = this.createFcForm.getRawValue();
        const formData = new FormData();
        formData.append('fcName', data.fcName);
        formData.append('description', data.description);
        formData.append('isGuest', 'false');
        if (this.avatar) {
            formData.append('fcResources.logo', this.avatar);
        }
        this.members.forEach((member, index) => {
            Object.keys(member).forEach((key) => {
                const value = member[key];
                formData.append(`fcMembers[${index}].${key}`, value);
            });
        });
        this.fcService
            .createFc(formData)
            .pipe(takeUntil(this.destroyService.$destroy))
            .subscribe((res) => {
                this.notifierService.success(res?.apiBody?.msg?.value).then((x) => {
                    if (x.isConfirmed) this.router.navigate(['football-club']);
                });
            });
    }
}
