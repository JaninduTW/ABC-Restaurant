package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.ResTable;
import com.abc_restaurant.back_end.service.ResTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin("http://localhost:3000")
public class ResTableController {

    @Autowired
    private ResTableService resTableService;

    // Retrieve all tables
    @GetMapping("/tables")
    public List<ResTable> getAllTables() {
        return resTableService.getAllTables();
    }

    // Retrieve a table by its ID
    @GetMapping("/tables/{id}")
    public ResponseEntity<ResTable> getTableById(@PathVariable Long id) {
        Optional<ResTable> table = resTableService.getTableById(id);
        return table.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new table
    @PostMapping("/tables")
    public ResTable createTable(@RequestBody ResTable table) {
        return resTableService.addTable(table);
    }

    // Update a table
    @PutMapping("/tables/{id}")
    public ResponseEntity<ResTable> updateTable(@PathVariable Long id, @RequestBody ResTable table) {
        ResTable updatedTable = resTableService.updateTable(id, table);
        if (updatedTable != null) {
            return ResponseEntity.ok(updatedTable);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a table
    @DeleteMapping("/tables/{id}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long id) {
        resTableService.deleteTable(id);
        return ResponseEntity.noContent().build();
    }
}
