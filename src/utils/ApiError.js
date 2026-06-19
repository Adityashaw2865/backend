class ApiError extends Error {
  constructor(message, statusCode) {
    message = message || 'Internal Server Error';
    statusCode = statusCode || 500;
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    this.message = message;
    this.success = false;
    
    }

}