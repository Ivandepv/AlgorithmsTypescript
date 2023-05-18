const main =()=>{
    let opt:number = 0;
    
    do{
        
        opt = 1;

        switch (opt){

            case 1:
                console.log("caso 1");
                break;
            case 2:
                console.log("caso 2");
                break;
            case 3:
                console.log("caso 3");
                break;
            case 4:
                console.log("caso 4");
                break;
        }

        opt = 0;
    }while(opt != 0);
}

main();