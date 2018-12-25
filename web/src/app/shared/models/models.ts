export class AbstractEntity {
  constructor(public id?: string,
              public createdDate?: Date,
              public createdBy?: string,
              public createdByIp?: string,
              public version?: number,
              public lastModifiedDate?: Date,
              public lastModifiedBy?: number,
              public lastModifiedByIp?: string,
              public active: boolean = true,
              public activatedDate?: Date,
              public activatedBy?: number,
              public activatedByIp?: string,
              public inactivatedDate?: Date,
              public inactivatedBy?: number,
              public inactivatedByIp?: string,
              public deleted?: boolean,
              public deletedDate?: Date,
              public deletedBy?: number,
              public deletedByIp?: string,
              public status?: string) {
  }
}
