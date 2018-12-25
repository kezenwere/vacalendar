import {AbstractEntity} from '../../../shared/models/models';

export class Vacation extends AbstractEntity {
  constructor(
    public user: User = new User(),
    public startDate?: Date,
    public endDate?: Date,
    public approvedBy?: string,
    public approvedDate?: Date,
    public approved?: boolean,
    public rejected?: boolean,
    public assignedApproverEmail?: string,
    public expired?: boolean
    ) {
    super();
  }
}

export class User extends AbstractEntity {
  constructor(public firstName?: string,
              public lastName?: string,
              public fullName?: string,
              public email?: string,
              public managerEmail?: string) {
    super();
  }
}
