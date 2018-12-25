package com.aurea.vacationcalendar.domain.abstraction.abstractservice;

import java.text.MessageFormat;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import com.aurea.vacationcalendar.domain.abstraction.abstractentity.AbstractEntity;
import com.aurea.vacationcalendar.exception.RequestedContentNotFoundException;
import org.hibernate.exception.ConstraintViolationException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.util.StringUtils;

/**
 * Represents the base Service of any Entity Service.
 * <p>
 * <p>
 * Should be extended by Entity Services.
 * Requires the Service's Entity E, which must extend AbstractEntity and the Entity's Dao D, which
 * must extend PagingAndSortingRepository<E, String>.
 * <p>
 *
 * @param <E> Entity
 * @param <D> Dao
 *
 * @author Kingsley Ezenwere
 * @since 0.0.1
 */
public abstract class AbstractService<E extends AbstractEntity, D extends AbstractDao<E>> {

  @Autowired
  private D dao;

  private Logger LOGGER = LoggerFactory.getLogger(AbstractService.class.getSimpleName());

  public List<E> createAll(List<E> eList) {
    List<E> _eList = new ArrayList<>();

    // Avoid null pointer exception
    if (eList == null) {
      return _eList;
    }

    try {
      eList = (List<E>) dao.saveAll(eList);
    } catch (DataIntegrityViolationException | ConstraintViolationException ex) {
      String errorMsg = MessageFormat.format(eList.get(0).EXISTED_MESSAGE, eList.get(0).getClass().getSimpleName());
      LOGGER.error(errorMsg, ex);
      throw new RuntimeException(errorMsg);
    } catch (Exception e) {
      e.printStackTrace();
    }

    return eList;
  }

  public List<E> updateAll(List<E> eList) {
    return (List<E>) dao.saveAll(eList);
  }

  public E upSert(E e) {
    return exists(e) ? update(e) : create(e);
  }

  public boolean exists(E e) {
    return exists(e.getId());
  }

  public E update(E e) {
    return dao.save(e);
  }

  public E create(E e) {
    try {
      e = dao.save(e);
    } catch (DataIntegrityViolationException | ConstraintViolationException ex) {
      String errorMsg = MessageFormat.format(e.EXISTED_MESSAGE, e.getClass().getSimpleName());
      LOGGER.error(errorMsg, ex);
      throw new RuntimeException(errorMsg);
    }

    return e;
  }

  public boolean exists(String eId) {
    return !StringUtils.isEmpty(eId) && dao.existsById(eId);
  }

  public List<E> getAll() {
    return (List<E>) dao.findAll();
  }


  public Optional<E> activate(String eId) {

    Optional<E> eOptional = getById(eId);

    if (eOptional.isPresent()) {
      E e = eOptional.get();
      e.setActive(true);
      e.setInactivatedDate(LocalDateTime.now());

      return Optional.of(update(e));
    }

    return Optional.empty();
  }

  public Optional<E> getById(String eId) {
    return dao.findById(eId);
  }

  public Optional<E> getByIdOrThrow(String eId) {
    Optional<E> eOptional = getById(eId);
    if (!eOptional.isPresent()){
      String errorMsg = "Requested entity not found.";
      LOGGER.debug(errorMsg);
      throw new RequestedContentNotFoundException(errorMsg);
    }

    return eOptional;
  }

  public Optional<E> delete(E e) {
    return delete(e.getId());
  }

  public Optional<E> delete(String eId) {

    Optional<E> eOptional = getByIdOrThrow(eId);

    if (eOptional.isPresent()) {
      E e = eOptional.get();
      e.setDeleted(true);
      e.setDeletedDate(LocalDateTime.now());

      return Optional.of(update(e));
    }

    return Optional.empty();
  }

  public void deleteAll(List<E> eList) {

    // Avoid null pointer exception
    if (eList == null) {
      return;
    }

    List<E> _eList = eList.stream().filter(this::exists).map((E e) -> {
      e.setDeleted(true);
      e.setDeletedDate(LocalDateTime.now());
      return e;
    }).collect(Collectors.toList());

    dao.saveAll(_eList);
  }

  public void hardDelete(E e) {
    hardDelete(e.getId());
  }

  public void hardDelete(String eId) {
    Optional<E> e = getById(eId);

    if (e.isPresent()) {
      dao.delete(e.get());
    }
  }

  public void hardDeleteAll(List<E> eList) {
    // Avoid null pointer exception
    if (eList == null) {
      return;
    }
    dao.deleteAll(eList);
  }

  public long count() {
    return dao.count();
  }

  public abstract E update(String eId, E e);
}
