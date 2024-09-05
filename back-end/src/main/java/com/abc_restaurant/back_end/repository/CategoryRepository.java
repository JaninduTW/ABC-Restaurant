package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
