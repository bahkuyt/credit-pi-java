package com.pi.credit.Repositories;


import com.pi.credit.Entities.Product;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ProductRepository extends CrudRepository<Product,Integer> {
List<Product> findByCategories_Name(String name);
List<Product> findByCategories_Id(int id);


}
