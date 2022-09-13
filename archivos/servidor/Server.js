"use strict";
exports.__esModule = true;
exports.upload = exports.storage = exports.multer = exports.app = void 0;
var fs = require('fs');
var cors = require('cors');
var json = require('express');
var child_process = require('child_process');
exports.app = require('express')(), exports.multer = require('multer'), exports.storage = exports.multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../Estadistica');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
}), exports.upload = (0, exports.multer)({ storage: exports.storage });
exports.app.use(cors());
exports.app.use(json.json({ extended: false }));
exports.app.use(json.urlencoded({ extended: false }));
exports.app.post('/subir', exports.upload.single("archivo"), function (req, res) {
    try {
        res.json(req.file);
    }
    catch (e) {
        console.log(e);
    }
});
exports.app.get('/', function (req, res) {
    try {
        res.json(lecturaDeCarpeta('Estadistica'));
    }
    catch (e) {
        console.log(e);
    }
});
exports.app.get('/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        abrir(nombre);
    }
    catch (e) {
        console.log(e);
    }
});
exports.app["delete"]('/:nombre', function (req, res) {
    try {
        var nombre = req.params.nombre;
        remove(nombre);
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
        fs.unlinkSync("../Estadistica/".concat(nombre));
        console.log("borrado");
    }
    catch (e) {
        console.log(e);
    }
};
var abrir = function (nombre) {
    try {
        var open_1 = child_process.spawn('open', ["../Estadistica/".concat(nombre)]);
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
exports.app.listen(7890, function () { return console.log("servidor en pie"); });
