package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.Order;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
