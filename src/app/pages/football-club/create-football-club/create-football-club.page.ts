import { NgFor } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    ButtonBackComponent,
    DestroyService,
    NotifierService,
} from '@fms-module/common';
import {
    CreateFcFormComponent,
    FootballClubService,
} from '@fms-module/football-club';
import {
    CreateFCMemberRequest,
    MemberGridWrapperComponent,
} from '@fms-module/member';
import { ListMediaComponent, Media } from '@fms-module/resource';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'create-fc-page',
    templateUrl: './create-football-club.page.html',
    styleUrls: ['./create-football-club.page.scss'],
    standalone: true,
    imports: [
        NgFor,
        TranslateModule,

        CreateFcFormComponent,
        ButtonBackComponent,
        ListMediaComponent,
        MemberGridWrapperComponent,
    ],
    providers: [DestroyService],
})
export class CreateFootballClubPage implements OnInit {
    private readonly formBuilder = inject(FormBuilder);
    private readonly fcService = inject(FootballClubService);
    private readonly destroyService = inject(DestroyService);
    private readonly router = inject(Router);
    private readonly notifierService = inject(NotifierService);

    public createFcForm: FormGroup;
    public avatar: File;
    public members: CreateFCMemberRequest[] = [];
    public media: Media = {
        files: [],
        url: [],
    };

    public ngOnInit(): void {
        this.buildForm();
    }

    private buildForm(): void {
        this.createFcForm = this.formBuilder.group({
            fcName: [null, [Validators.required, Validators.maxLength(255)]],
            description: [null, [Validators.maxLength(2000)]],
        });
    }

    public submitFormCreateFc(): void {
        if (this.createFcForm.invalid) {
            this.createFcForm.markAllAsTouched();
            return;
        }
        const data = this.createFcForm.getRawValue();
        const formData = new FormData();
        formData.append('fcName', data.fcName);
        formData.append('description', data.description);
        if (this.avatar) {
            formData.append('logo', this.avatar);
        }
        if (this.media?.files) {
            this.media.files.forEach((file, index) => {
                formData.append(`media[${index}]`, file);
            });
        }
        this.members.forEach((member, index) => {
            Object.keys(member).forEach((key) => {
                const value = member[key];
                if (value) formData.append(`fcMembers[${index}].${key}`, value);
            });
        });
        this.fcService
            .createFc(formData)
            .pipe(takeUntil(this.destroyService.$destroy))
            .subscribe((res) => {
                this.notifierService
                    .success(res?.apiBody?.msg?.value, res.code.message)
                    .then((x) => {
                        if (x.isConfirmed)
                            this.router.navigate(['football-club']);
                    });
            });
    }
}
