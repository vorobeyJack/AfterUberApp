export const normalizePort = port => {
    const resultPort = parseInt(port, 10);
    if (Number.isNaN(port)) {
        return port;
    }
    if (port >= 0) {
        return resultPort;
    }
    return false;
};
