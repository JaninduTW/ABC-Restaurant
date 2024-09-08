package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Category;
import com.abc_restaurant.back_end.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    // Get all categories
    @GetMapping("/categories")
    public List<Category> getAllCategories() {
        return categoryService.getAllCategories();
    }

    // Get a single category by ID
    @GetMapping("/categories/{id}")
    public Optional<Category> getCategoryById(@PathVariable Long id) {
        return categoryService.getCategoryById(id);
    }

    // Create a new category
    @PostMapping("/categories")
    public Category createCategory(@RequestBody Category category) {
        return categoryService.saveCategory(category);
    }

    // Update an existing category
    @PutMapping("/categories/{id}")
    public Category updateCategory(@PathVariable Long id, @RequestBody Category updatedCategory) {
        Optional<Category> category = categoryService.getCategoryById(id);
        if (category.isPresent()) {
            Category existingCategory = category.get();
            existingCategory.setCategoryName(updatedCategory.getCategoryName());
            return categoryService.saveCategory(existingCategory);
        }
        return null;
    }

    // Delete a category by ID
    @DeleteMapping("/categories/{id}")
    public void deleteCategory(@PathVariable Long id) {
        categoryService.deleteCategory(id);
    }
}
