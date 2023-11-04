var userTrasaction = {

    trascationdetail:{

        debit:[
            {
                amount:1000,
                from:"Dev",
                to:"Raj",
                date:"04-11-2023",
                mode:"online"
            },
            {
                amount:12000,
                from:"Parth",
                to:"Raj",
                date:"04-11-2023",
                mode:"online",
                remakrs:"for bike"
            }
        ],
        credit:[
            {
                amount:900,
                from:"Raj",
                to:"Dev",
                date:"04-11-2023",
                mode:"RTGS"
            }
        ]


    }

}

console.log(userTrasaction);
console.log(userTrasaction.trascationdetail);
console.log("debit ",userTrasaction.trascationdetail.debit);
console.log("credit ",userTrasaction.trascationdetail.credit);

for(let i=0;i<userTrasaction.trascationdetail.debit.length;i++){

    console.log("debit amount ",userTrasaction.trascationdetail.debit[i].amount);
    console.log("debit from ",userTrasaction.trascationdetail.debit[i].from);
    console.log("debit to ",userTrasaction.trascationdetail.debit[i].to);
    console.log("debit date ",userTrasaction.trascationdetail.debit[i].date);
    console.log("debit mode ",userTrasaction.trascationdetail.debit[i].mode);
    //console.log("debit remakrs ",userTrasaction.trascationdetail.debit[i].remakrs);
    console.log("debit remakrs ",userTrasaction.trascationdetail.debit[i].remakrs);
    console.log("=======================================");
}