export interface IUserProfileData {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    fatherName: string | null;
    birthPlace: string | null;
    birthDate: string | null;
    gender: string | null;
    email: string;
    educationType: string | null;
}

export interface IUserEditData {
    firstName: string;
    lastName: string;
    fatherName: string;
    birthDate: string;
    birthPlace: string;
    gender: string;
    fileId: number | null;
    email: string;
    username: string;
}
