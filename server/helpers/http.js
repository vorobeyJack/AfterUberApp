export const normalizePort = port => {
    const resultPort = parseInt(port, 10);
    if (Number.isNaN(port)) {
        // named pipe
        return port;
    }
    if (port >= 0) {
        // port number
        return resultPort;
    }
    return false;
};
