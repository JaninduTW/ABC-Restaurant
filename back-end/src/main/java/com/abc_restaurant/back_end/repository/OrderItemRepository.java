package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.Order;
import com.abc_restaurant.back_end.model.OrderItem;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {
    // Fetch all order items by order ID
    List<OrderItem> findByOrderId(Order orderId);
}
