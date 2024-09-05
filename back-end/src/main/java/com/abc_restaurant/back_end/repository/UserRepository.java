package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
