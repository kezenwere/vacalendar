package com.aurea.vacationcalendar.domain.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.PostLoad;
import javax.persistence.Table;
import javax.persistence.Transient;

import com.aurea.vacationcalendar.domain.common.abstractentity.AbstractEntity;
import com.aurea.vacationcalendar.util.Utils;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.google.api.client.auth.oauth2.TokenResponse;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import org.springframework.util.StringUtils;

@Setter
@Getter
@EqualsAndHashCode (callSuper=false)
@JsonInclude (JsonInclude.Include.NON_NULL)
@Entity
@Table(name = "user")
public class User extends AbstractEntity {
  @Column (name="ext_id", nullable = false, unique = true)
  private String extId;
  @Column (name="email", nullable = false, unique = true)
  private String email;
  @Column (name="first_name")
  private String firstName;
  @Column (name="last_name")
  private String lastName;
  @Transient
  private String fullName;
  @Column (name="managerEmail")
  private String managerEmail;
  @Column (name="memberType")
  private String memberType;
  @Transient
  private String tokenResponse;

  public User() {
    super("", "", "");
  }

  public User(final String extId, final String email, final String firstName,
              final String lastName, final String fullName) {
    this();

    this.extId = extId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.fullName = fullName;
  }

  @PostLoad
  public void postLoad() {

    if (!StringUtils.hasText(this.fullName)) {
      this.fullName = (StringUtils.hasText(this.firstName) ? this.firstName + " " :
              "") + (StringUtils.hasText(this.lastName) ? this.lastName : "");
    }
  }

  @JsonIgnore
  public TokenResponse getTokenResponseObj() {
    return Utils.jsonString2TokenResponseObj(tokenResponse);
  }
}
