import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export class FormBuilderClass {
    formGroup: FormGroup;
    errorLiterals: any = {};

    constructor(
        public formBuilder: FormBuilder) {
    }

    public buildForm(formData) {
        const group = {};
        formData.forEach(element => {
            const validators = element.validators.map((item) => {
                return Validators[item];
            });
            group[element.name] = ['', validators];
            this.errorLiterals[element.name] = element.errors;
        });
        this.formGroup = this.formBuilder.group(group);
    }

    public resetForm(group) {
        Object.keys(group.controls).forEach((item) => {
            group.get(item).setValue('');
        });
    }
}
