import { ShiftType, ShiftStatus } from '../enums/user.enum';
export declare class ShiftScheduleDto {
    id: string;
    date: string;
    startTime: string;
    endTime: string;
    shiftType: ShiftType;
    department: string;
    location: string;
    status: ShiftStatus;
    notes?: string;
}
export declare class StaffScheduleRequestDto {
    startDate: string;
    endDate: string;
}
export declare class StaffScheduleResponseDto {
    schedules: ShiftScheduleDto[];
    total: number;
}
//# sourceMappingURL=schedule.dto.d.ts.map