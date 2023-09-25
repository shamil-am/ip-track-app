export interface IUserProfileData {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    birthPlace: string;
    birthDate: string;
    gender: string;
    email: string;
    educationType: string;
}

export interface IUserEditData {
    firstName: string;
    lastName: string;
    fatherName: string;
    birthDate: string;
    birthPlace: string;
    gender: string;
    fileId: number;
    email: string;
    username: string;
}
