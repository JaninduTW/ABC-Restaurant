package com.ABC_Restaurant.back_end.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QueryRepository extends JpaRepository {
    List<Query> findByUserId(Long userId);
}
