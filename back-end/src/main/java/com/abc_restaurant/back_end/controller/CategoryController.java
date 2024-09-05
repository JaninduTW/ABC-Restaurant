package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.Category;
import com.abc_restaurant.back_end.model.Reservation;
import com.abc_restaurant.back_end.repository.CategoryRepository;
import com.abc_restaurant.back_end.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping("/category")
    Category newCategory(@RequestBody Category newCategory){
        return categoryRepository.save(newCategory);
    }
}
