export class AbstractEntity {
  constructor(public id?: string,
              public createdDate?: Date,
              public createdBy?: string,
              public version?: number,
              public lastModifiedDate?: Date,
              public lastModifiedBy?: number,
              public deleted?: boolean,
              public deletedDate?: Date,
              public deletedBy?: number,
              public status?: string) {
  }
}
