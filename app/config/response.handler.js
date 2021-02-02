exports.handleResponse = (res, status, message, data) => {
  if (status == "200")
    return res
      .status(status)
      .send({ code: status, status: true, message: message, data: data });
  else
    return res
      .status(status)
      .send({ code: status, status: false, message: message, data: data });
      
};

exports.Response = (status, message, data) => {
  return { status: status, message: message, data: data };
  
};

//validation error

exports.validateResponse = (res, data) => {
  let status = 422;
  return res.status(status).send({ status: false, code: status, data: data });
   
};
