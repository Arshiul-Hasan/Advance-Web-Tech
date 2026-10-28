import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from "@nestjs/common";
import { EmployeeService } from "./employee.service";
import { CreateEmployeeDto, UpdateEmployeeDto } from "./dto/employee.dto";

@Controller("employees")
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async createEmployee(@Body(ValidationPipe) dto: CreateEmployeeDto) {
    return await this.employeeService.createEmployee(dto);
  }

  @Get()
  async getEmployees() {
    return await this.employeeService.getEmployees();
  }

  @Get(":id")
  async getEmployeeById(@Param("id", ParseUUIDPipe) id: string) {
    return await this.employeeService.getEmployeeById(id);
  }

  @Patch(":id")
  async updateEmployee(
    @Param("id", ParseUUIDPipe) id: string,
    @Body(ValidationPipe) dto: UpdateEmployeeDto,
  ) {
    return await this.employeeService.updateEmployee(id, dto);
  }

  @Delete(":id")
  async deleteEmployee(@Param("id", ParseUUIDPipe) id: string) {
    return await this.employeeService.deleteEmployee(id);
  }
}
