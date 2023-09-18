import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  BadRequestException,
  Logger,
} from '@nestjs/common';

@Catch(BadRequestException)
export class ValidationExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(ValidationExceptionFilter.name);

  formatError(data: string[] | string): string[] {
    if (Array.isArray(data)) {
      return data;
    } else {
      return [data];
    }
  }
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const statusCode = exception.getStatus();

    if (statusCode === 400) {
      const validationErrors: string[] = this.formatError(
        exception.getResponse()['message'],
      );
      console.log('validationErrors', validationErrors);

      if (Array.isArray(validationErrors) && validationErrors.length > 0) {
        const firstErrorMessage = validationErrors[0];
        const errorResponse = {
          statusCode,
          message: firstErrorMessage, // Get the first error message as a string
          errors: validationErrors, // Get all error messages as an array
          timestamp: new Date().toISOString(),
          path: request.url,
        };
        response.status(statusCode).json(errorResponse);
      }
    } else {
      response.status(statusCode).json({
        statusCode,
        message: 'An error occurred',
        timestamp: new Date().toISOString(),
        path: request.url,
      });
    }
  }
}
