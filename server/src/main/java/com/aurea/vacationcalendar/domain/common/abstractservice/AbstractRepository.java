package com.aurea.vacationcalendar.domain.common.abstractservice;

import com.aurea.vacationcalendar.domain.common.abstractentity.AbstractEntity;
import org.springframework.data.repository.PagingAndSortingRepository;

/**
 * @author Kingsley Ezenwere
 * @since 0.0.1
 */
public interface AbstractRepository<E extends AbstractEntity> extends PagingAndSortingRepository<E, String> {
}
