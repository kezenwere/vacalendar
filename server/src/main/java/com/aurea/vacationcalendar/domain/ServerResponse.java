package com.aurea.vacationcalendar.domain;

import javax.servlet.http.HttpServletRequest;

import com.aurea.vacationcalendar.util.Utils;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.ResourceSupport;

public class ServerResponse extends ResourceSupport {
  private final Object data;

  public ServerResponse(final Object data) {
    this.data = data;
  }

  public ServerResponse(final Object data, final HttpServletRequest request) {
    this(data);
    this.add(new Link(Utils.getRequestUrl(request), "self"));
  }

  public Object getData() {
    return data;
  }
}