import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from "@nestjs/common";
@Catch()
export class AllException implements ExceptionFilter {

    private readonly logger = new Logger(AllException.name);
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();

        const status = (exception instanceof HttpException )
        ? exception.getStatus() 
        : HttpStatus.INTERNAL_SERVER_ERROR
        const ms = (exception instanceof HttpException )
        ? exception.getResponse() 
        : exception

        this.logger.error(`status: ${status} Error: ${ms}`);
        response.status(status).json({
            time:new Date().toISOString(),
            path:request.url,
            error:ms
        })
    }

}