package com.abc_restaurant.back_end.controller;

import com.abc_restaurant.back_end.model.ResTable;
import com.abc_restaurant.back_end.service.ResTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class ResTableController {

    @Autowired
    private ResTableService tableService;

    // Get all tables
    @GetMapping("/table/getalltables")
    public List<ResTable> getAllTables() {
        return tableService.getAllTables();
    }

    // Get table by ID
    @GetMapping("/table/{id}")
    public ResponseEntity<ResTable> getTableById(@PathVariable Long id) {
        ResTable table = tableService.getTableById(id).orElse(null);
        if (table == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(table);
    }

    // Create a new table
    @PostMapping("/table/create")
    public ResTable createTable(@RequestBody ResTable table) {
        return tableService.createTable(table);
    }

    // Update a table
    @PutMapping("/table/update/{id}")
    public ResponseEntity<ResTable> updateTable(@PathVariable Long id, @RequestBody ResTable tableDetails) {
        try {
            ResTable updatedTable = tableService.updateTable(id, tableDetails);
            return ResponseEntity.ok(updatedTable);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a table
    @DeleteMapping("/table/delete/{id}")
    public ResponseEntity<Void> deleteTable(@PathVariable Long id) {
        try {
            tableService.deleteTable(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
}
