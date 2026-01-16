/**
 * Hotels Analytics NATS Contract Types
 * Defines request/response types for hotel-level analytics operations
 */
export interface GetHotelCustomerAnalyticsNatsRequest {
    hotelId: string;
    period: string;
}
export interface GetAggregatedCustomerAnalyticsNatsRequest {
    hotelIds: string[];
    period: string;
}
export interface GetHotelCustomerSegmentsNatsRequest {
    hotelId: string;
}
export interface GetHotelLoyaltyPerformanceNatsRequest {
    hotelId: string;
    period: string;
}
export interface GetCustomerSatisfactionMetricsNatsRequest {
    hotelId: string;
    period: string;
}
export interface GetCustomerRetentionAnalyticsNatsRequest {
    hotelId: string;
    period: string;
}
export interface SyncLoyaltyProgramsAcrossChainNatsRequest {
    chainId: string;
    hotelIds: string[];
}
export interface GetCustomerDemographicsNatsRequest {
    hotelId: string;
    period?: string;
}
export interface GetCustomerJourneyAnalyticsNatsRequest {
    hotelId: string;
    customerId?: string;
}
export interface GetMarketingCampaignPerformanceNatsRequest {
    hotelId: string;
    campaignId?: string;
}
export interface NationalityData {
    country: string;
    percentage: number;
}
export interface AgeGroupData {
    range: string;
    count: number;
    percentage: number;
}
export interface BookingChannelData {
    direct: number;
    online: number;
    agent: number;
}
export interface HotelCustomerAnalyticsData {
    hotelId: string;
    period: string;
    totalCustomers: number;
    newCustomers: number;
    returningCustomers: number;
    customerRetentionRate: number;
    averageStayDuration: number;
    customerSatisfactionScore: number;
    loyaltyMemberPercentage: number;
    averageCustomerValue: number;
    topNationalities: NationalityData[];
    ageGroups: AgeGroupData[];
    bookingChannels: BookingChannelData;
    lastUpdated: string;
}
export interface HotelBreakdownData {
    hotelId: string;
    totalCustomers: number;
    newCustomers: number;
    returningCustomers: number;
    customerRetentionRate: number;
    customerSatisfactionScore: number;
    loyaltyMemberPercentage: number;
    averageCustomerValue: number;
}
export interface AggregatedCustomerAnalyticsData {
    hotelIds: string[];
    period: string;
    totalHotels: number;
    totalCustomers: number;
    totalNewCustomers: number;
    totalReturningCustomers: number;
    averageRetentionRate: number;
    averageSatisfactionScore: number;
    averageLoyaltyPercentage: number;
    hotelBreakdown: HotelBreakdownData[];
}
export interface CustomerSegmentData {
    name: string;
    count: number;
    percentage: number;
    averageSpend: number;
    description: string;
}
export interface HotelCustomerSegmentsData {
    hotelId: string;
    segments: CustomerSegmentData[];
    lastUpdated: string;
}
export interface TierDistributionData {
    tierName: string;
    memberCount: number;
    percentage: number;
    averagePoints: number;
}
export interface MemberSpendData {
    memberSpend: number;
    nonMemberSpend: number;
    spendDifference: number;
    percentageDifference: number;
}
export interface LoyaltyActivityData {
    activityType: string;
    count: number;
    percentage: number;
}
export interface HotelLoyaltyPerformanceData {
    hotelId: string;
    period: string;
    totalLoyaltyMembers: number;
    newMembersThisPeriod: number;
    memberRetentionRate: number;
    pointsIssued: number;
    pointsRedeemed: number;
    redemptionRate: number;
    averagePointsPerMember: number;
    tierDistribution: TierDistributionData[];
    memberSpendVsNonMember: MemberSpendData;
    topLoyaltyActivities: LoyaltyActivityData[];
    lastUpdated: string;
}
export interface CategoryScoresData {
    cleanliness: number;
    service: number;
    location: number;
    amenities: number;
    valueForMoney: number;
}
export interface SatisfactionBreakdownData {
    '5': number;
    '4': number;
    '3': number;
    '2': number;
    '1': number;
}
export interface SentimentAnalysisData {
    positive: number;
    neutral: number;
    negative: number;
}
export interface CustomerSatisfactionMetricsData {
    hotelId: string;
    period: string;
    overallSatisfactionScore: number;
    totalReviews: number;
    satisfactionBreakdown: SatisfactionBreakdownData;
    categoryScores: CategoryScoresData;
    sentimentAnalysis: SentimentAnalysisData;
    lastUpdated: string;
}
export interface CohortAnalysisData {
    cohortPeriod: string;
    cohortSize: number;
    retentionPercentage: number;
}
export interface RetentionBySegmentData {
    segment: string;
    retentionRate: number;
    customerCount: number;
}
export interface ChurnAnalysisData {
    totalChurnedCustomers: number;
    churnRate: number;
    topChurnReasons: string[];
    churningCustomers: string[];
}
export interface CustomerRetentionAnalyticsData {
    hotelId: string;
    period: string;
    totalCustomers: number;
    retainedCustomers: number;
    retentionRate: number;
    churnRate: number;
    cohortAnalysis: CohortAnalysisData[];
    retentionBySegment: Record<string, RetentionBySegmentData>;
    churnAnalysis: ChurnAnalysisData;
    lastUpdated: string;
}
export interface ProgramDetailData {
    programId: string;
    hotelId: string;
    programName: string;
    syncStatus: string;
    memberCount: number;
    syncTimestamp: string;
}
export interface SyncErrorData {
    hotelId: string;
    errorMessage: string;
    timestamp: string;
}
export interface LoyaltyProgramSyncData {
    chainId: string;
    hotelIds: string[];
    syncStatus: string;
    totalProgramsSynced: number;
    programDetails: ProgramDetailData[];
    syncTimestamp: string;
    errors: SyncErrorData[];
}
export interface DemographicDistributionData {
    category: string;
    count: number;
    percentage: number;
}
export interface GenderDistributionData {
    male: number;
    female: number;
    other: number;
    unknown: number;
}
export interface CustomerDemographicsData {
    hotelId: string;
    period?: string;
    ageDistribution: DemographicDistributionData[];
    nationalityDistribution: DemographicDistributionData[];
    genderDistribution: GenderDistributionData;
    languagePreferences: DemographicDistributionData[];
    occupationProfiles: DemographicDistributionData[];
    lastUpdated: string;
}
export interface JourneyStageData {
    stage: string;
    percentage: number;
    averageTimeSpent: number;
}
export interface TouchpointAnalysisData {
    touchpointType: string;
    count: number;
    conversionRate: number;
    averageValue: number;
}
export interface ConversionFunnelData {
    stage: string;
    entries: number;
    exits: number;
    conversionRate: number;
}
export interface AbandonmentPointData {
    point: string;
    abandonmentRate: number;
    customersAffected: number;
}
export interface SuccessPathData {
    pathName: string;
    frequency: number;
    conversionRate: number;
}
export interface CustomerJourneyAnalyticsData {
    hotelId: string;
    customerId?: string;
    journeyStages: JourneyStageData[];
    touchpointAnalysis: TouchpointAnalysisData[];
    conversionFunnels: ConversionFunnelData[];
    avgTimeSpent: number;
    abandonmentPoints: AbandonmentPointData[];
    successPaths: SuccessPathData[];
    lastUpdated: string;
}
export interface CampaignMetricsData {
    campaignId: string;
    name: string;
    startDate: string;
    endDate: string;
    budget: number;
    revenue: number;
    roi: number;
    reach: number;
    engagement: number;
    conversions: number;
    conversionRate: number;
}
export interface AggregatedMarketingMetricsData {
    totalBudget: number;
    totalRevenue: number;
    averageRoi: number;
    totalReach: number;
    totalEngagement: number;
    totalConversions: number;
}
export interface MarketingCampaignPerformanceData {
    hotelId: string;
    campaignId?: string;
    campaignsList: CampaignMetricsData[];
    aggregatedMetrics: AggregatedMarketingMetricsData;
    lastUpdated: string;
}
export interface GetHotelCustomerAnalyticsNatsResponse {
    data: HotelCustomerAnalyticsData;
}
export interface GetAggregatedCustomerAnalyticsNatsResponse {
    data: AggregatedCustomerAnalyticsData;
}
export interface GetHotelCustomerSegmentsNatsResponse {
    data: HotelCustomerSegmentsData;
}
export interface GetHotelLoyaltyPerformanceNatsResponse {
    data: HotelLoyaltyPerformanceData;
}
export interface GetCustomerSatisfactionMetricsNatsResponse {
    data: CustomerSatisfactionMetricsData;
}
export interface GetCustomerRetentionAnalyticsNatsResponse {
    data: CustomerRetentionAnalyticsData;
}
export interface SyncLoyaltyProgramsAcrossChainNatsResponse {
    data: LoyaltyProgramSyncData;
}
export interface GetCustomerDemographicsNatsResponse {
    data: CustomerDemographicsData;
}
export interface GetCustomerJourneyAnalyticsNatsResponse {
    data: CustomerJourneyAnalyticsData;
}
export interface GetMarketingCampaignPerformanceNatsResponse {
    data: MarketingCampaignPerformanceData;
}
//# sourceMappingURL=hotels-analytics.nats.d.ts.map