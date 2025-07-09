// 표준 response 타입을 정의 해놓는 것도 추천

// export interface ApiResponse {
//   code: 2000 | 4000 | 5000; -> 이런식으로 해놓으면 타입추론이 편함 -> 개발 용이
//   message?: string;
//   data?: object | object[];
//   error?: ErrorResponse | null; // 에러 정보
// }

// export interface ErrorResponse {
//   code: 4000 | 5000;
//   message: string;
//   errors?: string[]; // 에러 메시지 배열
// }
