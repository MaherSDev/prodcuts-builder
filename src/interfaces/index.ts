import type { ProductNameTypes } from "../types";

export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  addFlavors: string[];
  category: {
		name: string;
    imageURL: string;
  };
}

export interface IValidateProduct {
	title: string;
	description: string;
	imageURL: string;
	price: string;
}

export interface IFormInput {
	id: string;
	name: ProductNameTypes;
	label: string;
	type: string;
}

export interface ICategory {
	id?: string;
	name: string;
	imageURL: string;
}