package com.aurea.vacationcalendar.domain.common.abstractentity;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
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
  @Column (name = "id", updatable = false, nullable = false)
  protected String id;
  @Column (name = "createdBy")
  protected String createdBy;
  @Column (name = "createdDate", updatable = false)
  protected LocalDateTime createdDate;
  @Version
  @Column (name = "version", nullable = false)
  protected int version = 0;
  @Column (name = "lastModifiedDate")
  protected LocalDateTime lastModifiedDate;
  @Column (name = "lastModifiedBy")
  protected String lastModifiedBy;
  @Column (name = "deleted")
  protected boolean deleted;
  @Column (name = "deletedDate")
  protected LocalDateTime deletedDate;
  @Column (name = "deletedBy")
  protected String deletedBy;
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

  public void setCreatedDate(LocalDateTime createdDate) {
    this.createdDate = createdDate;
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

  public void setLastModifiedBy(String lastModifiedBy) {
    this.lastModifiedBy = lastModifiedBy;
  }

  public String getLastModifiedBy() {
    return lastModifiedBy;
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

  public Map getStatus() {
    return status;
  }

  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }

  public boolean isDeleted() {
    return deleted;
  }
}
