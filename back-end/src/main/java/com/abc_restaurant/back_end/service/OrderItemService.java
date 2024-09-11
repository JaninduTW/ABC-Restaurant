package com.abc_restaurant.back_end.service;

import com.abc_restaurant.back_end.model.Order;
import com.abc_restaurant.back_end.model.OrderItem;
import com.abc_restaurant.back_end.repository.MenuRepository;
import com.abc_restaurant.back_end.repository.OrderItemRepository;
import com.abc_restaurant.back_end.repository.OrderRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderItemService {
    @Autowired
    private OrderItemRepository deliveryOrderItemRepository;

    @Autowired
    private OrderRepository deliveryOrderRepository;

    @Autowired
    private MenuRepository menuRepository;

    // Add items to an order
    public List<OrderItem> addOrderItems(Long orderId, List<Long> menuItemIds, List<Long> quantities) throws Exception {
        Order order = deliveryOrderRepository.findById(orderId)
                .orElseThrow(() -> new Exception("Order not found"));

        // Create a list to hold DeliveryOrderItems
        List<OrderItem> orderItems = new ArrayList<>();

        // Ensure the lists have the same size
        if (menuItemIds.size() != quantities.size()) {
            throw new IllegalArgumentException("Mismatch between menu item IDs and quantities");
        }

        // Iterate over the menu item IDs and corresponding quantities
        for (int i = 0; i < menuItemIds.size(); i++) {
            Long menuId = menuItemIds.get(i);
            Long quantity = quantities.get(i);

            // Create a new DeliveryOrderItem
            OrderItem item = new OrderItem();
            item.setOrderId(order);

            // Fetch the Menu item and set it to the DeliveryOrderItem
            item.setItemId(menuRepository.findById(menuId)
                    .orElseThrow(() -> new Exception("Menu item not found")));

            // Set the quantity and calculate the price
            item.setQuantity(quantity);
            item.setPrice(item.getItemId().getPrice() * item.getQuantity());

            // Add the item to the list
            orderItems.add(item);
        }

        // Save all order items and return the list
        return deliveryOrderItemRepository.saveAll(orderItems);
    }

    // Get order items by order ID
    public List<OrderItem> getOrderItemsByOrderId(Long orderId) {
        // Fetch the DeliveryOrder entity using the ID
        Order deliveryOrder = deliveryOrderRepository.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("DeliveryOrder not found"));

        // Fetch items by the DeliveryOrder entity
        return deliveryOrderItemRepository.findByOrderId(deliveryOrder);
    }

    // Delete an order item
    public void deleteOrderItem(Long orderItemId) throws Exception {
        OrderItem item = deliveryOrderItemRepository.findById(orderItemId)
                .orElseThrow(() -> new Exception("Order item not found"));
        deliveryOrderItemRepository.delete(item);
    }

    // Calculate total price for the order
    public double calculateTotalPrice(Long orderId) {

        // Fetch the DeliveryOrder entity using the ID
        Order deliveryOrder = deliveryOrderRepository.findById(orderId)
                .orElseThrow(() -> new EntityNotFoundException("DeliveryOrder not found"));

        List<OrderItem> items = deliveryOrderItemRepository.findByOrderId(deliveryOrder);
        return items.stream().mapToDouble(OrderItem::getPrice).sum();
}


}
