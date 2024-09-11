package com.abc_restaurant.back_end.service;

import com.abc_restaurant.back_end.model.Order;
import com.abc_restaurant.back_end.model.User;
import com.abc_restaurant.back_end.repository.MenuRepository;
import com.abc_restaurant.back_end.repository.OrderRepository;
import com.abc_restaurant.back_end.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private MenuRepository menuRepository;

    @Autowired
    private OrderItemService orderItemService;

    @Autowired
    private UserRepository userRepository;

    // Place an order
    public Order placeOrder(Order order, List<Long> menuItemIds, List<Long> quantities) throws Exception {
        // Set the order timestamp to current
        order.setTimeStamp(new Timestamp(System.currentTimeMillis()));

        // Fetch and set the customer (user placing the order)
        User customer = userRepository.findById(order.getCustomer().getId())
                .orElseThrow(() -> new Exception("User not found"));
        order.setCustomer(customer);

        // Save the initial order to get the orderId generated
        Order savedOrder = orderRepository.save(order);

        // Add the order items using the saved order's ID
        orderItemService.addOrderItems(savedOrder.getOrderId(), menuItemIds, quantities);

        // Calculate the total price for all items in the order
        double totalPrice = orderItemService.calculateTotalPrice(savedOrder.getOrderId());
        savedOrder.setFinalPrice(String.valueOf(totalPrice));  // Convert totalPrice to String

        // Set default status to PENDING
        savedOrder.setStatus("PENDING");

        // Save and return the final order with all details
        return orderRepository.save(savedOrder);
    }

    // Get all orders for a specific customer
    public List<Order> getOrdersByCustomer(User customer) {
        return orderRepository.findByCustomerId(customer);
    }

    // Get a specific order by its ID
    public Order getOrderById(Long orderId) throws Exception {
        return orderRepository.findById(orderId)
                .orElseThrow(() -> new Exception("Order not found"));
    }

    // Update order status (e.g., CONFIRMED, READY-FOR-DELIVERY, etc.)
    public Order updateOrderStatus(Long orderId, String status) throws Exception {
        Order order = orderRepository.findById(orderId)
                .orElseThrow(() -> new Exception("Order not found"));
        order.setStatus(status);
        return orderRepository.save(order);
    }

    // Get all orders (Admin view)
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }
}
