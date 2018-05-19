export class CustomLogger {
    debug(){
        //console.log(arguments);
    }
    
    info(){

    }

    error(){
        console.info(arguments);
    }

    warn(){
        console.info(arguments);
    }

}