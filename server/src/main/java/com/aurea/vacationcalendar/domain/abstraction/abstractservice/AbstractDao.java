package com.aurea.vacationcalendar.domain.abstraction.abstractservice;

import com.aurea.vacationcalendar.domain.abstraction.abstractentity.AbstractEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @author Kingsley Ezenwere
 * @since 0.0.1
 */
public interface AbstractDao<E extends AbstractEntity> extends PagingAndSortingRepository<E, String> {
}
