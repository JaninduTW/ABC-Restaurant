package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.CustomerQuery;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CustomerQueryRepository extends JpaRepository<CustomerQuery, Long> {
}
