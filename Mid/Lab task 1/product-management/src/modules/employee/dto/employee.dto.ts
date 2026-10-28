import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, Min } from "class-validator";

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty({ message: "Name is required" })
  name!: string;

  @IsEmail({}, { message: "Email must be a valid email address" })
  email!: string;

  @IsString()
  @IsNotEmpty({ message: "Phone is required" })
  phone!: string;

  @IsString()
  @IsNotEmpty({ message: "Password is required" })
  password!: string;

  @IsInt({ message: "Age must be an integer" })
  @Min(1, { message: "Age must be at least 1" })
  age!: number;

  @IsInt({ message: "yearsOfWorking must be an integer" })
  @Min(0, { message: "yearsOfWorking cannot be negative" })
  yearsOfWorking!: number;
}

// PATCH e shob field optional
export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  password?: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  age?: number;

  @IsOptional()
  @IsInt()
  @Min(0)
  yearsOfWorking?: number;
}
