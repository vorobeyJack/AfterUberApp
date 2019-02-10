export const normalizePort = port => {
    const resultPort = parseInt(port, 10);
    if (Number.isNaN(resultPort)) {
        return port;
    }
    if (resultPort >= 0) {
        return resultPort;
    }
    return false;
};
