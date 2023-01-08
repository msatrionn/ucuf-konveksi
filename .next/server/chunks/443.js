"use strict";
exports.id = 443;
exports.ids = [443];
exports.modules = {

/***/ 443:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CardProduct = ({ id , keys , colorName , color , price , promoPrice , item , details  })=>{
    const [showModal, setShowModal] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [age, setAge] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("adult");
    const [size, setSize] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("L");
    const [qty, setQty] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    details?.map((data)=>data.size?.map((item)=>item.name = item.name.toLocaleUpperCase()));
    const filteredData = details?.filter((data)=>data.age.toLocaleLowerCase().includes(age.toLocaleLowerCase()));
    details = filteredData;
    const handleAdult = ()=>{
        setAge("adult");
        setQty("");
        setSize("");
    };
    const handleChild = ()=>{
        setSize("");
        setQty("");
        setAge("child");
    };
    const handleSetData = (size, qty)=>{
        setQty(qty);
        setSize(size);
    };
    const redirectWhatsApp = ()=>{
        if (qty < 1) {
            alert("Silahkan pilih ukuran terlebih dahulu");
        } else {
            window.open(`https://wa.me/6282322109841?text=Hi,%20saya%20ingin%20pesan%20kaos%20${item.title}%20versi%20${age}%20dengan%20ukuran%20${size}%20,%20apakah%20tersedia?`, "_blank");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                className: "mx-auto w-fit p-12 drop-shadow-lg",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-72 h-fit group",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                        className: "h-96 w-full object-cover",
                                        src: color,
                                        alt: "",
                                        priority: true
                                    }, keys),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "absolute h-full w-full bg-black/20 flex items-center justify-center -bottom-10 group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            className: "bg-java-blue text-white active:bg-java-blue font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                            type: "button",
                                            onClick: ()=>setShowModal(true),
                                            children: "Order"
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "mt-3 text-xl capitalize",
                                children: colorName
                            }, keys),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("del", {
                                className: "text-red-700 text-lg",
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-xl mt-2 ml-1 inline-block",
                                children: [
                                    "$",
                                    promoPrice
                                ]
                            })
                        ]
                    }, keys)
                })
            }),
            showModal ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "relative ",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "border-0 rounded-lg shadow-lg relative flex flex-col w-[100%] bg-white outline-none focus:outline-none ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-3xl font-semibold w-[100%]",
                                                children: item.title
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none",
                                                onClick: ()=>setShowModal(false),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "relative mx-auto mt-2",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            className: "text-slate-500 text-lg leading-relaxed",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                src: item.color,
                                                alt: "",
                                                width: 400,
                                                height: 400
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-[1000px] flex justify-center mt-4",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex-wrap",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "flex mx-auto w-[400px] mb-2",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "flex justify-between w-[400px]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `flex justify-center rounded w-[150px] text-black cursor-pointer ${age == "adult" ? "border-2 border-java-blue" : "border-2 border-gray-200"}`,
                                                                    onClick: handleAdult,
                                                                    children: "Adult"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: `flex justify-center rounded w-[150px] text-black cursor-pointer ${age == "child" ? "border-2 border-java-blue" : "border-2 border-gray-200"}`,
                                                                    onClick: handleChild,
                                                                    children: "Child"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "w-[400px]",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "",
                                                            children: details?.map((detail)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                    children: detail.size?.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                                className: `${item.qty > 0 ? "bg-java-blue border-2 border-java-blue cursor-pointer" : "bg-java-blue-200 border-2 border-java-blue"} text-white font-bold py-2 px-4 rounded m-2 ${item.name == size ? "bg-white border-2 border-java-blue text-java-blue cursor-pointer" : ""}`,
                                                                                onClick: ()=>handleSetData(item.name, item.qty),
                                                                                disabled: item.qty > 0 ? false : true,
                                                                                children: [
                                                                                    item.name,
                                                                                    " : ",
                                                                                    item.qty
                                                                                ]
                                                                            })
                                                                        }))
                                                                });
                                                            })
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-center border-t border-solid border-slate-200 rounded-b w-[100%] h-[80px] pr-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "text-black-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150",
                                                type: "button",
                                                onClick: ()=>setShowModal(false),
                                                children: "Cancel"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                className: "bg-white text-java-blue active:bg-java-blue active:text-white font-bold uppercase border-2 border-java-blue text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-java-blue focus:outline-java-blue mr-1 mb-1 ease-linear transition-all duration-150",
                                                type: "button",
                                                onClick: ()=>redirectWhatsApp(),
                                                children: "Order"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "opacity-25 fixed inset-0 z-40 bg-black"
                    })
                ]
            }) : null
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardProduct);


/***/ })

};
;