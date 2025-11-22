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
(()=>{
    const e = new Error("Cannot find module '../../src/pb/employee_pb'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
        const message = EmployeeList.create({
            employees: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$TP$2f$Comparer__JSON$2c$__XML__et__Protobuf$2f$json$2d$xml$2d$protobuf$2d$lab$2f$lib$2f$data$2e$js__$5b$api$5d$__$28$ecmascript$29$__["employeeData"]
        });
        // 2. Encoder le message en un buffer binaire (Uint8Array)
        const buffer = EmployeeList.encode(message).finish();
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

//# sourceMappingURL=%5Broot-of-the-server%5D__6a970cf3._.js.map