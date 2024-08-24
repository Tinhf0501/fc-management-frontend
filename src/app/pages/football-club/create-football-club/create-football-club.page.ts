import { Location } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
    CreateFcFormComponent,
    CreateFcRequest,
    FootballClubService,
} from '@fms-module/football-club';
import {
    CreateFCMemberRequest,
    MemberGridWrapperComponent,
} from '@fms-module/member';
import { ListMediaComponent, Media } from '@fms-module/resource';
import { FmsButtonComponent } from '@fms/button';
import { DestroyService, NotifierService } from '@fms/core';
import { TranslateModule } from '@ngx-translate/core';
import { takeUntil } from 'rxjs';

@Component({
    selector: 'create-fc-page',
    templateUrl: './create-football-club.page.html',
    styleUrls: ['./create-football-club.page.scss'],
    standalone: true,
    imports: [
        TranslateModule,

        CreateFcFormComponent,
        ListMediaComponent,
        MemberGridWrapperComponent,

        FmsButtonComponent,
    ],
    providers: [DestroyService],
})
export class CreateFootballClubPage implements OnInit {
    private readonly formBuilder = inject(FormBuilder);
    private readonly router = inject(Router);
    protected readonly fcService = inject(FootballClubService);
    protected readonly destroyService = inject(DestroyService);
    protected readonly notifierService = inject(NotifierService);
    private readonly location = inject(Location);

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

    public onSubmitForm(): void {
        if (this.createFcForm.invalid) {
            this.createFcForm.markAllAsTouched();
            return;
        }

        const data = this.createFcForm.getRawValue();
        const createFcRequest: CreateFcRequest = {
            fcName: data.fcName,
            description: data.description,
            logo: this.avatar,
            media: this.media.files,
            fcMembers: this.members,
        };

        this.fcService
            .createFc(createFcRequest)
            .pipe(takeUntil(this.destroyService.$destroy))
            .subscribe((res) => {
                this.notifierService.success(
                    res?.apiBody?.msg?.value,
                    res.code.message,
                );
                this.router.navigate(['football-club']);
            });
    }

    public goBack(): void {
        this.location.back();
    }
}
