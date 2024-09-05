package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.Menu;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<Menu, Long> {
}
