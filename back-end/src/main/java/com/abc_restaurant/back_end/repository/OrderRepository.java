package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.Order;
import com.abc_restaurant.back_end.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OrderRepository extends JpaRepository<Order, Long> {
    // Fetch all orders for a specific customer
    List<Order> findByCustomerId(User customerId);

    // Find an order by ID
    Order findByOrderId(Long orderId);
}
