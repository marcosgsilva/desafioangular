import { Product } from "./product.interface";

export type ProductPlayload = Omit<Product, 'id'>