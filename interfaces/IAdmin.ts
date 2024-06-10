export interface Admin {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    role: string;
    status: string;
    phone?: string;
    last_login?: Date;
    address?: string;
    created_at?: Date;
    updated_at?: Date;
}
