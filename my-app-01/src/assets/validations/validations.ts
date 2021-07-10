export const requiredForm = (value: string) => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}

export const maxLength = (number: number) => (value: string) => {
    let error
    if (value.length > number) error = 'Max length exceeded'
    return error
}

export const preventEmptyMessage = (value: string) => {
    let error
    if (!value) error = 'No message'
    return error
}

export const emailValidation = (value: string)=>{
    if (!value) return 'Email required'
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) return 'Invalid email address'
}

export const passwordValidation = (value: string)=>{
    if (!value) return 'Password required'
}
export const captchaValidation = (value: string)=>{
    if (!value) return 'Symbols required'
}

// export const maxLength = (value: string) => {
//     let error
//     if (value.length > 10) error = 'Max length exceeded'
//     return error
// }