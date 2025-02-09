export class Client {
  clientId: number;
  contactPersonName: string;
  companyName: string;
  address: string;
  city: string;
  pincode: string;
  state: string;
  employeeStrength: number;
  gstNo: string;
  contactNo: string;
  regNo: string;
  empId: any;
  employeeName: any;
  empCode: any;

  constructor() {
    this.clientId = 0;
    this.employeeStrength = 0;
    this.address = '';
    this.city = '';
    this.companyName = '';
    this.contactNo = '';
    this.state = '';
    this.regNo = '';
    this.gstNo = '';
    this.pincode = '';
    this.contactPersonName = '';
  }
}
