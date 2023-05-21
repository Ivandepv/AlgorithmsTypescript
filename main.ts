import dotenv from 'dotenv';
import { inquirerMenu, pausa } from './helpers/inquirer.js';

dotenv.config();

const main = async()=>{

    let opt:number = 0;
    
    do{
    
        opt = await inquirerMenu();

        switch (opt){

            case 1:
                console.log("caso Bogo Sort");
                break;
            case 2:
                console.log("caso Divide and conquer");
                break;

        }

        if(opt !== 0) await pausa();

    }while(opt != 0);
}

main();