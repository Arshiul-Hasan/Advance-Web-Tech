import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Min } from "class-validator";

export class CreateProductDto {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsString()
  @IsNotEmpty({ message: "Category is required" })
  category!: string;

  @IsNumber({}, { message: "Price must be a number" })
  @Min(0, { message: "Price cannot be negative" })
  price!: number;

  @IsInt({ message: "Quantity must be an integer" })
  @Min(0, { message: "Quantity cannot be negative" })
  quantity!: number;
}

// PATCH e shob field optional
export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  category?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  price?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  quantity?: number;
}
