package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
}
