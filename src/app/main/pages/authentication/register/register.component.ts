import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs';
import {AuthenticationService} from '../../../../auth/service/authentication.service';
import {CoreConfigService} from '../../../../../@core/services/config.service';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None

})
export class RegisterComponent implements OnInit {
    //  Public
    public coreConfig: any;
    public registerForm: UntypedFormGroup;
    public loading = false;
    public submitted = false;
    public returnUrl: string;
    public error = '';
    public passwordTextType: boolean;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {CoreConfigService} _coreConfigService
     */
    constructor(
        private authenticationService: AuthenticationService,
        private _coreConfigService: CoreConfigService,
        private _formBuilder: UntypedFormBuilder,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this._unsubscribeAll = new Subject();

        // Configure the layout
        this._coreConfigService.config = {
            layout: {
                navbar: {
                    hidden: true
                },
                menu: {
                    hidden: true
                },
                footer: {
                    hidden: true
                },
                customizer: false,
                enableLocalStorage: false
            }
        };
    }

    // convenience getter for easy access to form fields
    get f() {
        return this.registerForm.controls;
    }

    ngOnInit(): void {
        this.registerForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            username: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';

        // Subscribe to config changes
        this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
            this.coreConfig = config;
        });
    }

    /**
     * Toggle password
     */
    togglePasswordTextType() {
        this.passwordTextType = !this.passwordTextType;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // Login


        this.authenticationService.login(this.f.email.value, this.f.password.value).subscribe(
            (response) => {
                console.log(response);
                // show a success message
                alert('hello !');
                this._router.navigate(['/']);
            },
            (error) => {
                console.log(error);
                // show an error message
                alert('Error !');
            }
        );

        // redirect to home page
        setTimeout(() => {
            this._router.navigate(['/']);
        }, 100);
    }

    // Lifecycle Hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}
