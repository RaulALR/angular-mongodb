export const loginForm = [
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
    }
];
