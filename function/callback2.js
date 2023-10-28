function pdfHandler(fname){

    console.log("PDF file is generated " + fname);
    return fname + ".pdf"
}

function excelHandler(fname){

    console.log("Excel file is generated "+ fname);
    return fname + ".xls"
}

function wordHandler(fname){

    console.log("Word file is generated "+ fname);
    return fname + ".doc"
}


const generateFile =(fname,cb)=>{
//local variable generateFile


    var x = cb(fname) //word
    console.log("x = ",x)


}

//generateFile("abc",pdfHandler)
//generateFile("abc",wordHandler)
//generateFile("abc",excelHandler)


choice =1
generateFile("abc",choice ==1 ? pdfHandler : choice ==2 ? excelHandler : wordHandler)


