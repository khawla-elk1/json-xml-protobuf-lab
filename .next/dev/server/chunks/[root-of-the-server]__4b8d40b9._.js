module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/xml-js [external] (xml-js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("xml-js", () => require("xml-js"));

module.exports = mod;
}),
"[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/lib/data.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "employeeData",
    ()=>employeeData
]);
const employeeData = [
    {
        id: 101,
        name: "Alice Dupont",
        department: "R&D",
        salary: 75000.50
    },
    {
        id: 102,
        name: "Bob Martin",
        department: "Sales",
        salary: 62000.00
    },
    {
        id: 103,
        name: "Charlie Leblanc",
        department: "HR",
        salary: 55000.75
    },
    {
        id: 104,
        name: "Diana Petit",
        department: "R&D",
        salary: 85000.00
    },
    {
        id: 105,
        name: "Eve Dubois",
        department: "Marketing",
        salary: 60000.00
    },
    {
        id: 106,
        name: "Frank Giraud",
        department: "Sales",
        salary: 68000.00
    },
    {
        id: 107,
        name: "Grace Leroux",
        department: "HR",
        salary: 58000.00
    }
];
}),
"[externals]/protobufjs/minimal [external] (protobufjs/minimal, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("protobufjs/minimal", () => require("protobufjs/minimal"));

module.exports = mod;
}),
"[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/lib/employee_pb.js [api] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/ var $protobuf = __turbopack_context__.r("[externals]/protobufjs/minimal [external] (protobufjs/minimal, cjs)");
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
$root.Employee = function() {
    /**
     * Properties of an Employee.
     * @exports IEmployee
     * @interface IEmployee
     * @property {number|null} [id] Employee id
     * @property {string|null} [name] Employee name
     * @property {number|null} [salary] Employee salary
     */ /**
     * Constructs a new Employee.
     * @exports Employee
     * @classdesc Represents an Employee.
     * @implements IEmployee
     * @constructor
     * @param {IEmployee=} [properties] Properties to set
     */ function Employee(properties) {
        if (properties) {
            for(var keys = Object.keys(properties), i = 0; i < keys.length; ++i)if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
    }
    /**
     * Employee id.
     * @member {number} id
     * @memberof Employee
     * @instance
     */ Employee.prototype.id = 0;
    /**
     * Employee name.
     * @member {string} name
     * @memberof Employee
     * @instance
     */ Employee.prototype.name = "";
    /**
     * Employee salary.
     * @member {number} salary
     * @memberof Employee
     * @instance
     */ Employee.prototype.salary = 0;
    /**
     * Creates a new Employee instance using the specified properties.
     * @function create
     * @memberof Employee
     * @static
     * @param {IEmployee=} [properties] Properties to set
     * @returns {Employee} Employee instance
     */ Employee.create = function create(properties) {
        return new Employee(properties);
    };
    /**
     * Encodes the specified Employee message. Does not implicitly {@link Employee.verify|verify} messages.
     * @function encode
     * @memberof Employee
     * @static
     * @param {IEmployee} message Employee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ Employee.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id")) writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.id);
        if (message.name != null && Object.hasOwnProperty.call(message, "name")) writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.name);
        if (message.salary != null && Object.hasOwnProperty.call(message, "salary")) writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.salary);
        return writer;
    };
    /**
     * Encodes the specified Employee message, length delimited. Does not implicitly {@link Employee.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Employee
     * @static
     * @param {IEmployee} message Employee message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ Employee.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes an Employee message from the specified reader or buffer.
     * @function decode
     * @memberof Employee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Employee} Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ Employee.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Employee();
        while(reader.pos < end){
            var tag = reader.uint32();
            if (tag === error) break;
            switch(tag >>> 3){
                case 1:
                    {
                        message.id = reader.int32();
                        break;
                    }
                case 2:
                    {
                        message.name = reader.string();
                        break;
                    }
                case 3:
                    {
                        message.salary = reader.int32();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes an Employee message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Employee
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Employee} Employee
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ Employee.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies an Employee message.
     * @function verify
     * @memberof Employee
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ Employee.verify = function verify(message) {
        if (typeof message !== "object" || message === null) return "object expected";
        if (message.id != null && message.hasOwnProperty("id")) {
            if (!$util.isInteger(message.id)) return "id: integer expected";
        }
        if (message.name != null && message.hasOwnProperty("name")) {
            if (!$util.isString(message.name)) return "name: string expected";
        }
        if (message.salary != null && message.hasOwnProperty("salary")) {
            if (!$util.isInteger(message.salary)) return "salary: integer expected";
        }
        return null;
    };
    /**
     * Creates an Employee message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Employee
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Employee} Employee
     */ Employee.fromObject = function fromObject(object) {
        if (object instanceof $root.Employee) return object;
        var message = new $root.Employee();
        if (object.id != null) message.id = object.id | 0;
        if (object.name != null) message.name = String(object.name);
        if (object.salary != null) message.salary = object.salary | 0;
        return message;
    };
    /**
     * Creates a plain object from an Employee message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Employee
     * @static
     * @param {Employee} message Employee
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ Employee.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
            object.id = 0;
            object.name = "";
            object.salary = 0;
        }
        if (message.id != null && message.hasOwnProperty("id")) object.id = message.id;
        if (message.name != null && message.hasOwnProperty("name")) object.name = message.name;
        if (message.salary != null && message.hasOwnProperty("salary")) object.salary = message.salary;
        return object;
    };
    /**
     * Converts this Employee to JSON.
     * @function toJSON
     * @memberof Employee
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ Employee.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for Employee
     * @function getTypeUrl
     * @memberof Employee
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */ Employee.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Employee";
    };
    return Employee;
}();
$root.Employees = function() {
    /**
     * Properties of an Employees.
     * @exports IEmployees
     * @interface IEmployees
     * @property {Array.<IEmployee>|null} [employee] Employees employee
     */ /**
     * Constructs a new Employees.
     * @exports Employees
     * @classdesc Represents an Employees.
     * @implements IEmployees
     * @constructor
     * @param {IEmployees=} [properties] Properties to set
     */ function Employees(properties) {
        this.employee = [];
        if (properties) {
            for(var keys = Object.keys(properties), i = 0; i < keys.length; ++i)if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
        }
    }
    /**
     * Employees employee.
     * @member {Array.<IEmployee>} employee
     * @memberof Employees
     * @instance
     */ Employees.prototype.employee = $util.emptyArray;
    /**
     * Creates a new Employees instance using the specified properties.
     * @function create
     * @memberof Employees
     * @static
     * @param {IEmployees=} [properties] Properties to set
     * @returns {Employees} Employees instance
     */ Employees.create = function create(properties) {
        return new Employees(properties);
    };
    /**
     * Encodes the specified Employees message. Does not implicitly {@link Employees.verify|verify} messages.
     * @function encode
     * @memberof Employees
     * @static
     * @param {IEmployees} message Employees message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ Employees.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.employee != null && message.employee.length) for(var i = 0; i < message.employee.length; ++i)$root.Employee.encode(message.employee[i], writer.uint32(/* id 1, wireType 2 =*/ 10).fork()).ldelim();
        return writer;
    };
    /**
     * Encodes the specified Employees message, length delimited. Does not implicitly {@link Employees.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Employees
     * @static
     * @param {IEmployees} message Employees message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */ Employees.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };
    /**
     * Decodes an Employees message from the specified reader or buffer.
     * @function decode
     * @memberof Employees
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Employees} Employees
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ Employees.decode = function decode(reader, length, error) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Employees();
        while(reader.pos < end){
            var tag = reader.uint32();
            if (tag === error) break;
            switch(tag >>> 3){
                case 1:
                    {
                        if (!(message.employee && message.employee.length)) message.employee = [];
                        message.employee.push($root.Employee.decode(reader, reader.uint32()));
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    };
    /**
     * Decodes an Employees message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Employees
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Employees} Employees
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */ Employees.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };
    /**
     * Verifies an Employees message.
     * @function verify
     * @memberof Employees
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */ Employees.verify = function verify(message) {
        if (typeof message !== "object" || message === null) return "object expected";
        if (message.employee != null && message.hasOwnProperty("employee")) {
            if (!Array.isArray(message.employee)) return "employee: array expected";
            for(var i = 0; i < message.employee.length; ++i){
                var error = $root.Employee.verify(message.employee[i]);
                if (error) return "employee." + error;
            }
        }
        return null;
    };
    /**
     * Creates an Employees message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Employees
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Employees} Employees
     */ Employees.fromObject = function fromObject(object) {
        if (object instanceof $root.Employees) return object;
        var message = new $root.Employees();
        if (object.employee) {
            if (!Array.isArray(object.employee)) throw TypeError(".Employees.employee: array expected");
            message.employee = [];
            for(var i = 0; i < object.employee.length; ++i){
                if (typeof object.employee[i] !== "object") throw TypeError(".Employees.employee: object expected");
                message.employee[i] = $root.Employee.fromObject(object.employee[i]);
            }
        }
        return message;
    };
    /**
     * Creates a plain object from an Employees message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Employees
     * @static
     * @param {Employees} message Employees
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */ Employees.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.employee = [];
        if (message.employee && message.employee.length) {
            object.employee = [];
            for(var j = 0; j < message.employee.length; ++j)object.employee[j] = $root.Employee.toObject(message.employee[j], options);
        }
        return object;
    };
    /**
     * Converts this Employees to JSON.
     * @function toJSON
     * @memberof Employees
     * @instance
     * @returns {Object.<string,*>} JSON object
     */ Employees.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };
    /**
     * Gets the default type url for Employees
     * @function getTypeUrl
     * @memberof Employees
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */ Employees.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/Employees";
    };
    return Employees;
}();
module.exports = $root;
}),
"[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/api/serialize.js [api] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$xml$2d$js__$5b$external$5d$__$28$xml$2d$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/xml-js [external] (xml-js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/lib/data.js [api] (ecmascript)");
// Importation du code généré par Protobuf
// In pages/api/serialize.js
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$employee_pb$2e$js__$5b$api$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/lib/employee_pb.js [api] (ecmascript)"); // Target import path
;
;
;
;
;
// Chemin pour sauvegarder les fichiers dans le dossier public
const outputDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'public', 'serialized');
async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method Not Allowed'
        });
    }
    // 1. Assurer que le répertoire de sortie existe
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(outputDir)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(outputDir, {
            recursive: true
        });
    }
    const results = {};
    // --- Sérialisation JSON ---
    try {
        const jsonString = JSON.stringify({
            employees: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__["employeeData"]
        }, null, 2);
        const jsonPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(outputDir, 'employees.json');
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(jsonPath, jsonString);
        results.json = {
            size: __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(jsonPath).size,
            fileName: 'employees.json'
        };
    } catch (error) {
        console.error("JSON Error:", error);
        results.json = {
            error: "Failed to serialize JSON"
        };
    }
    // --- Sérialisation XML ---
    try {
        const xmlData = {
            _declaration: {
                _attributes: {
                    version: '1.0',
                    encoding: 'utf-8'
                }
            },
            EmployeeList: {
                Employee: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__["employeeData"].map((emp)=>({
                        id: {
                            _text: emp.id
                        },
                        name: {
                            _text: emp.name
                        },
                        department: {
                            _text: emp.department
                        },
                        salary: {
                            _text: emp.salary
                        }
                    }))
            }
        };
        const xmlString = __TURBOPACK__imported__module__$5b$externals$5d2f$xml$2d$js__$5b$external$5d$__$28$xml$2d$js$2c$__cjs$29$__["default"].js2xml(xmlData, {
            compact: true,
            spaces: 2
        });
        const xmlPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(outputDir, 'employees.xml');
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(xmlPath, xmlString);
        results.xml = {
            size: __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(xmlPath).size,
            fileName: 'employees.xml'
        };
    } catch (error) {
        console.error("XML Error:", error);
        results.xml = {
            error: "Failed to serialize XML"
        };
    }
    // --- Sérialisation Protobuf ---
    try {
        // 1. Créer une instance du message EmployeeList
        const message = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$employee_pb$2e$js__$5b$api$5d$__$28$ecmascript$29$__["EmployeeList"].create({
            employees: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__["employeeData"]
        });
        // 2. Encoder le message en un buffer binaire (Uint8Array)
        const buffer = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$employee_pb$2e$js__$5b$api$5d$__$28$ecmascript$29$__["EmployeeList"].encode(message).finish();
        const protoPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(outputDir, 'employees.bin');
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(protoPath, buffer);
        results.protobuf = {
            size: __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(protoPath).size,
            fileName: 'employees.bin'
        };
    } catch (error) {
        console.error("Protobuf Error:", error);
        results.protobuf = {
            error: "Failed to serialize Protobuf"
        };
    }
    // 3. Retourner les résultats
    res.status(200).json(results);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__4b8d40b9._.js.map