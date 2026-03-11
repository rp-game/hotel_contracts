import { AchievementCategory } from '../enums/achievement.enum';
export declare class PerformanceMetricsDto {
    period: string;
    tasksCompleted: number;
    tasksAssigned: number;
    averageCompletionTime: number;
    customerRating: number;
    punctualityScore: number;
    teamworkScore: number;
    overallScore: number;
}
export declare class AchievementDto {
    id: string;
    title: string;
    description: string;
    dateEarned: string;
    icon: string;
    category: AchievementCategory;
}
export declare class PerformanceRankDto {
    position: number;
    totalStaff: number;
    department: string;
}
export declare class PerformanceDataDto {
    currentMonth: PerformanceMetricsDto;
    lastMonth: PerformanceMetricsDto;
    last3Months: PerformanceMetricsDto;
    achievements: AchievementDto[];
    rank: PerformanceRankDto;
}
//# sourceMappingURL=performance.dto.d.ts.map