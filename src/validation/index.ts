/**
 * Validates a product object for required fields and constraints.
 *
 * @param {Object} product - The product to be validated.
 * @param {string} product.title - The title of the product.
 * @param {string} product.description - The description of the product.
 * @param {string} product.imageURL - The URL of the product's image.
 * @param {string} product.price - The price of the product.
 *
 * @returns {Object} - An object containing error messages for invalid fields.
 * @property {string} title - Error message for the title field.
 * @property {string} description - Error message for the description field.
 * @property {string} imageURL - Error message for the imageURL field.
 * @property {string} price - Error message for the price field.
 */

import type { IValidateProduct } from "../interfaces";

export const productValidation = (product: IValidateProduct): object => {
  const errors: IValidateProduct = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };

  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);

  if (
    !product.title.trim() ||
    product.title.length < 2 ||
    product.title.length > 80
  )
    errors.title = "product title must be between 2 and 80 characters!";
  if (
    !product.description.trim() ||
    product.description.length < 15 ||
    product.description.length > 500
  )
    errors.description =
      "product description must be between 15 and 500 characters!";
  if (!product.imageURL.trim() || !validUrl)
    errors.imageURL = "Valid image URL is required!";
  if (!product.price.trim() || isNaN(Number(product.price)))
    errors.price = "Valid price is required!";

  return errors;
};
