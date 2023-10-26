package com.pi.credit.Repositories;


import com.pi.credit.Entities.Category;
import org.springframework.data.repository.CrudRepository;

public interface CategoryRepository extends CrudRepository<Category,Integer> {
}
