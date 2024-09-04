package com.ABC_Restaurant.back_end.repository;

import com.ABC_Restaurant.back_end.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String userId);
    User findByEmail(String reservationId);

}
