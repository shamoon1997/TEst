const getData = (socket) => {
    const query1 = "select * from data order by id DESC"
    con.query(query1, (err, result, fields) => {
        if (err) throw err;
        socket.emit("FromAPI", result);
    });
};

module.exports = { 
    getData,
};
