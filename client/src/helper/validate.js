import { Toast, toast } from "react-hot-toast"

/** Validate username */
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values)
    return errors
}



/** Validate username */
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)
    return errors
}


/** Validate username */
const usernameVerify = (error = {}, values) => {
    if (!values.username) {
        error.username = toast.error('Username is required!')
    } else if (values.username.includes(" ")) {
        error.username = toast.error('Invalid username!')
    }

    return error
}

/** validate reset password */

export async function resetPasswordValidate(values) {
    const errors = passwordVerify({}, values)
    if (values.password !== values.confirm_pwd) {
        errors.exist = toast.error('Password not match!')
    }
    return errors
}

/** ******************************************** */

/** Validate password */

const passwordVerify = (error = {}, values) => {
    const specailChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
    if (!values.password) {
        error.password = toast.error('Password required!')
    }
    else if (values.password.includes(" ")) {
        error.password = toast.error('Invalid password!')
    }
    else if (values.password.length < 8) {
        error.password = toast.error('Password must be at least 8 characters!')
    }
    else if (!specailChars.test(values.password)) {
        error.password = toast.error('Password must have special character!')
    }
    return error
}