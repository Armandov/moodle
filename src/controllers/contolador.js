const control =  {};

control.get = ( req , res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM articulos', (err , articulos) => {
            if (err) {
                res.json(err);
            }
            res.render('catalago', {
                data: articulos
            });
        });
    });
};


control.post = (req, res )  => {
    const data = req.body;
  

req.getConnection((err ,conn ) => {
    conn.query('INSERT INTO articulos set ?', [data],(err,articulos) => {
        console.log('ok ');
        res.redirect('/');
    });
})
    
};

control.up = (req, res ) => {
    const codigo = req.params.codigo;
    req.getConnection((err , conn) => {
        conn.query('SELECT * FROM articulos WHERE codigo = ?',[codigo], (err, articulos) =>{
            res.render('up', {
                data: articulos [0]
            });
        });
    });
};


control.put = (req, res ) => {
    const codigo = req.params.codigo;
    const up = req.body;
    req.getConnection((err , conn) => {
        conn.query('UPDATE articulos set ? WHERE codigo = ?',[up, codigo], (err , rows) => {
            res.redirect('/');    
            });
        });

};

control.delete = (req, res ) => {
    const codigo = req.params.codigo;
     req.getConnection((err , conn) => {
        conn.query('DELETE FROM articulos WHERE codigo = ?',[codigo], (err, rows) =>{
            res.redirect('/');
           


        });
     
    });
    
};

    module.exports = control;