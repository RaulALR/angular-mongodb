export const registerForms = [
    {
        name: 'email',
        validators: ['required'],
        errors: [
            {
                error: 'required',
                msg: 'Email is required'
            }
        ]
    },
    {
        name: 'username',
        validators: ['required'],
        errors: [
            {
                error: 'required',
                msg: 'Username is required'
            }
        ]
    },
    {
        name: 'password',
        validators: ['required'],
        errors: [
            {
                error: 'required',
                msg: 'Password is required'
            }
        ]
    },
    {
        name: 'repeatPassword',
        validators: ['required'],
        errors: [
            {
                error: 'required',
                msg: 'Password is required'
            }
        ]
    }
];
