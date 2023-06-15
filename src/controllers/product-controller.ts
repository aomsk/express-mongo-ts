import express, { Request, Response } from "express";
import { ProductModel } from "../models/product-model";

export const createProduct = async (req: Request, res: Response) => {
  const { product_name, description, price } = req.body;
  const newProduct = new ProductModel({ product_name, description, price });
  try {
    const saveData = await newProduct.save();
    res.status(200).json({ message: "Create new product sucessfuly", newProduct: saveData });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find();
    res.status(200).json({ message: "Get all products sucessfuly", products: products });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data = await ProductModel.findById(id);
    res.status(200).json({ message: "Get product by ID sucessfuly", data });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const updateProductById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateProduct = req.body;
  const options = { new: true }; // return ค่าที่อัพเดตกลับมา
  try {
    const data = await ProductModel.findByIdAndUpdate(id, updateProduct, options);
    res.status(200).json({ message: "Update product sucessfuly", data });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProductById = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const data: any = await ProductModel.findByIdAndDelete(id);
    res.status(200).json({ message: `Delete ${data.product_name} sucessfuly` });
  } catch (error) {}
};
