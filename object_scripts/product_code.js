"use strict"


let code = {

    supplierCode: "ABCD",
    productNumber: "23",
    size: "L"

} ;

function parsePartCode(lemonChips){
    console.log(`
    Supplier: ${lemonChips.supplierCode}
    Product Number: ${lemonChips.productNumber}
    Size: ${lemonChips.size}
    

    
    `)
}

parsePartCode(code)