package com.aurea.vacationcalendar.domain.abstraction.abstractentity;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.PostLoad;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Transient;
import javax.persistence.Version;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.ToString;
import org.springframework.util.StringUtils;

/**
 * Represents the base Entity.
 * <p>
 * <p>
 * AbstractEntity tries to abstract general entity concerns, letting Entities that extends it to focus on it's core.
 * <p>
 *
 * @author Kingsley Ezenwere
 * @since 0.0.1
 */

@ToString
@MappedSuperclass
@JsonInclude (JsonInclude.Include.NON_NULL)
public abstract class AbstractEntity implements Serializable, Cloneable {

  @Transient
  @JsonIgnore
  public String EXISTED_MESSAGE = "This {0} already exists."; // A similar entity already existed
  @Transient
  @JsonIgnore
  public String NOT_EXISTED_MESSAGE = "This {0} don't exist."; // A requested entity does not exist
  @Transient
  @JsonIgnore
  public String LIST_NOT_FOUND_MESSAGE = "{0} List not found."; // No entity already existed

  @Id
  @Column (updatable = false, nullable = false)
  protected String id;

  protected String createdBy;
  @Column (updatable = false)
  protected LocalDateTime createdDate;

  @Version
  @Column (nullable = false)
  protected int version = 0;

  @Column (name = "")
  protected LocalDateTime lastModifiedDate;
  protected String lastModifiedBy;
  protected String lastModifiedByIp;

  @Column (nullable = false)
  protected boolean active = true;

  protected LocalDateTime activatedDate;
  protected String activatedBy;
  protected String activatedByIp;

  protected LocalDateTime inactivatedDate;
  protected String inactivatedBy;
  protected String inactivatedByIp;

  protected boolean archived;

  protected LocalDateTime archivedDate;
  protected String archivedBy;
  protected String archivedByIp;

  protected LocalDateTime unarchivedDate;
  protected String unarchivedBy;
  protected String unarchivedByIp;

  protected boolean deleted;

  protected LocalDateTime deletedDate;
  protected String deletedBy;
  protected String deletedByIp;

  @Transient
  protected Map<String, String> status = new HashMap<>();

  public AbstractEntity() {
    this("", "", "");
  }

  public AbstractEntity(String existedMessage, String notExistedMessage, String listNotFoundMessage) {
    EXISTED_MESSAGE = StringUtils.hasText(existedMessage) ? existedMessage : String.format(EXISTED_MESSAGE, "");
    NOT_EXISTED_MESSAGE = StringUtils.hasText(notExistedMessage) ? notExistedMessage : String.format(NOT_EXISTED_MESSAGE, "");
    LIST_NOT_FOUND_MESSAGE = StringUtils.hasText(listNotFoundMessage) ? listNotFoundMessage : String.format(LIST_NOT_FOUND_MESSAGE, "");
  }

  @PreUpdate
  protected void onPreUpdate() {
    lastModifiedDate = LocalDateTime.now();
  }

  @PrePersist
  protected void onPrePersist() {
    id = UUID.randomUUID().toString();
    createdDate = LocalDateTime.now();
  }

  public String getId() {
    return id;
  }

  public LocalDateTime getCreatedDate() {
    return createdDate;
  }

      public String getCreatedBy() {
          return createdBy;
      }

      public void setCreatedBy(String createdBy) {
          this.createdBy = createdBy;
      }

  public int getVersion() {
    return version;
  }

  public LocalDateTime getLastModifiedDate() {
    return lastModifiedDate;
  }

  public String getLastModifiedBy() {
    return lastModifiedBy;
  }

  public void setLastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
  }

  public String getLastModifiedByIp() {
    return lastModifiedByIp;
  }

  public void setLastModifiedByIp(String lastModifiedByIp) {
    this.lastModifiedByIp = lastModifiedByIp;
  }

  public LocalDateTime getActivatedDate() {
    return activatedDate;
  }

  public void setActivatedDate(LocalDateTime activatedDate) {
    this.activatedDate = activatedDate;
  }

  public String getActivatedBy() {
    return activatedBy;
  }

  public void setActivatedBy(String activatedBy) {
    this.activatedBy = activatedBy;
  }

  public String getActivatedByIp() {
    return activatedByIp;
  }

  public void setActivatedByIp(String activatedByIp) {
    this.activatedByIp = activatedByIp;
  }

  public LocalDateTime getInactivatedDate() {
    return inactivatedDate;
  }

  public void setInactivatedDate(LocalDateTime inactivatedDate) {
    this.inactivatedDate = inactivatedDate;
  }

  public String getInactivatedBy() {
    return inactivatedBy;
  }

  public void setInactivatedBy(String inactivatedBy) {
    this.inactivatedBy = inactivatedBy;
  }

  public String getInactivatedByIp() {
    return inactivatedByIp;
  }

  public void setInactivatedByIp(String inactivatedByIp) {
    this.inactivatedByIp = inactivatedByIp;
  }

  public LocalDateTime getArchivedDate() {
    return archivedDate;
  }

  public void setArchivedDate(LocalDateTime archivedDate) {
    this.archivedDate = archivedDate;
  }

  public String getArchivedBy() {
    return archivedBy;
  }

  public void setArchivedBy(String archivedBy) {
    this.archivedBy = archivedBy;
  }

  public String getArchivedByIp() {
    return archivedByIp;
  }

  public void setArchivedByIp(String archivedByIp) {
    this.archivedByIp = archivedByIp;
  }

  public LocalDateTime getUnarchivedDate() {
    return unarchivedDate;
  }

  public void setUnarchivedDate(LocalDateTime unarchivedDate) {
    this.unarchivedDate = unarchivedDate;
  }

  public String getUnarchivedBy() {
    return unarchivedBy;
  }

  public void setUnarchivedBy(String unarchivedBy) {
    this.unarchivedBy = unarchivedBy;
  }

  public String getUnarchivedByIp() {
    return unarchivedByIp;
  }

  public void setUnarchivedByIp(String unarchivedByIp) {
    this.unarchivedByIp = unarchivedByIp;
  }

  public LocalDateTime getDeletedDate() {
    return deletedDate;
  }

  public void setDeletedDate(LocalDateTime deletedDate) {
    this.deletedDate = deletedDate;
  }

  public String getDeletedBy() {
    return deletedBy;
  }

  public void setDeletedBy(String deletedBy) {
    this.deletedBy = deletedBy;
  }

  public String getDeletedByIp() {
    return deletedByIp;
  }

  public void setDeletedByIp(String deletedByIp) {
    this.deletedByIp = deletedByIp;
  }

  public Map getStatus() {
    return status;
  }

  @PostLoad
  public void postLoad() {

    // Set Status
    if (isDeleted()) {
      this.status.put("message", Status.DELETED.getStatusMessage());
      this.status.put("color", Status.DELETED.getStatusColorCode());

    } else if (isArchived()) {
      this.status.put("message", Status.ARCHIVED.getStatusMessage());
      this.status.put("color", Status.ARCHIVED.getStatusColorCode());
    } else if (isActive()) {
      this.status.put("message", Status.ACTIVE.getStatusMessage());
      this.status.put("color", Status.ACTIVE.getStatusColorCode());

    } else if (!isActive()) {
      this.status.put("message", Status.IN_ACTIVE.getStatusMessage());
      this.status.put("color", Status.IN_ACTIVE.getStatusColorCode());

    } else {
      this.status.put("message", Status.UNKNOWN.getStatusMessage());
      this.status.put("color", Status.UNKNOWN.getStatusColorCode());

    }

  }

  public boolean isDeleted() {
    return deleted;
  }

  public boolean isArchived() {
    return archived;
  }

  public boolean isActive() {
    return active;
  }

  public void setActive(boolean active) {
    this.active = active;
  }

  public void setArchived(boolean archived) {
    this.archived = archived;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }

  public Object clone() {
    try {
      return super.clone();
    } catch (CloneNotSupportedException e) {
      e.printStackTrace();
    }
    return null;
  }

  /**
   * @author Kingsley Ezenwere
   * @since 0.0.1
   */
  public enum Status {
    APPROVED("APPROVED", "success"),
    NOT_APPROVED("NOT APPROVED", "danger"),
    REJECTED("REJECTED", "danger"),

    ACTIVE("ACTIVE", "success"),
    IN_ACTIVE("IN-ACTIVE", "danger"),
    LOCKED("LOCKED", "danger"),
    DELETED("DELETED", "danger"),
    UNKNOWN("STATUS UNKNOWN", "danger"),
    ARCHIVED("ARCHIVED", "danger"),
    SENT("SENT", "success"),
    DRAFTED("DRAFTED", "success"),
    SCHEDULED("SCHEDULED", "success");

    private String statusMessage;
    private String statusColorCode;

    Status(String statusMessage, String statusColorCode) {
      this.statusMessage = statusMessage;
      this.statusColorCode = statusColorCode;
    }

    public String getStatusMessage() {
      return statusMessage;
    }

    public String getStatusColorCode() {
      return statusColorCode;
    }

    @Override
    public String toString() {
      return "Status{" + "statusMessage='" + statusMessage + '\'' + ", statusColorCode='" + statusColorCode + '\'' + '}';
    }}
}
