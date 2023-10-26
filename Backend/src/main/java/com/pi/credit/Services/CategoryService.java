package com.pi.credit.Services;


import com.pi.credit.DTO.CategoryDTO;
import com.pi.credit.Entities.Category;
import com.pi.credit.Repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;


    public List<CategoryDTO> getAllCategories()
    {
        List<CategoryDTO> categories=new ArrayList<CategoryDTO>();
        categoryRepository.findAll().forEach(e->{
           categories.add(new CategoryDTO(e.getId(),e.getName()));});
        return categories;
    }



    public void addOrUpdateCategory(CategoryDTO dto){
        if (dto.id==0) {
            Category cat = new Category();
            cat.setName(dto.name);
            categoryRepository.save(cat);
        }
        else {
            Category cat =categoryRepository.findById(dto.id).get();
            cat.setName(dto.name);
            categoryRepository.save(cat);
        }
    }

    public void deleteCategory(int id){
        categoryRepository.deleteById(id);
    }
}
