import axios from "axios";

export interface FormRequestParams {
    name: string;
    phone: string;
    email: string;
}

export function formRequest({name, phone, email}: FormRequestParams) {
    return axios.post('http://localhost:3004/feedback', {name, phone, email})
}