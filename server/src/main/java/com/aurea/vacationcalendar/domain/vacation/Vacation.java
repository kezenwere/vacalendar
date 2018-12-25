package com.aurea.vacationcalendar.domain.vacation;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.PostLoad;
import javax.persistence.Table;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.aurea.vacationcalendar.domain.abstraction.abstractentity.AbstractEntity;
import com.aurea.vacationcalendar.domain.user.User;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode (callSuper=false)
@JsonInclude (JsonInclude.Include.NON_NULL)
@Entity
@Table(name = "vacation")
public class Vacation extends AbstractEntity {
  @OneToOne
  private User user;
  @Column (name="startTime")
  private LocalDateTime startTime;
  @Column (name="endTime")
  private LocalDateTime endTime;
  @Column (name="approvedBy")
  private String approvedBy;
  @Column (name="approvedTime")
  private LocalDateTime approvedTime;
  @Column(name = "approved")
  private boolean approved;
  @Column(name = "rejected")
  private boolean rejected;
  @Column(name = "assigned_approver_email")
  private String assignedApproverEmail;
  @Column(name = "expired")
  private boolean expired;

  public Vacation() {
    super("", "", "");
  }

  @PostLoad
  @Override
  public void postLoad() {
    super.postLoad();

    if (isApproved()){
      this.status.put("message", Status.APPROVED.getStatusMessage());
      this.status.put("color", Status.APPROVED.getStatusColorCode());
    }else if (isRejected()){
      this.status.put("message", Status.REJECTED.getStatusMessage());
      this.status.put("color", Status.REJECTED.getStatusColorCode());
    }else {
      this.status.put("message", Status.NOT_APPROVED.getStatusMessage());
      this.status.put("color", Status.NOT_APPROVED.getStatusColorCode());
    }
  }
}
