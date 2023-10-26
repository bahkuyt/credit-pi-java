package com.pi.credit.Services;



import com.pi.credit.DTO.CategoryDTO;
import com.pi.credit.DTO.ProductDTO;
import com.pi.credit.Entities.Category;
import com.pi.credit.Entities.Product;
import com.pi.credit.Repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDTO> getAllProducts(){
        List<ProductDTO>games= new ArrayList<ProductDTO>();
        productRepository.findAll().forEach(e->{
            List<CategoryDTO> cats=new ArrayList<CategoryDTO>();
            e.getCategories().forEach(a->{
                cats.add(
                        new CategoryDTO(a.getId(),a.getName())
                );
            });
                    games.add(
                new ProductDTO(e.getId(),e.getName(),e.getDescription(),e.getRelease(),cats));});
        return games;

    }

    public ProductDTO getProduct(int id){
        Product product = productRepository.findById(id).get();
        List<CategoryDTO> cats=new ArrayList<CategoryDTO>();
        product.getCategories().forEach(a->{
            cats.add(
                    new CategoryDTO(a.getId(),a.getName())
            );
        });
        return new ProductDTO(product.getId(), product.getName(), product.getDescription(), product.getRelease(),cats);
    }

    public void addProduct(ProductDTO dto){
        Product product =new Product();
        product.setName(dto.name);
        product.setDescription(dto.description);
        product.setRelease(dto.Release);
        List<Category> cats=new ArrayList<Category>();
        dto.categories.forEach(a->{
            Category c=new Category();
            c.setId(a.id);
            c.setName(a.name);
            cats.add(c);
        });
        product.setCategories(cats);
        productRepository.save(product);

    }

    public void updateProduct(ProductDTO dto){
        Product product = productRepository.findById(dto.id).get();
        product.setDescription(dto.description);
        product.setName(dto.name);
        product.setRelease(dto.Release);
        List<Category> cats=new ArrayList<Category>();
        dto.categories.forEach(a->{
            Category c=new Category();
            c.setId(a.id);
            c.setName(a.name);
            cats.add(c);
        });
        product.setCategories(cats);
        productRepository.save(product);
    }

    public void deleteProduct(int id){

        productRepository.deleteById(id);

    }

    public List<Product> productByCategory(int id){
        return productRepository.findByCategories_Id(id);
    }

    public List<Product> productByCategoryName(String name){
        return productRepository.findByCategories_Name(name);
    }

    public ProductService() {
    }
}
