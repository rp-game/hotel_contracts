import { BookingStatus } from '../enums/booking-status.enum';
import { BookingSource } from '../enums/booking-source.enum';
import { PaymentStatus } from '../enums/payment-status.enum';

export interface BookingRoomResponseDto {
  id: string;
  roomTypeId: string;
  roomTypeName: string;
  roomId?: string;
  roomNumber?: string;
  pricePerUnit: number;
  totalPrice: number;
  discountAmount: number;
  adultCount: number;
  childCount: number;
}

export interface BookingGuestResponseDto {
  id: string;
  isMainGuest: boolean;
  fullName: string;
  email?: string;
  phone?: string;
  idType?: string;
  idNumber?: string;
  nationality?: string;
}

export interface BookingPaymentResponseDto {
  id: string;
  amount: number;
  paymentMethod: string;
  paymentStatus: string;
  paymentDate: Date;
  transactionId?: string;
}

export interface BookingServiceResponseDto {
  id: string;
  serviceId: string;
  serviceName: string;
  quantity: number;
  price: number;
  totalPrice: number;
  serviceDate: Date;
  isPaid: boolean;
}

export interface BookingResponseDto {
  id: string;
  bookingCode: string;
  tenantId: string;
  hotelId: string;
  guestId?: string; // Customer ID

  // Room assignment (for single room bookings - most common case)
  roomTypeId?: string;
  roomId?: string;
  roomNumber?: string;
  assignmentStatus?: string;

  // Thông tin booking
  status: BookingStatus;
  source: BookingSource;

  // Thời gian
  checkInDate: string;
  checkOutDate: string;
  estimatedCheckInTime?: Date;
  actualCheckInTime?: Date;
  actualCheckOutTime?: Date;

  // Thông tin thanh toán
  totalAmount: number;
  paidAmount: number;
  paymentStatus: PaymentStatus;

  // Thông tin khác
  specialRequests?: string;
  notes?: string;

  // Số lượng người lớn và trẻ em
  adultCount: number;
  childCount: number;

  // Thông tin OTA nếu booking từ OTA
  otaBookingId?: string;
  otaBookingReference?: string;

  // Các thông tin liên quan
  rooms: BookingRoomResponseDto[];
  guests: BookingGuestResponseDto[];
  payments: BookingPaymentResponseDto[];
  services: BookingServiceResponseDto[];

  // Metadata
  createdAt: Date;
  updatedAt: Date;
  createdBy?: string | null;
  updatedBy?: string | null;
}
