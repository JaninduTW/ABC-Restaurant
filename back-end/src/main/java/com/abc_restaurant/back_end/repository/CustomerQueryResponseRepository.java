package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.CustomerQueryResponse;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerQueryResponseRepository extends JpaRepository<CustomerQueryResponse, Long> {
}
