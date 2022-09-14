"use strict";
exports.__esModule = true;
exports.Upload = void 0;
var fs = require('fs');
var cors = require('cors');
var json = require('express');
var child_process = require('child_process');
var app = require('express')();
var multer = require('multer');
var Upload = function (carpeta) {
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "../".concat(carpeta));
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    }), upload = multer({ storage: storage });
    return upload.single("archivo");
};
exports.Upload = Upload;
app.use(cors());
app.use(json.json());
app.use(json.urlencoded({ extended: false }));
app.post('/Estadistica', (0, exports.Upload)('Estadistica'), function (req, res) {
    try {
        res.json('Subido');
    }
    catch (e) {
        console.log(e);
    }
});
app.post('/Metodologia', (0, exports.Upload)('Metodologia'), function (req, res) {
    try {
        res.json('Subido');
    }
    catch (e) {
        console.log(e);
    }
});
app.post('/Arquitectura', (0, exports.Upload)('Arquitectura'), function (req, res) {
    try {
        res.json('Subido');
    }
    catch (e) {
        console.log(e);
    }
});
app.post('/Programacion', (0, exports.Upload)('Programacion'), function (req, res) {
    try {
        res.json('Subido');
    }
    catch (e) {
        console.log(e);
    }
});
app.post('/Ingles', (0, exports.Upload)('Ingles'), function (req, res) {
    try {
        res.json('Subido');
    }
    catch (e) {
        console.log(e);
    }
});
//-----------------------------------------------------------------
app.get('/Estadistica', function (req, res) {
    try {
        res.json(lecturaDeCarpeta('Estadistica'));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Arquitectura', function (req, res) {
    try {
        res.json(lecturaDeCarpeta('Arquitectura'));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Metodologia', function (req, res) {
    try {
        res.json(lecturaDeCarpeta('Metodologia'));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Programacion', function (req, res) {
    try {
        res.json(lecturaDeCarpeta('Programacion'));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Ingles', function (req, res) {
    try {
        res.json(lecturaDeCarpeta('Ingles'));
    }
    catch (e) {
        console.log(e);
    }
});
//--------------------------------------------------------------------
app.get('/Estadistica/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        abrir("Estadistica/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Arquitectura/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        abrir("Arquitectura/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Metodologia/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        abrir("Metodologia/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Programacion/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        abrir("Programacion/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app.get('/Ingles/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        abrir("Ingles/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
//------------------------------------------------------------
app["delete"]('/Estadistica/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        remove("Estadistica/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app["delete"]('/Arquitectura/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        remove("Arquitectura/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app["delete"]('/Metodologia/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        remove("Metodologia/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app["delete"]('/Programacion/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        remove("Programacion/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
app["delete"]('/Ingles/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        remove("Ingles/".concat(nombre));
    }
    catch (e) {
        console.log(e);
    }
});
//funciones de obtension de carpetas
var lecturaDeCarpeta = function (path) {
    try {
        var dir = fs.readdirSync("../".concat(path));
        var aux = dir.map(function (n) { return n.split('.'); });
        return aux;
    }
    catch (e) {
        return ["error: " + e];
    }
};
var remove = function (nombre) {
    try {
        fs.unlinkSync("../".concat(nombre));
        console.log("borrado");
    }
    catch (e) {
        console.log(e);
    }
};
var abrir = function (nombre) {
    try {
        var open_1 = child_process.spawn('open', ["../".concat(nombre)]);
        open_1.stdout.on('data', function (data) {
            console.log("".concat(data));
        });
        open_1.stderr.on('data', function (data) {
            console.log(data);
        });
        open_1.on('data', function (data) {
            console.log(data);
        });
    }
    catch (e) {
        console.log(e);
    }
};
app.listen(7890, function () { return console.log("servidor en pie"); });
