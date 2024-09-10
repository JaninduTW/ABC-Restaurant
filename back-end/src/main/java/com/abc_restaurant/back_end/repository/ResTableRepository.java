package com.abc_restaurant.back_end.repository;

import com.abc_restaurant.back_end.model.ResTable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResTableRepository extends JpaRepository<ResTable, Long> {

    // Find all tables except those with the specified tableIds
    List<ResTable> findByIdNotIn(List<Long> reservedTableIds);

    // Query to find tables for a given location
    List<ResTable> findByLocation(String location);


}
