import {AbstractEntity} from '../../../shared/models/models';

export class Vacation extends AbstractEntity {
  constructor(public user: User = new User(),
              public startTime?: Date,
              public endTime?: Date,
              public approvedBy?: string,
              public approvedTime?: Date,
              public approved?: boolean,
              public rejected?: boolean,
              public rejectedBy?: string,
              public rejectedTime?: Date,
              public assignedApproverEmail?: string,
              public expired?: boolean) {
    super();
  }
}

export class User extends AbstractEntity {
  constructor(public extId?: string,
              public firstName?: string,
              public lastName?: string,
              public fullName?: string,
              public email?: string,
              public managerEmail?: string) {
    super();
  }
}
