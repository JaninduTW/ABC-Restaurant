package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Category;
import com.abc_restaurant.back_end.model.Menu;
import com.abc_restaurant.back_end.repository.CategoryRepository;
import com.abc_restaurant.back_end.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000") // Allow requests from the React front-end running on localhost:3000
public class MenuController {

    @Autowired
    private MenuService menuService; // Inject the MenuService for handling business logic

    @Autowired
    private CategoryRepository categoryRepository; // Inject the CategoryRepository for interacting with the category database

    // Fetches a list of all menu items
    @GetMapping("/menu")
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus(); // Use service to get the list of all menu items
    }

    // Fetches a specific menu item by its ID
    @GetMapping("/menu/{id}")
    public Menu getMenuById(@PathVariable Long id) {
        return menuService.getMenuById(id); // Use service to find a menu item by its ID
    }

    // Retrieves the image of a menu item by its ID
    @GetMapping("/menu/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Long id) {
        Menu menu = menuService.getMenuById(id); // Get menu item by ID
        if (menu != null && menu.getImage() != null) {
            // If menu item and its image exist, return the image in JPEG format
            return ResponseEntity.ok()
                    .contentType(MediaType.IMAGE_JPEG) // Image type can be JPEG or PNG
                    .body(menu.getImage());
        }
        return ResponseEntity.notFound().build(); // If image is not found, return 404
    }

    // Creates a new menu item
    @PostMapping("/menu")
    public Menu createMenu(@RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") Boolean availability,
                           @RequestParam("category") Long categoryId,
                           @RequestParam("image") MultipartFile image) throws IOException {

        // Find the category by its ID; if not found, throw an error
        Category category = categoryRepository.findById(categoryId)
                .orElseThrow(() -> new RuntimeException("Category not found"));

        // Create a new menu object and set its properties
        Menu menu = new Menu();
        menu.setItem(item);
        menu.setDescription(description);
        menu.setPrice(price);
        menu.setAvailability(availability);
        menu.setCategory(category); // Set the category for this menu item
        menu.setImage(image.getBytes()); // Save the image as byte data

        // Save the menu item through the service and return it
        return menuService.saveMenu(menu);
    }

    // Updates an existing menu item
    @PutMapping("/menu/{id}")
    public Menu updateMenu(@PathVariable Long id,
                           @RequestParam("item") String item,
                           @RequestParam("description") String description,
                           @RequestParam("price") Double price,
                           @RequestParam("availability") Boolean availability,
                           @RequestParam("image") MultipartFile image) throws IOException {
        // Fetch the menu item by its ID
        Menu menu = menuService.getMenuById(id);
        if (menu != null) {
            // Update the fields of the menu item
            menu.setItem(item);
            menu.setDescription(description);
            menu.setPrice(price);
            menu.setAvailability(availability);
            if (image != null) {
                // If a new image is provided, update it
                menu.setImage(image.getBytes());
            }
            // Save the updated menu item
            return menuService.saveMenu(menu);
        }
        return null; // If menu item is not found, return null
    }

    // Deletes a menu item by its ID
    @DeleteMapping("/menu/{id}")
    public void deleteMenu(@PathVariable Long id) {
        // Delete the menu item through the service
        menuService.deleteMenu(id);
    }
}
