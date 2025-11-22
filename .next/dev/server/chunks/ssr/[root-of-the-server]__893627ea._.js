module.exports = [
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}),
"[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("styled-jsx/style.js", () => require("styled-jsx/style.js"));

module.exports = mod;
}),
"[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/styled-jsx/style.js [external] (styled-jsx/style.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
function Home() {
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const handleSerialize = async ()=>{
        setLoading(true);
        setResults(null);
        setError(null);
        try {
            // 1. Appel API pour la sérialisation
            const response = await fetch('/api/serialize', {
                method: 'POST'
            });
            if (!response.ok) {
                // Tente de lire le message d'erreur du body si l'API le fournit
                const errorText = await response.text();
                throw new Error(`Erreur ${response.status} lors de la sérialisation : ${errorText}`);
            }
            const data = await response.json();
            setResults(data);
        } catch (err) {
            setError(err.message);
        } finally{
            setLoading(false);
        }
    };
    const getComparisonText = (jsonSize, protoSize)=>{
        if (jsonSize && protoSize) {
            const difference = jsonSize - protoSize;
            const percentage = (difference / jsonSize * 100).toFixed(2);
            if (difference > 0) {
                return `Protobuf est **${difference} octets** plus petit, soit une réduction de **${percentage}%** par rapport à JSON.`;
            } else if (difference < 0) {
                return `Protobuf est **${Math.abs(difference)} octets** plus grand que JSON.`;
            } else {
                return "Protobuf et JSON ont la même taille.";
            }
        }
        return "Les données de taille ne sont pas disponibles pour la comparaison.";
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "jsx-359974343b941a9f" + " " + "container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("header", {
                className: "jsx-359974343b941a9f",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                        className: "jsx-359974343b941a9f",
                        children: "🔬 Labo de Sérialisation"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "jsx-359974343b941a9f",
                        children: "Ce labo compare la taille d'une liste d'employés sérialisée en **JSON**, **XML** et **Protobuf** (Binaire). Les fichiers sont sauvegardés sur le serveur pour inspection."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                onClick: handleSerialize,
                disabled: loading,
                className: "jsx-359974343b941a9f" + " " + "primary-button",
                children: loading ? '⏳ Sérialisation en cours...' : '🚀 Exécuter la Sérialisation et la Sauvegarde'
            }, void 0, false, {
                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-359974343b941a9f" + " " + "error-message",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                    className: "jsx-359974343b941a9f",
                    children: [
                        "🛑 Erreur: ",
                        error
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                    lineNumber: 69,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                lineNumber: 68,
                columnNumber: 9
            }, this),
            results && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "jsx-359974343b941a9f" + " " + "results-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                        className: "jsx-359974343b941a9f",
                        children: "Résultats de la Comparaison de Taille"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("table", {
                        className: "jsx-359974343b941a9f",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("thead", {
                                className: "jsx-359974343b941a9f",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                    className: "jsx-359974343b941a9f",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "jsx-359974343b941a9f",
                                            children: "Format"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                            lineNumber: 81,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "jsx-359974343b941a9f",
                                            children: "Taille du Fichier (Octets)"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("th", {
                                            className: "jsx-359974343b941a9f",
                                            children: "Lien de Téléchargement"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tbody", {
                                className: "jsx-359974343b941a9f",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                        className: "jsx-359974343b941a9f" + " " + "json-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: "**JSON**"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: [
                                                    "**",
                                                    results.json?.size,
                                                    "**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 90,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: `/serialized/${results.json?.fileName}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-359974343b941a9f",
                                                    children: results.json?.fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 91,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                        className: "jsx-359974343b941a9f" + " " + "xml-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: "**XML**"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 99,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: [
                                                    "**",
                                                    results.xml?.size,
                                                    "**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 100,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: `/serialized/${results.xml?.fileName}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-359974343b941a9f",
                                                    children: results.xml?.fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 101,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("tr", {
                                        className: "jsx-359974343b941a9f" + " " + "protobuf-row",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: "**Protobuf (Binaire)**"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 109,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: [
                                                    "**",
                                                    results.protobuf?.size,
                                                    "**"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 110,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("td", {
                                                className: "jsx-359974343b941a9f",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                                    href: `/serialized/${results.protobuf?.fileName}`,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: "jsx-359974343b941a9f",
                                                    children: results.protobuf?.fileName
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                    lineNumber: 112,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                                lineNumber: 111,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                        lineNumber: 108,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                        lineNumber: 78,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "jsx-359974343b941a9f" + " " + "conclusion-card",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                className: "jsx-359974343b941a9f",
                                children: "⚖️ Conclusion Protobuf vs. JSON"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                lineNumber: 122,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                dangerouslySetInnerHTML: {
                                    __html: getComparisonText(results.json?.size, results.protobuf?.size)
                                },
                                className: "jsx-359974343b941a9f"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
                lineNumber: 74,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "cbfac07a0edde7ba",
                children: "body{background:#f4f7f9;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}"
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$styled$2d$jsx$2f$style$2e$js__$5b$external$5d$__$28$styled$2d$jsx$2f$style$2e$js$2c$__cjs$29$__["default"], {
                id: "a9f836ff3e9caa07",
                children: ".container.jsx-359974343b941a9f{background:#fff;border-radius:12px;max-width:900px;margin:40px auto;padding:30px;box-shadow:0 4px 20px #0000000d}header.jsx-359974343b941a9f h1.jsx-359974343b941a9f{color:#333;border-bottom:2px solid #0070f3;margin-top:0;padding-bottom:10px}header.jsx-359974343b941a9f p.jsx-359974343b941a9f{color:#555;line-height:1.6}.primary-button.jsx-359974343b941a9f{cursor:pointer;color:#fff;background-color:#0070f3;border:none;border-radius:6px;margin-bottom:30px;padding:12px 25px;font-size:16px;transition:background-color .2s,transform .1s}.primary-button.jsx-359974343b941a9f:hover:not(:disabled){background-color:#005bb5}.primary-button.jsx-359974343b941a9f:disabled{cursor:not-allowed;background-color:#a0c4f8}.error-message.jsx-359974343b941a9f{color:#d93025;background:#fde8e7;border:1px solid #d93025;border-radius:6px;margin-top:20px;padding:15px}.results-panel.jsx-359974343b941a9f h2.jsx-359974343b941a9f{color:#333;margin-top:30px}table.jsx-359974343b941a9f{border-collapse:separate;border-spacing:0;border-radius:8px;width:100%;margin-top:20px;overflow:hidden;box-shadow:0 1px 3px #0000001a}th.jsx-359974343b941a9f,td.jsx-359974343b941a9f{text-align:left;padding:15px}th.jsx-359974343b941a9f{color:#fff;background-color:#0070f3;font-weight:600}tr.jsx-359974343b941a9f:nth-child(2n){background-color:#f8f8f8}tr.jsx-359974343b941a9f:hover{background-color:#f0f0f0}.protobuf-row.jsx-359974343b941a9f{background-color:#e6ffe6;font-weight:700}.protobuf-row.jsx-359974343b941a9f:hover{background-color:#d4fcd4}td.jsx-359974343b941a9f a.jsx-359974343b941a9f{color:#0070f3;font-weight:500;text-decoration:none}td.jsx-359974343b941a9f a.jsx-359974343b941a9f:hover{text-decoration:underline}.conclusion-card.jsx-359974343b941a9f{background-color:#f0f8ff;border-left:5px solid #0070f3;border-radius:8px;margin-top:40px;padding:20px}.conclusion-card.jsx-359974343b941a9f h3.jsx-359974343b941a9f{color:#0070f3;margin-top:0;margin-bottom:10px}.conclusion-card.jsx-359974343b941a9f p.jsx-359974343b941a9f{color:#333;font-size:1.1em}.conclusion-card.jsx-359974343b941a9f p.jsx-359974343b941a9f strong{color:#005bb5}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/TP/Comparer JSON, XML et Protobuf/json-xml-protobuf-lab/pages/index.js",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__893627ea._.js.map