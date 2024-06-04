// import { isHttpError } from 'http-errors';
// import { MongooseError } from 'mongoose';

// export const errorHandler = (error, req, res, next) => {
//   if (isHttpError(error)) {
//     return res.status(error.status).json({
//       status: error.status,
//       message: error.message,
//     });
//   }

//   if (error instanceof MongooseError) {
//     return res.status(500).json({
//       status: 500,
//       message: 'Mongoose error',
//       data: {
//         message: error.message,
//       },
//     });
//   }

//   res.status(500).json({
//     status: 500,
//     message: 'Internal server error',
//     data: {
//       message: error.message,
//     },
//   });
// };

import { HttpError } from 'http-errors';
export const errorHandler = (err, req, res, next) => {
  
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.name,
      data: err,
    });
    return;
  }
  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
}; 