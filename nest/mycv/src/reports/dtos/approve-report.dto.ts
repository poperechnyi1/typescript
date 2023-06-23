import { IsBoolean } from 'class-validator';

export class AprroveReportDto {
  @IsBoolean()
  approved: boolean;
}
