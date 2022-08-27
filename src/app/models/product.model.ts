
export interface Category {
  id:string;
  name:string
}

export interface Product {
  id: string;
  title: string;
  images: string[];
  price: number;
  category: Category;
  description: string;
}


export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number;
}

/* Extiende del DTO Create pero todos los parametros son opcionales */
export interface UpdateProductDTO extends Partial<CreateProductDTO> {
}

