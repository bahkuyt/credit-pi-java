package com.pi.credit.API;


import com.pi.credit.DTO.ProductDTO;
import com.pi.credit.Entities.Product;
import com.pi.credit.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Product")
@CrossOrigin(origins = "*")
public class ProductController {
    @Autowired
    private ProductService productService;


    @GetMapping("/")
    public List<ProductDTO> getAllProducts(){
        return productService.getAllProducts();
    }

    @GetMapping("/{id}")
    public ProductDTO getProducts(@PathVariable int id){
        return productService.getProduct(id);
    }



    @PutMapping("/")
    public void addOrUpdateProducts( @RequestBody ProductDTO game){
        if(game.id==0){
            productService.addProduct(game);
        }
        else {
            productService.updateProduct(game);
        }

    }
    @DeleteMapping("/{id}")
    public  void deleteProduct(@PathVariable int id){
        productService.deleteProduct(id);
    }

    @GetMapping("/filter")
    public List<Product>productByCategory(int id){
        return productService.productByCategory(id);
    }

    @GetMapping("/filterbyname")
    public List<Product>gamesByCategoryName(String name){
        return productService.productByCategoryName(name);
    }



}
