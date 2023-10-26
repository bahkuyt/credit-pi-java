package com.pi.credit.API;


import com.pi.credit.DTO.CategoryDTO;
import com.pi.credit.Services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Category")
@CrossOrigin(origins = "*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping("/")
    public List<CategoryDTO> getAllCategories(){
        return categoryService.getAllCategories();
    }

    @PutMapping("/uc")
    public void addOrUpdateCategory(@RequestBody CategoryDTO category){
        categoryService.addOrUpdateCategory(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable int id){
        categoryService.deleteCategory(id);
    }


}
