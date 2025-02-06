export interface IRole {
    roleId: number,
    role: string,
}
export interface IDesignation {
    designationsId: number,
    designation: string,
}

export interface APIResponseModel {
    massage: string,
    result: boolean,
    data: any,

}